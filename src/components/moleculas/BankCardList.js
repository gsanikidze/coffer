import React, { Component } from 'react'

// my comp
import BankCard from './bankCard';

class BankCardList extends Component{
   render(){
        return (
            <div id="card_list">
                <BankCard />
            </div>
        )
    }
}

export default BankCardList;
