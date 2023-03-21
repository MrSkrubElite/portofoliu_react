// import logo from './logo.svg';
import './Footer.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faMapLocation, faEnvelopeOpenText, } from '@fortawesome/free-solid-svg-icons'
import carrental from "../../components/imgs/carrentalproject.png"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer>
        <div className="footer-container">
            <h3>Copyright © 2023. All rights are reserved</h3>
            <div className='footer-links'>

              <a href="https://www.linkedin.com/in/stefanescu99/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>

              <a href="https://github.com/MrSkrubElite" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon"/></a>

            </div>
            
        </div>
    </footer>
  );
}

export default Footer;