// components/Home.js
import {Divider, Flex, Text, useAuthenticator} from '@aws-amplify/ui-react';
import {MagicCodeInput, NavBar, UserUpdateForm, WelcomeCard} from "../ui-components";
import {AppTileCollectionForUser} from "./index";
import { DataStore } from '@aws-amplify/datastore';
import {App, AppUser, TaskStatus, User, Language, Role} from "../models";
import {useEffect, useRef, useState} from "react";
import {useDataStoreBinding} from "@aws-amplify/ui-react/internal";
import * as React from "react";
import * as queries from '../graphql/queries';
import {API, Hub, graphqlOperation} from "aws-amplify";
import {
    Avatar,
    Box,
    Button,
    Fade,
    IconButton,
    ListItemIcon,
    Menu,
    MenuItem,
    Modal,
    Tooltip,
    Typography
} from "@mui/material";
import {Logout, Settings} from "@mui/icons-material";
import * as mutations from "../graphql/mutations";
import Iframe from "react-iframe";

export function Home() {
    const { route } = useAuthenticator((context) => [context.route]);
    const { user, signOut } = useAuthenticator((context) => [context.user]);

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

    const [currentUserID, setCurrentUserID] = useState("");

    const [showUserForm, setShowUserForm] = useState(false);

    const [showRiseClass, setShowRiseClass] = useState(false);
    const handleRiseClassOpen = () => setShowRiseClass(true);
    const handleRiseClassClose = () => setShowRiseClass(false);


    const handleOpen = () => setShowUserForm(true);
    const handleClose = () => setShowUserForm(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleAvatarClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleAvatarClose = () => {
        setAnchorEl(null);
    };


    let userIDinDB = useRef("");
    let boolUserFound = useRef(false);


    React.useEffect(()=>{

        async function PopulateTablesforNewUser(){
            console.log("PopulateTablesforNewUser");

            if (boolUserFound.current)
            {
                //console.log(currentUserID);
                console.log("user already found");
                return;
            }
/*
            const userItem = await API.graphql(
                graphqlOperation(queries.usersByCognitoIdAndId, { id: user.username})
            );
*/

/*
            let userItem = await API.graphql({
                query: queries.getUser,
                variables: { id: user.username }
            });
            */
/*
            console.log(user.username);
            if (userItem !== undefined && userItem !== null && userItem.length >= 0){
                userIDinDB.current = userItem.id;
                boolUserFound.current = true;
                setCurrentUserID(userItem.id);
                console.log(currentUserID);
                return;
            }
            else
            {
                console.log("create user");
                const userDetails = {
                    //id: user.username,
                    userName: user.username,
                    firstName: "",
                    lastName: "",
                    gender: "",
                    avatarUrl: "",
                    email: user.attributes.email.toString(),
                    cognitoId: user.username,
                    avatarKey: "",
                    language: ""
                };


                return;
            }
*/


            //const _users = await DataStore.query(User);
            //const _apps = await DataStore.query(App);
            console.log("part2");
            if (usersDataStore.length > 0 && appsDataStore.length > 0) {
                let userItem = usersDataStore.find((item) => item.cognitoId === user.username);
                if (userItem)
                {
                    userIDinDB.current = userItem.id;
                    boolUserFound.current = true;
                    setCurrentUserID(userItem.id);
                    console.log("user found");
                    return;
                }
                if (userIDinDB.current === "")
                {
                    console.log(`User does not exist. Creating new entry for ${user.username}.`);
                    const newUser = await DataStore.save(
                        new User({
                            "userName": "username",
                            "Apps": [],
                            "Roles": ["08df6905-af07-43d0-a386-e48f91730566"],
                            "firstName": "",
                            "lastName": "",
                            "avatarUrl": "",
                            "email": user.attributes.email.toString(),
                            "cognitoId": user.username,
                            "avatarKey": "",
                            "language": Language.ENGLISH,
                            "avatarUploaded": false
                        })
                    );

                    appsDataStore.map(async (appItem) => {
                        await DataStore.save(
                           new AppUser({
                               userId: newUser.id,
                               appId: appItem.id,
                           })
                        );
                        console.log(`Added App:${appItem.name} for User: ${newUser.firstName}`);
                        const tasks = await appItem.Tasks.toArray();
                        tasks.map(async (taskItem) => {
                            await DataStore.save(
                                new TaskStatus({
                                    taskID: taskItem.id,
                                    taskStatusUserId:newUser.id,
                                    isEnabled:true,
                                    Progress:"New"
                                })
                            )
                            console.log(`Added Task:${taskItem.name} for User: ${newUser.firstName}`);
                        });
                    });
                    userIDinDB.current = newUser.id;
                    roleDataStore.find()

                    boolUserFound.current = true;
                    setCurrentUserID(newUser.id);
                }
            }


        }
        PopulateTablesforNewUser();

    },[user, usersDataStore, appsDataStore]);

    let userFirstName = usersDataStore.find((item) => item.email === user.attributes.email);


    function profileShow() {
        setShowUserForm(true);
        //handleOpen();
        //console.log('showUserForm ' + userFirstName['firstName']);
    }

    function RiseClassFrame() {
        //setShowUserForm(true);
        //handleOpen();
        //console.log('showUserForm ' + userFirstName['firstName']);
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

    const style2 = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 1480,
        height: 900,

        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 15,
        p: 4,
    };

    function getUserName()
    {
        if (userFirstName !== undefined && userFirstName !== null)
        {
            return userFirstName['firstName'] + " " + userFirstName['lastName']
        }
        return "username"
    }

    return (
        <div className="centered-div">
            <main>
                {/* <NavBar userID={user.attributes.email.toString().toLowerCase()} signOut={signOut}/> */}
                <NavBar rightSide={
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
                                <UserUpdateForm user={currentUserID} onSubmit={(fields) => {
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
                <Flex direction="column">
                    <Divider orientation="horizontal" size="large" />
                </Flex>
                <WelcomeCard userID={getUserName()} />
                <Flex direction="column" margin="8px 8px 0px 32px">
                    <Divider orientation="horizontal" size="large"/>
                    <Text fontSize="large" fontWeight="semibold">My Apps</Text>
                </Flex>

                <Button onClick={handleRiseClassOpen}>Rise Class</Button>

                <div>
                    <Modal open={showRiseClass} onClose={handleRiseClassClose} aria-describedby="modal-description">
                        <Fade in={showRiseClass}>
                            <Box sx={style2}>
                                <Iframe url="https://staging.d2j8sv84b6z7v4.amplifyapp.com/"
                                        id=""
                                        width="1400px"
                                        height="850px"
                                        className=""
                                        display="block"
                                        position="relative"/>
                            </Box>
                        </Fade>
                    </Modal>
                </div>



                {currentUserID !== ""?
                <AppTileCollectionForUser
                    userID={currentUserID}
                    type="list"
                    wrap="wrap"
                    margin="0px 0px 32px 0px"
                /> : <Flex direction="column" margin="8px 8px 0px 32px">
                        <Text fontSize="large" fontWeight="semibold">Loading...</Text>
                    </Flex>}
            </main>
        </div>
    );





}



