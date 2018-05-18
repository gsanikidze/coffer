import React from 'react';
import styled from 'styled-components';

// my comp
import { MAIN_SHADOW } from '../UI_VARS';
import { Label, MainIcons } from '../UI_ATOMS';
import add_blue_icon from '../../img/icons/add_blue.svg'

const CreateBudgetButton = (props) => {

    const Button = styled.div`
        width: 100%;
        height: 56pt;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 4pt;
        box-shadow: ${MAIN_SHADOW};
        cursor: pointer;
    `;

    return(
        <Button>
            <Label style={{marginLeft: 16 + "pt"}}>
                Create Budget
            </Label>
            <MainIcons src={add_blue_icon} alt="Create Budget"/>
        </Button>
    )
};

export default CreateBudgetButton;