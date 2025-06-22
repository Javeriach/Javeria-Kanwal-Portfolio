import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HiMenuAlt3, HiX } from "react-icons/hi"; // For the hamburger and cross icons

const Navbar = () => {
  const [isAboutRoute, setIsAboutRoute] = useState(false);
  const [isProjectsRoute, setIsProjectRoute] = useState(false);
  const [isContactRoute, setIsContactRoute] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // State to manage mobile menu visibility

  return (
    <div className="flex justify-between items-center h-20 px-8 md:px-10 lg:px-[7.5rem] py-10 border-b-2 border-stone-300">
      {/* Logo/Name Section */}
      <NavLink to="/">
        <h1 className="text-2xl font-semibold  font-tektur cursor-pointer">
          Javeria Kanwal
        </h1>
      </NavLink>

      {/* Mobile Hamburger Icon */}
      <div className="md:hidden flex items-center px-0 right-0">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} // Toggle the menu visibility
          className="text-2xl  left-0 right-0  text-push-200"
        >
          {isMobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}{" "}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="fixed z-50 bg-gradientColor1 left-0 top-20 border-2 border-stone-300 w-[50vw] h-[100vh] bg-white px-6 py-3 md:hidden">
          <ul className="flex flex-col">
            <NavLink to="about">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-left px-3 py-2 transition-all rounded-full font-manrope text-[20px] font-semibold"
              >
                About
              </button>
            </NavLink>

            <NavLink to="projects">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-left px-3 py-2 transition-all rounded-full font-manrope text-[20px] font-semibold"
              >
                Projects
              </button>
            </NavLink>

            <NavLink to="contact">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full text-left px-3 py-2 transition-all rounded-full font-manrope text-[20px] font-semibold"
              >
                Contact
              </button>
            </NavLink>
          </ul>
        </div>
      )}

      {/* Navigation Links */}

      <div className="font-manrope hidden md:flex  text-[15px] font-semibold  border-black">
        <ul className=" md:flex ">
          <NavLink
            to="about"
            className={({ isActive }) =>
              isActive ? setIsAboutRoute(true) : setIsAboutRoute(false)
            }
          >
            <div
              className={`p-[2px] ${
                isAboutRoute
                  ? "bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600"
                  : ""
              } rounded-full`}
            >
              <button
                className={`${
                  isAboutRoute ? "bg-white" : ""
                } dark:bg-black text-push-500 hover:text-push-300 transition-all px-3 py-[7px] rounded-full font-manrope text-[15px] font-semibold`}
              >
                About
              </button>
            </div>
          </NavLink>

          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? setIsProjectRoute(true) : setIsProjectRoute(false)
            }
          >
            <div
              className={`p-[2px] ${
                isProjectsRoute
                  ? "bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600"
                  : ""
              } rounded-full`}
            >
              <button
                className={`${
                  isProjectsRoute ? "bg-white" : ""
                } dark:bg-black text-push-500 hover:text-push-300 transition-all px-3 py-[7px] rounded-full font-manrope text-[15px] font-semibold`}
              >
                Projects
              </button>
            </div>
          </NavLink>

          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? setIsContactRoute(true) : setIsContactRoute(false)
            }
          >
            <div
              className={`p-[2px] ${
                isContactRoute
                  ? "bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600"
                  : ""
              } rounded-full`}
            >
              <button
                className={`${
                  isContactRoute ? "bg-white" : ""
                } dark:bg-black text-push-500 hover:text-push-300 transition-all px-3 py-[7px] rounded-full font-manrope text-[15px] font-semibold`}
              >
                Contact
              </button>
            </div>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
