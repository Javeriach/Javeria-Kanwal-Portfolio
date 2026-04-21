import { useState, useEffect } from "react";
import { FaArrowRight, FaXmark, FaCheck } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

// Import Images
import OneOrbIO from "../../Media/Oneorbio.png";
import BoxtechAI from "../../Media/Boxtech.png";
import OneOrbAI from "../../Media/Oneorbai.png";
import Navio from "../../Media/Navio.png";
import Image2Video from "../../Media/image2video.png";
import WorkPilot from "../../Media/workpilot.png";
import Biodock from "../../Media/Biodock.png";

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [isXLScreen, setIsXLScreen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsDetails = [
    {
      _id: 1,
      projectImg: OneOrbIO,
      projectTitle: "GenStack: Autonomous App Architect",
      projectRole: "Software Engineer",
      projectDes: "AI application builder that generates full-stack applications from prompts using Claude and sandboxed environments.",
      isClientProject: true,
      projectTasks: [
        "Built an AI application builder that generates full-stack applications from natural language prompts using Claude AI.",
        "Implemented code generation workflows and executed backend services inside e2b sandbox environments.",
        "Enabled frontend execution and live previews using CodeSandbox with dynamically generated endpoints.",
        "Developed an iterative AI chat workflow allowing real-time modification of generated code across sandboxes.",
        "Designed full CI/CD pipelines and deployed production infrastructure using AWS EC2, ECR, and RDS."
      ],
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://www.oneorb.ai/",
    },
    {
      _id: 2,
      projectImg: BoxtechAI,
      projectTitle: "Boxtech.ai",
      projectRole: "Software Engineer",
      projectDes: "AI-powered chatbot for vehicle tracking that converts natural language queries into MongoDB queries.",
      isClientProject: false,
      projectTasks: [
        "Developed an AI-powered chatbot capable of answering complex user queries related to vehicle tracking data.",
        "Implemented a system that converts natural language queries into MongoDB queries and returns natural language responses.",
        "Managed custom MongoDB deployments on AWS EC2, including configuration, scaling, and maintenance.",
        "Implemented automated backup and disaster recovery strategies using Percona Backup for MongoDB (PBM).",
        "Set up monitoring and alerting infrastructure using Prometheus and Grafana to ensure system reliability."
      ],
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://www.boxtech.ai/",
    },
    {
      _id: 3,
      projectImg: OneOrbAI,
      projectTitle: "ReachOut: Automated Sequence Engine",
      projectRole: "Software Engineer",
      projectDes: "Recruiter outreach platform with automated email sequencing and engagement tracking using SendGrid.",
      isClientProject: true,
      projectTasks: [
        "Built recruiter outreach features including automated email sequencing and global outreach scheduling using SendGrid.",
        "Implemented event tracking for delivered, opened, and clicked emails to measure candidate engagement.",
        "Designed backend microservices and automated deployment pipelines using AWS infrastructure.",
        "Focused on improving recruiter productivity by enabling automated and tracked global outreach campaigns."
      ],
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://www.oneorb.ai/",
    },
    {
      _id: 4,
      projectImg: Navio,
      projectTitle: "ContextFlow (Browser Extension)",
      projectRole: "Software Engineer",
      projectDes: "AI-powered browser assistant providing contextual guidance and automation with screenshot-based querying.",
      isClientProject: true,
      projectTasks: [
        "Contributed to the development of an AI-powered browser assistant for contextual guidance and automation.",
        "Implemented screenshot-based querying and automation workflows to improve user interaction with web pages.",
        "Built execution pipelines for AI-generated browser automations, enabling seamless web task completion.",
        "Optimized extension-to-backend communication for low-latency AI responses."
      ],
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://assistance.oneorb.io/",
    },
    {
      _id: 5,
      projectImg: Image2Video,
      projectTitle: "Image2Video",
      projectRole: "Software Engineer",
      projectDes: "AI-powered platform that converts static images into videos with automated AWS deployment pipelines.",
      isClientProject: true,
      projectTasks: [
        "Deployed and managed an AI-powered platform designed to convert static images into dynamic videos.",
        "Designed CI/CD pipelines and automated deployment workflows using AWS EC2, ECR, and RDS.",
        "Ensured reliable updates and stable production releases with automated health checks and minimal intervention.",
        "Integrated AI model serving infrastructure with cloud-native monitoring for performance optimization."
      ],
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://image2video.oneorb.ai/",
    },
    {
      _id: 6,
      projectImg: WorkPilot,
      projectTitle: "SyncMetrics",
      projectRole: "Software Engineer",
      projectDes: "Workforce management system with time tracking, activity monitoring, and performance analytics.",
      isClientProject: true,
      projectTasks: [
        "Developed a scalable workforce management system similar to Hubstaff for distributed team monitoring.",
        "Built backend services for high-accuracy time tracking, user activity monitoring, and performance analytics.",
        "Contributed to system design and development focusing on scalability and reliable data handling.",
        "Delivered a functional productivity tracking platform enabling better workforce visibility for management."
      ],
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://work-pilot-77a086b7534f.herokuapp.com/",
    },
    {
      _id: 7,
      projectImg: Biodock,
      projectRole: "Software Engineer",
      projectTitle: "Biodock",
      projectDes: "Focused on system stability and CI/CD pipelines for large-scale AI platform workflows.",
      isClientProject: false,
      projectTasks: [
        "Contributed to improving system stability by resolving complex code issues and fixing production errors.",
        "Maintained and stabilized CI/CD production pipelines for large-scale AI platform workflows.",
        "Ensured reliable execution of platform workflows by debugging and stabilizing mission-critical pipelines.",
        "Implemented proactive monitoring to identify and resolve potential failures before they impact production."
      ],
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://www.biodock.ai/",
    },
  ];

  const sortedProjects = [...projectsDetails].reverse();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXLScreen(window.innerWidth >= 1280);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const visibleProjects =
    isXLScreen || showAll ? sortedProjects : sortedProjects.slice(0, 4);

  return (
    <div className="w-full px-4 pt-3 pb-8 min-h-screen">
      <h1 className="text-center text-3xl lg:text-5xl font-semibold font-tektur pt-3 pb-10" data-aos="zoom-in">
        Featured{" "}
        <span className="bg-gradient-to-b from-black via-gray-700 to-gray-400 bg-clip-text text-transparent">
          Projects
        </span>
      </h1>

      <div className="flex flex-col w-full justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {visibleProjects.map((p) => (
            <ProjDetail
              key={p._id}
              projectImg={p.projectImg}
              projectTitle={p.projectTitle}
              projectDes={p.projectDes}
              projectRole={p.projectRole}
              isClientProject={p.isClientProject}
              onClick={() => setSelectedProject(p)}
            />
          ))}
        </div>

        {!isXLScreen && (
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center mt-4 gap-2 font-semibold text-white bg-gradient-to-b from-black via-gray-700 to-gray-400 px-5 py-3 rounded-full"
            >
              <span>{showAll ? "LOAD LESS" : "LOAD MORE"}</span>
              <FaArrowRight
                className={`transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>

      {/* Modal Overlay */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-2xl w-full max-h-[90vh] shadow-2xl transform transition-all animate-in zoom-in-95 duration-300 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative flex-shrink-0">
              {selectedProject.isClientProject ? (
                <div className="w-full h-48 sm:h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center p-8 text-center border-b border-gray-100">
                  <div className="text-2xl sm:text-3xl font-tektur font-bold text-gray-400/60 uppercase tracking-tighter italic">
                    {selectedProject.projectTitle}
                  </div>
                </div>
              ) : (
                <img
                  src={selectedProject.projectImg}
                  alt={selectedProject.projectTitle}
                  className="w-full h-48 sm:h-64 object-cover"
                />
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 backdrop-blur-md rounded-full text-white transition-colors"
               >
                <FaXmark size={20} />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto custom-scrollbar">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-6 gap-4">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-tektur font-bold text-gray-900 mb-2">
                    {selectedProject.projectTitle}
                  </h2>
                  <div className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-semibold">
                    {selectedProject.projectRole}
                  </div>
                  {/* Client project disclaimer removed as per user request */}
                </div>
                {!selectedProject.isClientProject && (
                  <a
                    href={selectedProject.liveProjectCheckUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-black text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
                  >
                    <span>Live Site</span>
                    <MdArrowOutward />
                  </a>
                )}
              </div>

              <div className="space-y-6">
                <section>
                  <h4 className="font-tektur font-bold text-gray-900 mb-2 uppercase tracking-wide text-sm">Project Overview</h4>
                  <p className="text-gray-600 leading-relaxed text-start sm:text-justify">
                    {selectedProject.projectDes}
                  </p>
                </section>

                <section>
                  <h4 className="font-tektur font-bold text-gray-900 mb-3 uppercase tracking-wide text-sm">Key Responsibilities & Achievements</h4>
                  <ul className="space-y-3">
                    {selectedProject.projectTasks.map((task, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-600">
                        <span className="mt-1.5 flex-shrink-0 w-4 h-4 rounded-full bg-gray-100 flex items-center justify-center text-[10px] text-gray-900">
                          <FaCheck />
                        </span>
                        <span className="text-sm sm:text-base leading-relaxed">{task}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const ProjDetail = ({
  projectImg,
  projectTitle,
  projectDes,
  projectRole,
  isClientProject,
  onClick
}) => {
  return (
    <div
      className="card bg-[#0000001A] w-[20rem] sm:[22rem] md:w-[23rem] shadow-sm font-manrope cursor-pointer group hover:shadow-md transition-all duration-300"
      data-aos="fade-up"
      onClick={onClick}
    >
      <figure className="px-5 pt-5 relative overflow-hidden">
        {isClientProject ? (
          <div className="rounded-xl w-full h-[10rem] bg-gradient-to-br from-gray-100/50 to-gray-200/50 flex flex-col items-center justify-center p-4 border border-gray-100 transition-transform duration-500 group-hover:scale-105">
             <div className="text-sm font-tektur font-bold text-gray-400/80 text-center uppercase tracking-tighter italic px-2">
               {projectTitle}
             </div>
          </div>
        ) : (
          <img
            src={projectImg}
            alt={projectTitle}
            className="rounded-xl w-full h-[10rem] object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        {!isClientProject && <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-xl mx-5 mt-5"></div>}
      </figure>
      <div className="my-0 py-4 px-6">
        <div className="flex justify-between items-center mb-1">
          <h2 className="text-start text-xl font-tektur font-semibold group-hover:text-gray-900 transition-colors">
            {projectTitle}
          </h2>
        </div>
        <div className="text-xs font-semibold text-gray-500 mb-2 uppercase tracking-wider">
          {projectRole}
        </div>
        <p className="text-start sm:text-justify text-base line-clamp-2 font-manrope text-gray-600">
          {projectDes}
        </p>
        {/* Client project tag removed as per user request */}
        <div className="flex justify-start md:justify-end font-semibold w-full my-3">
          <button className="flex items-center bg-gradient-to-b from-black via-gray-700 to-gray-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
            <span>View Details</span>
            <MdArrowOutward className="ml-2 text-gray-900" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
