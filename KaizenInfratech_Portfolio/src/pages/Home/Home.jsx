import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import StatsBar from '../../components/statsbar.jsx';
// import NoteBook from '../../components/Maps/mapWhite.jsx';
import Card from "../../components/ServicesCards.jsx";
import Testimonials from "../../components/testimonial.jsx";
import ClientSection from "../../components/ClientsSection.jsx";
import HomePageImg from "../../assets/images/homepage-image.png";
import missionIcon from "../../assets/images/missionicon1.png"; 
import worldIcon from "../../assets/images/worldicon1.png";


import { FaArrowRight } from '@react-icons/all-files/fa/FaArrowRight.js';


//images
import bpcl from "../../assets/images/clientsImg/bpclicon.png";
import ContactImg from "../../assets/images/Contact.jpg";




 

 function Home() {
    return (
        <main >

        <section className="w-4/5 mx-auto bg-surface h-screen flex flex-row px-5">
          <div className='w-3/5'>
            <h1 className="text-2xl sm:text-5xl py-10 font-primary font-bold text-font-secondary text-left mt-15">We Build Something <br/> New and Consistent.</h1>
            <p className="text-font font-light text-xl border-l-2 border-primary px-2 font-secondary">Your Ideas & Dreams are Transformed By Us <br/> Into Long Lasting, Engineered Buildings.</p>
            <Button BtnName="Learn More" />
            <Button BtnName="Join The Team" />

          </div>
          <div >
            <img src={HomePageImg} alt="homepage-image" className="w-auto max-h-4/5 mt-24 items-center"/>
          </div>
        </section>

        <section className=" mx-auto bg-surface flex flex-row justify-center  px-5 w-4/5">
            <StatsBar/>
        </section>

        <section className="mx-auto bg-surface h-screen flex flex-row justify-center  px-5 w-4/5">
          
          <div className="">
            
            <h2 className=" text-xl sm:text-4xl py-8 leading-10 font-primary font-md text-font text-left mt-15">From Start to Finish, <br/> <span className="text-font-secondary">We Build What You Need.</span></h2>
            <p className="text-font font-secondary font-light text-sm border-l-2 border-primary px-2 max-w-4/5">Established over 25 years ago, Kaaizen Engineers has steadily expanded across states and sectors. Our growth is built on engineering excellence and successful delivery of diverse civil projects. From foundations to skylines, we continue to shape infrastructure with purpose.</p>
            
            <div>

              <div className='flex flex-col md:flex-row gap-8 mt-10 hover:scale-105 transition-transform duration-300'>
                <div className=' bg-Btn-Background/20 p-2 h-12'>
                <img src={missionIcon} alt="mission-icon" className="w-full"/>
                </div>
                <div>
                <h4 className="font-primary font-bold ">Our Mission</h4>
                <p className="w-4/5 font-secondary font-extralight text-xs mt-2">Our mission is to shape communities by delivering durable, efficient, and future-ready construction solutions.</p>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-8 mt-10 hover:scale-105 transition-transform duration-300'>
                <div className=' bg-Btn-Background/20 p-2 h-12'>
                <img src={worldIcon} alt="world-icon" className="w-full"/>
                </div>
                <div>
                <h4 className="font-primary font-bold ">Our Vision</h4>
                <p className="w-4/5 font-secondary font-extralight text-xs mt-2">Our vision is to be a trusted leader in civil engineering, shaping infrastructure that drives progress across regions.</p>
                </div>
              </div>

              <Button BtnName="Read More" />

            </div>
          </div>
      
          <div className="mt-24 relative w-fit">
            {/* <NoteBook className="z-30" /> */}
       
                    
            <div className="absolute top-10 right-10 w-87.5 h-62.5
                  border-t-4 border-r-4 border-b-4 border-l-0
                  border-yellow-400 pointer-events-none">
            </div>          
          </div>
        </section>

        
        <section className="w-full mx-auto bg-[#fcfcfc] ">
          
        <div className="w-4/5 mx-auto flex justify-center">
        <Card/> 
        </div>
        </section>

        <section className="w-4/5 mx-auto bg-surface h-100 flex flex-row justify-center  px-5">
        <div className="w-2/5">

            <p className="font-italics font-secondary text-font-Tertiary border w-fit px-2 rounded-2xl mt-15">Testimonials</p>
            <h2 className=" text-xl sm:text-4xl  leading-10 font-primary font-md text-font text-left mt-2 ">Client<span className="text-font-secondary"> Experience </span>That <br/> Speaks for Themselves.</h2>
          
            <div className="mt-22">
            <Button BtnName="Read More Testimonials" />

            </div>
        </div>
        <div className='w-3/5'>
        <Testimonials description="“ We’re extremely pleased with the quality and professionalism this construction team delivered from start to finish. Their attention to detail, clear communication, and commitment to timelines made the entire process seamless. The project was completed safely, efficiently, and to the highest standards.”" Name="Mr. Anand Yadav" Position="CEO, XYZ Company" />

        </div>

        </section>

        <hr className="w-4/5 border-gray-300 my-4" />
        
        <section className="w-4/5 mx-auto pt-5 justify-center  px-5 mb-10 overflow-x-hidden">
        <ClientSection  />  
        </section>

         <section
              className="relative min-h-screen px-5 flex items-center"
              style={{
              backgroundImage: `url(${ContactImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              }}
              >
                {/* Black overlay */}
              <div className="absolute inset-0 bg-black/60"></div>

                {/* Main content wrapper */}
              <div className="relative z-10 w-4/5 mx-auto flex items-center justify-between gap-10">
    
                 {/* Left text */}
              <div className="w-3/5 mt-120">
              <p className="text-white font-secondary font-extralight text-xs">
                     North India’s trusted leader in civil construction excellence.
              </p>

              <h2 className="text-xl sm:text-4xl  font-primary font-extrabold text-white ">
                    <span className="text-font-secondary">Power </span>You Can Rely On.<br />
                    Service You Can <span className="text-font-secondary">Trust.</span>
              </h2>
              </div>

                {/* Right card */}
              <div className="w-full h-130 mt-10 bg-white/70 rounded-3xl p-6 backdrop-blur-md">
              <h3 className="text-2xl font-primary font-bold text-black mb-6">
              Send a Message
              </h3>

              <form className="flex flex-col gap-4">
              <input
              type="text"
              placeholder="Full Name"
              className="w-full h-10 bg-white rounded-lg px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
              />

              <div className="flex gap-4">
              <input
              type="email"
              placeholder="Email Address"
              className="w-1/2 h-10 bg-white rounded-lg px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
              <input
              type="tel"
                placeholder="Phone Number"
                className="w-1/2 h-10 bg-white rounded-lg px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
              />
            </div>  
    
            <textarea
              placeholder="Your Message"
              rows={12}
              className="w-full bg-white rounded-lg px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-primary"
            />

             <button
               type="submit"
               className="self-start bg-Btn-Background text-black font-primary font-medium px-5 py-1 rounded-lg  hover:scale-105 hover:bg-primary transition-transform duration-300"
              >
              Submit
            </button>
          </form>
        </div>

    </div>
</section>


        
        </main>
        
    );
}


export default Home;