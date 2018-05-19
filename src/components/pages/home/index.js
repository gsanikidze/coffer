import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

// my comp
import './style.css';
import CreateBudgetButton from '../../moleculas/CreateBudgetButton';
import BudgetCard from '../../moleculas/budgetCard/index';

const masonryOptions = {
    transitionDuration: 0.2
};



class Home extends Component  {
   
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

export default Home;