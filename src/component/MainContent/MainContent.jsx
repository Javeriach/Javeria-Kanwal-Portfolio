import { IoMdArrowRoundForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Javeria_kanwal from "../../Media/Javeria-Kanwal.jpg";
const MainContent = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full min-h-[550px] lg:h-[85vh] py-10 lg:py-0">
      <div className="w-full lg:w-[60vw] flex justify-center items-center px-6 lg:px-0 order-2 lg:order-1 mt-12 lg:mt-20">
        <div className="w-[90vw] sm:w-[80vw] lg:w-[40vw]" data-aos="fade-right">
          <h1 className="font-tektur text-center lg:text-start font-semibold text-2xl sm:text-3xl lg:text-5xl">
            Hi, I'm Javeria Kanwal
            <br />
            <span className="bg-gradient-to-b from-black via-gray-700 to-gray-400 bg-clip-text text-transparent leading-tight">
              Full Stack Software Engineer
            </span>
          </h1>
          <p className="font-manrope text-sm sm:text-lg text-center lg:text-start font-normal my-4 lg:my-6">
            Specializing in Node.js, Nest.js, and AI-powered platforms with a focus on scalable full-stack architectures and cloud deployments on AWS.
          </p>
          <div className="flex justify-center lg:justify-start">
            <NavLink to="contact">
              <button className="flex items-center mt-4 gap-1 font-semi text-white bg-gradient-to-b from-black via-gray-700 to-gray-400 px-6 py-3 rounded-full hover:scale-105 transition-transform">
                <span>Contact Me</span>
                <IoMdArrowRoundForward />
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[40vw] flex items-center justify-center order-1 lg:order-2" data-aos="fade-left">
        <div className="relative">
          <img
            src={Javeria_kanwal}
            alt="Javeria Kanwal"
            className="rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-[400px] xl:h-[400px] object-cover border-4 border-gray-100 shadow-2xl transition-all duration-300 transform"
          />
          <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-gray-200 via-transparent to-gray-300 -z-10 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
