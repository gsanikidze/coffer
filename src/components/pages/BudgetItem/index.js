import React, {Component} from 'react';
import {firebaseDB} from '../../../CONFIG'

// my comp
import Breadcrumbs from '../../moleculas/Breadcrumbs';
import FriendList from '../../moleculas/FriendsList';
import {NumberInput} from '../../moleculas/forms/Input';
import './style.css';
import {MAIN_SHADOW, COLORS} from '../../UI_VARS';
import {MainIcons, MainButton, Title, MainLine, ProgressBar, LightText} from '../../UI_ATOMS';
import add_gray_icon from '../../../img/icons/add_gray.svg';
import bullets_gray_icon from '../../../img/icons/bullets_gray.svg';
import Loading from '../../moleculas/lodaing'
import DropDown from '../../moleculas/dropDownMenu.js'
import budgetCalculation from '../../../functions/budgetCalculation'

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
            percent: null,
            totalTransfer: null,
            typedMoney: null,
            productImg: {
                backgroundImage: ''
            },
            budgetId: ''
        }

        this.showMenu = this
            .showMenu
            .bind(this);

        this.onFormChange = this
            .onFormChange
            .bind(this)
        this.onFormSubmit = this
            .onFormSubmit
            .bind(this)
    }

    showMenu() {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    componentWillMount() {
        (function (self) {
            const localUid = JSON.parse(sessionStorage.getItem('uid'))
            const budgetId = self.props.match.params.id
            self.setState({budgetId})
            if (localUid) {
                let title,
                    cover,
                    price,
                    productImg

                firebaseDB
                    .ref(`budgets/${localUid}/${budgetId}`)
                    .once('value')
                    .then(snapshot => {
                        if (snapshot.val() !== null) {
                            title = snapshot
                                .val()
                                .title
                            cover = snapshot
                                .val()
                                .cover
                            price = snapshot
                                .val()
                                .price
                            productImg = {
                                backgroundImage: `url(${cover})`
                            }
                        } else {
                            window
                                .location
                                .replace('/')
                        }
                    })
                    .then(() => {
                        self.setState({title, cover, price, productImg, loading: false})
                    })
            }
            budgetCalculation(budgetId).then(({price, percent, totalTransfer}) => {
                self.setState({price, percent, totalTransfer})
            })
        })(this)
    }

    onFormSubmit() {
        if (!this.state.typedMoney) {
            budgetCalculation(this.state.budgetId, this.state.price - this.state.totalTransfer).then(({price, percent, totalTransfer}) => {
                this.setState({price, percent, totalTransfer})
            })
        } else {
            budgetCalculation(this.state.budgetId, this.state.typedMoney).then(({price, percent, totalTransfer}) => {
                this.setState({price, percent, totalTransfer})
            })
        }
    }

    onFormChange(e) {
        this.setState({
            typedMoney: parseInt(e.target.value)
        })
    }

    render() {

        return (
            <div>{this.state.loading
                    ? <Loading/>
                    : <div id="budget_item">
                        <Breadcrumbs pageName={this.state.title}/>

                        <div id="container" style={containerStyle}>
                            <div id="cover" style={this.state.productImg}></div>
                            <div id="edit_and_friends">
                                <div id="friends_and_add_more_friends">
                                    <FriendList id="friend_list"/>
                                    <MainIcons src={add_gray_icon} id="add_friends"/>
                                </div>
                                <MainIcons src={bullets_gray_icon} onClick={this.showMenu} id="edit_budget"/>
                            </div>
                            {this.state.showMenu
                                ? <DropDown budgetDbId={this.state.budgetId} page='budget' itemsType='budgets'/>
                                : null
}
                            <Title id="title">{this.state.title}</Title>
                            <MainLine/> {this.state.percent === 100
                                ? <MainButton className="transfer_money_btn">Transfer Money</MainButton>
                                : <form onChange={this.onFormChange}>
                                    <NumberInput placeholder={this.state.price - this.state.totalTransfer}/>
                                  </form>
}

                            <div>
                                {ProgressBar(this.state.percent)}
                                <LightText id="light_text">{this.state.totalTransfer}$ of {this.state.price}$. Needed: {this.state.price - this.state.totalTransfer}$</LightText>
                            </div>
                            <div id="more_info">
                                <FriendList showFullName={true}/>
                            </div>

                            {document
                                .getElementsByClassName('submit_icon')
                                .item(0)
                                ? document
                                    .getElementsByClassName('submit_icon')
                                    .item(0)
                                    .addEventListener('click', this.onFormSubmit)
                                : null
}

                        </div>

                    </div>
}</div>
        );
    }
};

export default BudgetItem;