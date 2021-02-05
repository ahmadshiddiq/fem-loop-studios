import Nav from "./Nav";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="bg-cover bg-center">
      <div className="container pt-10 pb-56 px-6">
        <Nav />
        <Hero />
      </div>
    </header>
  );
};

export default Header;
