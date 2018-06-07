import React from 'react'
import styled from 'styled-components'

//my comp
import {MAIN_SHADOW, COLORS} from '../UI_VARS.js';
import {LightText} from '../UI_ATOMS';
import deleteFromDb  from '../../functions/deleteFromDb'

const dropDownMenu = (props) => {

    const DropDownDiv = styled.div `
        display: flex;
        margin-right: 16pt;
        justify-content: flex-end;
        `
    const DropDownUl = styled.ul `
        padding: 16pt;
        margin-top: ${props.home
        ? '50pt'
        : '-8pt'};
        border-radius: 4pt;
        position: absolute;
        z-index: 99;
        background: ${COLORS.white};
        box-shadow: ${MAIN_SHADOW};
        border: 1pt solid ${COLORS.light_gray};
        li {
            cursor: pointer;
        }
        `

    return (
        <DropDownDiv>
            <DropDownUl>
                <LightText>
                    <li>Edit</li>
                    <li onClick={() => deleteFromDb(props.itemsType, props.budgetDbId, props.page)}>Delete</li>
                    <li>Report</li>
                </LightText>
            </DropDownUl>
        </DropDownDiv>
    );
};

export default dropDownMenu;