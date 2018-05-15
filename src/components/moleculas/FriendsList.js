import React, { Component } from 'react'

// my comp
import ProfilePic from './ProfilePic';

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
        for(let i = 0; i < this.state.friendQuantity; i++){
            friendList = [...friendList, <ProfilePic key={i} list size={24} profilePic={profile_pic}/>];
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
            <div id="friend_list">
                {this.state.friendList}
            </div>
        )
    }
}

export default FriendsList;
