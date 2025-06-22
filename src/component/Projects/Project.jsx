import { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { MdArrowOutward } from "react-icons/md";

// Import Images
import ShazaibTechnologies from "../../Media/ShazaibTechnologies.webp";
import WeatherApp from "../../Media/WeatherApp.png";
import QuranApp from "../../Media/QuranApp.png";
import ImageGallery from "../../Media/ImageGallery.png";
import PasswordGenerater from "../../Media/PasswordGenerater.png";
import TaskTracker from "../../Media/TaskTracker.png";
import TriaviaMaster from "../../Media/TriaviaMaster.png";
import Tenzies from "../../Media/Tenzies.png";
import MovieWorld from "../../Media/MovieWorld.png";

const Project = () => {
  const [showAll, setShowAll] = useState(false);
  const [isXLScreen, setIsXLScreen] = useState(false);

  const projectsDetails = [
    {
      _id: 1,
      projectImg: ShazaibTechnologies,
      projectTitle: "Shazaib Technologies",
      projectDes: "Shazaib Technologies is an eCommerce website built with HTML, CSS, and TailwindCSS.",
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://shazaib-technologies.vercel.app/",
    },
    {
      _id: 2,
      projectImg: WeatherApp,
      projectTitle: "Weather App",
      projectDes: "A real-time climate tracking app developed with HTML, CSS, and JavaScript.",
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://real-time-weather-app-5w4h-nu0md7xfg-javeriachs-projects.vercel.app/",
    },
    {
      _id: 3,
      projectImg: QuranApp,
      projectTitle: "Quran App",
      projectDes: "Quran App built with HTML, CSS, and JavaScript to browse and read Quranic verses.",
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://quran-app-b7kk.vercel.app/",
    },
    {
      _id: 4,
      projectImg: ImageGallery,
      projectTitle: "Image Gallery",
      projectDes: "An interactive image gallery using HTML, CSS, and JavaScript.",
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://image-gallery-rosy.vercel.app/",
    },
    {
      _id: 5,
      projectImg: PasswordGenerater,
      projectTitle: "Password Generator",
      projectDes: "Secure password generator made with HTML, CSS, and JavaScript.",
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://random-password-generator-delta.vercel.app/",
    },
    {
      _id: 6,
      projectImg: TaskTracker,
      projectTitle: "Task Tracker",
      projectDes: "A task management tool built with HTML, CSS, and JavaScript.",
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://task-tracker-2v62.vercel.app/",
    },
    {
      _id: 7,
      projectImg: TriaviaMaster,
      projectTitle: "Trivia Master",
      projectDes: "Trivia quiz game built with React.js, HTML, CSS, and JavaScript.",
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://triavia-master-g5vt.vercel.app/",
    },
    {
      _id: 8,
      projectImg: Tenzies,
      projectTitle: "Tenzies",
      projectDes: "Tenzies game developed with React.js, HTML, CSS, and JavaScript.",
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://tenzies-alpha-livid.vercel.app/",
    },
    {
      _id: 9,
      projectImg: MovieWorld,
      projectTitle: "Movie World",
      projectDes: "A movie browsing website built with React.js, HTML, CSS, and JavaScript.",
      liveProjectCheckContent: "Check Live Site",
      liveProjectCheckUrl: "https://movie-world-jcad.vercel.app/",
    },
  ];

  projectsDetails.reverse();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsXLScreen(window.innerWidth >= 1280);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const visibleProjects =
    isXLScreen || showAll ? projectsDetails : projectsDetails.slice(0, 4);

  return (
    <div className="w-full px-4 pt-3 pb-8 min-h-screen">
      <h1 className="text-center text-3xl lg:text-6xl font-semibold font-tektur pt-3 pb-10">
        Featured{" "}
        <span className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-clip-text text-transparent">
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
              liveProjectCheckContent={p.liveProjectCheckContent}
              liveProjectCheckUrl={p.liveProjectCheckUrl}
            />
          ))}
        </div>

        {!isXLScreen && (
          <div className="flex justify-center mt-2">
            <button
              onClick={() => setShowAll((prev) => !prev)}
              className="flex items-center mt-4 gap-2 font-semibold text-white bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 px-5 py-3 rounded-full"
            >
              <span>{showAll ? "LOAD LESS" : "LOAD MORE"}</span>
              <FaArrowRight
                className={`transition-transform ${showAll ? "rotate-180" : ""}`}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const ProjDetail = ({
  projectImg,
  projectTitle,
  projectDes,
  liveProjectCheckContent,
  liveProjectCheckUrl,
}) => {
  return (
    <div className="card bg-[#0000001A] w-[20rem] sm:[22rem] md:w-[23rem] shadow-sm font-manrope">
      <figure className="px-5 pt-5">
        <img
          src={projectImg}
          alt={projectTitle}
          className="rounded-xl w-[35rem] h-[10rem] object-cover"
        />
      </figure>
      <div className="my-0 py-4 px-6 ">
        <h2 className="text-start text-xl font-tektur font-semibold">
          {projectTitle}
        </h2>
        <p className="text-justify text-base line-clamp-2 font-manrope">
          {projectDes}
        </p>
        <div className="flex justify-start md:justify-end font-semibold w-full my-3">
          <a href={liveProjectCheckUrl} target="_blank" rel="noopener noreferrer">
            <button className="flex items-center bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-clip-text text-transparent">
              <span>{liveProjectCheckContent}</span>
              <MdArrowOutward className="ml-2 text-[#8800FF]" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
