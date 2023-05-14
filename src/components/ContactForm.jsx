import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactForm() {
  const form = React.useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7xp3pex",
        "template_1zau5i9",
        form.current,
        "DVTloEqjo-VDFPfHK"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <div>
      <ToastContainer />
      <form ref={form} onSubmit={sendEmail} className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Full Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="shadow-sm bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:text-lightgray focus:bg-white"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="shadow-sm bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:text-lightgray focus:bg-white"
            placeholder="name@domain.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Subject
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            className="shadow-sm bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:text-lightgray focus:bg-white"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-bold text-gray-700"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="6"
            className="shadow-sm bg-white border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 focus:text-lightgray focus:bg-white"
            placeholder="Leave a comment..."
            required
          />
        </div>
        <button
          type="submit"
          className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primaryblue border-primary-600 hover:bg-secondaryblue"
        >
          Send message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
