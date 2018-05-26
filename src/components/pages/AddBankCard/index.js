import React, { Component } from 'react';

// my comp
import { ActiveButton, PassiveButton, Title } from '../../UI_ATOMS';
import { InputWithLabel } from '../../moleculas/forms/Input';
import Breadcrumbs from '../../moleculas/Breadcrumbs';
import './style.css';
import { firebaseDB } from '../../../CONFIG';
import { Redirect } from 'react-router-dom';

class AddBankCard extends Component {
    constructor(props){
        super(props);

        this.state = {
            card_holder: '',
            card_number: '',
            card_cvv: '',
            card_exp_year: '',
            card_exp_mont: ''
        }

        this.onFormChange = this.onFormChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    onFormChange(event){
        //event.preventdefault();
        let value = event.target.value.toUpperCase();
        let input_name = event.target.name
        switch (input_name) {
            case 'card_holder':
                this.setState({
                    card_holder: value
                })
                break;
            case 'card_number':
                this.setState({
                    card_number: value
                })
                break;
            case 'card_cvv':
                this.setState({
                    card_cvv: value
                })
                break;
            case 'card_exp_year':
                this.setState({
                    card_exp_year: value
                })
                break;
            case 'card_exp_mont':
                this.setState({
                    card_exp_mont: value
                })
                break;
            default:
                break;
        }
    }
    submitForm(e){
        const uid = JSON.parse(sessionStorage.getItem('uid'));
        if(uid){
            firebaseDB.ref(`cards/${uid}`).push(this.state);
            this.setState({
                redirect: true
            })
        }
    }
    renderRedirect= () => {
        if(this.state.redirect){
            return <Redirect to='/'/>
        }
    }

    render() {
        return (
            <form id="add_bank_card" onChange={this.onFormChange}>
                <Breadcrumbs />
                <div className="container">
                    <Title id="title">Add Bank Card</Title>
                    
                    <div className="single_line">
                        <InputWithLabel isRequired label="Card Holder Name" placeHolder="type full name" name="card_holder"/>
                    </div>

                    <div id="card_numbers" >
                        <InputWithLabel isRequired label="Card Number" placeHolder="XXXX - XXXX - XXXX - XXXX" name="card_number"/>
                        <InputWithLabel isRequired label="CVV / CVC" placeHolder="XXX" name="card_cvv"/>
                    </div>

                    <div id="date" >
                        <InputWithLabel isRequired label="Expiration Year" placeHolder="YYYY" name="card_exp_year"/>
                        <InputWithLabel isRequired label="Expiration Mont" placeHolder="MM" name="card_exp_mont"/>
                    </div>
                    
                    
                    <div id="buttons">
                        <PassiveButton> Cancell </PassiveButton>
                        <ActiveButton onClick={this.submitForm}> Add Card </ActiveButton>
                    </div>

                </div>
                {this.renderRedirect()}
            </form>
        );
    }
}

export default AddBankCard;