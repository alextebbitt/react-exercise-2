import React from "react";
import "./Home.css";

export const Home = ({ photo, objeto }) => {
  
  console.log(photo);
  return (
    <div className="main-container">
      <h3 className="h11"> Hello, my name is {objeto.info.name}  and I am {objeto.info.age} years old. I currently reside in {objeto.info.city}. I am currently undergoing a career change to be a full stack developer. I am enjoying this process and I'm looking forward to getting my first job in my new profession.</h3>
      <img className="image" id="logo" src={photo} alt="logo" height="300px" />
    </div>
  );
};


