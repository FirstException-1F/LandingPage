import React from 'react'
import Image from 'next/image'
function Card({props}) {
  
  return (
    <div className="h-[60vw] sm:min-h-[10vw] w-[30vw] sm:w-[24vw] bg-white shadow-xl rounded-lg p-[1vw]">
      <div className="w-full flex flex-col sm:flex-row gap-[2vw] items-center sm:items-start">
        <Image src={props.src} alt={props.Heading}/>
        <h2 className="text-[4vw] sm:text-[2vw]">{props.Heading}</h2>
      </div>
      <div className="w-full flex items-center justify-center mt-[0.5vw]">
       <h2 className="text-[2.8vw] sm:text-[1.2vw]">{props.Description}</h2>
      </div>
    
    </div>
  )
}

export default Card