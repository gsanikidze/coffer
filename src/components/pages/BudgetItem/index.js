import React from 'react';

// my comp
import Breadcrumbs from '../../moleculas/Breadcrumbs';
import FriendList from '../../moleculas/FriendsList';
import { NumberInput } from '../../moleculas/forms/Input';
import './style.css';
import { MAIN_SHADOW, COLORS } from '../../UI_VARS';
import { MainIcons, Title, MainLine, ProgressBar, LightText } from '../../UI_ATOMS';
import product_image from '../../../img/product_pics/triumphBonneville.JPG';
import add_gray_icon from '../../../img/icons/add_gray.svg';
import bullets_gray_icon from '../../../img/icons/bullets_gray.svg';


const containerStyle = {
    boxShadow: MAIN_SHADOW,
    backgroundColor: COLORS.white
} 

const productImg = {
    backgroundImage: `url(${product_image})`
}

const BudgetItem = () => {
    return (
        <div id="budget_item">
            <Breadcrumbs />

            <div id="container" style={containerStyle}>
                <div id="cover" style={productImg}></div>
                <div id="edit_and_friends">
                    <div id="friends_and_add_more_friends">
                        <FriendList id="friend_list"/>
                        <MainIcons src={add_gray_icon} id="add_friends"/>
                    </div>
                    <MainIcons src={bullets_gray_icon} id="edit_budget"/>
                </div>
                <Title id="title">Title</Title>
                <MainLine />
                <NumberInput/>
                <div>
                    {ProgressBar(70)}
                    <LightText id="light_text">105$ of 150$. Needed: 45$</LightText>
                </div>
                <div id="more_info">
                    <FriendList showFullName={true} />
                </div>

            </div>
        </div>
    );
};

export default BudgetItem;