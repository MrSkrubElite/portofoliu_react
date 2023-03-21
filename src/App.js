// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import React from 'react';
import Aboutme from './components/aboutme/Aboutme';
import Projects from './components/projects/Projects';
import Contactme from './components/contactme/Contactme';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Aboutme />
    <Projects />
    <Contactme />
    <Footer />
    </>
  );
}

export default App;