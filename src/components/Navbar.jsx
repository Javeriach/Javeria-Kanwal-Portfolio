import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';


// ---------------icons
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import LanguageIcon from '@mui/icons-material/Language';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Aos from 'aos';

function Navbar() {
  let [navDialogue, setNavDialogue] = useState(false);
  let [toggleDropDown, setToggleDropDown] = useState(false);
  let dropdownBtnRef = useRef();

  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);

  // --------Handlers

  let handleMenu = () => {
    setNavDialogue((ps) => !ps);
  };

  let handleDropDown = (e) => {
    e.preventDefault();

    setToggleDropDown((ps) => !ps);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownBtnRef.current &&
        !dropdownBtnRef.current.contains(event.target)
      ) {
        console.log('Clicked outside the button');
        // Call your function here
        setToggleDropDown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <nav className="shadow-xl fixed w-full font-Roboto  z-[4000] bg-black text-white top-[0%] flex justify-between md:justify-start items-center    h-[80px]  md:pe-12">
      <div
        className="h-full w-[200px] md:w-[600px] flex justify-center md:justify-start  items-center bg-darkBlue"
        style={{
          clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0 100%)',
        }}
      >
        <Link className="flex text-white  items-center text-[28px] md:ml-24 gap-2 font-bold " to={'/'}>
          Portfolio
        </Link>
      </div>

      {/* --------------------------------For large Screens -Menu */}
      <div className=" hidden md:flex gap-10 ">
        <Link className=" p-0 flex items-center text-[17px]" to={`/`}>
          Home
        </Link>

        <Link className="flex items-center text-[17px]" to={'/'}>
          About
        </Link>

        <Link className="flex items-center text-[17px]" to={'/projects'}>
          Projects
        </Link>
      </div>

      {/* ------------------Small screen navbar bar content */}
      <div className="flex md:hidden h-full justify-around items-center w-[50px] me-4">
        <button className="" onClick={() => setNavDialogue(true)}>
          <MenuIcon sx={{ fontSize: 45 }} />
        </button>
      </div>

      {/* --------------for small screens side bar menu*/}
      {navDialogue && (
        <div
          data-aos="fade-right"
          data-aos-duration="300"
          className=" fixed bg-white inset-0 z-[1000] md:hidden "
          onClick={() => setNavDialogue(false)}
        >
          <div id="nav-bar" className=" flex justify-between h-[80px] ">
            <div
              className="h-full w-[200px] flex justify-center items-center bg-darkBlue"
            >
              <Link
                className="flex  text-black font-bold  items-center text-[28px]  "
                to={'/'}
              >
               Portfolio
              </Link>
            </div>

            <button
              className="md:hidden font-bold me-4"
              onClick={(e) => {
                e.preventDefault();
                setNavDialogue(false);
              }}
            >
              {' '}
              <CloseIcon  className=" text-black "  sx={{ fontSize: 30 }} />
            </button>
          </div>
          {/* -----------menu */}
          <div className="mt-6 p-3">
            <Link
              className="font-medium cursor-pointer m-1 p-3 py-2 flex items-center justify-between hover:bg-gray-50 rounded-lg"
              to="/"
            >
              <div className="flex items-center h-full w-full">
                <HomeIcon  className=" text-black "  sx={{ fontSize: 30 }} />
                <label className="text-[20px] mt-1 ml-2  text-black ">Home</label>
              </div>

              <ChevronRightIcon   className=" text-black "  sx={{ fontSize: 30 }} />
            </Link>
            <div className="h-[1px] bg-black"></div>

            {/* About Us*/}
            <Link
              className="font-medium cursor-pointer m-1 p-3 py-2 flex items-center justify-between hover:bg-gray-50 rounded-lg"
              to="/"
            >
              <div className="flex items-center h-full w-full">
                <LanguageIcon  className=" text-black "  sx={{ fontSize: 30 }} />
                <label className="text-[20px] mt-1 ml-2  text-black ">About Me</label>
              </div>

              <ChevronRightIcon className=" text-black " sx={{ fontSize: 30 }} />
            </Link>

            {/*---------Seperator Line */}
            <div className="h-[1px] bg-black"></div>

            <Link
              className="font-medium cursor-pointer text-black m-1 p-3 py-2 flex items-center justify-between hover:bg-gray-50 rounded-lg"
              to="/projects"
            >
              <div className="flex items-center h-full w-full">
                <LanguageIcon sx={{ fontSize: 30 }} />
                <label className="text-[20px]  text-black  mt-1 ml-2">Projects</label>
              </div>

              <ChevronRightIcon  className='text-black' sx={{ fontSize: 30 }} />
            </Link>
           
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
