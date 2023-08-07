import { useEffect, useRef, useState } from "react";
import { API, DataStore } from "aws-amplify";
import { Divider, Flex, Text, useAuthenticator } from '@aws-amplify/ui-react';
import { SnackbarProvider, enqueueSnackbar } from 'notistack';
import { Avatar, Box, Button, Fade, IconButton, ListItemIcon, Menu, MenuItem, Modal, Skeleton, Tooltip, Typography } from "@mui/material";
import { Logout, Settings } from "@mui/icons-material";
import SendIcon from '@mui/icons-material/Send';

import {App, AppUser, TaskStatus, User, Language, Role, UserRole, RoleEnum} from "../models";
import * as queries from '../graphql/queries';
import {NavBar, UserUpdateForm, WelcomeCard } from "../ui-components";
import { AppTileCollectionForUser } from "./index";
import { useDataStoreBinding } from "@aws-amplify/ui-react/internal";
import Iframe from "react-iframe";
import SessionCreateForm from "../ui-components/SessionCreateForm";

const apiName = 'WebPortalApi';

export function Home() {
    const { route } = useAuthenticator((context) => [context.route]);
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    //const isDataStoreSupported = isDataStoreAvailable();
    const appsDataStore = useDataStoreBinding({
        type: "collection",
        model: App,
    }).items;
    const usersDataStore = useDataStoreBinding({
        type: "collection",
        model: User,
    }).items;
    const roleDataStore = useDataStoreBinding({
        type: "collection",
        model: Role,
    }).items;
    if(true) {

    }
    else
    {
        const fallbackData = {
            appsDataStore: [],
            usersDataStore: [],
            roleDataStore: [],
        };
    }

    const [currentUserID, setCurrentUserID] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    const [showUserForm, setShowUserForm] = useState(false);

    const [showRiseClass, setShowRiseClass] = useState(false);
    const handleRiseClassOpen = () => setShowRiseClass(true);
    const handleRiseClassClose = () => setShowRiseClass(false);

    const handleOpen = () => setShowUserForm(true);
    const handleClose = () => setShowUserForm(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleAvatarClose = () => {
        setAnchorEl(null);
    };

    const userIDinDB = useRef("");
    const boolUserFound = useRef(false);
    const handleSupportClick = () => {
        window.location.href = 'mailto:VirtuaSessions@IntusurgOps.onmicrosoft.com?subject=Help%20from%20User&body=This%20is%20the%20body%20of%20the%20email';
    };

    useEffect(() => {
        async function populateTablesForNewUser() {
            return new Promise(async (resolve, reject) => {
                try {
                    await DataStore.start();

                    if (boolUserFound.current) {
                        console.log("user already found");
                        resolve();
                        return;
                    }
                    console.log("populateTablesForNewUser");
                    console.log(userIDinDB.current);
                    console.log(usersDataStore.length);
                    console.log(appsDataStore.length);
                    if (usersDataStore.length >= 0 && appsDataStore.length > 0) {
                        const userItem = usersDataStore.find((item) => item.cognitoId === user.username);

                        if (userItem) {
                            userIDinDB.current = userItem.id;
                            boolUserFound.current = true;
                            setCurrentUserID(userItem.id);
                            setCurrentUser(userItem);
                            console.log("user found");
                            resolve();
                            return;
                        }

                        const adminRole = await roleDataStore.find(role => role.name === "Admin");

                        if (adminRole) {

                            console.log('Admin Role ID:', adminRole.id);
                        } else {
                            console.log('Admin role not found in the roleDataStore.');
                            return;
                        }
                        const appIds = appsDataStore.map(app => app.id);
                        if (appIds.length < appsDataStore.length )
                        {
                            return;
                        }


                        console.log('appids: ' + appIds);
                        if (userIDinDB.current.trim().length === 0) {

                            console.log(`User does not exist. Creating new entry for ${user.username}.`);
                            const newUser = await DataStore.save(
                                new User({
                                    userName: "username",
                                    apps: [appIds],
                                    roles: [adminRole],
                                    sessions: [],
                                    firstName: "First Name",
                                    lastName: "Last Name",
                                    avatarUrl: "",
                                    email: user.attributes.email.toString(),
                                    cognitoId: user.username,
                                    avatarKey: "333",
                                    avatarImageURL: "",
                                    language: Language.ENGLISH,
                                    avatarUploaded: false,
                                })
                            );

                                await DataStore.save(
                                    new UserRole({
                                        userId: newUser.id,
                                        roleId: adminRole.id,
                                    })
                                );


                            for (const appItem of appsDataStore) {
                                await DataStore.save(
                                    new AppUser({
                                        userId: newUser.id,
                                        appId: appItem.id,
                                    })
                                );
                                console.log(`Added App:${appItem.name} for User: ${newUser.firstName}`);


                                /*
                                const tasks = await appItem.Tasks.toArray();

                                for (const taskItem of tasks) {
                                    await DataStore.save(
                                        new TaskStatus({
                                            taskID: taskItem.id,
                                            taskStatusUserId: newUser.id,
                                            isEnabled: true,
                                            Progress: "New",
                                        })
                                    );
                                    console.log(`Added Task:${taskItem.name} for User: ${newUser.firstName}`);
                                }
                                */
                            }

                            userIDinDB.current = newUser.id;
                            boolUserFound.current = true;
                            setCurrentUserID(newUser.id);
                            setCurrentUser(newUser);
                            resolve();
                            setShowUserForm(true);
                        }
                    }
                } catch (error) {
                    console.error("Error in populateTablesForNewUser:", error);
                    resolve(error);
                }
            });
        }

        populateTablesForNewUser().catch((error) => {
            console.error("Error in populateTablesForNewUser:", error);
        });
    }, [user, usersDataStore, appsDataStore, roleDataStore]);

    const userFirstName = usersDataStore.find((item) => item.email === user.attributes.email)?.firstName;
    const userLastName = usersDataStore.find((item) => item.email === user.attributes.email)?.lastName;

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

    function profileShow() {
        setShowUserForm(true);
    }

    function RiseClassFrame() {
        // Do something here
    }

    function getUserName() {
        return userFirstName ? `${userFirstName} ${userLastName}` : "username";
    }

    async function uploadAvatar(userId) {
        const path = '/user';
        const myInit = {
            headers: {},
            response: true,
            queryStringParameters: {
                userId: userId
            }
        };
        return API.get(apiName, path, myInit);
    }

    async function uploadAvatarResponse(userId) {
        enqueueSnackbar("Avatar is Uploading", { variant: 'success' });
        setShowUserForm(false);

        try {
            const response = await uploadAvatar(userId);
            console.log("response gotten", response);

            if (response.data.status === 200) {
                enqueueSnackbar("Avatar Uploaded", { variant: 'success' });
            } else if (response.data.status >= 400) {
                enqueueSnackbar(response.data.error, { variant: 'error' });
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="centered-div">
            <SnackbarProvider>
                <main>
                    <NavBar rightSide={
                        <Flex direction="row" margin="8px 8px 8px 8px" alignItems="center">
                            <Typography sx={{ minWidth: 100 }}>{getUserName()}</Typography>
                            <Tooltip title="Account">
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
                                <MenuItem onClick={() => profileShow()}>
                                    <Avatar /> My account
                                </MenuItem>
                                <Divider />
                                <MenuItem onClick={handleSupportClick}>
                                    <ListItemIcon>
                                        <SendIcon fontSize="small" />
                                    </ListItemIcon>
                                    Email Support
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
                                    <UserUpdateForm
                                        user={currentUser}
                                        onSubmit={(fields) => {
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
                                        onSuccess={() => { uploadAvatarResponse(currentUserID) }}
                                        onError={(error) => { console.log(error) }}
                                        onCancel={() => { setShowUserForm(false) }}
                                    />
                                </Box>
                            </Fade>
                        </Modal>
                    </div>
                    <Flex direction="column">
                        <Divider orientation="horizontal" size="large" />
                    </Flex>
                    <WelcomeCard userID={getUserName()} />
                    <Flex direction="column" margin="8px 8px 0px 32px">
                        <Text fontSize="large" fontWeight="semibold">My Apps</Text>
                    </Flex>

                    {currentUserID === "" ? (
                        <Flex direction="row" margin="8px 8px 32px 32px">
                            <Skeleton variant="box" width={150} height={150} />
                            <Skeleton variant="box" width={150} height={150} />
                            <Skeleton variant="box" width={150} height={150} />
                        </Flex>
                    ) : (
                        <AppTileCollectionForUser
                            userID={currentUserID}
                            type="list"
                            wrap="wrap"
                            margin="0px 0px 32px 0px"
                        />
                    )}
                </main>
            </SnackbarProvider>
        </div>
    );
}
