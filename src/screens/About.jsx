import { useEffect, useRef } from "react";
import { Link } from "react-scroll";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBlog } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import displaypic from "../assets/displaypic.png";
import technologies from "../assets/technologies.png";
import subscribe from "../assets/subscribe2.png";

import EmailSub from "../components/EmailSub";

const About = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const url = `${document.location.pathname}#about`;
          document.location.replace(url);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(aboutRef.current);

    return () => observer.unobserve(aboutRef.current);
  }, []);

  return (
    <section ref={aboutRef} id="about" className="about">
      <div className="grid md:grid-cols-3 md:gap-4 pt-40">
        <div className=" md:col-span-2 md:flex md:flex-col justify-center">
          <h1 className="text-primaryblue font-karla font-bold text-3xl text-center md:text-left md:text-4xl mb-3 mt-1 md:mt-0">
            Connor Smith
          </h1>
          <h2 className="text-lightgrey font-karla font-bold text-2xl text-center md:text-left md:text-3xl mb-3">
            ~ MVP Personal Website ~
          </h2>
          <hr className="w-24 h-1 mx-auto md:mx-20 border-0 rounded mt-2 my-4 bg-darkgrey" />
          <div className="text-darkgrey font-karla text-center text-base md:text-xl md:text-left tracking-wider leading-loose">
            <p className="mb-6 w-full px-10 md:px-0 md:w-5/6 text-sm sm:text-lg">
              Welcome to v1 of my personal website! I've built this version as a
              shopfront for my Github profile.
            </p>
            <p className="mb-6 w-full px-10 md:px-0 md:w-5/6 text-sm sm:text-lg">
              I plan to add features and content over time incl. product builds,
              blog posts, and more. Eventually, I'll host the site as a
              stand-alone.
            </p>
            <p className="mb-6 w-full px-10 md:px-0 md:w-5/6 text-sm sm:text-lg">
              My interests include product, technology, lifestyle design, health
              & fitness, biohacking, travelling, productivity, and continuous
              improvement.
            </p>
            <p className="mb-6 w-full px-10 md:px-0 md:w-5/6 text-sm sm:text-lg">
              This site will likely orient around these passions, so stay tuned
              if they resonate!
            </p>
            <div className="flex justify-center">
              <div className="md:mt-10">
                <EmailSub />
              </div>
              <img
                src={subscribe}
                alt="Big things coming soon. Be the first to benefit!"
                className="w-0 md:w-2/6 mb-10 invisible md:visible"
              />
            </div>
          </div>
        </div>
        <div className="md:col-span-1 md:relative flex flex-col items-center justify-center">
          <img
            src={displaypic}
            alt="personal picture"
            className="w-40 md:w-2/3 z-30 mt-5 sm:mt-0"
          />
          <div className="flex w-full justify-center space-x-8 mt-10">
            <a href="https://github.com/cnnrsmth" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-darkgrey text-xl sm:text-3xl transition-colors duration-100 hover:text-primaryblue"
              />
            </a>
            <a href="https://www.linkedin.com/in/cnnrsmth" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-darkgrey text-xl sm:text-3xl transition-colors duration-100 hover:text-primaryblue"
              />
            </a>
            <Link to={"blog"} className="cursor-pointer" smooth>
              <FontAwesomeIcon
                icon={faBlog}
                className="text-darkgrey text-xl sm:text-3xl transition-colors duration-100 hover:text-primaryblue"
              />
            </Link>
            <Link to={"contact"} className="cursor-pointer" smooth>
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-darkgrey text-xl sm:text-3xl transition-colors duration-100 hover:text-primaryblue"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
