import React from 'react'
import FAQItem from '../../components/faq'



// images
import ContactImg from "../../assets/images/contactImg.png";
import telephoneImg from "../../assets/images/telephone.png";
import addressImg from "../../assets/images/address.png";
import emailImg from "../../assets/images/mail.png";
import Hat from "../../assets/images/hat.png"


function Contact() {
  return (
    <>
             <section
                  className="relative min-h-screen px-5 flex items-center "
                  style={{
                  backgroundImage: `url(${ContactImg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                 
                  }}
                  >
                    {/* Black overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>
                  <div className='w-4/5 z-10 mx-auto mt-50'>
                  <h1 className=" text-2xl sm:text-5xl py-5 font-primary font-bold text-white text-left mt-15 leading-tight "><span className='text-font-secondary'>Got Ideas? </span>We’ve got <br/> the Skills. let’s <span className='text-font-secondary'>Team Up!</span></h1>
                  <p className="text-white font-light text-xl border-l-2 border-primary px-2 font-secondary">Tell Us more about Yourself and What You’ve got in mind. </p>


                  </div>

            </section>

            <section className="min-h-screen px-5 py-20">
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-start">

                {/* LEFT SIDE - Contact Info */}
                    <div className="lg:w-1/2 flex gap-8">

                    {/* Icons Column */}
                    <div className="flex flex-col items-center pt-2">
                        <img src={emailImg} alt="Email" className="w-3/5 opacity-10 mb-10" />
                        <img src={addressImg} alt="Address" className="w-3/5 opacity-10 mb-10" />
                        <img src={telephoneImg} alt="Phone" className="w-3/5 opacity-10" />
                    </div>

                {/* Text Column */}
                    <div className="grid gap-16">

                        <div>
                        <h4 className="text-black text-2xl font-secondary font-medium">
                            Chat with Us
                        </h4>
                        <p className="text-Btn-Background font-secondary font-light mt-2 text-sm">
                            Our friendly team is here to help.
                        </p>
                        <p className="text-black font-secondary mt-2 text-sm">
                            kaaizenengineers@gmail.com <br />
                            info@kaaizenengineers.com
                        </p>
                        </div>

                        <div>
                        <h4 className="text-black text-2xl font-secondary font-medium">
                            Visit Us
                        </h4>
                        <p className="text-Btn-Background font-secondary font-light mt-2 text-sm">
                            Come say hello at our office HQ.
                        </p>
                        <p className="text-black font-secondary mt-2 text-sm">
                            53, Sector 12, Pocket 8,<br />
                            Dwarka, New Delhi – 110078
                        </p>
                        </div>

                        <div>
                        <h4 className="text-black text-2xl font-secondary font-medium">
                            Call Us
                        </h4>
                        <p className="text-Btn-Background font-secondary font-light mt-2 text-sm">
                            Mon to Fri 8am to 5pm.
                        </p>
                        <p className="text-black font-secondary mt-2 text-sm">
                            011-45637503
                        </p>
                        </div>

                    </div>
                    </div>

                 {/* SEPARATOR LINE */}
                     <div className="hidden lg:block w-0.5 rounded-xl bg-primary self-stretch"></div>

                {/* RIGHT SIDE - Form */}
                    <div className="lg:w-1/2">
                    <h3 className="text-4xl font-primary font-bold text-black mb-6">
                       Get In Touch
                    </h3>

                    <form className="flex flex-col gap-4">
                        <input
                        type="text"
                        placeholder="Full Name"
                        className="w-full h-10 bg-Btn-Background rounded-lg px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                        />

                        <div className="flex gap-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-1/2 h-10 bg-Btn-Background rounded-lg px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                        />
                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-1/2 h-10 bg-Btn-Background rounded-lg px-3 text-sm outline-none focus:ring-2 focus:ring-primary"
                        />
                        </div>

                        <textarea
                        placeholder="Your Message"
                        rows={15}
                        className="w-full bg-Btn-Background rounded-lg px-3 py-2 text-sm resize-none outline-none focus:ring-2 focus:ring-primary"
                        />

                        <button
                        type="submit"
                        className="self-start bg-Btn-Background text-black font-primary font-medium px-6 py-2 rounded-lg hover:bg-primary hover:text-white transition duration-300"
                        >
                        Submit
                        </button>
                    </form>
                    </div>  

                </div>
            </section>

           <section className="relative h-auto px-50 py-10 bg-[#fcfcfc]">

  {/* Map Container */}
  <div className="relative w-full h-[400px] overflow-hidden rounded-2xl">

    {/* Google Map */}
    <iframe
      className="absolute top-0 left-0 w-full h-full"
      frameBorder="0"
      scrolling="no"
      marginHeight="0"
      marginWidth="0"
      src="https://maps.google.com/maps?width=1000&height=400&hl=en&q=Suryodaya%20Apartment&t=&z=14&ie=UTF8&iwloc=B&output=embed"
    ></iframe>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40 pointer-events-none"></div>

  </div>

</section>

<section className="relative h-auto px-50 pb-10 flex flex-rows mt-15">
    <div className='p-4 pr-20'>
        <p className="font-italics font-secondary text-font-Tertiary border w-fit px-2 rounded-2xl ">FAQ</p>

        <h2 className="text-6xl font-primary font-bold mt-2 mb-10 leading-tight">
            Frequently <br/>
            Asked <br/>
            Questions
        </h2>

    </div>

    <div  className='p-4'>
            <FAQItem    
            
            title="What services are included in civil construction projects ?"
            description="We are committed to maintaining the highest standards across every stage of construction, from thoughtful design and engineering to the careful selection of materials and flawless execution on site. Attention to detail and technical excellence define every project we deliver."
            />

            <FAQItem    
            
            title="How long does a typical civil construction project take to complete ?"
            description="We provide civil construction, turnkey infrastructure, and project management services."
            />

            <FAQItem    
            
            title="What factors affect the overall cost of civil construction ?"
            description="We provide civil construction, turnkey infrastructure, and project management services."
            />

            <FAQItem    
            
            title="How do you ensure quality, safety, and compliance with regulations on-site ?"
            description="We provide civil construction, turnkey infrastructure, and project management services."
            />

            <FAQItem    
            
            title="Can civil construction projects be customized to meet specific client requirements ?"
            description="We provide civil construction, turnkey infrastructure, and project management services."
            />

            <FAQItem
                title="Do you handle large-scale projects?"
                description={[
                "Commercial buildings",
                "Industrial construction",
                "Residential projects",
                "Infrastructure development"
                ]}
            />

    

    </div>

</section>



                


                
    </>
  )
}

export default Contact