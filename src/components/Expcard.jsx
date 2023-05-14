import React from "react";

function Expcard({ data: { img, title, dates, description } }) {
  return (
    <div className="flex flex-col border bg-white border-gray-300 drop-shadow p-10 rounded-lg hover:scale-[1.02] transition-transform duration-300">
      <div className="flex justify-end">
        <p className="text-sm text-gray-500 font-roboto">{dates}</p>
      </div>
      <div className="flex items-center mb-4">
        <img src={img} alt="img" className="w-8 h-8 object-contain" />
        <h3 className="text-xl text-darkgrey font-bold font-karla ml-4">
          {title}
        </h3>
      </div>
      <ul className="list-disc list-inside space-y-4">
        {description.map((item, index) => (
          <li key={index} className="text-sm text-darkgrey font-roboto ml-1">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Expcard;
