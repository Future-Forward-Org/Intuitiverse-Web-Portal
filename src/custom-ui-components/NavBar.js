import React from 'react';
import { IconButton, Avatar, Menu, MenuItem, Tooltip, Typography, Divider } from "@mui/material";
import { Logout, Send as SendIcon } from "@mui/icons-material";
import { Flex, Text, useAuthenticator } from '@aws-amplify/ui-react';




export function NavBar({ userID, signOut, children }) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleAvatarClose = () => {
        setAnchorEl(null);
    };

    const handleSupportClick = () => {
        window.location.href = 'mailto:VirtuaSessions@IntusurgOps.onmicrosoft.com?subject=Help%20from%20User&body=This%20is%20the%20body%20of%20the%20email';
    };

    return (
        <Flex direction="row" margin="8px 8px 8px 8px" alignItems="center">
            <Typography sx={{ minWidth: 100 }}>{userID}</Typography>
            <Tooltip title="Account">
                <IconButton
                    onClick={handleAvatarClick}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={open ? 'account-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                >
                    <Avatar alt="userName" />
                </IconButton>
            </Tooltip>

            <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleAvatarClose}
                onClick={handleAvatarClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&:before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleSupportClick}>
                    <SendIcon fontSize="small" />
                    Email Support
                </MenuItem>
                <MenuItem onClick={signOut}>
                    <Logout fontSize="small" />
                    Logout
                </MenuItem>
            </Menu>

            {Array.isArray(children) ? children : [children]}
        </Flex>
    );
}
