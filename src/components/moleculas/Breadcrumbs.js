import React from 'react';
import styled from 'styled-components';


// my comp
import { COLORS } from '../UI_VARS';
import { LightText } from '../UI_ATOMS';

const Breadcrumbs = () => {

    
    let BreadcrumbsContainer = styled.div`
        width: 100%;
        height: 48pt;
        display: flex;
        align-items: center;
        background-color: ${COLORS.white};
        border-bottom: 1pt solid ${COLORS.gray};
        margin-left: -24px;
        position: fixed;
        padding-left: 16pt;
    `;


    return (
        <BreadcrumbsContainer>
            <LightText>
                Home / Product Name
            </LightText>
        </BreadcrumbsContainer>
    );
};

export default Breadcrumbs;