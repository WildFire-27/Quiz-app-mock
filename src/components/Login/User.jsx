import React, { useState } from 'react';
import { Navigate } from "react-router";
import User from '../Home/Home';
import CommonHeader from './CommonHeader';

const AdminFetch = (props) => {
    const [logedIn, setLogedIn] = useState(true)
    const token = localStorage.getItem("UserToken");

    if (token == null) {
        setLogedIn(false)
    }
    return (
        <div>
            <CommonHeader name={props.location.state.enteredEmail} />
            <User />
            <Navigate to="/" />

        </div>
    );
}

export default AdminFetch;
