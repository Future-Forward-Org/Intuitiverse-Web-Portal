import './App.css';
import '@aws-amplify/ui-react/styles.css';
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { NavBar, WelcomeCard, TaskCard1Collection, TaskCardsNotStarted } from './ui-components';
import { Divider, Text, Flex} from "@aws-amplify/ui-react";

Amplify.configure(awsExports);

export default function App() {
  return (
    <div className="centered-div">
      <Authenticator>
      {({ signOut, user }) => (
        <main>
          <NavBar userID={user.username} signOut={signOut}/>
          <Flex direction="column">
            <Divider orientation="horizontal" size="large"/>
          </Flex>
          <WelcomeCard userID={user.username}/>
          <Flex direction="column">
          <Text>In Progress</Text>
            <Divider orientation="horizontal" size="large"/>
          </Flex>
          <TaskCard1Collection />
          <Flex direction="column">
            <Text>Not Started</Text>
            <Divider orientation="horizontal" size="large"/>
          </Flex>
          <TaskCardsNotStarted />
          {/* <h1>Hello {user.username}</h1> */}
          {/* <button onClick={signOut}>Sign out</button> */}
        </main>
      )}
    </Authenticator>
    </div>
  );
}

//export default App;
