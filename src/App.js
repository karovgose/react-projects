import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Counter from "./Counter";
import PostList from "./PostList";
import ToDo from "./ToDo";
import "./App.css";
import Form from "./Form";
import CurrencyConverter from "./CurrencyConvertor";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div>
        <Form onLogin={setIsLoggedIn} />

        <Routes>
          {isLoggedIn ? (
            <Route path="/" element={<Counter />} />
          ) : (
            <Route
              path="/"
              element={<div className="not-logged-in-text">Not Logged In</div>}
            />
          )}
          <Route path="/Todo" element={<ToDo />} />
          <Route path="/PostList" element={<PostList />} />
          <Route path="/CurrencyConverter" element={<CurrencyConverter />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
