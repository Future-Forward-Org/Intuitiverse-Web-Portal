import {useAuthenticator, Text, Flex, Divider} from '@aws-amplify/ui-react';
import {CurrentApp, MagicCodeInput, NavBar, UserUpdateForm} from "../ui-components";
import {SessionBar, } from "../custom-ui-components";
import {AppTileCollectionForUser, SessionCreateForm, TaskCardCollectionForAppUser} from "./index";
import {json, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDataStoreBinding, useNavigateAction} from "@aws-amplify/ui-react/internal";
import {MagicCode, App, User, Task, TaskBehavior, Session} from "../models"
import * as React from "react";
import { SnackbarProvider, enqueueSnackbar  } from 'notistack';
import {API} from "aws-amplify";
import {   Modal,    Box,    Fade,    Avatar,    Backdrop,    CircularProgress,    LinearProgress,    Tooltip,    Typography,    IconButton,
    Menu,    MenuItem,    ListItemIcon,    ListItemButton,    ListItemText,    ListItem,    List,    SwipeableDrawer,    Button,    Skeleton
} from '@mui/material';
import {Settings, Logout, PersonAdd } from '@mui/icons-material';
//import SessionCreateForm from "../ui-components/SessionCreateForm";
import SessionCardCollection from "../ui-components/SessionCardCollection";
import SessionCard from "../ui-components/SessionCard";


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

    const [userFormData, setUserFormData] = useState(null)

    const [currentApp, setCurrentApp] = useState(null);
    const [currentMagicCode, setMagicCode] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [currentTask, setCurrentTask] = useState(null);
    const [currentSessions, setCurrentSessions] = useState(null);
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

    const filterSessionsByUserId = (sessionsData, userId) => {
        return sessionsData.filter((session) => {
            const attendees = session.attendees || []; // Attendees array, considering it may be undefined/null

            // Check if any attendee's ID matches the given userId
            return attendees;//.some((attendee) => attendee.id === userId);
        });
    };


    useEffect(() => {
        async function getAppDetails() {
            const _app = appsDataStore.find((item) => item.id === params.appID);
            const _user = userDataStore.find((item) => item.email === user.attributes.email);

            setCurrentApp(_app);
            setCurrentUser(_user);

            // Ensure _app and _user are not undefined before trying to find _magicCode and _sessions
            if (_app && _user) {
                const _magicCode = codeDataStore.find((item) => item.id === _app.appMagicCodeId);
                const _sessions = filterSessionsByUserId(sessionDataStore, _user);

                setMagicCode(_magicCode);
                setCurrentSessions(_sessions);

                console.log(_sessions.length);
                //const _task = taskDataStore.filter((item) => item.appID === _app.id && item.requiredRole.some(r=> _user.rol .includes(r)));
                //setCurrentTask(_task);
            }
        }

        getAppDetails();
    },[appsDataStore, codeDataStore, userDataStore, sessionDataStore, params.appID, user.attributes.email]);

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
        console.log((response.data));
        //setErrorMessage(response.data.error);
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


    function createSession(sessionId)
    {
        console.log("clicked")
        setShowSessionForm(false);

        const apiName = 'WebPortalApi';
        const path = '/session';
        const myInit = {
            headers: {
            },
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            queryStringParameters: {
                sessionId: sessionId
            }
        }
        return API.get(apiName, path, myInit);
    }
    async function checkCreateSessionResponse(sessionId) {
        let response = "";
        try {
            response = await createSession(sessionId);
        } catch (e) {
            console.error(e);
            showBackdropClose();
            enqueueSnackbar("internal Server error", {variant: 'error'})
            return;
        }
        if(response === "") {

            return;
        }

        console.log("response gotten");

        console.log(response.status);
        console.log((response.data));
        //setErrorMessage(response.data.error);
        console.log(errorMessage);
        if(response.data.status === 200)
        {
            enqueueSnackbar(response.data.error, { variant: 'success' })
        }
        else if(response.data.status >= 400)
        {
            enqueueSnackbar(response.data.error,  { variant: 'error' })
        }

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

    function generateSessionCode() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        let code = '';

        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            code += characters[randomIndex];
        }

        return code;
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

                <Divider orientation="horizontal" size="large"/>

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


                <Flex direction="row" margin="8px 8px 0px 32px">
                    <Text fontSize="large" fontWeight="semibold">My Schedule</Text>
                    <Button textalign="right" onClick={handleSessionOpen}>Add a Session</Button>
                    <div>
                        <Modal open={showSessionForm} onClose={handleSessionClose} aria-describedby="modal-description">
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
                                        onCancel={handleSessionClose}
                                    />
                                </Box>
                            </Fade>
                        </Modal>
                    </div>
                </Flex>
                {currentSessions == null || currentSessions.length === 0 ? (
                    <Flex direction="row" margin="8px 8px 32px 32px">
                        <Skeleton variant="box" width={150} height={150} />
                        <Skeleton variant="box" width={150} height={150} />
                        <Skeleton variant="box" width={150} height={150} />
                    </Flex>
                ) : (
                <SessionBar sessions={currentSessions} />
                    )}
                <div>
                            <Modal open={showSessionForm} onClose={handleSessionClose} aria-describedby="modal-description">
                                <Fade in={showSessionForm}>
                                    <Box sx={style}>
                                        <SessionCreateForm
                                            onSubmit={(fields) => {
                                                const updatedFields = {};
                                                Object.keys(fields).forEach((key) => {
                                                    if (typeof fields[key] === 'string') {
                                                        updatedFields[key] = fields[key].trim();
                                                    } else {
                                                        updatedFields[key] = fields[key];
                                                    }
                                                })
                                                console.log(updatedFields);
                                                updatedFields['host'] = currentUser;
                                                updatedFields['sessionCode'] = generateSessionCode().toUpperCase().trim();
                                                return updatedFields;
                                            }}

                                            onSuccess={(createdSession) => {
                                                checkCreateSessionResponse(createdSession.id);
                                                console.log('Newly created session ID:', createdSession.id)}  }
                                            onError={(error) => {
                                                console.log(error);
                                            }}
                                            onCancel={handleSessionClose}
                                        />
                                    </Box>
                                </Fade>
                            </Modal>
                        </div>
            </main>
        </div>
        </SnackbarProvider>

    );
}







