import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg";
import backgroundHero from "../images/mobile/image-hero.jpg";

const Header = () => {
  return (
    <header
      className="pt-10 pb-56 px-6 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundHero})` }}
    >
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          {/* logo */}
          <div className="logo">
            <img src={logo} alt="Loopstudios logo" />
          </div>

          {/* menu */}
          {/* <div className="sm:hidden md:hidden flex flex-row space-x-8 text-white">
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#events">Events</a>
            <a href="#products">Products</a>
            <a href="#support">Support</a>
          </div> */}

          {/* hamburger */}
          <div className="hamburger sm:block md:hidden">
            <img src={hamburger} alt="Hamburger icon" />
          </div>
        </nav>

        {/* Hero */}
        <div className="mt-40">
          <div className="border-2 w-full p-6">
            <p className="josefin text-4xl text-white uppercase">
              Immersive experiences that deliver
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
