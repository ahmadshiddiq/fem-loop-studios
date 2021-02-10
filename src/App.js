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
  return (
    <>
      <header className="bg-center bg-cover">
        <div className="px-6 pt-10 pb-56">
          <div className="flex items-center justify-between">
            <div className="h-6">
              <img src={logo} alt="Loopstudios" className="h-full" />
            </div>
            <div className="h-6 w-6 flex items-center justify-center">
              <img src={hamburger} alt="Hamburger" />
            </div>
            <div className="hidden space-x-5">
              {pages.map((page, index) => (
                <a key={index} href={page.link}>
                  {page.title}
                </a>
              ))}
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

// Cara looping data dengan map
// {pages.map((page) => (
//   <p>{page.title}</p>
// ))}
