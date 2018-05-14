import React from 'react';
import { Link } from 'react-router-dom';

// my comp
import { Title } from '../UI_ATOMS';

const PageNotFound = () => {
    return (
        <div>
            <Title>
                Page Not Found! Back To <Link to="/"> Home Page </Link>
            </Title>
        </div>
    );
};

export default PageNotFound;