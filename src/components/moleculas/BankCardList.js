import React, { Component } from 'react'

// my comp
import BankCard from './BankCard';

class BankCardList extends Component{
   render(){
        return (
            <div id="friend_list">
                <BankCard />
            </div>
        )
    }
}

export default BankCardList;
