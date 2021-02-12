import { useState } from "react";

import logo from "./images/logo.svg";
import hamburger from "./images/icon-hamburger.svg";
import close from "./images/icon-close.svg";

const pages = [
  {
    title: "About",
    link: "#",
  },
  {
    title: "Careers",
    link: "#",
  },
  {
    title: "Events",
    link: "#",
  },
  {
    title: "Products",
    link: "#",
  },
  {
    title: "Support",
    link: "#",
  },
];

const products = [
  {
    title: "Deep earth",
    mobile: "./images/mobile/image-deep-earth.jpg",
    desktop: "./images/desktop/image-deep-earth.jpg",
  },
  {
    title: "Night arcade",
    mobile: "./images/mobile/image-night-arcade.jpg",
    desktop: "./images/desktop/image-night-arcade.jpg",
  },
  {
    title: "Soccer team VR",
    mobile: "./images/mobile/image-soccer-team.jpg",
    desktop: "./images/desktop/image-soccer-team.jpg",
  },
  {
    title: "The grid",
    mobile: "./images/mobile/image-grid.jpg",
    desktop: "./images/desktop/image-grid.jpg",
  },
  {
    title: "From up above VR",
    mobile: "./images/mobile/image-from-above.jpg",
    desktop: "./images/desktop/image-from-above.jpg",
  },
  {
    title: "Pocket borealis",
    mobile: "./images/mobile/image-pocket-borealis.jpg",
    desktop: "./images/desktop/image-pocket-borealis.jpg",
  },
  {
    title: "The curiosity",
    mobile: "./images/mobile/image-curiosity.jpg",
    desktop: "./images/desktop/image-curiosity.jpg",
  },
  {
    title: "Make it fisheye",
    mobile: "./images/mobile/image-fisheye.jpg",
    desktop: "./images/desktop/image-fisheye.jpg",
  },
];

function App() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <>
      <header className="bg-center bg-cover">
        <div className="px-6 pt-10 pb-56">
          <div className="relative flex items-center justify-between z-10">
            <div className="h-6">
              <a href="/">
                <img src={logo} alt="Loopstudios" className="h-full" />
              </a>
            </div>

            <div className="h-6 w-6 flex items-center justify-center md:hidden">
              <button className="focus:outline-none" onClick={handleToggle}>
                <img src={`${toggle ? close : hamburger}`} alt="Hamburger" />
              </button>
            </div>

            <div className="hidden space-x-5 md:block text-white">
              {pages.map((page, index) => (
                <a key={index} href={page.link}>
                  {page.title}
                </a>
              ))}
            </div>
          </div>

          <div
            className={`${
              toggle ? "block" : "hidden"
            } absolute bg-black top-0 bottom-0 left-0 right-0`}
          >
            <div className="flex items-center h-full">
              <div className="flex flex-col space-y-4 px-6 text-white">
                {pages.map((page, index) => (
                  <a key={index} href={page.link} className="josefin text-2xl">
                    {page.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-40 p-6 border-2 border-white">
            <h1 className="josefin text-4xl text-white">
              Immersive experiences that deliver
            </h1>
          </div>
        </div>
      </header>

      <main className="px-6">
        <section className="grid gap-y-12 py-24">
          <div
            id="about-image"
            className="bg-center bg-cover w-full h-56"
          ></div>
          <div className="text-center">
            <h2 className="josefin text-3xl mb-8">
              The leader in interactive VR
            </h2>
            <p className="text-gray-500">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </section>

        {/* Mobile Products */}
        <section className="pt-2 pb-24">
          <div>
            <h2 className="josefin text-center text-3xl">Our Creations</h2>
          </div>
          <div className="flex flex-col space-y-7 pt-14 pb-10">
            {products.map((product, index) => (
              <div
                className={`h-32 w-full bg-product-sm-${
                  index + 1
                } bg-cover bg-center relative`}
              >
                <div className="w-3/5 flex items-end h-full">
                  <div className="p-6">
                    <h3 className="josefin text-white text-2xl z-10 relative">
                      {product.title}
                    </h3>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900"></div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <a
              href="/#"
              className="text-lg uppercase border-2 border-black py-3 px-12 tracking-widest"
            >
              See All
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
