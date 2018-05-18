import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

// my comp
import './style.css';
import CreateBudgetButton from '../../moleculas/createBudgetButton';

const masonryOptions = {
    transitionDuration: 0.2
};



class Home extends Component  {
   
    render(){
        return(
            <div id="home_container">
            <Masonry 
                    elementType={'div'} // default 'div'
                    options={masonryOptions} // default {}
                    disableImagesLoaded={false} // default false
                    updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false         
                >   
                    <div className="card_size">
                        <CreateBudgetButton/>
                    </div>
                    <div className="card_size gray">Container</div>
                    <div className="card_size gray">Container</div>
                    <div className="card_size gray">Container</div>
                    <div className="card_size gray">Container</div>
                    <div className="card_size gray">Container</div>
                    <div className="card_size gray">Container</div>
                    <div className="card_size gray">Container</div>
                    <div className="card_size gray">Container</div>
                    <div className="card_size gray">Container</div>
                    <div className="card_size gray">Container</div>
                </Masonry>
            </div>
        )
    }     
}

export default Home;