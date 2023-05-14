import { useEffect, useRef } from "react";
import MultiSlider from "../components/MultiSlider";
import projectsData from "../data/projects.json";

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const url = `${document.location.pathname}#projects`;
          document.location.replace(url);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(projectsRef.current);

    return () => observer.unobserve(projectsRef.current);
  }, []);

  return (
    <section ref={projectsRef} id="projects" className="projects pt-32">
      <div className="px-8">
        <h1 className="text-darkgrey font-karla font-bold text-3xl pb-4">
          Projects Completed So Far
        </h1>
        <hr className="w-24 h-1 mx-auto md:mx-20 border-0 rounded mb-10 bg-primaryblue" />
        <div className="flex justify-center">
          <MultiSlider />
        </div>
      </div>
    </section>
  );
};

export default Projects;
