import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowDown } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../components/Dropdown";
import Timeline from "../components/Timeline";
import Expcard from "../components/Expcard";
import experienceData from "../data/experience.json";

const Experience = () => {
  const experienceRef = useRef(null);

  const [activeYearParent, setActiveYearParent] = useState("2021+");

  const dropdownItems = [
    {
      dropdownItem: "2021+",
      id: 1,
    },
    {
      dropdownItem: "2018+",
      id: 2,
    },
    {
      dropdownItem: "2014+",
      id: 3,
    },
  ];

  const filteredExperienceData = experienceData.filter(
    (item) => item.dropDownYear === activeYearParent
  );

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const url = `${document.location.pathname}#experience`;
          document.location.replace(url);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(experienceRef.current);

    return () => observer.unobserve(experienceRef.current);
  }, []);

  return (
    <section ref={experienceRef} id="experience" className="experience pt-32">
      <div>
        <h1 className="text-darkgrey font-karla font-bold text-2xl md:text-3xl pb-4 ml-10 lg:ml-0">
          Career Journey So Far
        </h1>
        <hr className="w-24 h-1 mx-auto md:mx-20 border-0 rounded mb-10 bg-primaryblue" />
        <div className="block ml-10 lg:hidden mb-2">
          <Dropdown
            data={dropdownItems}
            setActiveYearParent={setActiveYearParent}
          />
        </div>
        <div className="h-fit grid grid-cols-6 gap-4">
          <div className="hidden lg:col-span-1 lg:flex lg:items-center">
            <Timeline
              data={dropdownItems}
              setActiveYearParent={setActiveYearParent}
            />
          </div>
          <div className="mx-10 col-span-6 lg:col-span-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
            {filteredExperienceData.map((item) => (
              <Expcard key={item.id} data={item.exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
