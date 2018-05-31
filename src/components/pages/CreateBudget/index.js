import React, { Component } from 'react';
import axios from 'axios';
import { Link, Redirect } from 'react-router-dom';
import { firebaseDB } from '../../../CONFIG';


// my comp
import { ActiveButton, PassiveButton, Title } from '../../UI_ATOMS';
import { COLORS } from '../../UI_VARS';
import { InputWithLabel } from '../../moleculas/forms/Input';
import Breadcrumbs from '../../moleculas/Breadcrumbs';
import FriendList from '../../moleculas/FriendsList';
import './style.css';

class CreateBudget extends Component {

    constructor(props){
        super(props);

        this.state = {
            redirect: false,
            border: 'none',
            coverImages: [],
            coverImagesURL: [],
            budgetInfo: {
                title: undefined,
                price: undefined,
                friends: undefined,
                cover: undefined
            }
        }

        this.onFormChange = this.onFormChange.bind(this)
        this.selectCover = this.selectCover.bind(this)
        this.createBudget = this.createBudget.bind(this)
    }

    onFormChange(event){
        let value = event.target.value.toUpperCase();
        let input_name = event.target.name
        switch (input_name) {
            case 'budget_title':
                this.setState({
                    budgetInfo: {
                        ...this.state.budgetInfo,
                        title: value
                    }
                })
                break;
            case 'budget_price':
                this.setState({
                    budgetInfo: {
                        ...this.state.budgetInfo,
                        price: value
                    }
                })
                break;
            case 'cover_photo':
                axios.get(`https://pixabay.com/api/?key=9126390-b821736dce6c7feea7c57497f&q=${value}&image_type=photo&per_page=4`)
                    .then(response => {
                        return response.data.hits
                    })
                    .then(data => {
                        let coverImages = {
                            imagesURL: [],
                            urls: []
                        }
                        data.map((item, i) => {
                            coverImages.imagesURL.push(<div onClick={this.selectCover} id={`cover-${i}`} key={i} className="cover_image" style={{backgroundImage: `url(${item.largeImageURL})`, border: this.state.border}}></div>)
                            coverImages.urls.push(item.largeImageURL)
                        })
                        return coverImages
                    })
                    .then(coverImages => {
                        this.setState({
                            coverImages: coverImages.imagesURL,
                            coverImagesURL: coverImages.urls
                        })
                    })
                    .catch(e => console.log(e))
                break;
            case 'share_with_friends':
                this.setState({
                    budgetInfo: {
                        ...this.state.budgetInfo,
                        friends: value
                    }
                })
                break;
            default:
                break;
        }
    }

    selectCover(e){

        this.setState({
            ...this.state.budgetInfo,
            cover: undefined
        })
        
        let id = '';
        let idHtml = e.target.id


        for(let i = 5; i < idHtml.length; i++){
            id += idHtml[i]
        }
        id = id * -1;
        this.setState({
            budgetInfo: {
                ...this.state.budgetInfo,
                cover: this.state.coverImagesURL[id]
            }
        })
        

        e.target.style.border = `2px solid ${COLORS.primary}`
    }

    createBudget(){
        const localUid = JSON.parse(sessionStorage.getItem('uid'))
        const localToken = JSON.parse(sessionStorage.getItem('token'))

        if(localUid && localToken){
            firebaseDB.ref(`budgets/${localUid}`).push(this.state.budgetInfo)
                .then(() => this.setState({redirect: true}))
        }

        console.log(this.state.budgetInfo)
    }

    render() {

        if (this.state.redirect) {
            return <Redirect to='/'/>;
        }

        return (
            <form id="create_budget" onChange={this.onFormChange}>
                <Breadcrumbs />
                <div className="container">
                    <Title id="title">Create Budget</Title>

                    <div id="form_first_line">
                        <InputWithLabel name="budget_title" isRequired label="Budget Title" placeHolder="type title"/>
                        <InputWithLabel name="budget_price" isRequired label="Price ($)" placeHolder="00.00"/>
                    </div>
                    <div id="share_with_friends">
                        <InputWithLabel name="share_with_friends" id="invite_friend" onKeyPress={this.onEnter} label="Share Budget With" placeHolder="type person email"/>
                    </div>
                    <div id="cover_photo">
                        <InputWithLabel name="cover_photo" label="Cover Photo" placeHolder="search photo"/>
                        <div id="photos">
                            {this.state.coverImages}
                        </div>
                    </div>
                    <div id="buttons">
                        <Link to="/">
                            <PassiveButton>  Cancell  </PassiveButton>
                        </Link>
                        <ActiveButton onClick={this.createBudget}> Create Budget </ActiveButton>
                    </div>

                </div>
            </form>
        );
    }
}

export default CreateBudget;