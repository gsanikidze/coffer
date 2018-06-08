import React from 'react';

// my comp
import './input.css';
import { COLORS, MAIN_FONT } from '../../UI_VARS';
import { Label } from '../../UI_ATOMS';
import submit_icon from '../../../img/icons/add_money.svg';
import us_dollar_icon from '../../../img/icons/us_dollar.svg';

const TextInputFieldStyle = {
    border:`1px solid ${COLORS.dark_gray}`,
    color: COLORS.txt_light_gray,
    fontFamily: MAIN_FONT,
}

const InputField = (props) => {
    let placeholder, name

    if(props){
        if(typeof(props) === 'string'){
            placeholder = props
        } else {
            placeholder = props.placeHolder
            name = props.name
        }
    }

     
    return <input style={TextInputFieldStyle} value={props && props.value ? props.value : null} name={name} placeholder={placeholder || props || "Placeholder"} type="text" className="text_input_field"/> 
};

const NumberInput = (props) => {
    return(
        <div className="text_input">
            <img src={us_dollar_icon} alt="Currency" className="us_dollar_icon"/>
            <div className="line" style={{backgroundColor: COLORS.dark_gray}}></div>
            {InputField(props.placeholder)}
            <img src={submit_icon} alt="Submit Money" className="submit_icon" id="submit_icon"/>
        </div>
    )
}

const InputWithLabel = (props) => {
    return(
        <div className="text_input_standard">
            <Label className="label">
                {props.label || "Label"}
                {
                props.isRequired ? <Label className="is_required">*</Label> : null
                }
            </Label>
            {InputField(props)}
        </div>
    )
}

export { NumberInput, InputWithLabel};
