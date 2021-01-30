import logo from "../images/logo.svg";
import backgroundHero from "../images/desktop/image-hero.jpg";

const Header = () => {
  return (
    // Header
    <header
      className="pt-16 pb-36 bg-center bg-cover"
      style={{ backgroundImage: `url(${backgroundHero})` }}
    >
      <div className="container mx-auto">
        <nav className="flex justify-between items-center">
          {/* logo */}
          <div>
            <img src={logo} alt="Loopstudios logo" />
          </div>

          {/* menu */}
          <div className="flex flex-row space-x-8 text-white">
            <a href="#about">About</a>
            <a href="#careers">Careers</a>
            <a href="#events">Events</a>
            <a href="#products">Products</a>
            <a href="#support">Support</a>
          </div>
        </nav>

        {/* Hero */}
        <div className="mt-32">
          <div className="border-2 w-5/12 pt-11 pr-20 pb-11 pl-11">
            <p className="text-6xl text-white uppercase">
              Immersive experiences that deliver
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
