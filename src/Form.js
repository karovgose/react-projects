import React, { useState } from "react";
import "./Form.css";
import Navigation from "./Navigation";

const users = [
  { id: 1, username: "goshe", password: "123", name: "Goshe" },
  { id: 2, username: "bobi", password: "abc", name: "Boban" },
  { id: 3, username: "ace", password: "456", name: "Alexander" },
  { id: 4, username: "martin", password: "789", name: "Martin" },
];

function Form({ onLogin }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const user = users.find(
      (user) => user.username === userName && user.password === password
    );

    if (user) {
      setLoggedInUser(user);
      onLogin(true);
    } else {
      alert("Invalid credentials. Try again!");
      setUserName("");
      setPassword("");
    }
  };

  const handleLogOut = () => {
    setLoggedInUser(null);
    setUserName("");
    setPassword("");
    onLogin(false);
  };

  return (
    <>
      <div className="welcome-container">
        <h1 className="welcome-message">
          {loggedInUser
            ? `Welcome, ${loggedInUser.name}! You are logged in.`
            : "Welcome to My React Project"}
        </h1>
        {!loggedInUser && (
          <p className="subtext">
            Please sign in to access the full experience.
          </p>
        )}
      </div>
      <div className={loggedInUser ? "" : "form-container"}>
        {loggedInUser ? (
          <div className="nav-wraper">
            <Navigation />
            <div className="log-in-message">
              <>{loggedInUser.name}</>
              <button
                className="form-button"
                type="submit"
                onClick={handleLogOut}
              >
                Log out
              </button>
            </div>
          </div>
        ) : (
          <div className="form-wrapper">
            <form className="form" onSubmit={handleLogin}>
              <label htmlFor="user-name" className="form-label">
                User Name:
              </label>
              <input
                id="user-name"
                className="form-input"
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <label htmlFor="password" className="form-label">
                Password:
              </label>
              <input
                id="password"
                className="form-input"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="form-button" type="submit">
                Log in
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
}

export default Form;
