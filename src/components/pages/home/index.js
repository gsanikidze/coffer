import React, { Component } from 'react';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// my comp
import './style.css';
import CreateBudgetButton from '../../moleculas/CreateBudgetButton';
import BudgetCard from '../../moleculas/budgetCard/index';
import { printAllBudget } from '../../../actions';

const masonryOptions = {
    transitionDuration: 0.2
};



class Home extends Component  {    
    componentWillMount(){
        this.props.printAllBudget()
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
                        <CreateBudgetButton/>
                    </div>
                    <div className="card_size">
                        <BudgetCard/>
                    </div>
                    <div className="card_size">
                        <BudgetCard/>
                    </div>
                    <div className="card_size">
                        <BudgetCard/>
                    </div>
                    <div className="card_size">
                        <BudgetCard/>
                    </div>
                    <div className="card_size">
                        <BudgetCard/>
                    </div>
                    <div className="card_size">
                        <BudgetCard/>
                    </div>
                    <div className="card_size">
                        <BudgetCard/>
                    </div>
                    
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