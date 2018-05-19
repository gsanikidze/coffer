import React, { Component } from 'react';

// my comp
import { GrayButton, PassiveButton, Title } from '../../UI_ATOMS';
import { InputWithLabel } from '../../moleculas/forms/Input';
import Breadcrumbs from '../../moleculas/Breadcrumbs';
import './style.css';

class AddBankCard extends Component {
    render() {
        return (
            <div id="add_bank_card">
                <Breadcrumbs />
                <div className="container">
                    <Title id="title">Add Bank Card</Title>
                    
                    <div className="single_line">
                        <InputWithLabel isRequired label="Card Holder Name" placeHolder="type full name"/>
                    </div>

                    <div id="card_numbers" >
                        <InputWithLabel isRequired label="Card Number" placeHolder="XXXX - XXXX - XXXX - XXXX"/>
                        <InputWithLabel isRequired label="CVV / CVC" placeHolder="XXX"/>
                    </div>

                    <div id="date" >
                        <InputWithLabel isRequired label="Expiration Year" placeHolder="YYYY"/>
                        <InputWithLabel isRequired label="Expiration Mont" placeHolder="MM"/>
                    </div>
                    
                    
                    <div id="buttons">
                        <PassiveButton> Cancell </PassiveButton>
                        <GrayButton> Add Card </GrayButton>
                    </div>

                </div>
            </div>
        );
    }
}

export default AddBankCard;