import React, { Component } from 'react';
import { firebaseDB } from '../../../CONFIG'

// my comp
import Breadcrumbs from '../../moleculas/Breadcrumbs';
import FriendList from '../../moleculas/FriendsList';
import { NumberInput } from '../../moleculas/forms/Input';
import './style.css';
import { MAIN_SHADOW, COLORS } from '../../UI_VARS';
import { MainIcons, Title, MainLine, ProgressBar, LightText } from '../../UI_ATOMS';
import add_gray_icon from '../../../img/icons/add_gray.svg';
import bullets_gray_icon from '../../../img/icons/bullets_gray.svg';


const containerStyle = {
    boxShadow: MAIN_SHADOW,
    backgroundColor: COLORS.white
} 

class BudgetItem extends Component {

    constructor(props) {
        super(props);
 
        this.state = {
          loading: true,
          showMenu: false,
          cover: '',
          title: '',
          price: null,
          productImg: {
              backgroundImage: ''
          }
        }
        
        this.showMenu = this.showMenu.bind(this);
    }

    showMenu(){
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    componentWillMount(){
        (function(self){
            const localUid = JSON.parse(sessionStorage.getItem('uid'))
            const budgetId = self.props.match.params.id
            if(localUid){
                let title, cover, price, productImg

                firebaseDB.ref(`budgets/${localUid}/${budgetId}`).once('value')
                    .then(snapshot => {
                        title = snapshot.val().title
                        cover = snapshot.val().cover
                        price = snapshot.val().price
                        productImg = { backgroundImage: `url(${cover})` }
                    })
                    .then(() => {
                        self.setState({
                            title,
                            cover,
                            price,
                            productImg,
                            loading: false
                        })
                    })
            }
        })(this)
    }

    render(){
        const ulStyle = {
            background: COLORS.white,
            boxShadow: MAIN_SHADOW,
            border: `1pt solid ${COLORS.light_gray}`
        }

        return (
            <div id="budget_item">
                <Breadcrumbs pageName={this.state.title} />

                <div id="container" style={containerStyle}>
                    <div id="cover" style={this.state.productImg}></div>
                    <div id="edit_and_friends">
                        <div id="friends_and_add_more_friends">
                            <FriendList id="friend_list"/>
                            <MainIcons src={add_gray_icon} id="add_friends"/>
                        </div>
                        <MainIcons src={bullets_gray_icon} onClick={this.showMenu} id="edit_budget"/>
                    </div>
                    {
                            this.state.showMenu ? (
                                <div className="drop_down_menu">  
                                    <ul style={ulStyle}>
                                        <LightText>
                                            <li>Edit</li>
                                            <li>Delete</li>
                                            <li>Report</li>
                                        </LightText>
                                    </ul>
                                </div>
                                ) : null
                    }
                    <Title id="title">{this.state.title}</Title>
                    <MainLine />
                    <NumberInput/>
                    <div>
                        {ProgressBar(50)}
                        <LightText id="light_text">{this.state.price - this.state.price / 2}$ of {this.state.price}$. Needed: {this.state.price / 2}$</LightText>
                    </div>
                    <div id="more_info">
                        <FriendList showFullName={true} />
                    </div>

                </div>
            </div>
        );
    }
};

export default BudgetItem;