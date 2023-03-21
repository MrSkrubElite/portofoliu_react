// import logo from './logo.svg';
import './Aboutme.css';
import React from 'react';
import frontsvg from "../../components/imgs/frontsvg.svg"
import manlaptop from "../../components/imgs/manlaptop.png";
import laptop from "../../components/imgs/laptop.jpg";

const Aboutme = () => {
  return (
    <section id='aboutme'>
        <div className="aboutme-container">
            <div className="aboutme-img-container">
                <img src={laptop} alt="laptop" />
                
                
            </div>
            
                    <img src={frontsvg} alt="svg" className='svg' />
                    <img src={manlaptop} alt="laptop" className='laptop' />
                
            
            <div className="aboutme-info">
                <div>
                    <h3>ABOUT ME</h3>
                </div>
                <div>
                    <h1>A dedicated Front-end Developer
                    based in Constanta, Romania 📍</h1>
                </div>
                <div>
                    <p>As a Junior Front-End Developer, I possess an impressive arsenal of skills in HTML, CSS, JavaScript and React. I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding web applications.</p>
                </div>
                
            </div>
        </div>
    </section>
  );
}

export default Aboutme;
