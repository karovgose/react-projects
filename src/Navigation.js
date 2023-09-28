import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the icons
import "./Navigation.css";

function Navigation() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <nav className={`navigation ${isNavOpen ? "open" : ""}`}>
      <button className="toggle-button" onClick={toggleNav}>
        {isNavOpen ? (
          <FaTimes className="icon-close" />
        ) : (
          <FaBars className="icon-open" />
        )}
      </button>
      <ul className={`navigation-list ${isNavOpen ? "open" : ""}`}>
        <li className="navigation-item">
          <Link
            to="/Counter"
            className="navigation-link"
            onClick={handleNavLinkClick}
          >
            Counter
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            to="/Todo"
            className="navigation-link"
            onClick={handleNavLinkClick}
          >
            To Do List
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            to="/PostList"
            className="navigation-link"
            onClick={handleNavLinkClick}
          >
            Post List
          </Link>
        </li>
        <li className="navigation-item">
          <Link
            to="/CurrencyConverter"
            className="navigation-link"
            onClick={handleNavLinkClick}
          >
            Currency Converter
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
