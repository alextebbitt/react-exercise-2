import React from 'react'
import './Home.css';

export const Home = ({photo}) => {
  console.log(photo)
  return (
      <div>
<div> <h1> Hello, my name is Alex Tebbitt. </h1></div>
     
     <div class ='image'>
       <img
               id="logo"
              src={photo}
              alt="logo"
              height="300px"
             /></div>
             </div>
  )
}





