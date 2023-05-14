import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

const Projcard = ({ data }) => {
  if (!data) return null;
  const { title, img, demo, github } = data;
  return (
    <div className="relative group overflow-hidden rounded-md h-[450px]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition duration-300 ease-in-out"
        style={{
          backgroundImage: `url(${img})`,
        }}
      ></div>
      <div className="absolute text-center inset-0 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out flex flex-col justify-end px-4 py-6 bg-white bg-opacity-60">
        {" "}
        {/* Update classes to add frosted background effect */}
        <h3 className="text-darkgrey font-karla font-semibold text-lg mb-2">
          {title}
        </h3>
        <hr className="border-t border-white mb-4" />
        <div className="flex justify-center">
          <a
            href={`${demo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mr-6 bg-white px-4 py-2 rounded-md w-20"
          >
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-darkgrey text-3xl"
            />
          </a>
          <a
            href={`${github}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white px-4 py-2 rounded-md w-20"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-darkgrey text-3xl"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projcard;
