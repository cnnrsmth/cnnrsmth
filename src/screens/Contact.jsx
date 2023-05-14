import { useEffect, useRef } from "react";

import ContactForm from "../components/ContactForm";

import contactPic from "../assets/contact.png";

const Contact = () => {
  const contactRef = useRef(null);

  useEffect(() => {
    const options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const url = `${document.location.pathname}#contact`;
          document.location.replace(url);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    observer.observe(contactRef.current);

    return () => observer.unobserve(contactRef.current);
  }, []);

  return (
    <section ref={contactRef} id="contact" className="contact pt-32">
      <h1 className="text-darkgrey font-karla font-bold text-2xl md:text-3xl pb-4 ml-10 lg:ml-0">
        Reach Out, Let's Talk!
      </h1>
      <hr className="w-24 h-1 mx-auto md:mx-20 border-0 rounded mb-10 bg-primaryblue" />
      <div className="flex flex-wrap justify-center items-center px-10 md:px-0">
        <div className="w-full md:w-2/6">
          <img
            src={contactPic}
            alt="Big things coming soon. Be the first to benefit!"
            className="w-full mb-10 invisible hidden md:visible md:block"
          />
        </div>
        <div className="w-full md:w-4/6 max-w-screen-sm mx-auto md:mx-0 md:pl-24">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
