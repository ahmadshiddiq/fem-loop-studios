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
              <img src={logo} alt="Loopstudios" className="h-full" />
            </div>

            <div className="h-6 w-6 flex items-center justify-center">
              <button className="focus:outline-none" onClick={handleToggle}>
                <img src={`${toggle ? hamburger : close}`} alt="Hamburger" />
              </button>
            </div>

            <div className="hidden space-x-5">
              {pages.map((page, index) => (
                <a key={index} href={page.link}>
                  {page.title}
                </a>
              ))}
            </div>
          </div>

          {/* set to hidden for sec */}
          <div
            className={`${
              toggle ? "hidden" : "block"
            } absolute bg-black top-0 bottom-0 left-0 right-0`}
          >
            <div className="flex items-center h-full">
              <div className="flex flex-col space-y-4 px-6">
                {pages.map((page, index) => (
                  <a
                    key={index}
                    href={page.link}
                    className="josefin text-2xl text-white"
                  >
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
    </>
  );
}

export default App;
