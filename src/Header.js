import React from 'react'
import './Header.css'
import PersonIcon from '@material-ui/icons/Person';
import SendIcon from '@material-ui/icons/Send';
import IconButton from '@material-ui/core/IconButton';

function Header() {
    return (
        <div className="header">
            <IconButton><PersonIcon fontSize="large"/></IconButton>
            <img src="https://www.techadvisor.co.uk/cmsdata/features/3515013/tinder_logo_thumb1200_4-3.png" alt="" className="header__logo"/>
            <IconButton><SendIcon fontSize="large"/></IconButton>
        </div>
    )
}

export default Header
