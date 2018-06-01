import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


// my comp
import { COLORS } from '../UI_VARS';
import { LightText } from '../UI_ATOMS';

const Breadcrumbs = (props) => {

    
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
                <Link to='/'>Home</Link> / {props.pageName}
            </LightText>
        </BreadcrumbsContainer>
    );
};

export default Breadcrumbs;