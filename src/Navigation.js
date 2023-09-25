import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li className="navigation-item">
          <Link to="/Counter" className="navigation-link">
            Counter
          </Link>
        </li>
        <li className="navigation-item">
          <Link to="/Todo" className="navigation-link">
            To Do List
          </Link>
        </li>

        <li className="navigation-item">
          <Link to="/PostList" className="navigation-link">
            Post List
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
