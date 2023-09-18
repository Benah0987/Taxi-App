import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
      <div className="wrapper"></div>
      <div className="container-fluid all-show">
        <Link to="/" className="navbar-brand">
          Movit <i className="fa fa-codepen"></i>
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
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/about" className="nav-link active" aria-current="page">
                About us
              </Link>
            </li>
          </ul>
          <div className="d-flex flex-column sim">
            <span style={{ color: 'black', fontSize: '20px', fontWeight: 'bold', fontFamily: 'cursive', marginBottom: '10px' }}>Discover Excitement!</span>
            <small className="text-primary">View your quote</small>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
