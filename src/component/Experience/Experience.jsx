import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";

const ExperienceCard = ({ exp, index }) => {
  const [tasksExpanded, setTasksExpanded] = useState(false);
  const displayTasks = tasksExpanded ? exp.tasks : exp.tasks.slice(0, 2);

  return (
    <div 
      className="relative pl-8 border-l-2 border-gray-100 pb-2"
      data-aos="fade-left"
      data-aos-delay={index * 100}
    >
      {/* Timeline Dot */}
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-black border-4 border-white shadow-sm"></div>
      
      <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex flex-col md:flex-row justify-between items-start mb-4 gap-2">
          <div>
            <h3 className="text-2xl font-tektur font-bold text-gray-900">{exp.role}</h3>
            <p className="text-lg font-semibold bg-gradient-to-r from-black to-gray-500 bg-clip-text text-transparent">
              {exp.company}
            </p>
          </div>
          <div className="flex flex-col items-end text-sm font-semibold text-gray-400 uppercase tracking-wider">
            <span>{exp.period}</span>
            <span>{exp.location}</span>
          </div>
        </div>
        <ul className="space-y-3">
          {displayTasks.map((task, tIndex) => (
            <li key={tIndex} className="flex items-start gap-3 text-gray-600">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0"></span>
              <span className="text-sm sm:text-base leading-relaxed">{task}</span>
            </li>
          ))}
        </ul>
        
        {exp.tasks.length > 2 && (
          <button 
            onClick={() => setTasksExpanded(!tasksExpanded)}
            className="mt-4 text-xs font-bold bg-gradient-to-b from-black via-gray-700 to-gray-400 bg-clip-text text-transparent uppercase tracking-widest hover:opacity-70 transition-opacity"
          >
            {tasksExpanded ? "— Show Less Tasks" : "+ Show All Responsibilities"}
          </button>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const [showAll, setShowAll] = useState(false);
  const experiences = [
    {
      company: "Wamolabs",
      location: "Lahore, Pakistan",
      role: "Software Engineer",
      period: "June 2025 - Present",
      tasks: [
        "Contributed to development of AI app-builder platforms, enabling users to generate complete applications from natural language prompts.",
        "Built execution pipelines for AI-generated code by running backend services inside e2b sandboxes and frontend applications in CodeSandbox, enabling live preview URLs for generated applications.",
        "Developed scalable backend services using Nest.js and built frontend applications with Next.js.",
        "Designed and implemented CI/CD pipelines using GitHub Actions for automated builds and deployments.",
        "Managed production infrastructure on AWS including EC2, RDS, ElastiCache, and ECR to support scalable deployments."
      ]
    },
    {
      company: "Boxtech.ai",
      location: "Remote, UAE",
      role: "Software Engineer",
      period: "Prior Experience",
      tasks: [
        "Managed custom MongoDB deployments on AWS EC2, including configuration, monitoring, and maintenance for production systems.",
        "Implemented automated backup and disaster recovery strategies using Percona Backup for MongoDB (PBM).",
        "Set up monitoring and alerting infrastructure using Prometheus and Grafana to ensure system reliability and performance.",
        "Contributed to development of AI-powered chatbot solutions for vehicle tracking systems."
      ]
    }
  ];

  const visibleExperiences = showAll ? experiences : experiences.slice(0, 1);

  return (
    <div className="w-full px-8 md:px-20 lg:px-40 py-16">
      <h1 className="text-center text-3xl lg:text-5xl font-semibold font-tektur mb-16" data-aos="zoom-in">
        Professional{" "}
        <span className="bg-gradient-to-b from-black via-gray-700 to-gray-400 bg-clip-text text-transparent">
          Experience
        </span>
      </h1>
      
      <div className="max-w-4xl mx-auto space-y-12">
        {visibleExperiences.map((exp, index) => (
          <ExperienceCard key={index} exp={exp} index={index} />
        ))}
      </div>

      {experiences.length > 1 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll((prev) => !prev)}
            className="flex items-center gap-2 font-semibold text-white bg-gradient-to-b from-black via-gray-700 to-gray-400 px-6 py-3 rounded-full hover:scale-105 transition-transform"
          >
            <span>{showAll ? "SHOW LESS" : "SHOW MORE"}</span>
            <FaArrowRight
              className={`transition-transform ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default Experience;
