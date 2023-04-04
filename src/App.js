import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import awsExports from "./aws-exports";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
import {
  NavBar,
  WelcomeCard,
  AppTileCollection,
  AppTileCollectionForUser,
  TaskCardCollection,
} from "./ui-components";
import { Divider, Flex } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
import { User } from "./models/index.js";

Amplify.configure(awsExports);

async function getUsers() {
  try {
    const users = await DataStore.query(User);
    console.log(
      "Users retrieved successfully!",
      JSON.stringify(users, null, 2)
    );
  } catch (error) {
    console.log("Error retrieving users", error);
  }
}

export default function App() {
  return (
    <div className="centered-div">
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            {/* <NavBar userID={user.attributes.email.toString().toLowerCase()} signOut={signOut}/> */}
            <NavBar width={"90vw"} signOut={signOut} />
            <Flex direction="column">
              <Divider orientation="horizontal" size="large" />
            </Flex>
            <WelcomeCard width={"90vw"} userID={user.attributes.email} />
            {/* <Flex direction="column">
           <Text>In Progress</Text>
            <Divider orientation="horizontal" size="large"/>
          </Flex> */}
            {/* <AppTileCollectionForUser userID="6fb136d0-1a49-4da5-b2d2-de511a6ed29b" type="list" wrap="wrap"/> */}
            <AppTileCollection type="list" wrap="wrap"  />
            {/* <TaskCardCollection type="list" wrap="wrap" /> */}
            {/* <Flex direction="column">
            <Text>Not Started</Text>
            <Divider orientation="horizontal" size="large"/>
          </Flex> */}
            {/* <TaskCardsNotStarted /> */}
            {/* <h1>Hello {user.username}</h1> */}
            {/* <button onClick={signOut}>Sign out</button> */}
            <input type="button" value="QUERY rating > 4" onClick={getUsers} />
          </main>
        )}
      </Authenticator>
    </div>
  );
}

//export default App;
