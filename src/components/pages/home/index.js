import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Masonry from 'react-masonry-component';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {firebaseDB} from '../../../CONFIG'

// my comp
import './style.css';
import CreateBudgetButton from '../../moleculas/CreateBudgetButton';
import BudgetCard from '../../moleculas/budgetCard/index';
import {printAllBudget} from '../../../actions';
import Loading from '../../moleculas/lodaing'

const masonryOptions = {
    transitionDuration: 0.2
};

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            budgets: [],
            budgetDivs: [],
            budgetsId: [],
            loading: true
        }
    }

    componentWillMount() {
        const localUid = JSON.parse(sessionStorage.getItem('uid'))
        const localToken = JSON.parse(sessionStorage.getItem('token'))

        if (localUid && localToken) {
            firebaseDB
                .ref(`budgets/${localUid}`)
                .once('value')
                .then(snapshot => {
                    const items = []
                    const itemsId = []
                    snapshot.forEach(item => {
                        items.push(item.val())
                        itemsId.push(item.key)
                    })
                    this.setState({budgets: items, budgetsId: itemsId})
                })
                .then(() => {
                    let budgetListDivs = []
                    this
                        .state
                        .budgets
                        .map((e, i) => {
                            budgetListDivs.push(
                                <div key={i} className="card_size"><BudgetCard
                                    link={`/budget-${this.state.budgetsId[i]}`}
                                    cover={e.cover}
                                    percent={Math.random() * 100}
                                    title={e.title}
                                    price={e.price}
                                    budgetDbId={this.state.budgetsId[i]}
                                    itemsType='budgets'
                                    page='home'
                                    /></div>
                            )
                        })
                    this.setState({budgetDivs: budgetListDivs})
                })
                .then(() => {
                    this
                        .props
                        .printAllBudget()
                    this.setState({loading: false})
                })
        }
    }

    render() {
        return (

            <div id="home_container">

                {this.state.loading
                    ? <Loading />
                    : <Masonry
                        elementType={'div'}
                        options={masonryOptions}
                        disableImagesLoaded={false}
                        updateOnEachImageLoad={false}>
                        <div className="card_size">
                            <Link to='/create-budget'>
                                <CreateBudgetButton/>
                            </Link>
                        </div>
                        {this.state.budgetDivs}
                    </Masonry>}

            </div>
        )
    }
}

const mapStateToProps = (state) => ({reduxData: state})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        printAllBudget
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);