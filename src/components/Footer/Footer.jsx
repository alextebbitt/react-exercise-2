import React from 'react'
import './Footer.css';
export const Footer = ({objeto}) => {
    const tecnologia = objeto.tecnologias.map(elemento => {
        return (
            <div key = {elemento.id}>               
            <img className = 'logo' src={elemento.img} alt={elemento.name} />
            </div>
            )
    })
    return (          
        <div className = 'tecnologia'>{tecnologia}
        <p className = 'title'>Technologies learnt:</p>
        </div>        
      )
}
//   return (
        
//         // <img
//         //   src="https://valinguahouse.com/wp-content/uploads/2020/08/cropped-Original-1-300x187.png"
//         //   alt="logo"
//         //   height="100px"
//         // />

//         // <div class="footerr">
//         // <ul class="footerr">
//         //   <li><a href="https://github.com/alextebbitt">Github: </a></li>
//         //   <li><a href="https://www.linkedin.com/in/alex-tebbitt-78bb9a128/">Linkedin:</a></li>
//         //   <li><a href="https://www.facebook.com/tebbitt/">Facebook: </a></li>
//         //   <li><a href="*">Email: alex.tebbitt87@gmail.com</a></li>
//         // </ul>
//         // </div>
    
//     <div class = 'info'>
//       <h4>I am curretly learning how to code. In the last few weeks, I have been learning about:
//        Javascript, Express,Node.js, MongoDB, Mongoose, mySql and Sequelize. This has been made 
//        using React. </h4>
//     </div>
//   )
// }

