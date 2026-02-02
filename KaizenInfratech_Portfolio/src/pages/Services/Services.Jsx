
import React from 'react'

import AnimatedText from '../../components/AnimatedText' 
import Leadership from '../../components/Leadership'
import ButtonRound from '../../components/ButtonRound'
import Button from '../../components/Button.jsx';

// images
import ServicesImg from "../../assets/images/ServicesImg.jpg";






function Services() {
  return (
    <>
    <section
                  className="relative min-h-screen px-5 flex items-center overflow-scroll "
                  style={{
                  backgroundImage: `url(${ServicesImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                 
                  }}
                  >
                    {/* Black overlay */}
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className='w-4/5 z-10 mx-auto mt-80'>
                  <h1 className=" text-2xl sm:text-5xl py-10 font-primary font-bold text-white text-left mt-15 leading-tight ">Expert<span className='text-font-secondary'>Insights.</span><br/>Custom<span className='text-font-secondary'>Solutions.</span></h1>
                  </div>
              </section>

                
    
    </>
  )
}

export default Services