import React from "react";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { Link, NavLink } from 'react-router-dom';


// images
import cardIcon1 from "../assets/images/cardicon1.png";
import schoolIcon from "../assets/images/schoolicon.png";
import factoryIcon from "../assets/images/factoryicon.png";
import civilIcon from "../assets/images/civilicon.png";
import hallIcon from "../assets/images/hallicon.png";

function Card1({ Title, description, url, src }) {
  return (
    <div
      className="
        relative
        w-[380px] h-[240px]
        bg-[#f0f0f0]
        px-8 pt-8 pb-14
        rounded-lg"
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
      <NavLink to = {src}>
      <div 
        className="
          absolute top-55 right-6
          w-9 h-9
          border-2 border-yellow-400
          flex items-center justify-center
          text-lg bg-Btn-Background
          hover:scale-110 hover:bg-primary transition-transform duration-300
          cursor-pointer"
        >
        
        <FaArrowRight />

      </div>
    </NavLink>

    </div>
  );
}

function ServicesCards() {
  const cardsData = [
    {
      Title: "General Construction",
      description:
        "Services encompassing commercial and residential renovations, structural upgrades, interior fit-outs, and complete project executions.",
      url: cardIcon1,
      src: "/about",
    },
    {
      Title: "Institutional Construction",
      description:
        "We deliver institutional construction solutions for educational, healthcare, and public facilities, built to meet safety and regulatory standards.",
      url: schoolIcon,
      src: "/about",
    },
    {
      Title: "Industrial Construction",
      description:
        "We specialize in industrial construction, delivering gas station depots, manufacturing facilities, and utilities infrastructure.",
      url: factoryIcon,
      src: "/about",
    },
    {
      Title: "Civil Construction",
      description:
        "Every project is executed with strict quality control, smart planning, and on-time performance, bringing commitment to resilience.",
      url: civilIcon,
      src: "/about",
    },
    {
      Title: "Assembly Construction",
      description:
        "We provide construction solutions for public gathering spaces such as auditoriums, convention centers, terminals, and large-scale facilities.",
      url: hallIcon,
      src: "/about",
    },
  ];

  return (
    <div className=' grid grid-cols-3 gap-6 pt-4 pb-10 justify-items-center'>
              <div className=" px-2">
                <h2 className=" text-xl sm:text-4xl py-10 leading-10 font-primary font-md text-font text-left ">What We Deliver.</h2>
                <p className="text-font font-secondary font-light text-sm border-l-2 border-primary px-2 w-full">We deliver civil and infrastructure construction solutions engineered for complex systems, including gas stations and depots, utility facilities, industrial factory setups, and residential and commercial infrastructure.</p>
                
              </div>
      {cardsData.map((card, index) => (
        <Card1
          key={index}
          Title={card.Title}
          description={card.description}
          url={card.url}
          src={card.src}
        />
      ))}
    </div>
  );
}

export default ServicesCards;
