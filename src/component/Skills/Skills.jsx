import React from 'react';
import { FaCode, FaDatabase, FaLock, FaCloud } from 'react-icons/fa';
import { MdOutlineWeb } from 'react-icons/md';

const Skills = () => {
  const skillsData = [
    {
      category: "Backend Development",
      icon: <FaCode className="text-3xl text-gray-800" />,
      skills: ["Node.js", "Nest.js", "Express.js", "REST APIs", "GraphQL"]
    },
    {
      category: "Frontend Development",
      icon: <MdOutlineWeb className="text-3xl text-gray-800" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit"]
    },
    {
      category: "Databases",
      icon: <FaDatabase className="text-3xl text-gray-800" />,
      skills: ["MongoDB", "PostgreSQL"]
    },
    {
      category: "Authentication",
      icon: <FaLock className="text-3xl text-gray-800" />,
      skills: ["JWT", "OAuth2"]
    },
    {
      category: "DevOps / Deployment",
      icon: <FaCloud className="text-3xl text-gray-800" />,
      skills: ["AWS (EC2, RDS, ECR, ElastiCache)", "CI/CD Pipelines", "Git", "GitHub", "Vercel"]
    }
  ];

  return (
    <div className="w-full px-8 md:px-20 lg:px-40 py-16 bg-gray-50/50">
      <h1 className="text-center text-3xl md:text-4xl lg:text-5xl font-semibold font-tektur mb-16" data-aos="zoom-in">
        Technical{" "}
        <span className="bg-gradient-to-b from-black via-gray-700 to-gray-400 bg-clip-text text-transparent">
          Skills
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((item, index) => (
          <div 
            key={index} 
            className="p-8 bg-white rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gray-50 rounded-2xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-tektur font-bold text-gray-900">{item.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, sIndex) => (
                <span 
                  key={sIndex} 
                  className="px-4 py-1.5 bg-gray-100/50 text-gray-700 text-sm font-medium rounded-full border border-gray-100"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
