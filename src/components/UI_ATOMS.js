import React from 'react';
import styled from 'styled-components';


//my comp
import {MAIN_FONT, COLORS, MAIN_GRADIENT} from './UI_VARS';

// typography
const Title = styled.h1`
    color: ${COLORS.black};
    font-family: ${MAIN_FONT};
    font-size: 22pt;
    font-weight: 500;
    line-height: 30pt;
`;

const Label = styled.h3`
    color: ${COLORS.black};
    font-family: ${MAIN_FONT};
    font-size: 16pt;
    font-weight: 500;
    line-height: 21pt;
    text-align: ${props => props.centeredText ? 'center' : 'left'};
`;

const Paragraph = styled.p`
color: ${COLORS.txt_gray};
font-family: ${MAIN_FONT};
font-size: 16pt;
line-height: 21pt;
`;

const LightText = styled.p`
color: ${COLORS.txt_light_gray};
font-family: ${MAIN_FONT};
font-size: 14pt;
line-height: 21pt;
`;

const WhiteText = styled.p`
color: ${COLORS.white};
font-family: ${MAIN_FONT};
font-size: 14pt;
font-weight: 500;
line-height: 21pt;
`;

const WhiteLightText = styled.p`
color: ${COLORS.white};
font-family: ${MAIN_FONT};
font-size: 14pt;
line-height: 21pt;
opacity: 0.88;
`;

const WhiteVeryLightText = styled.p`
color: ${COLORS.white};
font-family: ${MAIN_FONT};
font-size: 12pt;
line-height: 21pt;
opacity: 0.64;
`;

// icons
const MainIcons = styled.img`
    height: 24pt;
    margin: 16pt;
    cursor: pointer;
`;

const MainLine = styled.div`
    width: 100%;
    height: 1pt;
    background-color: ${COLORS.gray};
    margin-top: 16pt;
    margin-bottom: 16pt;
`;

const DropDownArrow = styled.img`
    width: 8pt;
    transform: rotate(${props => props.clicked ? '0' : '180deg'});
    display: inline-block;
`;

// buttons
const MainButton = styled.div`
    color: ${COLORS.primary};
    font-family: ${MAIN_FONT};
    font-size: 16pt;
    line-height: 21pt;
    border: 1pt solid ${COLORS.primary};
    border-radius: 4pt;
    padding: 8pt;
    text-align: center;
    cursor: pointer;
`;

const ActiveButton = styled.div`
    color: ${COLORS.white};
    background: ${MAIN_GRADIENT};
    font-family: ${MAIN_FONT};
    font-size: 16pt;
    line-height: 21pt;
    border-radius: 4pt;
    padding: 8pt;
    text-align: center;
    cursor: pointer;
    width: 128pt;
`;

const GrayButton = styled.div`
    color: ${COLORS.white};
    background-color: ${COLORS.dark_gray};
    font-family: ${MAIN_FONT};
    font-size: 16pt;
    line-height: 21pt;
    border-radius: 4pt;
    padding: 8pt;
    text-align: center;
    cursor: pointer;
    width: 128pt;
`;

const PassiveButton = styled.div`
    color: ${COLORS.txt_light_gray};
    font-family: ${MAIN_FONT};
    font-size: 16pt;
    line-height: 21pt;
    border-radius: 4pt;
    border: 1pt solid ${COLORS.gray};
    padding: 8pt;
    text-align: center;
    cursor: pointer;
    width: 128pt;
`;


// other
const ProgressBar = (percent) => {
    if(percent){
        const progressPercent = {
            width: percent + "%",
            height: "100%",
            backgroundColor: COLORS.secondary
        }

        const pbStyle = {
            backgroundColor: COLORS.light_gray,
            height: '8pt'
        }

        return (
                <div className="progress_bar" style={pbStyle}>
                    <div style={progressPercent} className="progress"></div>
                </div>
            )
    }
}

export {
    Title, Label, Paragraph, LightText, WhiteText, WhiteLightText, WhiteVeryLightText,
    MainIcons, MainLine, DropDownArrow,
    MainButton, ActiveButton, PassiveButton, GrayButton,
    ProgressBar
};