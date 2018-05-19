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
import { MainIcons, Label, MainLine, Paragraph, DropDownArrow, ActiveButton } from '../../UI_ATOMS';
import ProfilePic from '../../moleculas/ProfilePic';
import FriendsList from '../../moleculas/FriendsList';
import BankCardList from '../../moleculas/BankCardList';
import { MAIN_SHADOW, COLORS } from '../../UI_VARS';
import { InputWithLabel } from '../../moleculas/forms/Input';
import close_window_icon from '../../../img/icons/close.svg';

const sidebarLayout = css({
    backgroundColor: COLORS.white,
    boxShadow: MAIN_SHADOW,
    borderRight: `1pt solid ${COLORS.gray}`
});



class Sidebar extends Component {
    constructor(props){
        super(props);

        this.state = {
            openSystemInvitationPopup: false
        }
    }

    render() {

        const switchPopupSystemInvitation = () => {
            this.setState({
                openSystemInvitationPopup: !this.state.openSystemInvitationPopup
            })
        }

        const InviteFriendInSystem = (props) => {
            return (
                <div>
                    {
                        props.openSystemInvitationPopup ? (
                            <div className="ivite_friend_popup">
                                <MainIcons src={close_window_icon} onClick={switchPopupSystemInvitation}/>
                                <div className="friends">
                                    <InputWithLabel label="Ivite Friend In System" placeHolder="type e-mail"/>
                                </div>
                                <ActiveButton className="btn">Send Invitation</ActiveButton>
                            </div>
                            )                        
                        : null
                    }
                </div>
            );
        };




        return (
            <div {...sidebarLayout} id="sidebar">
                <InviteFriendInSystem openSystemInvitationPopup={this.state.openSystemInvitationPopup}/>

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
                    <MainIcons src={add_gray_icon} onClick={switchPopupSystemInvitation} alt="Invite Friends"/>
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