import {useAuthenticator, Text, Flex, Divider} from '@aws-amplify/ui-react';
import {CurrentApp, MagicCodeInput, NavBar, UserUpdateForm} from "../ui-components";
import {TaskCardCollectionForAppUser} from "./index";
import {json, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDataStoreBinding, useNavigateAction} from "@aws-amplify/ui-react/internal";
import {MagicCode, App, User, Task, TaskBehavior, Session} from "../models"
import * as React from "react";
import { SnackbarProvider, enqueueSnackbar  } from 'notistack';
import {API} from "aws-amplify";
import {Modal, Box, Fade, Avatar, Backdrop, CircularProgress, LinearProgress, Tooltip, Typography,
    IconButton, Menu, MenuItem, ListItemIcon, ListItemButton, ListItemText, ListItem, List, SwipeableDrawer, Button
} from '@mui/material';


import {Settings, Logout, PersonAdd } from '@mui/icons-material';
import SessionCreateForm from "../ui-components/SessionCreateForm";
import SessionCardCollection from "../ui-components/SessionCardCollection";


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
    const [showSessionForm, setShowSessionForm] = useState(false);
    const handleOpen = () => setShowUserForm(true);
    const handleClose = () => setShowUserForm(false);

    const handleSessionOpen = () => setShowSessionForm(true);
    const handleSessionClose = () => setShowSessionForm(false);

    const [userFormData, setUserFormData] = useState()

    const [currentApp, setCurrentApp] = useState();
    const [currentMagicCode, setMagicCode] = useState();
    const [currentUser, setCurrentUser] = useState();
    const [currentTask, setCurrentTask] = useState();
    const [currentSessions, setCurrentSessions] = useState();
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

    const taskDataStore = useDataStoreBinding({
        type: "collection",
        model: Task,
    }).items;

    const sessionDataStore = useDataStoreBinding({
        type: "collection",
        model: Session,
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
            const _sessions = filterSessionsByEmail(sessionDataStore, user.attributes.email);

            setCurrentSessions(_sessions);
            //console.log(_magicCode.toString());
            //const _task = taskDataStore.filter((item) => item.appID === _app.id && item.requiredRole.some(r=> _user.rol .includes(r)));
            //setCurrentTask(_task);
        }

        getAppDetails();
    },[appsDataStore, codeDataStore, userDataStore, sessionDataStore]);

    //console.log(currentApp.toString());

    const filterSessionsByEmail = (sessionsData, userEmail) => {
        return sessionsData.filter(session => {
            const attendees = session.attendees || []; // Attendees array, considering it may be undefined/null

            // Check if the user's email is included in the attendees array
            return attendees
        });
    };

    function uploadAvatar(userId)
    {
        console.log("upload avatar started")
        const apiName = 'WebPortalApi';
        const path = '/user';
        const myInit = {
            headers: {
            },
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            queryStringParameters: {
                userId: userId
            }
        }
        return API.get(apiName, path, myInit);
    }

    async function uploadAvatarResponse(userId)
    {
        console.log("userId: " + userId);
        enqueueSnackbar("Avatar is Uploading", { variant: 'success' })
        setShowUserForm(false)
        let response = await uploadAvatar(userId);

        console.log("response gotten");
        console.log(response);

        console.log(response.status);
        console.log((response.data.status));
        console.log((response.data.data));
        console.log((response.data.error));


        if(response.data.status  === 200)
        {
            const updatedAvatarKeyField = {}
            updatedAvatarKeyField['avatarKey'] = response.data.data
            enqueueSnackbar("Avatar Uploaded", { variant: 'success' })
        }
        else if(response.data.status >= 400)
        {
            enqueueSnackbar(response.data.error,  { variant: 'error' })
        }

        //alert(`Home with id: ${errorMessage} clicked!`)
    }

    function checkMagicCode()
    {
        console.log("clicked")
        if(document.getElementById('codeInputField') === null || document.getElementById('codeInputField').value === '')
        {
            enqueueSnackbar("Field is empty", { variant: 'error' })
            return "";
        }

        let code = document.getElementById('codeInputField').value.toString()

        console.log(code)

        const apiName = 'WebPortalApi';
        const path = '/device';
        const myInit = {
            headers: {
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.5",
                "cookie": "AWSALBAuthNonce=nHkWBqgzAIa84sy7; ",
                "host": "auth.xrplatform.org",
                "referer": "https://auth.xrplatform.org/device",
                "sec-fetch-dest": "document",
                "sec-fetch-mode": "navigate",
                "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "te": "trailers",
                "upgrade-insecure-requests": "1",
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
                "x-amzn-oidc-accesstoken": "eyJraWQiOiI5TUFcL3NtNG9leDRQeUt2RFJzRHQ3VjY0XC9CVjZYaGs5TFwvWVlWeVlFQlkwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyNTZmNzZhOC0yZDE1LTRmMTQtYWRkZS1kZDRhZTAyYmJhNzEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9ueHhaSTVKMGciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiJpNzBsZHE0dWhqYTV0aDcxdm9pczRxdHFxIiwib3JpZ2luX2p0aSI6IjJiMDRmNGNmLTRiNTUtNGJjZC1hNTFmLWE2NDBlNWJiM2VkYyIsImV2ZW50X2lkIjoiZGQ0NWM2ODYtNmU1My00YmI2LWJmOTEtN2E2NjY2Mzk4MDUxIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJvcGVuaWQiLCJhdXRoX3RpbWUiOjE2ODUwNDIwMjAsImV4cCI6MTY4NTA0NTYyMCwiaWF0IjoxNjg1MDQyMDIxLCJqdGkiOiJkNjJiOTE0NC1mNzRjLTQ5NzItYThmZi0xYTE2OGZjNzI2YTciLCJ1c2VybmFtZSI6IjI1NmY3NmE4LTJkMTUtNGYxNC1hZGRlLWRkNGFlMDJiYmE3MSJ9.TYjgv32hQjTzQKHSWJaagc7G95o9NLJRrxBRPtnNxH2HBenVVwB7JxLOYRE9ucOF7HekjUVh7OGQ1jXIoGu0DWdxI_GFCmqO5yOY63OWq5mVVriiDnrpn36XU7jniS2tHwWN7cZp-HFwCyJvBK0v67NycwuVDm6VGfqBioaOfs9hDc4wWyKHfLIH8UUKQfEWC8T1FZHCphY-3LfKK7XYHAmRcJVJsGLFpGyuRxX_y_jLjAC4D-2aL4Kre714Il-S8JC0R1ciQGrOSZERdQzYgJexhqTLAXArnEMJrebW1TBZIyDRZzm_cLeLxdc8AlLMa6Uyrqey7qqd6D3xt6S-kA",
                "x-amzn-oidc-data": "eyJ0eXAiOiJKV1QiLCJraWQiOiJjOTIwMDkzNS0yNDdhLTQ1YjYtOGNiYS1lNDMxMmVjNTQyMzgiLCJhbGciOiJFUzI1NiIsImlzcyI6Imh0dHBzOi8vY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vdXMtZWFzdC0yX254eFpJNUowZyIsImNsaWVudCI6Imk3MGxkcTR1aGphNXRoNzF2b2lzNHF0cXEiLCJzaWduZXIiOiJhcm46YXdzOmVsYXN0aWNsb2FkYmFsYW5jaW5nOnVzLWVhc3QtMjo3Nzc1NTM0MTM0Mjg6bG9hZGJhbGFuY2VyL2FwcC9kZXYtRGV2aWNlR3JhbnRBTEItdGVycmFmb3JtLzM0YWViMmE2ZDFjOGI5NzEiLCJleHAiOjE2ODUwNDIxNDZ9.eyJzdWIiOiIyNTZmNzZhOC0yZDE1LTRmMTQtYWRkZS1kZDRhZTAyYmJhNzEiLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJlbWFpbCI6ImpvZS5uYXRlbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IjI1NmY3NmE4LTJkMTUtNGYxNC1hZGRlLWRkNGFlMDJiYmE3MSIsImV4cCI6MTY4NTA0MjE0NiwiaXNzIjoiaHR0cHM6Ly9jb2duaXRvLWlkcC51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS91cy1lYXN0LTJfbnh4Wkk1SjBnIn0=.9bnVg7EzBg7CmqSwyqJC93Z53jqFQ7TV7nPNdQXuDbn9MRPL8Dz3rq79RYowgD1KsIz9hmMQwQrP5Dl7BhsvSw==",
                "x-amzn-oidc-identity": "256f76a8-2d15-4f14-adde-dd4ae02bba71",
                "x-amzn-trace-id": "Root=1-646fb36a-129b69da04f6b5404c4d97e0",
                "x-forwarded-for": "204.27.197.11",
                "x-forwarded-port": "443",
                "x-forwarded-proto": "https",
                "x-mwg-via": "564DC781-B909-E0F9-70E3-80209C594175"
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
        let response = "";
        try{
            response = await checkMagicCode();
        } catch(e) {
            console.error(e);
            showBackdropClose();
            enqueueSnackbar("internal Server error",  { variant: 'error' })
            return;
        }


        showBackdropClose();

        if(response === "") {

            return;
        }

        console.log("response gotten");

        console.log(response.status);
        console.log((response.data.status));
        setErrorMessage(response.data.error);
        console.log(errorMessage);
        if(response.data.status === 200)
        {
            enqueueSnackbar(response.data.error, { variant: 'success' })
        }
        else if(response.data.status >= 400)
        {
            enqueueSnackbar(response.data.error,  { variant: 'error' })
        }

        //alert(`Home with id: ${errorMessage} clicked!`)
    }


    function createSession()
    {
        console.log("clicked")
        setShowSessionForm(false);
        let code = document.getElementById('codeInputField').value.toString()
        enqueueSnackbar("Session Created", { variant: 'success' })
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
        //return API.get(apiName, path, myInit);
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
        let userfull = "";

        if (userFirstName !== undefined && userFirstName !== null)
        {
            if(userFirstName['firstName'] !== null || userFirstName['firstName'] === "")
            {
                userfull = userFirstName['firstName'];
            }
            if(userFirstName['lastName'] !== null || userFirstName['lastName'] === "")
            {
                userfull = userfull + " " +userFirstName['lastName'];
            }
        }
        else
        {
            userfull = "username";
        }

        return userfull

    }

    function handleTask(task)
    {
        console.log("task handling started")
        let updatedUrl = task?.url;
/*
        if(task?.appendUserID === true)
        {
            updatedUrl = updatedUrl + "?UserID="+ currentUser
        }

        if(task.taskBehavior === TaskBehavior.OPENINTAB)
        {
            console.log("OPENINTAB")
            useNavigateAction({
                target: "_blank",
                type: "url",
                url: updatedUrl,
            });
            return;
        }
        if(task.taskBehavior === TaskBehavior.OPENINPLACE)
        {
            console.log("OPENINPLACE")
            useNavigateAction({
                target: "_self",
                type: "url",
                url: updatedUrl,
            });
            return;
        }
        if(task.taskBehavior === TaskBehavior.OPENINIFRAME)
        {
            console.log("OPENINIFRAME")
            useNavigateAction({
                target: "_self",
                type: "url",
                url: updatedUrl,
            });


 */



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
                            id="account-myenu"
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
                                        onSuccess={() => {uploadAvatarResponse(currentUser.id)}}
                                        onError={(error) => { console.log(error)}}
                                        onCancel={() => { setShowUserForm(false) }}

                        />
                        </Box>
                        </Fade>
                    </Modal>
                </div>

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
                    onClick={() => handleTask()}
                    type="list"
                    wrap="wrap"
                    margin="0px 0px 32px 0px"
                />
                <Divider orientation="horizontal" size="large"/>
                <Button  onClick={handleSessionOpen} variant="outlined">Add a Session</Button>
                <div>
                    <Modal open={showSessionForm} onClose={handleSessionOpen} aria-describedby="modal-description">
                        <Fade in={showSessionForm}>
                            <Box sx={style}>
                <SessionCreateForm
                    onSubmit={(fields) => {
                        // Example function to trim all string inputs
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
                    onSuccess={() => {createSession()}}
                    onError={(error) => { console.log(error)}}
                    onCancel={() => { showSessionForm(false) }}
                />
                            </Box>
                        </Fade>
                    </Modal>
                </div>
                <Text margin="8px 8px 0px 32px" fontSize="large" fontWeight="semibold">My Schedule</Text>
            </main>
        </div>
        </SnackbarProvider>

    );
}







