import './Navbar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faMapLocation, faEnvelopeOpenText, faBars } from '@fortawesome/free-solid-svg-icons' 


const Navbar = () => {

  const [isActive, setActive] = useState("false");
  
  const handleToggle = () => {
    setActive(!isActive);
  };
  

  return (
    <>
    <nav className="nav-container">
        
            <div className="logo">
                <a href="#hero"><h1>Stefanescu.dev</h1></a>
            </div>
            <div className="nav-links">
                <a href="#hero"><h3>Home</h3></a>
                <a href="#aboutme"><h3>About</h3></a>
                <a href="#projects"><h3>Projects</h3></a>
                <a href="#contactme"><h3>Contact</h3></a>
            </div>
            <div className="menu" onClick={handleToggle}>
              <FontAwesomeIcon icon={faBars} />
            </div>
    </nav>

    <div className={`menu-container ${isActive ? "menuoff" : ""}`}>

        <a href="#hero" className='aList' onClick={handleToggle}><h3>Home</h3></a>
        <a href="#aboutme" className='aList' onClick={handleToggle}><h3>About</h3></a>
        <a href="#projects" className='aList' onClick={handleToggle}><h3>Projects</h3></a>
        <a href="#contactme" className='aList' onClick={handleToggle}><h3>Contact</h3></a>
      </div>
    
    </>
  );
  
 
}


export default Navbar;