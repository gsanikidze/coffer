import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

// my comp
import { MAIN_SHADOW } from '../../UI_VARS';
import { Title, MainIcons, MainButton, ProgressBar, ActiveButton } from '../../UI_ATOMS';
import add_gray_icon from '../../../img/icons/add_gray.svg'
import bullets_gray_icon from '../../../img/icons/bullets_gray.svg'
import budget_is_done_icon from '../../../img/icons/done.svg'
import FriendsList from './../FriendsList';
import './style.css';
import bike_photo from '../../../img/product_pics/triumphBonneville.JPG';
import { NumberInput, InputWithLabel } from '../forms/Input';
import close_window_icon from '../../../img/icons/close.svg';

class BudgetCard extends Component{

    constructor(props){
        super(props);

        this.state = {
            openInvitationPopup: false,
            cover: this.props.cover,
            percent: this.props.percent,
            title: this.props.title,
            moneyNeeded: this.props.price
        }
    }

    withImageOrNot(imgURL){      
        if(imgURL){
            const style = {
                backgroundImage: `url(${imgURL})`
            }
            return (
                <div style={style} className="cover"></div>
                )
        }
    }

    budgetIsFull(percent){
        if(percent === 100){
            return <MainButton className="transfer_money_btn">Transfer Money</MainButton>
        } else {
            return (
                <NumberInput placeholder={this.state.moneyNeeded}/>
            )
        }
    }

    
    render(){

        const switchPopup = () => {
            this.setState({
                openInvitationPopup: !this.state.openInvitationPopup
            })
        }

        const Card = styled.div`
        width: 100%;
        background: white;
        border-radius: 4pt;
        box-shadow: ${MAIN_SHADOW};
        `;
        

        const InviteFriend = (props) => {
            return (
                <div>
                    {
                        props.openPopup ? (
                            <div className="ivite_friend_popup">
                                <MainIcons src={close_window_icon} onClick={switchPopup}/>
                                <div className="friends">
                                    <InputWithLabel label="Friend Name" placeHolder="search friend"/>
                                    <FriendsList />
                                </div>
                                <ActiveButton className="btn">Send Invitation</ActiveButton>
                            </div>
                            )                        
                        : null
                    }
                </div>
            );
        };
        
        return(
            <Card>
                <InviteFriend openPopup={this.state.openInvitationPopup}/>
                <div className="budget_card">
                    <div className="card_top">
                        <div className="friend_list_and_add_more">
                            <FriendsList/>
                            <MainIcons src={add_gray_icon} onClick={switchPopup}/>
                        </div>
                        <div className="edit_card">
                            <MainIcons src={bullets_gray_icon} />
                        </div>
                    </div>
                    <Link to={this.props.link}>
                        <div className="title">
                            {
                                this.state.percent === 100 ? <MainIcons src={budget_is_done_icon}/> : null
                            }
                            <Title>
                                {this.state.title}
                            </Title>
                        </div>
                    </Link>
                    {this.withImageOrNot(this.state.cover)}  
                    {this.budgetIsFull(this.state.percent)}  
                    {ProgressBar(this.state.percent)}
                    <div className="brick"></div>
                </div>  
            </Card>
        )
    }
};

export default BudgetCard;