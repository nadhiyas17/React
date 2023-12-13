import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse ,faAddressCard,faUser,faWrench} from '@fortawesome/free-solid-svg-icons';

function Allpages() {
  return (
    <div>
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid nav">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <NavLink to="/" className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faHouse} />Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faAddressCard} />About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/services" className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faWrench} />Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faUser} />Contact Us</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link active" aria-current="page" href="#"><FontAwesomeIcon icon={faUser} />Cart<sup>0</sup></NavLink>
        </li>
        
        
       
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn search" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Allpages
