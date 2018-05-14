import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { css } from 'glamor'

const Title = styled.h1`
    font-family: "helvetica";
    text-align: center;
    color: pink;
    font-size: 24px;
`;
 
const Layout = css({
    width: "250px",
    margin: "0 auto"
});


const PageNotFound = () => {
    return (
        <div {...Layout}>
            <Title>
                Page Not Found! Back To <Link to="/"> Home Page </Link>
            </Title>
        </div>
    );
};

export default PageNotFound;