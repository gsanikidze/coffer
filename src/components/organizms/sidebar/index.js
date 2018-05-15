import React, { Component } from 'react';

// icons
import log_out_icon from '../../../img/icons/log_out.svg';

// my comp
import { MainIcons } from '../../UI_ATOMS';


class Sidebar extends Component {
    render() {
        return (
            <div>
                Sidebar
                <MainIcons src={log_out_icon} alt="Log Out"/>
            </div>
        );
    }
}

export default Sidebar;