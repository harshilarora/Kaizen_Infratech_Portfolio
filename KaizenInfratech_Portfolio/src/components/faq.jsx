import { useState } from "react";
import { FaChevronDown } from '@react-icons/all-files/fa/FaChevronDown.js';
import { FaChevronUp } from '@react-icons/all-files/fa/FaChevronUp.js';

function faq({  title, description }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-3xl pl-8 pb-6 transition-all duration-300 ease-in-out ">

      {/* Header */}
      <div
        className="flex items-start justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex-1">
          
          <h3 className="text-2xl md:text-xl font-normal text-gray-900 font-secondary">
            {title}
          </h3>
        </div>

        {/* Toggle Button */}
        <button
          className="bg-Btn-Background rounded-full p-1.5 transition-colors duration-200 ml-4 shrink-0"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          {isOpen ? (
            <FaChevronUp className="text-gray-700 text-xl" />
          ) : (
            <FaChevronDown className="text-gray-700 text-xl" />
          )}
        </button>
      </div>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-[600px] opacity-100 mt-6"
            : "max-h-0 opacity-0"
        }`}
      >
        {Array.isArray(description) ? (
          <ul className="text-gray-700 leading-relaxed space-y-2 list-disc list-inside">
            {description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-700 leading-relaxed md:w-4/5">
            {description}
          </p>
        )}
      </div>

    </div>
  );
}

export default faq;
