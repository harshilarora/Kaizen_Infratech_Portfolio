import React from 'react'

import AnimatedText from '../../components/AnimatedText' 
import Leadership from '../../components/Leadership'
import ButtonRound from '../../components/ButtonRound'
import Button from '../../components/Button.jsx';

// images
import AboutImg from "../../assets/images/AboutImg.jpg";
import GasImg from "../../assets/images/GasImg.png";
import VisionImg from "../../assets/images/VisionImg.jpg"
import hatImg from "../../assets/images/hat.png"




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
                  <div>
                    <div className=" bg-primary size-80 z-10 mx-auto my-20">
                       <img src=""></img>
                    </div>
                       
                  
                  </div>
                  <div className="bg-primary h-full w-full  top-0 left-0 -z-10 ">
                    <h1 className=" text-4xl sm:text-5xl font-primary font-bold text-left mt-10 ml-10 mb-20">
                      Leadership That<br />Drives Change
                    </h1>
                    <Leadership />
                    

                  </div>
                 
                </section> 

                <section className="grid grid-cols-2 gap-4 mx-auto w-4/5 mt-20">
                    <div className="">
                      <div>
                        <h2 className="font-primary text-4xl pb-4">Our Vision</h2>
                        <p className="font-secondary font-light text-sm leading-relaxed">By merging together the expertise of highly skilled professional process and advanced technology, we strive to become one of the noted
                                      names in the dynamic construction industry. We aim to advance and flourish by forming long term relationships with our numerous trusted
                                      clients which could only be accomplished by keeping their needs ahead of our own. It is our ceaseless efforts to acquire the position of one of
                                      the most notable construction companies. 
                                      <br/> 
                                      <br/>
                                      Our company functions to encourage ingenious and modern concepts that can add significant
                                      values to the lives of our credible customers. Accompanied with the dedicated professional and highly advanced machinery, we aim at
                                      delivering flawlessly designed structures surpassing the expectation of one and all.</p>
                        <img src={VisionImg} className=' mt-20 w-full'></img>
                      </div>

                    </div>

                    <div className="ml-6">
                      <img src={VisionImg} className='w-full'></img>
                      <h2 className="font-primary text-4xl pb-4 mt-10">Our Mission</h2>
                      <p className="font-secondary text-sm font-light leading-relaxed">Our exhilarating combination of unique thinking, inventive designs, and commitment has provided us with a constant boost to continuously
                                    develop and aim for the highest virtues. Our ingrained professional operations and dedicated efforts ensure that we complete our entire
                                    range of projects swiftly on time. We aim at maintaining transparency in our complete course of operations while completely adhering with
                                    the best practices of trade.</p>
                      <li className='gap-4 list-none mt-4'>
                        <ul className='font-secondary font-md font-medium'>
                          Quality & Precision:
                          <ul className='font-light text-sm pt-2 leading-relaxed'>We are committed to maintaining the highest standards across every stage of construction, from thoughtful design and engineering to the careful selection of materials and flawless execution on site. Attention to detail and technical excellence define every project we deliver.</ul>
                        </ul>
                        <ul className='font-secondary font-md mt-4 font-medium'>
                          Reliability
                          <ul className='font-light text-sm  pt-2  leading-relaxed'>The safety of our workforce, partners, and stakeholders is paramount. We follow rigorous safety protocols, comply with all regulatory standards, and actively promote responsible construction practices that protect both people and the environment.</ul>
                        </ul>
                        <ul className='font-secondary font-md mt-4 font-medium '>
                          Economy
                          <ul className='font-light text-sm pt-2  leading-relaxed'>Our diligent
                          staff functions
                          in sheer
                          determination
                          to complete the
                          project in well
                          within time to
                          get optimum
                          output.</ul>
                        </ul>
                      </li>


                    </div>

                </section>
                
                

                <section className="w-4/5 mx-auto bg-surface h-screen flex flex-row px-5">
                <div className='w-2/5'>
                  <h1 className="text-2xl sm:text-5xl font-primary font-bold text-black text-left mt-100 ">Join The <span className='text-font-secondary'> <br/>Team</span> Today.</h1>
                  <Button BtnName="Apply Here"/>

                  </div>
                  <div className='w-3/5'>
                    <hatImg className="z-100 w-full"/>
                  </div>
                </section>





           </>     
  )
}

export default About