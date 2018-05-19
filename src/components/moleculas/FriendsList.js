import React, { Component } from 'react'

// my comp
import ProfilePic from './ProfilePic';
import { Label, LightText } from '../UI_ATOMS';

// imgs
import profile_pic from '../../img/profile_pics/profile_pic.jpg';

class FriendsList extends Component{
    constructor(props) {
        super(props)

        this.state = {
            friendList: [],
            friendQuantity: 4
        }
    }

    printFriendList(){
        let friendList = []
        if(this.props.showFullName === true){
            for(let i = 0; i < this.state.friendQuantity; i++){
                friendList = [...friendList,
                    <div style={{display: "flex"}} className="friend" key={i}>
                        <ProfilePic key={i} list size={24} profilePic={profile_pic}/>
                        <Label> N. Surname </Label> <LightText> - 15$ (14.28%) </LightText>
                    </div>
                    ];
            }
        } else {
            for(let i = 0; i < this.state.friendQuantity; i++){
                friendList = [...friendList, <ProfilePic className="friend" key={i} list size={24} profilePic={profile_pic}/>];
            }
        }
        
        this.setState({
            friendList
        })
    }


    componentWillMount(){
        this.printFriendList()
    }
    

    render(){
        return (
            <div id="friend_list" style={{display: 'flex'}}>
                {this.state.friendList}
            </div>
        )
    }
}

export default FriendsList;
