// import logo from './logo.svg';
import './Projects.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import carrental from "../../components/imgs/carrentalproject.png"

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
                        <h1>CAR RENTAL 🚗</h1>
                    </div>
                    <div>
                        <p>A car rental website is an online platform that allows users to rent cars for personal or business use. The website provides an interface for searching, comparing, and reserving cars.</p>
                    </div>
                    
                    <div className="tags">
                        <h2>React</h2>
                    </div>
                    <div className="links">
                        <a href="#"><FontAwesomeIcon icon={faGithub} className="icon"/></a>
                        <a href="#"><FontAwesomeIcon icon={faArrowUpRightFromSquare} className="icon"/></a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Projects;