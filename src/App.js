import { Amplify } from 'aws-amplify';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';
import NavBar from './ui-components/NavBar';
import { MagicCode, TaskCard1Collection } from './ui-components';
Amplify.configure(awsExports);

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
    >
      {/* <div style={{ background: "red" }}>content */}
      <Authenticator>
      {({ signOut, user }) => (
        <main>
          <NavBar userID={user.username} signOut={signOut}/>
          <MagicCode />
          <TaskCard1Collection />
          {/* <h1>Hello {user.username}</h1> */}
          {/* <button onClick={signOut}>Sign out</button> */}
        </main>
      )}
    </Authenticator>
      {/* </div> */}

    </div>
  );
}

//export default App;
