import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div class="topnav">
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/contact">Contact</Link>
        </span>
      </div>
    </div>
  );
};
