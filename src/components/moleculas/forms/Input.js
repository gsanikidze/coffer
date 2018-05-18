import React from 'react';

// my comp
import './input.css';
import { COLORS, MAIN_FONT } from '../../UI_VARS';

const NumberInputStyle = {
    boxSizing: "border-box",
    background: "none",
    padding:"4pt",
    border:`1px solid ${COLORS.dark_gray}`,
    borderRadius: "4pt",
    color: COLORS.txt_light_gray,
    fontFamily: MAIN_FONT,
    fontSize: "16pt",
    lineHeight: "21pt"
}

const NumberInput = (props) => {
    return(
        <div>
            <input style={NumberInputStyle} placeholder={props.placeHolder || "Placeholder"} type="text" className="number_input"/>
        </div>
    )
}

export { NumberInput };
