// components/Layout.js
import React from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import {useAuthenticator, Button, Heading, View} from '@aws-amplify/ui-react';
import {NavBar} from "../ui-components";

export function Layout() {
    const {route, signOut} = useAuthenticator((context) => [
        context.route,
        context.signOut,
    ]);
    const navigate = useNavigate();

    function logOut() {
        signOut();
        navigate('/login');
    }

    return (
        <>
            <nav>
                {/*<NavBar />*/}
                {/*<Button onClick={() => navigate('/')}>Home</Button>*/}
                {/*<Button onClick={() => navigate('/protected')}>*/}
                {/*    First Protected Route*/}
                {/*</Button>*/}
                {/*<Button onClick={() => navigate('/protected2')}>*/}
                {/*    Second Protected Route*/}
                {/*</Button>*/}
                {/*{route !== 'authenticated' ? (*/}
                {/*    <Button onClick={() => navigate('/login')}>Login</Button>*/}
                {/*) : (*/}
                {/*    <Button onClick={() => logOut()}>Logout</Button>*/}
                {/*)}*/}
            </nav>
            {/*<Heading level={2} textAlign={"center"}>Welcome to User Portal</Heading>*/}
            {/*<View textAlign={"center"}>*/}
            {/*    {route === 'authenticated' ? 'You are logged in!' : 'Please Login!'}*/}
            {/*</View>*/}

            <Outlet/>
        </>
    );
}