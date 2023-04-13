// components/Home.js
import {Divider, Flex, Text, useAuthenticator} from '@aws-amplify/ui-react';
import {NavBar, WelcomeCard} from "../ui-components";
import {AppTileCollectionForUser, TaskCardCollectionForAppUser} from "./index";
export function Home() {
    const { route } = useAuthenticator((context) => [context.route]);
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    return (
        <div className="centered-div">
            <main>
                {/* <NavBar userID={user.attributes.email.toString().toLowerCase()} signOut={signOut}/> */}
                <NavBar signOut={signOut} />
                <Flex direction="column">
                    <Divider orientation="horizontal" size="large" />
                </Flex>
                <WelcomeCard userID={user.username} />
                <Flex direction="column" margin="8px 8px 0px 32px">
                    <Divider orientation="horizontal" size="large"/>
                    <Text fontSize="large" fontWeight="semibold">My Apps</Text>
                </Flex>
                <AppTileCollectionForUser userID="6fb136d0-1a49-4da5-b2d2-de511a6ed29b" type="list" wrap="wrap"/>

                {/*<Flex direction="column" margin="8px 8px 0px 32px">*/}
                {/*    <Divider orientation="horizontal" size="large"/>*/}
                {/*    <Text fontSize="large" fontWeight="semibold">My Tasks</Text>*/}
                {/*</Flex>*/}

                {/*<TaskCardCollectionForAppUser*/}
                {/*    userID="6fb136d0-1a49-4da5-b2d2-de511a6ed29b"*/}
                {/*    appID="f8a07578-dc37-4351-b4d3-94525a7fb32d"*/}
                {/*    type="list"*/}
                {/*    wrap="wrap"*/}
                {/*/>*/}
                {/*<AppTileCollection type="list" wrap="wrap"  />*/}
                {/* <TaskCardCollection type="list" wrap="wrap" /> */}
                {/* <Flex direction="column">
            <Text>Not Started</Text>
            <Divider orientation="horizontal" size="large"/>
          </Flex> */}
                {/* <TaskCardsNotStarted /> */}
                {/* <h1>Hello {user.username}</h1> */}
                {/* <button onClick={signOut}>Sign out</button> */}
            </main>
        </div>
    );
}