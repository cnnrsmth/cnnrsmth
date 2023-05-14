import { useEffect, useRef } from "react";

import blogbackground from "../assets/blogbackground.png";

import EmailSub from "../components/EmailSub";

const Blog = () => {
  const blogRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const url = `${document.location.pathname}#blog`;
          document.location.replace(url);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(blogRef.current);

    return () => observer.unobserve(blogRef.current);
  }, []);

  return (
    <section
      ref={blogRef}
      id="blog"
      className="blog bg-cover bg-center min-h-screen mt-32 pt-32 mr-[-4.5rem]"
      style={{ backgroundImage: `url(${blogbackground})`, height: "1vh" }}
    >
      <div className="flex flex-col items-start h-full">
        <h1 className="text-darkgrey font-karla font-bold text-2xl md:text-3xl pb-4 ml-10 lg:ml-0">
          Writing / Publications
        </h1>
        <hr className="w-24 h-1 mx-auto md:mx-20 border-0 rounded mb-10 bg-primaryblue" />
        <div className="flex flex-col justify-evenly h-3/5">
          <h2 className="text-darkgrey font-karla font-bold text-3xl ml-10 lg:ml-0">
            Coming soon...
          </h2>
          <div className="ml-10 sm:ml-0">
            <EmailSub />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
