import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Hero from './Hero';
import ServiceCards from './WhatIDo';
import AboutMe from './AboutMe';
import ContactMe from './Contact';
import Portfolio from './Portfolio';
import { useState } from 'react';

function Body() {

 
  return (
    <div>
      <Navbar />
      <div className=" text-white pt-11">
        
        <Hero />
        <AboutMe />
        <Portfolio/>
        <ServiceCards />
        <ContactMe />
        <footer className='h-[80px] bg-black text-white flex justify-center items-center'>
            All rights reserved|Developed by Javeria Kanwal
        </footer>
       
      </div>
    </div>
  );
}

export default Body;
