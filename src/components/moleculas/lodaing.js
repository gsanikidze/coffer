import React from 'react'
import styled from 'styled-components'

// my comp
import { COLORS } from '../UI_VARS'

function Loading() {
    let ContainerDiv = styled.div`
        height: 100vh;
        display: flex;
        align-items: center;
    `
    let LodingAnimation = styled.div`
        margin: 0 auto;
        border: 8px solid ${COLORS.dark_gray}; 
        border-top: 8px solid ${COLORS.primary};
        border-radius: 50%;
        width: 60px;
        height: 60px;
        animation: spin 1.3s linear infinite;

        @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
         }
    `


    return (
        <ContainerDiv id="spiner">
            <LodingAnimation />
        </ContainerDiv>
    )
}

export default Loading
