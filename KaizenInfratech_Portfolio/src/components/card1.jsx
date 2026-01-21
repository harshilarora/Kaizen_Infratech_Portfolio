import React from "react";

function Card1({ Title, description, url }) {
  return (
    <div
      className="
        relative
        w-[320px] h-[240px]
        bg-[#f0f0f0]
        px-8 pt-8 pb-14
        rounded-lg
       
      "
    >
      {/* Background Icon */}
      <img
        src={url}
        alt="card icon"
        className="
          absolute
          right-0 top-8
          w-52 h-52
          opacity-5
          pointer-events-none
          z-1
        "
      />

      {/* Content */}
      <h3 className="text-md font-md font-primary mt-23 relative z-10">
        {Title}
      </h3>

      <p className="text-[0.725rem] text-gray-600 font-secondary font-light pt-2 relative z-10">
        {description}
      </p>

      {/* Arrow */}
      {/* <div
        className="
          absolute bottom-6 right-6
          w-9 h-9
          border-2 border-yellow-400
          flex items-center justify-center
          text-lg
        "
      >
        →
      </div> */}
    </div>
  );
}

export default Card1;
