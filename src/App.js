// import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import React from 'react';
import Aboutme from './components/aboutme/Aboutme';
import Projects from './components/projects/Projects';

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    <Aboutme />
    <Projects />
    </>
  );
}

export default App;