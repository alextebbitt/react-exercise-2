import React from "react";
import "./Home.css";

export const Home = ({ photo }) => {
  console.log(photo);
  return (
    <div className="main-container">
      <h1 className="h11"> Hello, my name is Alex Tebbitt. </h1>
      <img className="image" id="logo" src={photo} alt="logo" height="300px" />
    </div>
  );
};
