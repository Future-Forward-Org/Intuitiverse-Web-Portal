//App.js
import { Authenticator } from '@aws-amplify/ui-react';
import { RequireAuth } from './components/RequireAuth';
import { Login } from './components/Login';
import { Protected } from './custom-ui-components/Protected';
import { ProtectedSecond } from './custom-ui-components/Protected2';
import { Home } from './custom-ui-components/Home';
import { Layout } from './custom-ui-components/Layout';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
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
                        path="/protected"
                        element={
                            <RequireAuth>
                                <Protected />
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
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

function App() {
    return (
        <Authenticator.Provider>
            <MyRoutes />
        </Authenticator.Provider>
    );
}

export default App;