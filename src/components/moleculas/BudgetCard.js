import React from 'react';
import styled from 'styled-components';

// my comp
import { MAIN_SHADOW } from '../UI_VARS';
import { Title, MainIcons } from '../UI_ATOMS';
import add_gray_icon from '../../img/icons/add_gray.svg'
import bullets_gray_icon from '../../img/icons/bullets_gray.svg'
import FriendsList from './FriendsList';

const BudgetCard = (props) => {

    const withImageOrNot = () => {
        if(true){
            return <div>With Image</div>
        }
    }

    const budgetIsFull = () => {
        if(true){
            return <div>Budget Is Full</div>
        }
    }

    const progresBar = () => {
        if(true){
            return <div>Progres Bar</div>
        }
    }

    const Card = styled.div`
        width: 100%;
        background: white;
        border-radius: 4pt;
        box-shadow: ${MAIN_SHADOW};
    `;

    return(
        <Card>
            <FriendsList/>
            <MainIcons src={add_gray_icon} />
            <MainIcons src={bullets_gray_icon} />
            <Title>
                Budget Title
            </Title>
            {withImageOrNot()}  
            {budgetIsFull()}  
            {progresBar()}  
        </Card>
    )
};

export default BudgetCard;