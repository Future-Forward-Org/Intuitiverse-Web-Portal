//App.js
import {Authenticator, Heading} from '@aws-amplify/ui-react';
import { RequireAuth } from './components/RequireAuth';
import { Login } from './components/Login';
import { AppPage } from './custom-ui-components/AppPage';
import { ProtectedSecond } from './custom-ui-components/Protected2';
import { Home } from './custom-ui-components/Home';
import { Layout } from './custom-ui-components/Layout';
import Modal from "./components/modal";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import {SyncDataStore} from "./SyncDataStore";
import {Backdrop, CircularProgress} from "@mui/material";
import {makeStyles} from "@mui/styles";
import * as React from "react";

const useStyles = makeStyles((theme) => ({
    backdrop: {

        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                {/*<Route path="/" element={<Layout />}>*/}
                    <Route
                        path="/"
                        element={
                            <RequireAuth>
                                <Home />
                            </RequireAuth>
                        }
                    />
                    {/*<Route index element={<Home />} />*/}
                    <Route
                        path="/app/:appID/:userID"
                        element={
                            <RequireAuth>
                                <AppPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path="/protected2"
                        element={
                            <RequireAuth>
                                <ProtectedSecond />
                            </RequireAuth>
                        }
                    />
                    <Route path="/login" element={<Login />} />
                {/*</Route>*/}
            </Routes>
        </BrowserRouter>
    );
}

function App() {
     const isDataStoreReady = SyncDataStore();



     const classes = useStyles();
    // // console.log (`Data Store Ready? ${isDataStoreReady}`);
     if ( !isDataStoreReady) {
         return (
             <div>
                 {<Heading level={2} textAlign={"center"}>Page is Loading...</Heading>}
                 <Backdrop
                     className={classes.backdrop}
                     open={true}
                 >
                     <CircularProgress color="inherit" />
                 </Backdrop>
             </div>

         )
     }
    // console.log (`Data Store Ready? ${isDataStoreReady}`);
    return (
        <Authenticator.Provider>
            <MyRoutes />
        </Authenticator.Provider>
    );
}
export default App;