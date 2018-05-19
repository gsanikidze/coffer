import React, { Component } from 'react';

// my comp
import { ActiveButton, PassiveButton, Title } from '../../UI_ATOMS';
import { InputWithLabel } from '../../moleculas/forms/Input';
import Breadcrumbs from '../../moleculas/Breadcrumbs';
import FriendList from '../../moleculas/FriendsList';
import './style.css';
import product_image from '../../../img/product_pics/triumphBonneville.JPG';

class CreateBudget extends Component {

    constructor(props){
        super(props);

        this.state = {
            coverImages: []
        }
    }

    searchedImages(){
        let filteredImages = []
        for(let i = 0; i < 4; i++){
            filteredImages = [...filteredImages, <div key={i} className="cover_image" style={{backgroundImage: `url(${product_image})`}}></div>]
        }
        this.setState({
            coverImages: filteredImages
        })
    }

    componentDidMount(){
        this.searchedImages();
    }


    render() {
        return (
            <div id="create_budget">
                <Breadcrumbs />
                <div className="container">
                    <Title id="title">Create Budget</Title>

                    <div id="form_first_line">
                        <InputWithLabel isRequired label="Budget Title" placeHolder="type title"/>
                        <InputWithLabel isRequired label="Price ($)" placeHolder="00.00"/>
                    </div>
                    <div id="share_with_friends">
                        <InputWithLabel label="Share Budget With" placeHolder="type person name"/>
                        <FriendList id="friend_list"/>
                    </div>
                    <div id="cover_photo">
                        <InputWithLabel label="Cover Photo" placeHolder="search photo"/>
                        <div id="photos">
                            {this.state.coverImages}
                        </div>
                    </div>
                    <div id="buttons">
                        <PassiveButton> Cancell </PassiveButton>
                        <ActiveButton> Create Budget </ActiveButton>
                    </div>

                </div>
            </div>
        );
    }
}

export default CreateBudget;