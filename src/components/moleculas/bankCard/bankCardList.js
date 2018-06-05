import React, { Component } from 'react';
import BankCard from './index';
import { firebaseDB } from '../../../CONFIG'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { loading } from '../../../actions'
 
class bankCardList extends Component {
    constructor(props){
        super(props)
        this.state = {
            cards: {},
            cardsComps: [],
            cardListDom: []
        }
        this.getDataFromFirebase = this.getDataFromFirebase.bind(this);
        this.printCardList = this.printCardList.bind(this);
    }

    getDataFromFirebase(){
        const localUid = JSON.parse(sessionStorage.getItem('uid'))
        const localToken = JSON.parse(sessionStorage.getItem('token'))

        if(localUid){
            firebaseDB.ref(`cards/${localUid}`).once('value')
                .then(snapshot => {
                    this.setState({
                        cards: snapshot.val(),
                        cardCount: this.state.cardCount + 1
                    })
                }).then(() => {
                    this.printCardList()
                    this.props.loading(false)
                    console.log(this.props)
                })
        }
    }

    printCardList(){
        if(this.state.cards){
            let cardsArray = Object.values(this.state.cards);
            let cardListDom = [];
            
            cardsArray.forEach((card, i) => {
                cardListDom.push(
                    <BankCard key={i} card_holder={card.card_holder} card_number={card.card_number} card_exp_mont={card.card_exp_mont} card_exp_year={card.card_exp_year}/>
                )
            });
            this.setState({
                cardListDom
            })
        }
    }

    componentWillMount(){
        this.getDataFromFirebase()
    }

    // componentDidUpdate(){
    //     console.log('this.state.cards :', this.state.cards);
    // }

    render() {
        return this.state.cardListDom
    }
}

const mapStateToProps = (state) => ({reduxData: state})

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        loading
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(bankCardList);