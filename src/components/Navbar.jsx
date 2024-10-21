import logo from "../assets/logoJo.png";
// import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { useState } from "react";
import { NAVIGATION_LINKS } from "../constants";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);

  const handleToggle = () => {
    setisMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setisMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Menu */}
      <nav className="mx-auto max-w-md rounded-full border border-white/30 backdrop-blur-lg hidden lg:flex p-2">
        <div className="flex justify-center items-center w-full gap-8">
          <div className="flex flex-shrink-0 items-center">
            <a href="#hero" onClick={(e) => handleLinkClick(e, "#hero")}>
              <img src={logo} width={24} height={24} alt="Logo" />
            </a>
          </div>
          <ul className="flex justify-center items-center gap-4">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="transition ease-out duration-500 text-sm hover:text-stone-400"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <nav className="py-2 px-4 backdrop-blur-md lg:hidden">
        <div className="flex justify-between items-center">
          <div className="flex flex-shrink-0 items-center">
            <a href="/">
              <img src={logo} width={40} height={40} alt="Logo" />
            </a>
          </div>
          <div className="flex items-center">
            <button
              onClick={handleToggle}
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? (
                <RiCloseFill className="text-2xl" />
              ) : (
                <RiMenu3Fill className="text-2xl" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <ul className="flex flex-col items-center justify-center gap-6 backdrop-blur-md">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="text-lg"
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </>
  );
};

export default Navbar;
