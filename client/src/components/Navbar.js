import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
      <div className="wrapper">
        <div className="d-flex flex-column sim">
          <span>1 item added to your quote</span>
          <small className="text-primary">View your quote</small>
        </div>
      </div>
      <div className="container-fluid all-show">
        <Link to="/" className="navbar-brand">
          MoviT <i className="fa fa-codepen"></i>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0 justify-content-end">
            <li className="nav-item">
              <Link to="/home" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                 About us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/SignUp" className="nav-link">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                 Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
