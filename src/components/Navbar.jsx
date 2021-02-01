import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center">
      {/* logo */}
      <div id="logo">
        <a href="/">
          <img src={logo} alt="Loopstudios logo" />
        </a>
      </div>

      {/* menu */}
      <div className="hidden space-x-8 text-white md:flex">
        <a href="#about">About</a>
        <a href="#careers">Careers</a>
        <a href="#events">Events</a>
        <a href="#products">Products</a>
        <a href="#support">Support</a>
      </div>

      {/* hamburger */}
      <div id="hamburger" className="cursor-pointer md:hidden">
        <img src={hamburger} alt="Hamburger icon" />
      </div>
    </nav>
  );
};

export default Navbar;
