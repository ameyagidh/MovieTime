import React from 'react';
import { GoogleLogout } from 'react-google-login';
import { googleLogout } from '@react-oauth/google';
import {Button} from 'react-bootstrap';

const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

export default function Logout ({ setUser }) {
    const onSuccess = () =>{
        googleLogout();
        setUser(null) ;
        console.log ('Logout made successfully ');
    };
return (
    <div>
       <Button variant="danger" onClick={onSuccess}>Logout</Button>
</div>
);
}