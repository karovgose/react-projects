import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={`navigation ${isNavOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleNav}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </button>
      <ul className={`navigation-list ${isNavOpen ? "open" : ""}`}>
        <li className="navigation-item">
          <Link to="/Counter" className="navigation-link" onClick={closeNav}>
            Counter
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/Todo" className="navigation-link" onClick={closeNav}>
            To Do List
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/PostList" className="navigation-link" onClick={closeNav}>
            Post List
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            to="/CurrencyConverter"
            className="navigation-link"
            onClick={closeNav}
          >
            Currency Converter
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
