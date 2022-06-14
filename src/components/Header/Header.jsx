import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div class="topnav">
      <div className="alex">
        <h2> Alex Tebbitt </h2>
      </div>
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
