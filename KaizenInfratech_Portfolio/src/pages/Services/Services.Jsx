
import React from 'react'

import ServiceCard from '../../components/ServiceCard.jsx';


// images
import ServicesImg from "../../assets/images/ServicesImg.jpg";






function Services() {

  
    
  return (
    <>
    <section
                  className="relative min-h-screen px-5 flex items-center"
                  style={{
                  backgroundImage: `url(${ServicesImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                 
                  }}
                  >
                    {/* Black overlay */}
                 
                  <div className='w-4/5 z-10 mx-auto mt-20'>
                  <h1 className=" text-2xl sm:text-5xl py-10 font-primary font-bold text-black text-left mt-15 leading-tight ">Expert<span className='text-font-secondary'> Insights.</span><br/>Custom<span className='text-font-secondary'> Solutions.</span></h1>
                  <p className="text-font font-secondary font-light text-sm border-l-2 border-primary px-2 max-w-2/5">We offer end-to-end construction solutions designed to support complex project requirements. Our team collaborates closely with clients, consultants, and contractors at every stage. From foundation to finish, we focus on efficiency, precision, and durability. The result is construction that adds lasting value and performance.</p>

                  </div>
              </section>
              <section className="w-4/5 mx-auto h-full flex flex-col justify-center px-5 ">
                  
                  <div className='mt-8'>
                  <h2 className="font-primary text-5xl pb-4">Our Services<span><hr className="bg-primary h-0.5 border-none mt-2 w-2/5"></hr></span></h2>
                  </div>
                  <div className="grid grid-flow-row gap-8">
                      <ServiceCard />
                      
                  </div>

              </section>

                
    
    </>
  )
}

export default Services