import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

import logocard from "../assets/logocard.png";

const navlinks = [
  {
    title: "About",
    link: "about",
  },
  {
    title: "Experience",
    link: "experience",
  },
  {
    title: "Projects",
    link: "projects",
  },
  {
    title: "Blog",
    link: "blog",
  },
  {
    title: "Contact",
    link: "contact",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
  };

  const [scroll, setScroll] = useState(false);

  const handleScroll = () => {
    setScroll(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`z-40 fixed w-full lg:-mx-8 py-6 px-12 ${
        scroll ? " transition-all duration-1000" : ""
      } ${
        scroll
          ? "bg-white bg-opacity-80 border-b border-gray-300 shadow-md"
          : ""
      }`}
    >
      <div className="mx-auto px-4  sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0 mr-6">
            <img src={logocard} alt="Logo" className="w-14 rounded-md" />
          </div>
          {/* navlinks */}
          {/* hidden md:block applies display: none style to the element for screen sizes smaller than the md breakpoint (768px), and then applies display: block for larger screens */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navlinks.map((link, index) => (
                <Link
                  key={index}
                  activeClass="active"
                  className="text-darkgrey font-karla font-bold hover:bg-primaryblue hover:text-white px-3 py-2 rounded-md text-md"
                  smooth
                  spy
                  to={link.link}
                  style={{ cursor: "pointer" }}
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          {/* hamburger button */}
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={handleMenu}
              className="inline-flex items-center justify-center p-4 rounded-md focus:outline-none"
            >
              <span className="sr-only">Open Main Menu</span>
              {open ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {/* mobile-menu */}
      {open ? (
        <div className="md:hidden bg-white">
          <div className="ox-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navlinks.map((link, index) => (
              <Link
                key={index}
                activeClass="active"
                className="text-darkgrey hover:bg-primaryblue hover:bg-opacity-50 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                smooth
                spy
                to={link.link}
                onClick={() => setOpen(false)}
                style={{ cursor: "pointer" }}
              >
                {link.title}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
