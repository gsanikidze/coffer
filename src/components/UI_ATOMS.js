import styled from 'styled-components';

//my comp
import {MAIN_FONT, COLORS} from './UI_VARS';

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
font-size: 16pt;
line-height: 21pt;
`;

const WhiteText = styled.p`
color: ${COLORS.white};
font-family: ${MAIN_FONT};
font-size: 16pt;
font-weight: 500;
line-height: 21pt;
`;

const WhiteLightText = styled.p`
color: ${COLORS.white};
font-family: ${MAIN_FONT};
font-size: 16pt;
line-height: 21pt;
opacity: 0.88;
`;

const WhiteVeryLightText = styled.p`
color: ${COLORS.white};
font-family: ${MAIN_FONT};
font-size: 16pt;
line-height: 21pt;
opacity: 0.64;
`;

const MainIcons = styled.img`
    height: 24pt;
    margin: 24pt;
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

export {
    Title, Label, Paragraph, LightText, WhiteText, WhiteLightText, WhiteVeryLightText,
    MainIcons, MainLine, DropDownArrow};