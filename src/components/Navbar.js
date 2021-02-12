import React from "react";
import {Link} from 'react-router-dom';

function Navbar() {
  return (
    

<nav className="navbar navbar-expand navbar-dark bg-dark">
  <div className="container-fluid">
    
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">Početna</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/adduser">Dodaj korisnika</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">O aplikaciji</Link>
        </li>

        
      </ul>
    
  </div>
</nav>


  );
}

export default Navbar;
