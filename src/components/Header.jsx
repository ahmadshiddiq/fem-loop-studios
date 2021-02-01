import Navbar from "./Navbar";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="bg-center bg-cover">
      <div className="container mx-auto">
        <div className="pt-10 pb-56 px-6 lg:pt-16 lg:pb-36 lg:px-40">
          <Navbar />
          <Hero />
        </div>
      </div>
    </header>
  );
};

export default Header;
