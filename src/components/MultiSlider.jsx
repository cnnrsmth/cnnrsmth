import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import Projcard from "../components/Projcard";
import projectsData from "../data/projects.json";

const MultiSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
      <button className="slick-prev">
        <FontAwesomeIcon
          icon={faChevronLeft}
          className="text-darkgrey text-3xl"
        />
      </button>
    ),
    nextArrow: (
      <button className="slick-next">
        <FontAwesomeIcon
          icon={faChevronRight}
          className="text-darkgrey text-3xl"
        />
      </button>
    ),
    afterChange: (currentSlide) => {
      const totalSlides = projectsData.length;
      if (currentSlide === totalSlides) {
        sliderRef.current.slickGoTo(0);
      }
    },
  };

  return (
    <div className="w-full">
      <Slider ref={sliderRef} {...settings}>
        {projectsData.map((item, index) => (
          <div key={index}>
            <Projcard data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MultiSlider;
