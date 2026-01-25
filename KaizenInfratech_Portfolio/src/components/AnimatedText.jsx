import { useEffect, useState } from "react";

const AnimatedText = ({ text }) => {
  const letters = text.split("");
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev < letters.length - 1 ? prev + 1 : prev
      );
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" px-4">
      <p className="font-secondary font-medium text-center text-xl sm:text-3xl leading-relaxed max-w-4xl whitespace-pre-wrap ">
        {letters.map((char, index) => (
          <span
            key={index}
            className={`transition-colors duration-300 ${
              index <= activeIndex ? "text-black" : "text-gray-400"
            }`}
          >
            {char}
          </span>
        ))}
      </p>
    </div>
  );
};

export default AnimatedText;
