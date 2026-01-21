import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import StatsBar from '../../components/statsbar.jsx';
import NoteBook from '../../components/Maps/mapWhite.jsx';
import Card from "../../components/card1.jsx";
import Testimonials from "../../components/testimonial.jsx";


 

 function Home() {
    return (
        <main >

        <section className="w-4/5 mx-auto bg-surface h-screen flex flex-row  border border-gray-300 px-5">
          <div className='w-3/5'>
            <h1 className="text-2xl sm:text-5xl py-10 font-primary font-bold text-font-secondary text-left mt-15">We Build Something <br/> New and Consistent.</h1>
            <p className="text-font font-light text-xl border-l-2 border-primary px-2 font-secondary">Your Ideas & Dreams are Transformed By Us <br/> Into Long Lasting, Engineered Buildings.</p>
            <Button BtnName="Learn More" />
            <Button BtnName="Join The Team" />

          </div>
          <div >
            <img src="../src/assets/images/homepage-image.png" alt="homepage-image" className="w-auto max-h-4/5 mt-24 items-center"/>
          </div>
        </section>

        <section className=" mx-auto bg-surface flex flex-row justify-center border border-gray-300 px-5 w-4/5">
            <StatsBar/>
        </section>

        <section className="mx-auto bg-surface h-screen flex flex-row justify-center border border-gray-300 px-5 w-4/5">
          
          <div className="">
            
            <h2 className=" text-xl sm:text-4xl py-8 leading-10 font-primary font-md text-font text-left mt-15">From Start to Finish, <br/> <span className="text-font-secondary">We Build What You Need.</span></h2>
            <p className="text-font font-secondary font-light text-sm border-l-2 border-primary px-2 max-w-4/5">Established over 25 years ago, Kaaizen Engineers has steadily expanded across states and sectors. Our growth is built on engineering excellence and successful delivery of diverse civil projects. From foundations to skylines, we continue to shape infrastructure with purpose.</p>
            
            <div>

              <div className='flex flex-col md:flex-row gap-8 mt-10 hover:scale-105 transition-transform duration-300'>
                <div className=' bg-Btn-Background/20 p-2 h-12'>
                <img src="../src/assets/images/missionicon1.png" alt="mission-icon" className="w-full"/>
                </div>
                <div>
                <h4 className="font-primary font-bold ">Our Mission</h4>
                <p className="w-4/5 font-secondary font-extralight text-xs mt-2">Our mission is to shape communities by delivering durable, efficient, and future-ready construction solutions.</p>
                </div>
              </div>

              <div className='flex flex-col md:flex-row gap-8 mt-10 hover:scale-105 transition-transform duration-300'>
                <div className=' bg-Btn-Background/20 p-2 h-12'>
                <img src="../src/assets/images/worldicon1.png" alt="world-icon" className="w-full"/>
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
            <NoteBook />
            <div className="absolute top-10 right-10 w-[350px] h-[250px]
                  border-t-4 border-r-4 border-b-4 border-l-0
                  border-yellow-400 pointer-events-none">
            </div>          
          </div>
        </section>

        <section className="w-4/5 mx-auto bg-[#fcfcfc] h-[600px] grid grid-cols-3 grid-rows-2 justify-center items-center border justify-items-center border-gray-300 px-5 ">
          <div className=" ">
            <h2 className=" text-xl sm:text-4xl py-10 leading-10 font-primary font-md text-font text-left ">What We Deliver.</h2>
            <p className="text-font font-secondary font-light text-sm border-l-2 border-primary px-2 w-full">We deliver civil and infrastructure construction solutions engineered for complex systems, including gas stations and depots, utility facilities, industrial factory setups, and residential and commercial infrastructure.</p>
            
          </div>

          <div>
            <Card 
            Title="General Construction" 
            description="services encompassing commercial and residential renovations, structural upgrades, interior fit-outs, and complete project executions" 
            url="../src/assets/images/cardicon1.png"
            src="/about" 
            />
          </div>

          <div>
            <Card Title="Institutional Construction" description="We deliver institutional construction solutions for educational, healthcare, and public facilities, built to meet safety and regulatory standards." url="../src/assets/images/schoolicon.png" src="/about" />
          </div>

          <div>
            <Card Title="Industrial Construction" description="We specialize in industrial construction, delivering gas station depots, manufacturing facilities, and utilities infrastructure." url="../src/assets/images/factoryicon.png" src="/about"/>
          </div>

          <div>
            <Card Title="Civil Construction" description="Every project is executed with strict quality control, smart planning, and on-time performance, bringing commitment to resilience." url="../src/assets/images/civilicon.png" src="/about"/>
          </div>

          <div>
            <Card Title="Assembly Construction" description="We provide construction solutions for public gathering spaces such as auditoriums, convention centers, terminals, and large-scale facilities" url="../src/assets/images/hallicon.png" src="/about"/>
          </div>
        </section>

        <section className="w-4/5 mx-auto bg-surface h-100 flex flex-row justify-center border border-gray-300 px-5">
        <div className="w-2/5">

            <p className="font-italics font-secondary text-font-Tertiary border border-gray-300 w-fit px-2 rounded-2xl mt-15">Testimonials</p>
            <h2 className=" text-xl sm:text-4xl  leading-10 font-primary font-md text-font text-left mt-2 ">Client<span className="text-font-secondary"> Experience </span>That <br/> Speaks for Themselves.</h2>
          
            <div className="mt-22">
            <Button BtnName="Read More Testimonials" />

            </div>
        </div>
        <div className='w-3/5'>
        <Testimonials description="“ We’re extremely pleased with the quality and professionalism this construction team delivered from start to finish. Their attention to detail, clear communication, and commitment to timelines made the entire process seamless. The project was completed safely, efficiently, and to the highest standards.”" Name="Mr. Anand Yadav" Position="CEO, XYZ Company" />

        </div>

        </section>

        <hr className="border-t-2 w-4/5 border-gray-300 my-4" />

        
        </main>
        
    );
}


export default Home;