import Image from 'next/image'
import React from 'react'
import team from "../media/Team.png"
function Team() {
  return (
    <div className="min-h-screen w-full flex justify-between flex-col sm:flex-row">
        <div className="w-full sm:w-1/2 h-screen flex flex-col justify-evenly pl-[2vw] sm:pl-[5vw] ">
         <h1 className="font-bold text-[9vw] sm:text-[3vw]">Our Team</h1>
         <h3>Thousand is full-cycle digital production company with its own product analytics,design,web and mobile development</h3>
         <div className=" flex justify-between ">
         <div className="flex flex-col items-center sm:items-baseline">
         <h1 className="font-bold text-[7vw] sm:text-[4vw]">28</h1>
         <h2>Team members</h2>
         </div>
         <div className="flex flex-col items-center ">
         <h1 className="font-bold text-[7vw] sm:text-[4vw]">+100</h1>
         <h2>Projects</h2>
         </div>
         <div className="flex flex-col items-center">
         <h1 className="font-bold text-[7vw] sm:text-[4vw]">7 Years</h1>
         <h2>in IT sphere</h2>
         </div>
         </div>
         <h3>All the necessary specialists - from a designer to a tester - are on our staff.we hire the best specialists in the market.it's expensive but worth it.</h3>
        </div>
        <div className="flex flex-col items-center justify-center pr-[0vw] sm:pr-[2vw]">
           <Image src={team}/>
        </div>
    </div>
  )
}

export default Team