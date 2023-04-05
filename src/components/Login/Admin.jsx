import React, { useState } from 'react';
import { Navigate } from "react-router";
import Admin from '../Home/Home';
import CommonHeader from './CommonHeader';

const AdminFetch = (props) => {
    const [logedIn, setLogedIn] = useState(true)
    const token = localStorage.getItem("AdminToken");


    if (token == null) {
        setLogedIn(false)
    }


    return (

    

        <div>
            <CommonHeader name={props.location.state.enteredEmail} />
            <Admin />
            <Navigate to="/" />
        </div>
    );
}

export default AdminFetch;
