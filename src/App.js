import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Amplify, DataStore } from "aws-amplify";
import { Authenticator, Text, Divider, Flex } from "@aws-amplify/ui-react";
import { NavBar, WelcomeCard, AppTileCollection, TaskCardCollection} from "./ui-components";
import { AppTileCollectionForUser } from "./custom-ui-components";
import { User } from "./models";


Amplify.configure(awsExports);

export default function App() {
  return (
    <div className="centered-div">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            {/* <NavBar userID={user.attributes.email.toString().toLowerCase()} signOut={signOut}/> */}
            <NavBar signOut={signOut} />
            <Flex direction="column">
              <Divider orientation="horizontal" size="large" />
            </Flex>
            <WelcomeCard userID={user.attributes.email} />
            <Flex direction="column" margin="8px 8px 0px 32px">
                <Divider orientation="horizontal" size="large"/>
                <Text fontSize="large" fontWeight="semibold">My Tasks</Text>
            </Flex>
            <AppTileCollectionForUser userID="6fb136d0-1a49-4da5-b2d2-de511a6ed29b" type="list" wrap="wrap"/>
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
        )}
      </Authenticator>
    </div>
  );
}

//export default App;
