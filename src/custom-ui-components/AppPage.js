import {useAuthenticator, Text, Flex, Divider} from '@aws-amplify/ui-react';
import {CurrentApp, MagicCodeInput, NavBar, WelcomeCard} from "../ui-components";
import {AppTileCollectionForUser, TaskCardCollectionForAppUser} from "./index";
import {json, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDataStoreBinding} from "@aws-amplify/ui-react/internal";
import {MagicCode, App} from "../models"
import * as React from "react";
import {API} from "aws-amplify";
import {MagicCodeInputProps} from "../ui-components/MagicCodeInput";
import {render} from "@testing-library/react";

export function AppPage(props) {
    const { route } = useAuthenticator((context) => [context.route]);
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    let params = useParams();

    //const errorMessage = React.useState()
    let errorMessage = "";

    const [currentApp, setCurrentApp] = useState();
    const [currentMagicCode, setMagicCode] = useState();
    const appsDataStore = useDataStoreBinding({
        type: "collection",
        model: App,
    }).items;
    const codeDataStore = useDataStoreBinding({
        type: "collection",
        model: MagicCode,
    }).items;



    useEffect(() => {
        async function getAppDetails() {
            const _app = appsDataStore.find((item) => item.id === params.appID);
            setCurrentApp(_app);
            const _magicCode = codeDataStore.find((item) => item.id === currentApp.appMagicCodeId);
            setMagicCode(_magicCode);
            //console.log(_magicCode.toString());
        }
        getAppDetails();
    },[appsDataStore]);

    //console.log(currentApp.toString());



    function checkMagicCode()
    {

        console.log("clicked")
        if(document.getElementById('codeInputField') === null){
            return
        }
        if(document.getElementById('codeInputField').value === '')
        {
            return;
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
        let response = await checkMagicCode();
        console.log(response.status);
        console.log(response.data.error);
        errorMessage = response.data.error
        console.log(errorMessage);

        if(response.status === '400')
        {
            console.log(response.data);
        }

        alert(`Home with id: ${errorMessage} clicked!`)
    }

    function profileShow() {

        console.log('fdsfa');

    }





    return (
        <div className="centered-div">
            <main>
                {/* <NavBar userID={user.attributes.email.toString().toLowerCase()} signOut={signOut}/> */}
                <NavBar ProfileButton={() => profileShow()} /*signOut={signOut}*/ />
                <Flex direction="column">
                    <Divider orientation="horizontal" size="large" />
                </Flex>

                <Flex direction="row" margin="8px 8px 8px 8px">
                <CurrentApp app={currentApp} /* onClick={() => checkMagicCodeResponse()}*/  rightSide={
                    /* Pass your content into the component slot */
                    <div>
                        <MagicCodeInput ErrorMessage={errorMessage} magicCode={currentMagicCode} MagicCodeAuth={() => checkMagicCodeResponse()} />
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
    );
}







