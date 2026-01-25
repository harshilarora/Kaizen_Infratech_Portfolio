import React from 'react'
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";

function ButtonRound() {
  return (
    <button
             
              className="z-100 pointer-events-auto rounded-full bg-Btn-Background p-3 hover:scale-110 hover:bg-primary transition-transform duration-300"
            >
              <FaArrowRight />
    </button>
  )
}

export default ButtonRound