import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ darkMode, handleMode, toggleSidebar }) => {
  return (
    <>
      <div className="container">
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark-custom navbar-dark' : 'bg-light-custom navbar-light'}`}>
          <div className="container-fluid">
            {/* Brand Name with Link to Home */}
            <Link className="navbar-brand" to="/home">Hop-E-DON</Link>
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* Login Link */}
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">Log-In</Link>
                </li>
                {/* About Link */}
                <li className="nav-item">
                  <Link className="nav-link" to="/about">EDON-Details</Link>
                </li>
                {/* Products Link */}
                <li className="nav-item">
                  <Link className="nav-link" to="/products">EDON-Lounge</Link>
                </li>
              </ul>

              {/* Search Form */}
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>

              {/* Dark Mode Toggle */}
              <div className="form-check form-switch mx-3 d-flex align-items-center">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  checked={darkMode}
                  onChange={handleMode}
                />
                <label
                  className="form-check-label ms-2"
                  htmlFor="flexSwitchCheckDefault"
                  style={{
                    color: darkMode ? 'white' : 'black',
                    marginBottom: '0',
                  }}
                >
                  {darkMode ? 'Dark Mode' : 'Light Mode'}
                </label>
              </div>

              {/* Button to Open Sidebar */}
              <div className="d-flex">
                <button onClick={toggleSidebar} className="btn btn-outline-dark">
                  ☰ Slide-It
                </button>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
