import {useAuthenticator, Text, Flex, Divider} from '@aws-amplify/ui-react';
import {CurrentApp, MagicCodeInput, NavBar, WelcomeCard} from "../ui-components";
import {AppTileCollectionForUser, TaskCardCollectionForAppUser} from "./index";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDataStoreBinding} from "@aws-amplify/ui-react/internal";
import {App} from "../models"
import * as React from "react";
import {API} from "aws-amplify";
import {MagicCodeInputProps} from "../ui-components/MagicCodeInput";

export function AppPage(props) {
    const { route } = useAuthenticator((context) => [context.route]);
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    let params = useParams();
    const [currentApp, setCurrentApp] = useState();
    const appsDataStore = useDataStoreBinding({
        type: "collection",
        model: App,
    }).items;



    useEffect(() => {
        async function getAppDetails() {
            const _app = appsDataStore.find((item) => item.id === params.appID);
            setCurrentApp(_app);
        }
        getAppDetails();
    },[appsDataStore]);



    function checkMagicCode()
    {

        console.log("clicked")
        if(document.getElementById('amplify-id-:r2:') === null){
            return
        }
        if(document.getElementById('amplify-id-:r2:').value === '')
        {
            return;
        }
        let code = document.getElementById('amplify-id-:r2:').value.toString()

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
        const response = await checkMagicCode();
        console.log(response.status)
        console.log(response.data)

        if(response.status === '400'){
            console.log(response.data)


        }
    }


    return (
        <div className="centered-div">
            <main>
                {/* <NavBar userID={user.attributes.email.toString().toLowerCase()} signOut={signOut}/> */}
                <NavBar /*signOut={signOut}*/ />
                <Flex direction="column">
                    <Divider orientation="horizontal" size="large" />
                </Flex>
                <CurrentApp app={currentApp} onClick={() => checkMagicCodeResponse()}/>

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
    );
}







