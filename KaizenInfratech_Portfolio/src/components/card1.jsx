import React from 'react'

function card1({Title, description}) {
    


  return (
    <div className="bg-[#f0f0f0] p-4">
        <h3 className="text-lg font-semibold mb-2 font-primary">{Title}</h3>
        <p className="text-sm text-gray-600 font-secondary">{description}</p>
    </div>
    
  )
}

export default card1