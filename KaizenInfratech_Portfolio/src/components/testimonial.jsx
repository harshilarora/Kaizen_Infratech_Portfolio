import React from 'react'
import {  FaQuoteLeft } from "@react-icons/all-files/fa/FaQuoteLeft";
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';


function testimonial({Title, description, Name, Position}) {
  return (
<div
      className="
        relative
        w-[650px] h-[280px]
        bg-[#f0f0f0]
        px-8 pt-8 pb-14
        rounded-lg
        mt-15">

    {/* <img src="../src/assets/images/testimonial.png" alt="testimonial" className="w-16 h-1/5  absolute top-0 left-0 mt-2 ml-2"></img> */}
         <FaQuoteLeft style={{color: "#eed366", fontSize: "2rem"}} />
        {/* Content */}
      

      <p className="text-[0.725rem] text-gray-600 font-secondary font-light italic pt-2 relative mt-8 z-10 w-4/5 mx-auto text-left">
  {description}
</p>


      <div className="absolute bottom-4 right-4 flex flex-row gap-2">
      <button className='rounded-full bg-Btn-Background p-2  hover:scale-110 hover:bg-primary transition-transform duration-300'><FaArrowRight style={{rotate:"135deg"}}/></button>
      <button className='rounded-full bg-Btn-Background p-2 hover:scale-110 hover:bg-primary transition-transform duration-300'><FaArrowRight style={{rotate:"-45deg"}}/></button>

      </div>
      <div>
        <img src="../src/assets/images/userIcon.png" alt="testimonial" className="w-auto h-10  absolute bottom-4 left-2 mt-2 ml-2"></img>
        <div className='bottom-5 left-18 absolute'>
        <p className=" bottom-10 left-20 font-semibold text-xs ">{Name}</p>  
        <p className=" bottom-10 left-20 text-xs text-font-Tertiary">{Position}</p>
        </div>
      </div>
       </div>
 )
}

export default testimonial