import React from 'react';
import { Box, Typography } from '@mui/material';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import GroupIcon from '@mui/icons-material/Group';
import UpdateIcon from '@mui/icons-material/Update';
import JaveriaKanwal from "../assets/Javeriakanwal.png";

const AboutMe = () => {
  const skills = [
    { name: 'HTML', icon: <DesignServicesIcon fontSize="small" className="text-indigo-800" /> },
    { name: 'CSS', icon: <DesignServicesIcon fontSize="small" className="text-blue-900" /> },
    { name: 'JavaScript', icon: <DeveloperModeIcon fontSize="small" className="text-yellow-800" /> },
    { name: 'React.js', icon: <DeveloperModeIcon fontSize="small" className="text-blue-900" /> },
    { name: 'Node.js', icon: <DeveloperModeIcon fontSize="small" className="text-green-700" /> },
    { name: 'MongoDB', icon: <DeveloperModeIcon fontSize="small" className="text-green-800" /> },
    { name: 'Express.js', icon: <GroupIcon fontSize="small" className="text-purple-800" /> },
    { name: 'Continuous Learning', icon: <UpdateIcon fontSize="small" className="text-gray-800" /> ,},
  ];

  return (
    <div className=" py-10 px-6 flex flex-col md:flex-row items-center bg-gray-100" id="about-me">
      {/* Image Section */}
      <div className="w-full md:w-1/2  h-[400px] flex justify-center">
        <img 
    src={JaveriaKanwal}
          alt="Profile" 
          className="rounded-full shadow-lg max-w-xs md:max-w-sm border-2 border-pink-600"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 text-gray-800">
        <h1 variant="h4" className="text-3xl text-center font-bold mb-3 text-pink-600">
          About Me
        </h1>
        <p variant="body2" className="text-base mb-4 font-semibold">
          I'm a passionate Full Stack Web Developer skilled in the MERN stack, creating dynamic and responsive web applications.
        </p>

        {/* Skills List */}
        <Box className="grid grid-cols-2 gap-4">
          {skills.map((skill) => (
            <Box key={skill.name} className="flex items-center space-x-3 p-3 bg-white shadow-md rounded-md">
              <div>{skill.icon}</div>
              <Typography variant="body2" className="font-medium text-gray-700">
                {skill.name}
              </Typography>
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default AboutMe;
