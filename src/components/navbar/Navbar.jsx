import './Navbar.css';
import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-container">
        
            <div className="logo">
                <a href="#hero"><h1>Stefanescu.dev</h1></a>
            </div>
            <div className="nav-links">
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Projects</h3>
                <h3>Contact</h3>
            </div>
            <div className="menu none">
                <h3>Home</h3>
                <h3>About</h3>
                <h3>Projects</h3>
                <h3>Contact</h3>
            </div>
        
    </nav>
  );
}

export default Navbar;