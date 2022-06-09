import React from 'react'
import './Header.css';
import 'bootstrap/dist/css/bootstrap.css';

export const Header = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">A nav bar</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
      {/* // <nav className = 'navbar navbar-expand-lg navbar-light bg-light'>
      //     <span>
      //       <img */}
      {/* //         id="logo"
      //         src="https://valinguahouse.com/wp-content/uploads/2020/08/cropped-Original-1-300x187.png"
      //         alt="logo"
      //         height="100px"
      //       />
      //     </span> */}
      {/* //     <span>
      //       <ul className="navbar navbar-expand-lg navbar-light bg-light">
      //         <li><a href="./Homepage.html">Home</a></li>
      //         <li><a href="./about.html">About</a></li>
      //         <li><a href="./contact.html">Contact</a></li>
      //         <li><a href="./portfolio.html">Portfolio</a></li>
      //       </ul>
      //     </span>
      //   </nav> */}
      </div>
  )
}



