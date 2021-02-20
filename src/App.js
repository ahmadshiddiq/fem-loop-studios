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
      <header className="relative bg-center bg-cover bg-header-sm md:bg-header-md">
        <div className="px-6 pt-10 pb-56 md:px-20 md:pb-32 lg:px-40 lg:pt-16 lg:pb-36">
          {/* Navigation */}
          <div
            className={`${
              toggle ? "w-87 fixed" : "relative"
            } items-center flex  justify-between z-30`}
          >
            {/* logo */}
            <div className="h-6 lg:h-8">
              <a href="/">
                <img src={logo} alt="Loopstudios" className="h-full" />
              </a>
            </div>

            {/* Hamburger button */}
            <div className="flex items-center justify-center w-6 h-6 md:hidden">
              <button className="focus:outline-none" onClick={handleToggle}>
                <img src={`${toggle ? close : hamburger}`} alt="Hamburger" />
              </button>
            </div>

            {/* Menu */}
            <div className="hidden space-x-5 text-white md:block">
              {pages.map((page, index) => (
                <a key={index} href={page.link}>
                  {page.title}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu on active toggle */}
          <div
            className={`${
              toggle ? "block" : "hidden"
            } fixed bg-black inset-0 z-20`}
          >
            <div className="flex items-center h-full">
              <div className="flex flex-col px-6 space-y-4 text-white">
                {pages.map((page, index) => (
                  <a key={index} href={page.link} className="text-2xl josefin">
                    {page.title}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Hero */}
          <div className="relative z-10 p-6 mt-40 border-2 border-white md:mt-32 lg:w-7/12 lg:p-9">
            <h1 className="text-4xl text-white josefin lg:text-6xl">
              Immersive experiences that deliver
            </h1>
          </div>
        </div>

        {/* Filter to darking background */}
        <div className="absolute inset-0 z-0 bg-black opacity-40"></div>
      </header>

      <main className="px-6 lg:px-40 md:px-20">
        <section className="grid py-24 gap-y-12 lg:grid-cols-12 lg:gap-5">
          <div
            id="about-image"
            className="w-full h-56 bg-center bg-cover lg:row-start-1 lg:col-start-1 lg:col-end-9 lg:h-512"
          ></div>
          <div className="text-center lg:row-start-1 lg:col-start-7 lg:col-end-13 lg:text-left lg:flex">
            <div className="lg:self-end lg:bg-white lg:pt-20 lg:pl-20">
              <h2 className="mb-8 text-3xl md:mb-4 josefin lg:text-5xl lg:mb-8">
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
            <h2 className="text-3xl text-center josefin">Our Creations</h2>
          </div>
          <div className="flex flex-col pb-10 space-y-7 pt-14">
            {products.map((product, index) => (
              <div
                className={`h-32 w-full bg-product-mobile-${
                  index + 1
                } bg-cover bg-center relative`}
              >
                <div className="flex items-end w-3/5 h-full">
                  <div className="p-6">
                    <h3 className="relative z-10 text-2xl leading-7 text-white josefin">
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
              className="inline-block px-12 py-3 text-lg tracking-widest uppercase border-2 border-black"
            >
              See All
            </a>
          </div>
        </section>

        {/* Desktop Products */}
        <section className="hidden lg:block lg:mb-44">
          <div className="flex items-center justify-between mb-20">
            <h2 className="text-3xl josefin">Our Creations</h2>
            <a
              href="/#"
              className="inline-block px-12 py-2 text-lg tracking-widest uppercase border-2 border-black hover:bg-black hover:text-white"
            >
              See All
            </a>
          </div>
          <div>
            <div className="grid grid-cols-4 gap-7">
              {products.map((product, index) => (
                <div
                  className={`h-448 w-full bg-product-desktop-${
                    index + 1
                  } bg-cover bg-center relative`}
                >
                  <div className="flex items-end h-full">
                    <div className="p-6">
                      <h3 className="relative z-10 text-3xl leading-7 text-white josefin">
                        {product.title}
                      </h3>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent"></div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="text-white bg-black">
        <div className="grid text-center py-14 lg:grid-cols-2 lg:px-40 lg:gap-y-8">
          <div className="flex justify-center lg:justify-start">
            <img src={logo} alt="Loopstudios" className="h-6" />
          </div>

          <div className="flex flex-col mt-6 mb-10 space-y-4 lg:flex-row lg:space-y-0 lg:space-x-8 lg:mt-0 lg:mb-0">
            {pages.map((page, index) => (
              <a key={index} href={page.link}>
                {page.title}
              </a>
            ))}
          </div>

          <div className="flex justify-center space-x-4 lg:row-start-1 lg:col-start-2 lg:justify-end">
            <a href="#/">
              <img src={facebook} alt="Facebook" />
            </a>
            <a href="#/">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="#/">
              <img src={pinterest} alt="Pinterest" />
            </a>
            <a href="#/">
              <img src={instagram} alt="Instagram" />
            </a>
          </div>

          <div className="mt-4 text-center lg:text-right lg:mt-0">
            <span className="text-sm text-gray-400">
              &copy; 2021 Loopstudios. All rights reserved.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
