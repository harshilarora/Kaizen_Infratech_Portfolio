import React, { useState } from 'react'
import { FaArrowRight } from "@react-icons/all-files/fa/FaArrowRight";
import ButtonRound from '../components/ButtonRound'




function Leadership() {

  const leadershipData = [
        { name: "Mr. Pawan Arora", position: "CEO", bio: "Founded in 1999 by brothers Mr. Pawan Arora and Mr. Agam Kumar Arora, the company was established on a strong balance of technical expertise and operational leadership. \n \n Mr. Pawan Arora (CEO) spearheads the company's engineering and technical excellence, guiding project execution, quality, and innovation." },
        { name: "Mr. Agam Kumar Arora", position: "CTO", bio: "Founded in 1999 by brothers Mr. Pawan Arora and Mr. Agam Kumar Arora, the company was established on a strong balance of technical expertise and operational leadership. \n \n Mr. Agam Arora (CFO) leads overall operations and business functioning, ensuring seamless coordination, efficiency, and growth. His leadership has been instrumental in building a resilient organization grounded in trust and precision." }
    ];

const Quote = [
        {text: "We shape our buildings; \n thereafter they shape us.", author: "Winston Churchill"},
        {text: "Quality is never an accident; it is always the result of intelligent effort.", author: "John Ruskin"}
    ];


  const [current, setCurrent] = useState(0);

  
function handlePrevious() {
  setCurrent((prev) =>
    prev === 0 ? leadershipData.length - 1 : prev - 1
  );
};

function handleNext() {
  setCurrent((prev) => (prev + 1) % leadershipData.length);
};

 const currentMember = leadershipData[current];
 const currentQuote = Quote[current];

    return (
        <div className='m-10'>
            <div>
                <h3 className='font-primary text-lg'>{currentMember.name}</h3>
                <p className='font-primary text-lg'>{currentMember.position}</p>
                <p className='font-secondary text-md pt-4 w-4/5 whitespace-pre-line'>{currentMember.bio}</p>

                <h3 className='font-tertiary text-2xl text-bold pt-8 italic whitespace-pre-line text-center'>{currentQuote.text}</h3>
                <p className='font-tertiary font-light text-md pt-2 text-center'>{currentQuote.author}</p>
                
                <div className='flex justify-center gap-4 mt-6'>
                <button onClick={handlePrevious} className='rounded-full bg-Btn-Background p-2  hover:scale-110 hover:bg-primary transition-transform duration-300'><FaArrowRight style={{rotate:"180deg"}}/></button>
                <button className='rounded-full bg-Btn-Background p-2  hover:scale-110 hover:bg-primary transition-transform duration-300'><FaArrowRight /></button>
                
                    
                </div>
            </div>
        </div>
    )
}

export default Leadership;