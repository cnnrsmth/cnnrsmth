import React from "react";

import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBlog, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-lightgrey py-8 lg:-mx-8 mt-8">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4 ml-auto mr-10 md:mr-0">
          <a href="https://github.com/cnnrsmth" target="_blank">
            <FontAwesomeIcon
              icon={faGithub}
              className="text-darkgrey text-xl sm:text-2xl"
            />
          </a>
          <a href="https://www.linkedin.com/in/cnnrsmth" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-darkgrey text-xl sm:text-2xl"
            />
          </a>
          <Link to={"blog"} className="cursor-pointer" smooth>
            <FontAwesomeIcon
              icon={faBlog}
              className="text-darkgrey text-xl sm:text-2xl"
            />
          </Link>
          <Link to={"contact"} className="cursor-pointer" smooth>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-darkgrey text-xl sm:text-2xl"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
