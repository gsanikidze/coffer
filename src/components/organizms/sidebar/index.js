import React, { Component } from 'react';
import { css } from 'glamor';

// style
import './sidebar_layout.css';

// imgs
import log_out_icon from '../../../img/icons/log_out.svg';
import arrow_icon from '../../../img/icons/arrow.svg';
import add_gray_icon from '../../../img/icons/add_gray.svg';
import profile_pic from '../../../img/profile_pics/profile_pic.jpg';

// my comp
import { MainIcons, Label, MainLine, Paragraph, DropDownArrow } from '../../UI_ATOMS';
import ProfilePic from '../../moleculas/ProfilePic';
import FriendsList from '../../moleculas/FriendsList';
import BankCardList from '../../moleculas/BankCardList';
import { MAIN_SHADOW, COLORS } from '../../UI_VARS';

const sidebarLayout = css({
    backgroundColor: COLORS.white,
    boxShadow: MAIN_SHADOW,
    borderRight: `1pt solid ${COLORS.gray}`
});



class Sidebar extends Component {
    render() {
        return (
            <div {...sidebarLayout} id="sidebar">

                <MainIcons id="log_out_icon" src={log_out_icon} alt="Log Out"/>
                    
                <div id="profile_info">
                    <ProfilePic profilePic={profile_pic} size={64}/>
                    <Label centeredText> N. Surname </Label>
                </div>

                <MainLine/>

                <div id="friends">
                    <div id="show_friends_label">
                        <Paragraph>Friends</Paragraph>
                        <DropDownArrow src={arrow_icon} clicked={true} alt="Friends List"/>
                    </div>
                    <MainIcons src={add_gray_icon} alt="Invite Friends"/>
                    <div id="friend_list">
                        <FriendsList/>
                    </div>
                </div>

                <div id="cards">
                    <Paragraph>Cards</Paragraph>
                    <MainIcons src={add_gray_icon} alt="Invite Friends"/>
                    <div id="card_list">
                        <BankCardList/>
                    </div>
                </div>
         

            </div>
        );
    }
}

export default Sidebar;