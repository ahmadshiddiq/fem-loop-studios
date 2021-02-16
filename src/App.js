import { useState } from "react";

import logo from "./images/logo.svg";
import hamburger from "./images/icon-hamburger.svg";
import close from "./images/icon-close.svg";

import facebook from "./images/icon-facebook.svg";
import twitter from "./images/icon-twitter.svg";
import pinterest from "./images/icon-pinterest.svg";
import instagram from "./images/icon-instagram.svg";

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
      <header className="bg-header-sm bg-center bg-cover lg:bg-header-lg">
        <div className="px-6 pt-10 pb-56 lg:px-40 lg:pt-16 lg:pb-36">
          <div
            className={`${
              toggle ? "w-87 fixed" : "relative"
            } flex items-center justify-between z-30`}
          >
            <div className="h-6 lg:h-8">
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
            } fixed bg-black top-0 bottom-0 left-0 right-0 z-20`}
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

          <div className="mt-40 p-6 border-2 border-white lg:w-7/12 lg:p-9">
            <h1 className="josefin text-4xl text-white lg:text-6xl">
              Immersive experiences that deliver
            </h1>
          </div>
        </div>
      </header>

      <main className="px-6 lg:px-40">
        <section className="grid gap-y-12 py-24 lg:grid-cols-12 lg:gap-5">
          <div
            id="about-image"
            className="bg-center bg-cover w-full h-56 lg:row-start-1 lg:col-start-1 lg:col-end-8 lg:h-512"
          ></div>
          <div className="text-center lg:row-start-1 lg:col-start-7 lg:col-end-13 lg:text-left lg:flex">
            <div className="lg:self-end lg:bg-white lg:pt-20 lg:pl-20">
              <h2 className="josefin text-3xl mb-8 lg:text-5xl lg:mb-8">
                The leader in interactive VR
              </h2>
              <p className="text-gray-500">
                Founded in 2011, Loopstudios has been producing world-class
                virtual reality projects for some of the best companies around
                the globe. Our award-winning creations have transformed
                businesses through digital experiences that bind to their brand.
              </p>
            </div>
          </div>
        </section>

        {/* Mobile Products */}
        <section className="pt-2 pb-24 lg:hidden">
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

        {/* Desktop Products */}
        <section className="hidden lg:block lg:mb-44">
          <div className="flex items-center justify-between mb-20">
            <h2 className="josefin text-3xl">Our Creations</h2>
            <a
              href="/#"
              className="text-lg uppercase border-2 border-black py-3 px-12 tracking-widest inline-block"
            >
              See All
            </a>
          </div>
          <div>
            <div className="grid grid-cols-4 gap-7">
              {products.map((product, index) => (
                <div
                  className={`h-96 w-full bg-product-lg-${
                    index + 1
                  } bg-cover bg-center relative`}
                >
                  <div className="flex items-end h-full">
                    <div className="p-6">
                      <h3 className="josefin text-white text-3xl z-10 relative">
                        {product.title}
                      </h3>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-800"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-black text-white">
        <div className="grid text-center py-14 lg:grid-cols-2 lg:px-40 lg:gap-y-8">
          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="Loopstudios" className="h-6" />
          </div>

          <div className="flex flex-col space-y-4 mt-6 mb-10 lg:flex-row lg:space-y-0 lg:space-x-4 lg:mt-0 lg:mb-0">
            {pages.map((page, index) => (
              <a key={index} href={page.link}>
                {page.title}
              </a>
            ))}
          </div>

          <div className="flex space-x-4 justify-center lg:row-start-1 lg:col-start-2 lg:justify-end">
            <a href="#/">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#/">
              <img src={twitter} alt="Facebook" />
            </a>
            <a href="#/">
              <img src={pinterest} alt="Facebook" />
            </a>
            <a href="#/">
              <img src={instagram} alt="Facebook" />
            </a>
          </div>

          <div className="mt-4 lg:mt-0 text-right">
            <span className="text-gray-500 text-sm">
              &copy; 2021 Loopstudios. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
