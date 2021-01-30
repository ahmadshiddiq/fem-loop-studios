import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import backgroundHero from "../images/mobile/image-hero.jpg";

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
          <div className="hidden md:block flex flex-row space-x-8 text-white">
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
          <div className="border-2 w-full p-6 lg:w-5/12">
            <p className="josefin text-4xl md:text-6xl lg:text-7xl text-white uppercase">
              Immersive experiences that deliver
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
