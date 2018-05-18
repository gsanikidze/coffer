import React from 'react';
import styled from 'styled-components';

// my comp
import { MAIN_SHADOW, COLORS } from '../../UI_VARS';
import { Title, MainIcons, MainButton } from '../../UI_ATOMS';
import add_gray_icon from '../../../img/icons/add_gray.svg'
import bullets_gray_icon from '../../../img/icons/bullets_gray.svg'
import budget_is_done_icon from '../../../img/icons/done.svg'
import FriendsList from './../FriendsList';
import './style.css';
import bike_photo from '../../../img/product_pics/triumphBonneville.JPG';
import { NumberInput } from '../forms/Input';

const BudgetCard = (props) => {

    const percent = 87;
    let hideDoneIcon;

    const withImageOrNot = (imgURL) => {      
        if(imgURL){
            const style = {
                backgroundImage: `url(${imgURL})`
            }
            return (
                <div style={style} className="cover"></div>
                )
        }
    }

    const budgetIsFull = (percent) => {
        if(percent === 100){
            return <MainButton className="transfer_money_btn">Transfer Money</MainButton>
        } else {
            return (
                <NumberInput />
            )
        }
    }

    const progresBar = (percent) => {
        if(percent){
            const progressPercent = {
                width: percent + "%",
                height: "100%",
                backgroundColor: COLORS.secondary
            }

            const lightBack = {
                backgroundColor: COLORS.light_gray
            }

            return (
                    <div className="progress_bar" style={lightBack}>
                        <div style={progressPercent} className="progress"></div>
                    </div>
                )
        }
    }

    const Card = styled.div`
        width: 100%;
        background: white;
        border-radius: 4pt;
        box-shadow: ${MAIN_SHADOW};
    `;

    if(percent !== 100){
        hideDoneIcon = {
            display: "none"
        }
    }

    return(
        <Card>
            <div className="budget_card">
                <div className="card_top">
                    <div className="friend_list_and_add_more">
                        <FriendsList/>
                        <MainIcons src={add_gray_icon} />
                    </div>
                    <div className="edit_card">
                        <MainIcons src={bullets_gray_icon} />
                    </div>
                </div>
                <div className="title">
                    <MainIcons src={budget_is_done_icon} style={hideDoneIcon}/>
                    <Title>
                        Budget Title
                    </Title>
                </div>
                {withImageOrNot(bike_photo)}  
                {budgetIsFull(percent)}  
                {progresBar(percent)}
                <div className="brick"></div>
            </div>  
        </Card>
    )
};

export default BudgetCard;