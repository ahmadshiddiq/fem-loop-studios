import { useState } from "react";

import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Nav = () => {
  const [toggle, setToggle] = useState(false);
  // const [open, setOpen] = useState(false)

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex absolute w-full flex-col md:flex-row md:justify-between">
      <div className="px-6 flex justify-between items-center py-6 bg-gray-800 md:bg-transparent">
        <a href="/">
          <img src={logo} alt="Loopstudios logo" className="h-6" />
        </a>
        <button onClick={handleClick} className="focus:outline-none">
          <img
            src={`${toggle ? close : hamburger}`}
            alt="Hamburger icon"
            className="h-4 md:hidden"
          />
          {/* <img src={close} alt="Close icon" className="h-4 md:hidden" /> */}
        </button>
      </div>
      <div className={`text-white uppercase ${toggle ? 'flex' : 'hidden'} flex-col md:flex-row items-center bg-gray-600 md:bg-transparent w-full pt-4 md:pt-0 md:w-1/3 md:flex`}>
        <a href="#dadada" className="py-6 w-full hover:bg-gray-300 hover:text-gray-800 text-center mb-4 md:mb-0">About</a>
        <a href="#dadada" className="py-6 w-full hover:bg-gray-300 hover:text-gray-800 text-center mb-4 md:mb-0">Careers</a>
        <a href="#dadada" className="py-6 w-full hover:bg-gray-300 hover:text-gray-800 text-center mb-4 md:mb-0">Events</a>
        <a href="#dadada" className="py-6 w-full hover:bg-gray-300 hover:text-gray-800 text-center mb-4 md:mb-0">Products</a>
        <a href="#dadada" className="py-6 w-full hover:bg-gray-300 hover:text-gray-800 text-center">Support</a>
      </div>
    </nav>
  );
};

export default Nav;
