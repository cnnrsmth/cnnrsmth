import React, { useState } from "react";
import jsonp from "jsonp";

function EmailSub() {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    const url =
      'https://gmail.us21.list-manage.com/subscribe/post?u=676509beee0abe4071241c09b&amp;id=3fa8ce1222&amp;f_id=0068ace1f0" method="post" id="mc-embedded-subscribe-form';
    setEmail("");
    e.target.reset();
    setShowSuccess(true);
    jsonp(`${url}&EMAIL=${email}`, { param: "c" }, (_, data) => {
      const { msg, result } = data;
    });
  };

  return (
    <div>
      <div>
        <form
          onSubmit={onSubmit}
          className="flex flex-row md:flex-col md:justify-center"
        >
          <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
            <div className="relative w-full md:w-2/3">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 dark:text-lightgrey"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                className="sm:rounded-none sm:rounded-l-lg block p-3 pl-10 w-full text-sm rounded-lg border text-darkgrey"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                type="email"
                id="email"
                required
              />
            </div>
            <div className="w-full md:w-1/3">
              <button
                type="submit"
                className="py-3 px-5 w-full text-sm font-medium text-center text-white rounded-lg border cursor-pointer bg-primaryblue border-primary-600 sm:rounded-none sm:rounded-r-lg hover:bg-secondaryblue"
              >
                Subscribe
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        {showSuccess && (
          <p className="text-green-700 font-bold font-karla text-xs">
            Lookout for an email from me soon!
          </p>
        )}
      </div>
    </div>
  );
}

export default EmailSub;
