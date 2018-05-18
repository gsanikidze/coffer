import React from 'react';

// my comp
import './input.css';
import { COLORS, MAIN_FONT } from '../../UI_VARS';
import submit_icon from '../../../img/icons/add_money.svg';
import us_dollar_icon from '../../../img/icons/us_dollar.svg';

const TextInputFieldStyle = {
    border:`1px solid ${COLORS.dark_gray}`,
    color: COLORS.txt_light_gray,
    fontFamily: MAIN_FONT,
}

const NumberInput = (props) => {
    return(
        <div className="text_input">
            <img src={us_dollar_icon} alt="Currency" className="us_dollar_icon"/>

            <div className="line" style={{backgroundColor: COLORS.dark_gray}}></div>
            <input style={TextInputFieldStyle} placeholder={props.placeHolder || "Placeholder"} type="text" className="text_input_field"/>
            <img src={submit_icon} alt="Submit Money" className="submit_icon"/>
        </div>
    )
}

export { NumberInput };
