import Nav from "./Nav";
import Hero from "./Hero";

const Header = () => {
  return (
    <header className="bg-cover bg-center">
      <Nav />
      <div className="container pb-96 px-6 pt-40">
        <Hero />
      </div>
    </header>
  );
};

export default Header;
