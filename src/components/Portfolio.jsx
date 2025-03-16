import React, { useEffect } from "react";
import TriviaMaster from "../assets/TriaviaMaster.png";
import Tinder from '../assets/Tinder.webp';
import Ecommerce from "../assets/Ecommerce.png";

import { Link } from "react-router-dom";
import Aos from "aos";


const Portfolio = () => {
  const projects = [
      {
        title: 'Triavia Master',
        category: 'Education',
        views: '201',
        image: TriviaMaster, // Replace with actual image
        link: 'https://triavia-master-g5vt.vercel.app/',
        githubUrl: 'https://github.com/Javeriach/Triavia-Master/tree/master',
        TechnologiesUsed: ['HTML', 'CSS', 'JavaScript', 'Reactjs'],
      },
      {
        title: 'Tinder',
        category: 'Socail Media',
        views: '101',
        image: Tinder, // Replace with actual image
        link: 'http://13.53.200.209/',
        githubUrl: 'https://github.com/Javeriach/Tinder-Frontend-Code',
        TechnologiesUsed: ['HTML', 'CSS', 'JavaScript', 'React.js','TailwindCss','Websockets','Node.js','Express.js','MongoDB'],
      },
      {
        title: 'EShop',
        category: 'Ecommerce',
        views: '101',
        image: Ecommerce, // Replace with actual image
        link: 'http://13.49.246.169/',
        githubUrl: 'https://github.com/Javeriach/Ecommerce-Frontend',
        TechnologiesUsed: ['HTML', 'CSS', 'JavaScript', 'React.js','TailwindCss','Node.js','Express.js','MongoDB'],
      },
  ];
  

  useEffect(() => {
    Aos.init();
  }, []);

  

  return (
    <div className="bg-black text-white py-12 px-4">
      <div className="text-center mb-10"  data-aos="fade-down">
        <p className="text-pink-500 uppercase text-sm tracking-wide">
          Visit My Portfolio and Keep Your Feedback
        </p>
        <h2 className="text-3xl font-extrabold text-gray-200">
          My <span className="text-pink-400">Portfolio</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 overflow-x-hidden">
        {projects.map((project, index) => (
          <div
            key={index}
            data-aos="fade-down"
            className=" relative group overflow-hidden rounded-lg shadow-white shadow-sm bg-gray-800"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full border-pink-500 border-2 h-64 object-cover transition-transform duration-300 group-hover:scale-105"
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
                <span className="group-hover:text-pink-500 transition-all duration-300">♥</span>
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

      <div className="flex justify-end">
        <Link to="/projects" className="bg-pink-700 p-3 mt-3">
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default Portfolio;
