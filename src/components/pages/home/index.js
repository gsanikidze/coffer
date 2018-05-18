import React, { Component } from 'react';
import Masonry from 'react-masonry-component';

// my comp
import './style.css';

const masonryOptions = {
    transitionDuration: 0
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
                    <div className="container1">Container 1</div>
                    <div className="container2">Container 2</div>
                    <div className="container3">Container 3</div>
                    <div className="container4">Container 4</div>
                    <div className="container1">Container 1</div>
                    <div className="container2">Container 2</div>
                    <div className="container3">Container 3</div>
                    <div className="container4">Container 4</div>
                    <div className="container1">Container 1</div>
                    <div className="container2">Container 2</div>
                    <div className="container3">Container 3</div>
                    <div className="container4">Container 4</div>
                    <div className="container1">Container 1</div>
                    <div className="container2">Container 2</div>
                    <div className="container3">Container 3</div>
                    <div className="container4">Container 4</div>
                </Masonry>
            </div>
        )
    }     
}

export default Home;