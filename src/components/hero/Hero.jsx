// import logo from './logo.svg';
import './Hero.css';
import wavehand from "../../components/imgs/hand-wave.png";
import pfp from "../../components/imgs/pfp.jpeg";
import React from 'react';
import html5 from "../../components/imgs/html5.png";
import css3 from "../../components/imgs/css3.png";
import reacticon from "../../components/imgs/reacticon.png";
import js from "../../components/imgs/js.png";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section id="hero">
        <div className="hero-container">
            <div className="hero1">
                <div className="info">
                    <h1>Front-End React Developer <img src={wavehand} alt="wavehand"/></h1>
                    <p>Hi, I'm Alex Stefanescu. A passionate Front-end React Developer based in Constanta, Romania. 📍</p>
                    <div className="icons-container">
                        <FontAwesomeIcon icon={faLinkedin} className="icon"/>
                        <FontAwesomeIcon icon={faGithub} className="icon"/>
                    </div>
                </div>
                <div className="photo">
                    <img src={pfp} alt="profilePicture" />
                </div>
                

            </div>
            
            <div className="hero2">
                <div className="hero2-icons">
                    <h3>Tech Stack |</h3>
                    <img src={html5} alt="html5" />
                    <img src={css3} alt="css3" />
                    <img src={js} alt="js" />
                    <img src={reacticon} alt="reacticon" />
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;