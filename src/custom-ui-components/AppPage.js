import {useAuthenticator, Text, Flex, Divider} from '@aws-amplify/ui-react';
import {CurrentApp, MagicCodeInput, NavBar, UserUpdateForm} from "../ui-components";
import {TaskCardCollectionForAppUser} from "./index";
import {json, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDataStoreBinding} from "@aws-amplify/ui-react/internal";
import {MagicCode, App, User} from "../models"
import * as React from "react";
import { SnackbarProvider, enqueueSnackbar  } from 'notistack';
import {API} from "aws-amplify";
import {Modal, Box, Fade, Avatar, Backdrop, CircularProgress, LinearProgress, Tooltip, Typography,
    IconButton, Menu, MenuItem, ListItemIcon, ListItemButton, ListItemText, ListItem, List, SwipeableDrawer, Button
} from '@mui/material';


import {Settings, Logout, PersonAdd } from '@mui/icons-material';


export function AppPage(props) {
    const { route } = useAuthenticator((context) => [context.route]);
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    let params = useParams();
    let anchor = 'right';


    const [errorMessage, setErrorMessage] = useState("");

    const [showBackdrop, setShowBackdrop] = useState(false);
    const showBackdropOpen = () => setShowBackdrop(true);
    const showBackdropClose = () => setShowBackdrop(false);


    const [showUserForm, setShowUserForm] = useState(false);
    const handleOpen = () => setShowUserForm(true);
    const handleClose = () => setShowUserForm(false);

    const [userFormData, setUserFormData] = useState()

    const [currentApp, setCurrentApp] = useState();
    const [currentMagicCode, setMagicCode] = useState();
    const [currentUser, setCurrentUser] = useState();
    const appsDataStore = useDataStoreBinding({
        type: "collection",
        model: App,
    }).items;
    const codeDataStore = useDataStoreBinding({
        type: "collection",
        model: MagicCode,
    }).items;
    const userDataStore = useDataStoreBinding({
        type: "collection",
        model: User,
    }).items;

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleAvatarClose = () => {
        setAnchorEl(null);
    };
    let userFirstName = userDataStore.find((item) => item.email === user.attributes.email);


    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === 'keydown' &&
            (event.key === 'Tab' || event.key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };



    useEffect(() => {
        async function getAppDetails() {
            const _app = appsDataStore.find((item) => item.id === params.appID);
            setCurrentApp(_app);
            const _magicCode = codeDataStore.find((item) => item.id === currentApp.appMagicCodeId);
            setMagicCode(_magicCode);
            const _user = userDataStore.find((item) => item.email === user.attributes.email);
            setCurrentUser(_user);
            //console.log(_magicCode.toString());


        }

        getAppDetails();
    },[appsDataStore, codeDataStore, userDataStore]);

    //console.log(currentApp.toString());


    function checkMagicCode()
    {

        console.log("clicked")
        if(document.getElementById('codeInputField') === null){
            return "";
        }
        if(document.getElementById('codeInputField').value === '')
        {
            return "";
        }
        let code = document.getElementById('codeInputField').value.toString()

        console.log(code)

        const apiName = 'WebPortalApi';
        const path = '/device';
        const myInit = {
            headers: {
            },
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            queryStringParameters: {
                authorize: 'true',
                code: code
            }
        }
        return API.get(apiName, path, myInit);
    }

    async function checkMagicCodeResponse() {
        showBackdropOpen();
        let response = await checkMagicCode();
        showBackdropClose();
        console.log("response gotten")

        console.log(response.status);
        console.log((response.data.status));
        setErrorMessage(response.data.error);
        console.log(errorMessage);
        if(response.data.status  == 200)
        {
            enqueueSnackbar(response.data.error, { variant: 'success' })
        }
        else if(response.data.status >= 400)
        {
            enqueueSnackbar(response.data.error,  { variant: 'error' })
        }

        //alert(`Home with id: ${errorMessage} clicked!`)
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );


    function getUserName()
    {
        if (userFirstName !== undefined && userFirstName !== null)
        {
            return userFirstName['firstName'] + " " + userFirstName['lastName']
        }

        return "username"

    }


    function profileShow() {
        setShowUserForm(true);
        //handleOpen();
        console.log('showUserForm ' + userFirstName['firstName']);
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };




    return (
        <SnackbarProvider>
        <div className="centered-div">
            <main>
                {/* <NavBar userID={user.attributes.email.toString().toLowerCase()} signOut={signOut}/> */}
                <NavBar /*signOut={signOut}*/ position="sticky" rightSide={
                    <Flex direction="row" margin="8px 8px 8px 8px" alignItems="center">
                        <Typography sx={{ minWidth: 100 }}>{getUserName()}</Typography>
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleAvatarClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                        <Avatar alt="userName" /*src="/static/images/avatar/1.jpg"*/ />
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
                            <MenuItem  onClick={() => profileShow()}>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem onClick={handleAvatarClose}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={signOut}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </Menu>
                    </Flex>
                } />
                <div>
                    <Modal open={showUserForm} onClose={handleClose} aria-describedby="modal-description">
                        <Fade in={showUserForm}>
                        <Box sx={style}>
                        <UserUpdateForm user={currentUser} onSubmit={(fields) => {
                            const updatedFields = {}
                            Object.keys(fields).forEach(key => {
                                if (typeof fields[key] === 'string') {
                                    updatedFields[key] = fields[key].trim()
                                } else {
                                    updatedFields[key] = fields[key]
                                }
                            })
                            return updatedFields
                        }}
                                        onSuccess={() => {setShowUserForm(false) }}
                                        onError={(error) => { console.log(error)}}
                                        onCancel={() => { setShowUserForm(false) }}

                        />
                        </Box>
                        </Fade>
                    </Modal>
                </div>

                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <SwipeableDrawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                    >
                        {list(anchor)}
                    </SwipeableDrawer>
                </React.Fragment>

                <Flex direction="column">
                    <Divider orientation="horizontal" size="large" />
                </Flex>

                <Flex direction="row" margin="8px 8px 8px 8px">
                <CurrentApp app={currentApp} /* onClick={() => checkMagicCodeResponse()}*/  rightSide={
                    /* Pass your content into the component slot */
                    <div>
                        <MagicCodeInput ErrorMessage={errorMessage} magicCode={currentMagicCode} MagicCodeAuth={() => checkMagicCodeResponse()} />

                        <Backdrop
                            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                            open={showBackdrop}
                            onClick = {showBackdropClose}
                        >
                            <CircularProgress color="inherit" />
                        </Backdrop>

                    </div>
                } />
                </Flex>
                <Flex direction="column" margin="8px 8px 0px 32px">
                    <Divider orientation="horizontal" size="large"/>
                </Flex>
                <Text margin="8px 8px 0px 32px" fontSize="large" fontWeight="semibold">My Tasks</Text>
                <TaskCardCollectionForAppUser
                    userID={params.userID}
                    appID={params.appID}
                    type="list"
                    wrap="wrap"
                    margin="0px 0px 32px 0px"
                />
            </main>
        </div>
        </SnackbarProvider>

    );
}







