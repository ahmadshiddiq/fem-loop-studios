import { useState } from "react";

import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import close from "../images/icon-close.svg";

const Nav = () => {
  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="flex flex-col md:flex-row md:justify-between">
      <div className="flex justify-between items-center">
        <a href="/">
          <img src={logo} alt="Loopstudios logo" className="h-6" />
        </a>
        <button onClick={handleClick} className="focus:outline-none">
          <img
            src={`${toggle ? hamburger : close}`}
            alt="Hamburger icon"
            className="h-4 md:hidden"
          />
          {/* <img src={close} alt="Close icon" className="h-4 md:hidden" /> */}
        </button>
      </div>
      <div className="hidden text-white uppercase md:block">
        <a href="#dadada">About</a>
        <a href="#dadada">Careers</a>
        <a href="#dadada">Events</a>
        <a href="#dadada">Products</a>
        <a href="#dadada">Support</a>
      </div>
    </nav>
  );
};

export default Nav;
