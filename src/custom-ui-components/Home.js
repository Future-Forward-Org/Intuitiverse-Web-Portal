// components/Home.js
import {Divider, Flex, Text, useAuthenticator} from '@aws-amplify/ui-react';
import {NavBar, WelcomeCard} from "../ui-components";
import {AppTileCollectionForUser} from "./index";

import { DataStore } from '@aws-amplify/datastore';
import {App, AppUser, TaskStatus, User} from "../models";
import {useEffect, useRef, useState} from "react";
import {useDataStoreBinding} from "@aws-amplify/ui-react/internal";
import * as React from "react";
import {Hub} from "aws-amplify";

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

    const [currentUserID, setCurrentUserID] = useState("");

    let userIDinDB = useRef("");
    let boolUserFound = useRef(false);

    React.useEffect(()=>{

        async function PopulateTablesforNewUser(){
            if (boolUserFound.current)
                return;
            //const _users = await DataStore.query(User);
            //const _apps = await DataStore.query(App);
            if (usersDataStore.length >= 0 && appsDataStore.length > 0) {
                let userItem = usersDataStore.find((item) => item.userName === user.username);
                if (userItem){
                    userIDinDB.current = userItem.id;
                    boolUserFound.current = true;
                    setCurrentUserID(userItem.id);
                    return;
                }
                if (userIDinDB.current === ""){
                    console.log(`User does not exist. Creating new entry for ${user.username}.`);
                    const newUser = await DataStore.save(
                        new User({
                            "userName": user.username,
                            "Apps": [],
                            "Roles": [],
                            "firstName": user.attributes.email.toString(),
                            "lastName": "",
                            "gender": "",
                            "avatarUrl": "",
                            "email": user.attributes.email.toString(),
                            "cognitoId": user.username
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
                    boolUserFound.current = true;
                    setCurrentUserID(newUser.id);
                }
            }
        }
        PopulateTablesforNewUser();
    },[user, usersDataStore, appsDataStore]);

    return (
        <div className="centered-div">
            <main>
                {/* <NavBar userID={user.attributes.email.toString().toLowerCase()} signOut={signOut}/> */}
                <NavBar signOut={signOut} />
                <Flex direction="column">
                    <Divider orientation="horizontal" size="large" />
                </Flex>
                <WelcomeCard userID={user.attributes.email.toString()} />
                <Flex direction="column" margin="8px 8px 0px 32px">
                    <Divider orientation="horizontal" size="large"/>
                    <Text fontSize="large" fontWeight="semibold">My Apps</Text>
                </Flex>
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