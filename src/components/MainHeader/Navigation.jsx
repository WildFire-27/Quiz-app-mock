import React from 'react';



import classes from './Navigation.module.css';



const Navigation = (props) => {
  const email = localStorage.getItem("isLoggedIn");
  return (<nav className={classes.nav}>  <ul>    {props.isLoggedIn && (<li>
    {
      email === "user@gmail.com" ? <a href="/users">Users</a> : email === "admin@gmail.com" ? <a href="/admin">Admin</a> : ""}
  </li>)}

    {props.isLoggedIn && (<li>     
       <button onClick={props.onLogout}>Logout</button></li>)}  </ul></nav>

  );

};



export default Navigation;