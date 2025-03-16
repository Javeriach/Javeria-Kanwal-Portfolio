import React, { useEffect } from 'react';
import ShazaibTechnologies from '../assets/ShazaibTechnologies.webp';
import WeatherApp from '../assets/WeatherApp.png';
import QuranApp from '../assets/QuranApp.png';
import ImageGallery from '../assets/ImageGallery.png';
import TriviaMaster from '../assets/TriaviaMaster.png';
import Tenzies from '../assets/Tenzies.png';
import MovieWorld from '../assets/MovieWorld.png';
import PasswordGenerater from '../assets/PasswordGenerater.png';
import TaskTracker from '../assets/TaskTracker.png';
import Tinder from '../assets/Tinder.webp';
import Ecommerce from "../assets/Ecommerce.png";
import Aos from 'aos';
import Navbar from './Navbar';

const Projects = () => {

 useEffect(() => {
     Aos.init({ duration: 1000 }); // Animation duration set to 1000ms (1 second)
   
     return () => {
       Aos.refreshHard(); // Optional: Resets all animations on unmount
     };
 }, []);
  
  
  const projects = [
    {
      title: 'Shazaib Technologies',
      category: 'Ecommerce',
      views: '566',
      image: ShazaibTechnologies, // Replace with actual image
      link: 'https://shazaib-technologies.vercel.app/',
      githubUrl: 'https://github.com/Javeriach/Shazaib-Technologies-',
      TechnologiesUsed: ['HTML', 'CSS', 'tailwindCss'],
      animation:"zoom-in"
    },
    {
      title: 'Weather App',
      category: 'Climate',
      views: '245',
      image: WeatherApp, // Replace with actual image
      link: 'https://real-time-weather-app-5w4h-nu0md7xfg-javeriachs-projects.vercel.app/',
      githubUrl: 'https://github.com/Javeriach/Real-Time-Weather-App',
      TechnologiesUsed: ['HTML', 'CSS', 'JavaScript'],
       animation:"zoom-out"
    },
    {
      title: 'Quran App',
      category: 'Religion',
      views: '331',
      image: QuranApp, // Replace with actual image
      link: 'https://quran-app-b7kk.vercel.app/',
      githubUrl: 'https://github.com/Javeriach/Quran-App',
      TechnologiesUsed: ['HTML', 'CSS', 'JavaScript'],
       animation:"zoom-in"
    },

    {
      title: 'Image Gallery',
      category: 'Socail Media',
      views: '201',
      image: ImageGallery, // Replace with actual image
      link: 'https://image-gallery-rosy.vercel.app/',
      githubUrl: 'https://github.com/Javeriach/Image-Gallery',
      TechnologiesUsed: ['HTML', 'CSS', 'JavaScript'],
       animation:"zoom-out"
    },
    {
      title: 'Password Generater',
      category: 'Security',
      views: '201',
      image: PasswordGenerater, // Replace with actual image
      link: 'https://random-password-generator-delta.vercel.app/',
      githubUrl: 'https://github.com/Javeriach/Random-Password-Generator',
      TechnologiesUsed: ['HTML', 'CSS', 'JavaScript'],
       animation:"zoom-in"
    },
    {
      title: 'Task Tracker',
      category: 'Task Management',
      views: '101',
      image: TaskTracker, // Replace with actual image
      link: 'https://task-tracker-2v62.vercel.app/',
      githubUrl: 'https://github.com/Javeriach/Task-Tracker',
      TechnologiesUsed: ['HTML', 'CSS', 'JavaScript'],
       animation:"zoom-out"
    },
    {
      title: 'Triavia Master',
      category: 'Education',
      views: '201',
      image: TriviaMaster, // Replace with actual image
      link: 'https://triavia-master-g5vt.vercel.app/',
      githubUrl: 'https://github.com/Javeriach/Triavia-Master/tree/master',
      TechnologiesUsed: ['HTML', 'CSS', 'JavaScript', 'Reactjs'],
       animation:"zoom-in"
    },
    {
      title: 'Tenzies',
      category: 'Gaming',
      views: '101',
      image: Tenzies, // Replace with actual image
      link: 'https://tenzies-alpha-livid.vercel.app/',
      githubUrl: 'https://github.com/Javeriach/Tenzies',
      TechnologiesUsed: ['HTML', 'CSS', 'JavaScript', 'Reactjs'],
       animation:"zoom-out"
    },
    {
      title: 'Movie World',
      category: 'Socail Media',
      views: '101',
      image: MovieWorld, // Replace with actual image
      link: 'https://movie-world-jcad.vercel.app/',
      githubUrl: 'https://github.com/Javeriach/MovieWorld',
      TechnologiesUsed: ['HTML', 'CSS', 'JavaScript', 'Reactjs'],
       animation:"zoom-in"
    },
    {
      title: 'Tinder',
      category: 'Socail Media',
      views: '101',
      image: Tinder, // Replace with actual image
      link: 'http://13.53.200.209/',
      githubUrl: 'https://github.com/Javeriach/Tinder-Frontend-Code',
      TechnologiesUsed: ['HTML', 'CSS', 'JavaScript', 'React.js','TailwindCss','Websockets','Node.js','Express.js','MongoDB'],
       animation:"zoom-out"
    },
    {
      title: 'EShop',
      category: 'Ecommerce',
      views: '101',
      image: Ecommerce, // Replace with actual image
      link: 'http://13.49.246.169/',
      githubUrl: 'https://github.com/Javeriach/Ecommerce-Frontend',
      TechnologiesUsed: ['HTML', 'CSS', 'JavaScript', 'React.js','TailwindCss','Node.js','Express.js','MongoDB'],
     animation:"zoom-in"
    },
  ];

  projects.reverse();
  return (
    <>
      <Navbar />
      <div className="bg-white text-white py-12 pt-[100px] px-4">
        <div className="text-center mb-10">
          <p className="text-pink-700 font-semibold uppercase text-sm tracking-wide">
            Visit My Portfolio and Keep Your Feedback
          </p>
          <h2 className="text-3xl font-extrabold text-black">
            My <span className="text-pink-700">Portfolio</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 overflow-hidden">
          {projects.map((project, index) => (
            <div
              data-aos={project.animation}
              key={index}
              className="relative group overflow-hidden   bg-black border border-black shadow-md shadow-black"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105 border-b border-white  "
              />
              <div className="p-4 transition-all duration-300 ease-in-out group-hover:bg-gray-700">
                <p className="text-pink-400 text-xs uppercase tracking-wider mb-2">
                  {project.category}
                </p>
                <h3 className="text-lg font-semibold mb-3 group-hover:text-white transition-all duration-300">
                  {project.title}
                </h3>
                <div className="flex justify-between items-center text-gray-400 text-sm">
                  <span>{project.views} Views</span>
                  <span className="group-hover:text-pink-500 transition-all duration-300">
                    ♥
                  </span>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white text-lg font-bold">
                <a
                  href={project?.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  View {project?.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
