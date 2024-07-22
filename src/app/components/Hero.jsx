import React from 'react'
import Image from 'next/image'
import bgimg from "../media/herolaptop/bgimg.png"
import Consultation from './Consultation'
import bgmob from "../media/heromobile/bgmobile.png"
function Hero() {
  return (
     <div className="min-h-full min-w-full  flex justify-between flex-col sm:flex-row ">
            <div className="left w-full sm:w-1/2">
               <div className="Hero_info h-full pt-[6vw] sm:pt-[2vw] pl-[6vw] sm:pl-[3vw] pr-[6vw] sm:pr-[3vw] flex items-start justify-between flex-col">
                 <h1 className="text-[rgb(255,200,48)] font-bold text-[7vw] sm:text-[3vw] ">User-Centric Excellence:</h1>
                 <h2 className="font-semibold text-[6vw] sm:text-2xl mt-[3vw] sm:mt-[1vw] ">Our Application Developement Service Tackles Your pain points</h2>
                 <h3 className="font-medium text-sm sm:text-[1.4vw] mt-[3vw] sm:mt-[2vw]">Experience a Seamless Digital Journey Wtih <span className="text-[rgb(129,169,73)] font-extrabold">Desun</span> -  where Every Line Of Code Resolves Your Challenge <span className="text-[rgb(252,196,42)] font-extrabold">Elevates Your App Experience To Unparalleled Heights</span></h3>
                 <Consultation/>
               </div> 
            </div>
            <div className="right w-full sm:w-1/2">
                <div className="hidden sm:block">
                  <Image src={bgimg} priority={false} className="rounded-4xl" />  
                </div>
                <div className="block sm:hidden">
                  <Image src={bgmob}  className="rounded-4xl" />  
                </div>
           </div>
         
    </div>
    
  )
}

export default Hero