import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { firebaseDB } from '../../../CONFIG'

// my comp
import './style.css';
import CreateBudgetButton from '../../moleculas/CreateBudgetButton';
import BudgetCard from '../../moleculas/budgetCard/index';
import { printAllBudget } from '../../../actions';

const masonryOptions = {
    transitionDuration: 0.2
};



class Home extends Component  {   
    constructor(props){
        super(props)

        this.state = {
            budgets: [],
            budgetDivs: [],
            budgetsId: [],
            loading: true
        }
    }
    

    componentWillMount(){
        const localUid = JSON.parse(sessionStorage.getItem('uid'))
        const localToken = JSON.parse(sessionStorage.getItem('token'))

        if(localUid && localToken){
            firebaseDB.ref(`budgets/${localUid}`).once('value')
            .then(snapshot => {
                const items = []
                const itemsId = []
                snapshot.forEach(item => {
                    items.push(item.val()) 
                    itemsId.push(item.key)
                })
                this.setState({
                    budgets: items,
                    budgetsId: itemsId
                })
            })
            .then(() => {
                let budgetListDivs = []
                this.state.budgets.map((e, i) => {
                    budgetListDivs.push(<Link to={`/budget-${this.state.budgetsId[i]}`} key={i}><div className="card_size"><BudgetCard cover={e.cover} percent={Math.random() * 100} title={e.title} price={e.price} /></div></Link> )
                })
                this.setState({
                    budgetDivs: budgetListDivs
                })
            })
            .then(() => {
                this.setState({
                    loading: false
                })
                this.props.printAllBudget()
            })
        }
    }

   
    render(){
        return(
            
            <div id="home_container">
            <Masonry 
                    elementType={'div'}
                    options={masonryOptions}
                    disableImagesLoaded={false}
                    updateOnEachImageLoad={false}     
                >   
                    <div className="card_size">
                        <Link to='/create-budget'>
                            <CreateBudgetButton/>
                        </Link>
                    </div>
                    {this.state.budgetDivs}                  
                </Masonry>
            </div>
        )
    }     
}

const mapStateToProps = (state) => ({
    reduxData: state
})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        printAllBudget
    }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);