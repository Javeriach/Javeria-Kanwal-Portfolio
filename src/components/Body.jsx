import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import ServiceCards from './WhatIDo';
import AboutMe from './AboutMe';
import ContactMe from './Contact';
import Portfolio from './Portfolio';

function Body() {
  return (
    <div>
      <Navbar />
      <div className=" text-white pt-11">
        
        <Hero />
        <AboutMe />
        <Portfolio/>
        <ServiceCards />
       <ContactMe/>
       
      </div>
    </div>
  );
}

export default Body;
