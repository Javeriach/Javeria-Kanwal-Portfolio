import { IoMdArrowRoundForward } from "react-icons/io";
import { NavLink } from "react-router-dom";
import Javeria_kanwal from "../../Media/Javeria_Kanwal.png";
const MainContent = () => {
  return (
    <div className=" flex w-full h-96  lg:h-fit">
      <div className="w-full lg:w-[63vw] flex   pt-20 justify-center items-center">
        <div className="w-[80vw] lg:w-[37vw] xl:w-[40vw]">
          <h1 className="font-tektur  lg:w-[40rem] text-center lg:text-start font-semibold text-4xl lg:text-7xl">
            Hi, I'm Javeria-Full-Stack-{" "}
            <span className="bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 bg-clip-text text-transparent">
              Mern-Developer
            </span>
          </h1>
          <p className="font-manrope text-xl text-center  lg:text-start font-normal my-4">
            Turning complex problems into simple, elegant web solutions.
          </p>
          <div className="flex justify-center lg:justify-start">
            <NavLink to="contact">
              <button className="flex  items-center mt-4 gap-1 font-semi text-white bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 px-4 py-3 rounded-full">
                <span> Contact Me</span>
                <span>
                  <IoMdArrowRoundForward />
                </span>
              </button>
            </NavLink>
          </div>
        </div>
      </div>

      <div className=" w-0 flex items-center sm:w-0 md:w-0 lg:w-[45vw] justify-start">
        <img src={Javeria_kanwal} alt="" className="rounded-badge w-[350px]  h-[400px]" />
      </div>
    </div>
  );
};

export default MainContent;
