import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';

import awsconfig from './aws-exports';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

Amplify.configure(awsconfig);


Amplify.configure({

    // Add in our new API, "name" can be whatever we want
    API: {
        endpoints: [
            {
                name: "WebPortalApi",
                endpoint:
                    "https://btmm7m9vc2.execute-api.us-west-2.amazonaws.com/dev",
            },
        ],
    },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={studioTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
