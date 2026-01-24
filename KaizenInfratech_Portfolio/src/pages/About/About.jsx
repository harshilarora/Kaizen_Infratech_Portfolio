import React from 'react'

import AnimatedText from '../../components/AnimatedText' 

// images
import AboutImg from "../../assets/images/AboutImg.jpg";
import GasImg from "../../assets/images/GasImg.png";



function About() {
  return (
    <>
              <section
                  className="relative min-h-screen px-5 flex items-center "
                  style={{
                  backgroundImage: `url(${AboutImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                 
                  }}
                  >
                    {/* Black overlay */}
                  <div className="absolute inset-0 bg-black/60"></div>
                  <div className='w-4/5 z-10 mx-auto mt-80'>
                  <h1 className=" text-2xl sm:text-5xl py-10 font-primary font-bold text-white text-left mt-15 leading-tight ">Discover Our Journey <br/>And <span className='text-font-secondary'>What Drives Us.</span></h1>
                  </div>
              </section>

                <section className="relative min-h-screen px-5 flex items-center overflow-hidden">
  
                  {/* Background Image Layer */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `url(${GasImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />

                {/* Content Layer */}
                <div className="justify-center z-10 mx-auto my-20">
                  <AnimatedText
                        text="Founded in 1999, Kaaizen Infratech began as a shared vision between two brothers determined to build a trusted civil construction enterprise. What started with a strong partnership and clear purpose has grown through dedication, hard work, and a commitment to quality."
                        />
                  </div>
        

                </section> 


                <section className="grid grid-cols-2 min-h-screen items-center mt-10 ">
                  <div className="justify-center z-10 mx-auto my-20">

                  </div>
                  <div className="bg-primary h-full w-full  top-0 left-0 -z-10 ">
                    <h1 className=" text-4xl sm:text-5xl font-primary font-bold text-left mt-10 ml-10 mb-20">
                      Leadership That<br />Drives Change
                    </h1>

                  </div>
                
                </section> 





           </>     
  )
}

export default About