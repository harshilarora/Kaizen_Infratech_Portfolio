import { useRef, useEffect, useState } from "react";
// import Client from "../components/Client.jsx";

// images
import bpcl from "../assets/images/clientsImg/bpclicon.png";
import IndianOil from "../assets/images/clientsImg/IndianOil.jpg";
import adani from "../assets/images/clientsImg/adani.jpg";
import HCG from "../assets/images/clientsImg/HCG.jpg";
import CityEnergy from "../assets/images/clientsImg/CityEnergy.png";
import Eicher from "../assets/images/clientsImg/Eicher.jpg";
import TWC from "../assets/images/clientsImg/TWC.png";
import Roulunds from "../assets/images/clientsImg/Roulunds.png";
import Dharamshila from "../assets/images/clientsImg/Dharmshila.png";
import Rockland from "../assets/images/clientsImg/Rockland.jpg";
import KRIBHCO from "../assets/images/clientsImg/KRIBHCO.png";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";




function Client({ name, image }) {
  return (
    <div className="min-w-62.5 shrink-0 bg-gray-100 rounded-md p-4 hover:shadow-xl transition-shadow">
      <div className="flex flex-col items-center gap-4">
        <img src={image} alt={name} className="max-w-37.5 h-18 object-contain mx-auto" />
        <h3 className="pt-3 text-xs font-primary text-gray-600 text-center">{name}</h3>
      </div>
    </div>
  );
}

function ClientsSection() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const autoScroll = () => {
      if (isPaused) return;

      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;
      
      // If we've reached the end, scroll back to start
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainer.scrollTo({
          left: 0,
          behavior: "smooth",
        });
      } else {
        // Otherwise, scroll right by 1 pixel
        scrollContainer.scrollBy({
          left: 1,
          behavior: "auto",
        });
      }
    };

    // Auto-scroll interval (adjust speed by changing interval time)
    const intervalId = setInterval(autoScroll, 30);

    return () => clearInterval(intervalId);
  }, [isPaused]);

  const clients = [
    { name: "Bharat Petroleum Corporate Limited", image: [bpcl] },
    { name: "Indian Oil Corporation Ltd.", image: [IndianOil] },
    { name: "Adani Energy Ltd.", image: [adani] },
    { name: "Haryana City Gas Distribution Limited", image: [HCG] },
    { name: "City Energy Ltd.", image: [CityEnergy] },
    { name: "Eicher School", image: [Eicher] },
    { name: "Tide Water Oil Co. India Ltd.", image: [TWC] },
    { name: "Roulunds Braking India Pvt. Ltd.", image: [Roulunds] },
    { name: "Dharmshila Hospital", image: [Dharamshila] },
    { name: "Rockland Hospital", image: [Rockland] },
    { name: "Krishak Bharti Cooperative Ltd.", image: [KRIBHCO] },
  ];

   return (
    <section className="relative w-4/5 mx-auto mb-10">
      
      {/* Left Button */}
      

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-5 py-6 cursor-pointer"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {clients.map((client, index) => (
          <Client key={index} name={client.name} image={client.image} />
        ))}
      </div>

      {/* Right Button */}
      
        
      

    </section>
  );
}

export default ClientsSection;