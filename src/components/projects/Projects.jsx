// import logo from './logo.svg';
import './Projects.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import carrental from "../../components/imgs/carrentalproject.png"
import coindom from "../../components/imgs/coindom.png"
import gymate from "../../components/imgs/gymate.png"
import raouf from "../../components/imgs/raouf.png"

library.add(fab, faCheckSquare, faCoffee)




const Projects = () => {
  return (
    <section id='projects'>
        <div className="container">
            <div className="title">
                <h3>PORTFOLIO</h3>
                <h2>Each project is a unique piece of development 🧩</h2>
            </div>

            <div className="project-box">
                <div className="project-img">
                    <img src={carrental} alt="carrental" />
                </div>
                <div className="project-info">
                    
                    <div>
                        <h1>RENTACAR 🚗</h1>
                    </div>
                    <div>
                        <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                    </div>

                    <div className="tags-container">
                        <div className="tags">
                            <h2>React</h2>
                        </div>
                        <div className="tags">
                            <h2>SCSS</h2>
                        </div>
                    </div>
                    
                    <div className="links">
                        <a href="https://github.com/MrSkrubElite/Car-Rental-Project" target="_blank">Code<FontAwesomeIcon icon={faGithub} className="icons"/></a>
                        <a href="https://car-rental-ten.vercel.app/" target="_blank">Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icons"/></a>
                    </div>
                </div>
            </div>

            <div className="project-box row-reverse">
                <div className="project-img">
                    <img src={coindom} alt="coindom" />
                </div>
                <div className="project-info">
                    
                    <div>
                        <h1>COINGOD 💰</h1>
                    </div>
                    <div>
                        <p>Coindom is a crypto app that allows users to search for information about various cryptocurrencies in real-time.</p>
                    </div>
                    
                    <div className="tags-container">
                        <div className="tags">
                            <h2>React</h2>
                        </div>
                        <div className="tags">
                            <h2>SCSS</h2>
                        </div>
                    </div>

                    <div className="links">
                        <a href="https://github.com/MrSkrubElite/CoinGod" target="_blank">Code<FontAwesomeIcon icon={faGithub} className="icons"/></a>
                        <a href="https://coindom-crypto-search.vercel.app/" target="_blank">Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icons"/></a>
                    </div>
                </div>
            </div>

            <div className="project-box">
                <div className="project-img">
                    <img src={gymate} alt="gymate" />
                </div>
                <div className="project-info">
                    
                    <div>
                        <h1>GYMATE 🏋🏻‍♂️</h1>
                    </div>
                    <div>
                        <p>A gym website is a comprehensive resource for fitness information, class schedules, membership options, and tools to help users achieve their fitness goals.</p>
                    </div>
                    
                    <div className="tags-container">
                        <div className="tags">
                            <h2>React</h2>
                        </div>
                        <div className="tags">
                            <h2>Tailwind CSS</h2>
                        </div>
                    </div>

                    <div className="links">
                        <a href="https://github.com/MrSkrubElite/GymBro" target="_blank">Code<FontAwesomeIcon icon={faGithub} className="icons"/></a>
                        <a href="https://gymate-iota.vercel.app/" target="_blank">Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icons"/></a>
                    </div>
                </div>
            </div>

            <div className="project-box row-reverse">
                <div className="project-img">
                    <img src={raouf} alt="raouf" />
                </div>
                <div className="project-info">
                    
                    <div>
                        <h1>RAOUF ECOMMERCE 🛒</h1>
                    </div>
                    <div>
                        <p>With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need.</p>
                    </div>
                    
                    <div className="tags-container">
                        <div className="tags">
                            <h2>React</h2>
                        </div>
                        <div className="tags">
                            <h2>Vanilla CSS</h2>
                        </div>
                    </div>

                    <div className="links">
                        <a href="https://github.com/MrSkrubElite/Minimalist-E-shop" target="_blank" >Code<FontAwesomeIcon icon={faGithub} className="icons"/></a>
                        <a href="https://minimalist-e-commerce.vercel.app/" target="_blank">Live Demo<FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icons"/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Projects;