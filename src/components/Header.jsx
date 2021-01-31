import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="bg-center bg-cover">
      <div className="pt-10 pb-56 px-6 lg:pt-16 lg:pb-36 lg:px-40">
        <nav className="flex justify-between items-center">
          {/* logo */}
          <div className="logo">
            <img src={logo} alt="Loopstudios logo" />
          </div>

          {/* menu */}
          <div className="hidden flex-row space-x-8 text-white md:flex">
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#events">Events</a>
            <a href="#products">Products</a>
            <a href="#support">Support</a>
          </div>

          {/* hamburger */}
          <div className="hamburger cursor-pointer md:hidden">
            <img src={hamburger} alt="Hamburger icon" />
          </div>
        </nav>

        {/* Hero */}
        <div className="mt-40">
          <div className="border-2 w-full p-6 md:w-8/12 lg:w-5/12">
            <p className="josefin text-4xl text-white uppercase md:text-5xl">
              Immersive experiences that deliver
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
