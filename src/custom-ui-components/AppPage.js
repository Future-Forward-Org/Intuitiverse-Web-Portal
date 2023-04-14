import {useAuthenticator, Text, Flex, Divider} from '@aws-amplify/ui-react';
import {NavBar, WelcomeCard} from "../ui-components";
import {AppTileCollectionForUser, TaskCardCollectionForAppUser} from "./index";
import {useParams} from "react-router-dom";

export function AppPage(props) {
    const { route } = useAuthenticator((context) => [context.route]);
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    let params = useParams();
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
                    <Text fontSize="large" fontWeight="semibold">My Tasks</Text>
                </Flex>

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