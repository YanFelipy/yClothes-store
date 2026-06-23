import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useAuthValue } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

export default function BasicMenu() {
    const id = React.useId();
    const buttonId = `${id}-button`;
    const menuId = `${id}-menu`;
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { user, logout } = useAuthValue()



    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const Logout =  () => {
        logout()

        if (user == null && localStorage.token == null){
               navigate("/mproducts");
        } else {
            console.log("Erro ao fazer logout")
        }
    } 

    return (
        <div>
            <Button
                id={buttonId}
                aria-controls={open ? menuId : undefined}
                aria-haspopup="true"
                aria-expanded={open}
                onClick={handleClick}
            >
                ACCOUNT
            </Button>
            <Menu
                id={menuId}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotProps={{
                    list: {
                        'aria-labelledby': buttonId,
                    },
                }}
            >
                <MenuItem onClick={handleClose}>Manage Products</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={Logout}>Logout</MenuItem>
            </Menu>
        </div>
    );
}
