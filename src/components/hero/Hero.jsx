// import logo from './logo.svg';
import './Hero.css';
import wavehand from "../../components/imgs/hand-wave.png";
import pfp from "../../components/imgs/pfp.jpeg";
import React from 'react';
import html5 from "../../components/imgs/html5.png";
import css3 from "../../components/imgs/css3.png";
import reacticon from "../../components/imgs/reacticon.png";
import js from "../../components/imgs/js.png";
import tailwind from "../../components/imgs/tailwind.png";
import scss from "../../components/imgs/scss.png";


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

                        <a href="https://www.linkedin.com/in/stefanescu99/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="icon"/></a>
                        
                        <a href="https://github.com/MrSkrubElite" target="_blank"><FontAwesomeIcon icon={faGithub} className="icon"/></a>

                    </div>
                </div>
                <div className="photo">
                    <img src={pfp} alt="profilePicture" />
                </div>
                

            </div>
            
            <div className="hero2">
                <div className="hero2-icons">
                    <div>
                        <h3>Tech Stack</h3>
                    </div>
                    <span className='bar no'>|</span>
                    <div className="icons-img-container">
                        <img src={html5} alt="html5" />
                        <img src={css3} alt="css3" />
                        <img src={js} alt="js" />
                        <img src={reacticon} alt="reacticon" />
                        <img src={tailwind} alt="tailwind" />
                        <img src={scss} alt="scss" />
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  );
}

export default Hero;