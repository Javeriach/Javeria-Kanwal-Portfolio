import React, { useEffect } from 'react';
import { LinkedIn, Twitter, GitHub } from '@mui/icons-material';
import Javeriakanwal from '../assets/Javeriakanwal.png';
import backgroundImage from '../assets/backgroundImage.avif';
import { Link } from 'react-router-dom';
import Aos from 'aos';
const Hero = () => {

 
  
  return (
    <section
      className="overflow-x-hidden flex  flex-col-reverse items-center min-[920px]:flex-row justify-around py-16 px-8 min-[920px]:px-16  min-[920px]:flex-row h-[700px] min-[920px]:h-[600px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Text Section */}
      <div className="max-w-lg" data-aos="zoom-in">
        <p className="text-gray-400 uppercase tracking-wide mb-2">
          Welcome to my world
        </p>
        <h1 className="text-4xl md:text-5xl font-bold">
          Hi, I’m <span className="text-pink-500">Javeria Kanwal</span>, <br />a Full
          Stack MERN Developer
        </h1>
        <p className="text-gray-400 mt-4">
          I use minimalism as a third dimension by which to simplify experiences
          and build this each and every interaction.
        </p>
        {/* Social Media Links */}
        <div className="flex items-center space-x-4 mt-6">
          <Link href="#" aria-label="LinkedIn" className=" shadow-lg">
            <LinkedIn
              className="text-gray-400 hover:text-pinkAccent bg-black"
              fontSize="large"
            />
          </Link>
          <Link href="#" aria-label="Twitter">
            <Twitter
              className="text-gray-400 hover:text-pinkAccent"
              fontSize="large"
            />
          </Link>
          <Link href="#" aria-label="GitHub">
            <GitHub
              className="text-gray-400 hover:text-pinkAccent"
              fontSize="large"
            />
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className=" md:mt-0">
        <div className="relative"   data-aos="zoom-in">
          <img
           
            src={Javeriakanwal}
            alt="Luca"
            className="w-64 md:w-[300px] h-64  md:h-[310px] rounded-full border-2 border-gray-100 "
          />
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-purple-600 opacity-50"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
