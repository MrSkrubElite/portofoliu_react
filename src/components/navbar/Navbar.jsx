import './Navbar.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCoffee, faMapLocation, faEnvelopeOpenText, faBars } from '@fortawesome/free-solid-svg-icons' 

const Navbar = () => {
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
            <div className="menu" onClick={menuBtn}>
              <FontAwesomeIcon icon={faBars} />
            </div>
    </nav>

    <div id="menu-container" className="menuoff">
        <a href="#hero" className='aList'><h3>Home</h3></a>
        <a href="#aboutme" className='aList'><h3>About</h3></a>
        <a href="#projects" className='aList'><h3>Projects</h3></a>
        <a href="#contactme" className='aList'><h3>Contact</h3></a>
      </div>
    
    </>
  );
  
 
}

let menuContainer = document.getElementById("menu-container");


let menuBtn = () => {
  console.log("sofutpemata");
  menuContainer.classList.remove("menuoff");
}
  


export default Navbar;