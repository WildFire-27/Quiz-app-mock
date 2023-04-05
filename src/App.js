import { useEffect, useState } from "react";
import "./index.css";
import MainHeader from "./components/MainHeader/MainHeader";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInUserStatus = localStorage.getItem("isLoggedIn");
    console.log(loggedInUserStatus)
    if (loggedInUserStatus === "admin@gmail.com" || loggedInUserStatus === "user@gmail.com") {
      setIsLoggedIn(true);
    }
  });
  const users = [
    {
      Email: "admin@gmail.com",
      password: "admin1234"

    },
    {
      Email: "user@gmail.com",
      password: "user1234"

    }
  ]
  const loginHandler = (email, password) => {
    localStorage.setItem("isLoggedIn", email);
    setIsLoggedIn(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };
  const loggedInUser = localStorage.getItem("isLoggedIn");
  return (
    <div className="App">
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>

        {/* {!isLoggedIn  && <Login onLogin={loginHandler} />} */}
        {loggedInUser === "admin@gmail.com" ? <Home onLogout={logoutHandler} /> : loggedInUser === "user@gmail.com" ? <Home onLogout={logoutHandler} /> : <Login onLogin={loginHandler} />}
        {/* {isLoggedIn == "user@gmail.com" && <Home onLogout={logoutHandler} />} */}
      </main>
    </div>
  );
}

export default App;
