import React from 'react'
import AboutMe from '../components/AboutMe';
import './../App.css';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import More from '../components/More';
import Contact from '../components/Contact';
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

const LandingScreen = () => {
  return (
    <div className='landingScreen'>
        {/* <AboutMe /> */}
        {/* <Certifications /> */}
        {/* <Projects /> */}
        {/* <More /> */}
        {/* <Contact /> */}
        <Outlet>
            {/* The rest of your app goes here */}
        </Outlet>
    </div>
  )
}

export default LandingScreen