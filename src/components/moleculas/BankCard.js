import React from 'react';
import styled from 'styled-components';

// my comp
import { MAIN_RADIUS, COLORS } from '../UI_VARS';
import { WhiteText, WhiteLightText, WhiteVeryLightText } from '../UI_ATOMS';

// imgs
import bullets_white_icon from '../../img/icons/bullets_white.svg'

const BankCard = () => {

    const Card = styled.div`
        width: 100%;
        height: 112pt;
        border-radius: ${MAIN_RADIUS};
        background: ${COLORS.primary};
        background: -moz-linear-gradient(-45deg, ${COLORS.primary} 0%, ${COLORS.secondary} 100%);
        background: -webkit-linear-gradient(-45deg, ${COLORS.primary} 0%,${COLORS.secondary} 100%);
        background: linear-gradient(135deg, ${COLORS.primary} 0%,${COLORS.secondary} 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr=${COLORS.primary}, endColorstr=${COLORS.secondary},GradientType=1 );
    `;

    const Bullets = styled.img`
        width: 4pt;
    `;


    return(
        <Card>
            <WhiteText> N. Surname </WhiteText>
            <Bullets src={bullets_white_icon} alt="Edit Card"/>
            <WhiteLightText> **** - **** - **** - 4787 </WhiteLightText>
            <WhiteVeryLightText> 1/20 </WhiteVeryLightText>
        </Card>
    )
};

export default BankCard;