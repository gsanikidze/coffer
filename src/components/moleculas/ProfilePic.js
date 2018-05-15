import React from 'react';
import styled from 'styled-components';

// my comp
import { COLORS } from '../UI_VARS';

const ProfilePic = (props) => {

    let margin = 0;
    props.size === 24 ? margin = "4pt" : margin = "8pt";

    const Picture = styled.div`
        background-image: url("${props.profilePic}");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: ${props.size}pt;
        height: ${props.size}pt;
        border-radius: ${props.size / 2 + 5}pt;
        border: 1pt solid ${COLORS.gray};
        margin: ${margin};
    `;

    return <Picture/>
};

export default ProfilePic;