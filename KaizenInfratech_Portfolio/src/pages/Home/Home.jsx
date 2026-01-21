import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import Button from '../../components/Button.jsx';
import StatsBar from '../../components/statsbar.jsx';
import NoteBook from '../../components/Maps/mapWhite.jsx';

 function Home() {
    return (
        <main >

        <section className="w-full mx-auto bg-surface h-screen flex flex-row justify-center border border-gray-300 px-5">
          <div>
            <h1 className="text-2xl sm:text-5xl py-10 font-primary font-bold text-font-secondary text-left mt-15">We Build Something <br/> New and Consistent.</h1>
            <p className="text-font font-light text-2xl border-l-2 border-primary px-2 ">Your Ideas & Dreams are Transformed By Us <br/> Into Long Lasting, Engineered Buildings.</p>
            <Button BtnName="Learn More" />
            <Button BtnName="Join The Team" />

          </div>
          <div>
            <img src="../src/assets/images/homepage-image.png" alt="homepage-image" className="w-auto max-h-4/5 mt-24"/>
          </div>
        </section>

        <section className=" mx-auto bg-surface flex flex-row justify-center border border-gray-300 px-5">
            <StatsBar/>
        </section>

        <section className=" mx-auto bg-surface h-screen flex flex-row justify-center border border-gray-300 px-5">
          <div >
            <h2 className=" text-xl sm:text-4xl py-10 leading-10 font-primary font-md text-font text-left mt-15">From Start to Finish, <br/> <span className="text-font-secondary">We Build What You Need.</span></h2>
            <p className="text-font font-secondary font-light text-md border-l-2 border-primary px-2 w-1/2">Established over 25 years ago, Kaaizen Engineers has steadily expanded across states and sectors. Our growth is built on engineering excellence and successful delivery of diverse civil projects. From foundations to skylines, we continue to shape infrastructure with purpose.</p>
            
          </div>
          <div >
            <NoteBook/>
          </div>
        </section>

        
        </main>
        
    );
}


export default Home;