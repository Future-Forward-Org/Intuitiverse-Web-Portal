import {useAuthenticator, Text, Flex, Divider} from '@aws-amplify/ui-react';
import {CurrentApp, MagicCodeInput, NavBar, WelcomeCard} from "../ui-components";
import {AppTileCollectionForUser, TaskCardCollectionForAppUser} from "./index";
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDataStoreBinding} from "@aws-amplify/ui-react/internal";
import {App} from "../models"
import * as React from "react";
import {API} from "aws-amplify";

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
                "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
                "accept-encoding": "gzip, deflate, br",
                "accept-language": "en-US,en;q=0.5",
         //       "cookie": "AWSALBAuthNonce=nHkWBqgzAIa84sy7; ",
          //      "host": "auth.xrplatform.org",
          //      "referer": "https://auth.xrplatform.org/device",
         //       "sec-fetch-dest": "document",
        //        "sec-fetch-mode": "navigate",
          //      "sec-fetch-site": "same-origin",
                "sec-fetch-user": "?1",
                "te": "trailers",
       //         "upgrade-insecure-requests": "1",
        //        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/113.0",
              //  "x-amzn-oidc-accesstoken": "eyJraWQiOiI5TUFcL3NtNG9leDRQeUt2RFJzRHQ3VjY0XC9CVjZYaGs5TFwvWVlWeVlFQlkwPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiIyNTZmNzZhOC0yZDE1LTRmMTQtYWRkZS1kZDRhZTAyYmJhNzEiLCJpc3MiOiJodHRwczpcL1wvY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb21cL3VzLWVhc3QtMl9ueHhaSTVKMGciLCJ2ZXJzaW9uIjoyLCJjbGllbnRfaWQiOiJpNzBsZHE0dWhqYTV0aDcxdm9pczRxdHFxIiwib3JpZ2luX2p0aSI6IjJiMDRmNGNmLTRiNTUtNGJjZC1hNTFmLWE2NDBlNWJiM2VkYyIsImV2ZW50X2lkIjoiZGQ0NWM2ODYtNmU1My00YmI2LWJmOTEtN2E2NjY2Mzk4MDUxIiwidG9rZW5fdXNlIjoiYWNjZXNzIiwic2NvcGUiOiJvcGVuaWQiLCJhdXRoX3RpbWUiOjE2ODUwNDIwMjAsImV4cCI6MTY4NTA0NTYyMCwiaWF0IjoxNjg1MDQyMDIxLCJqdGkiOiJkNjJiOTE0NC1mNzRjLTQ5NzItYThmZi0xYTE2OGZjNzI2YTciLCJ1c2VybmFtZSI6IjI1NmY3NmE4LTJkMTUtNGYxNC1hZGRlLWRkNGFlMDJiYmE3MSJ9.TYjgv32hQjTzQKHSWJaagc7G95o9NLJRrxBRPtnNxH2HBenVVwB7JxLOYRE9ucOF7HekjUVh7OGQ1jXIoGu0DWdxI_GFCmqO5yOY63OWq5mVVriiDnrpn36XU7jniS2tHwWN7cZp-HFwCyJvBK0v67NycwuVDm6VGfqBioaOfs9hDc4wWyKHfLIH8UUKQfEWC8T1FZHCphY-3LfKK7XYHAmRcJVJsGLFpGyuRxX_y_jLjAC4D-2aL4Kre714Il-S8JC0R1ciQGrOSZERdQzYgJexhqTLAXArnEMJrebW1TBZIyDRZzm_cLeLxdc8AlLMa6Uyrqey7qqd6D3xt6S-kA",
            //    "x-amzn-oidc-data": "eyJ0eXAiOiJKV1QiLCJraWQiOiJjOTIwMDkzNS0yNDdhLTQ1YjYtOGNiYS1lNDMxMmVjNTQyMzgiLCJhbGciOiJFUzI1NiIsImlzcyI6Imh0dHBzOi8vY29nbml0by1pZHAudXMtZWFzdC0yLmFtYXpvbmF3cy5jb20vdXMtZWFzdC0yX254eFpJNUowZyIsImNsaWVudCI6Imk3MGxkcTR1aGphNXRoNzF2b2lzNHF0cXEiLCJzaWduZXIiOiJhcm46YXdzOmVsYXN0aWNsb2FkYmFsYW5jaW5nOnVzLWVhc3QtMjo3Nzc1NTM0MTM0Mjg6bG9hZGJhbGFuY2VyL2FwcC9kZXYtRGV2aWNlR3JhbnRBTEItdGVycmFmb3JtLzM0YWViMmE2ZDFjOGI5NzEiLCJleHAiOjE2ODUwNDIxNDZ9.eyJzdWIiOiIyNTZmNzZhOC0yZDE1LTRmMTQtYWRkZS1kZDRhZTAyYmJhNzEiLCJlbWFpbF92ZXJpZmllZCI6InRydWUiLCJlbWFpbCI6ImpvZS5uYXRlbEBnbWFpbC5jb20iLCJ1c2VybmFtZSI6IjI1NmY3NmE4LTJkMTUtNGYxNC1hZGRlLWRkNGFlMDJiYmE3MSIsImV4cCI6MTY4NTA0MjE0NiwiaXNzIjoiaHR0cHM6Ly9jb2duaXRvLWlkcC51cy1lYXN0LTIuYW1hem9uYXdzLmNvbS91cy1lYXN0LTJfbnh4Wkk1SjBnIn0=.9bnVg7EzBg7CmqSwyqJC93Z53jqFQ7TV7nPNdQXuDbn9MRPL8Dz3rq79RYowgD1KsIz9hmMQwQrP5Dl7BhsvSw==",
        //        "x-amzn-oidc-identity": "256f76a8-2d15-4f14-adde-dd4ae02bba71",
        //        "x-amzn-trace-id": "Root=1-646fb36a-129b69da04f6b5404c4d97e0",
            //    "x-forwarded-for": "204.27.197.11",
           //     "x-forwarded-port": "443",
         //       "x-forwarded-proto": "https",
        //        "x-mwg-via": "564DC781-B909-E0F9-70E3-80209C594175"
            },
            response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
            queryStringParameters: {
                authorize: 'true',
                code: code
            }
        }

        API.get(apiName, path, myInit);
    }
    /*
    (async function() {
        const response = await checkMagicCode();
    })();
*/

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
                </Flex>
                <MagicCodeInput onClick={() => checkMagicCode()}/>
                <CurrentApp app={currentApp}/>
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







