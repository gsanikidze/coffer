import React, { Component } from 'react';
import { css } from 'glamor';

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

const sidebarLayout = css({
    width: "280pt",
    backgroundColor: "red",
});



class Sidebar extends Component {
    render() {
        return (
            <div {...sidebarLayout}>

                <div id="sidebar_top">
                    <MainIcons src={log_out_icon} alt="Log Out"/>
                    <ProfilePic profilePic={profile_pic} size={64}/>
                    <Label centeredText> N. Surname </Label>
                </div>

                <MainLine/>

                <div id="sidebar_friends">

                    <div id="Friends">
                        <div id="sidebar_show_friends_label">
                            <Paragraph>Friends</Paragraph>
                            <DropDownArrow src={arrow_icon} clicked={true} alt="Friends List"/>
                        </div>
                        <MainIcons src={add_gray_icon} alt="Invite Friends"/>
                        <FriendsList/>
                    </div>

                    <div id="Cards">
                        <Paragraph>Cards</Paragraph>
                        <MainIcons src={add_gray_icon} alt="Invite Friends"/>
                        <BankCardList/>
                    </div>
                </div>         
                       
            </div>
        );
    }
}

export default Sidebar;