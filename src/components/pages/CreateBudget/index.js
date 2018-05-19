import React, { Component } from 'react';

// my comp
import { ActiveButton, PassiveButton } from '../../UI_ATOMS'

class CreateBudget extends Component {
    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <PassiveButton> Cancell </PassiveButton>
                <br/>
                <br/>
                <br/>
                <ActiveButton> Create Budget </ActiveButton>
            </div>
        );
    }
}

export default CreateBudget;