import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from "react-router-dom";
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import InfoIcon from '@material-ui/icons/Info';

export default function SimpleMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button style = {{color:'white', fontSize:'16px'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                Open Menu
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><PersonIcon/> <Link style ={{textDecoration:'none'}} to={'/profile'}> Profile</Link></MenuItem>
                <MenuItem onClick={handleClose}><GroupIcon/><Link style ={{textDecoration:'none'}} to={'/users'}>Users</Link></MenuItem>
                <MenuItem onClick={handleClose}><InfoIcon/><Link style ={{textDecoration:'none'}} to={'about'}>About</Link></MenuItem>
            </Menu>
        </div>
    );
}
