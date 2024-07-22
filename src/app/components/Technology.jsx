import React from 'react'
import planet from "../media/Technology.webp"
import Image from 'next/image'
function Technology() {
  return (
    <div className="min-h-full min-w-full bg-white mt-[0vw] sm:mt-[5vw]">
        <div className="w-full planet flex ">
           <Image src={planet} className="w-1/5" />
           <Image src={planet} className="w-1/5"/>
           <Image src={planet} className="w-1/5"/>
           <Image src={planet} className="w-1/5"/>
           <Image src={planet} className="w-1/5"/>
        </div>
        <div className="w-full min-h-full flex flex-col sm:flex-row">
            <div className="TLeft  h-[50vh] sm:h-[70vh] w-full sm:w-1/2  pl-[8vw] sm:pl-[5vw] flex items-start justify-evenly flex-col flex-wrap">
              <h1 className="font-bold text-[7vw] sm:text-[3vw]">Full Development Cycle</h1>
              <h3 className="font-medium text-sm sm:text-[1.4vw]">We Use Proven Technologies</h3>
             
              <h2 className="font-bold text-sm sm:text-[1.4vw]">Web</h2>
              <h3 className="font-medium text-[3.4vw] sm:text-[1.5vw] ">PHP/Javascript/Node JS/Web Socket/Socket.io/Vue.js/Next/MySQL/Laravel/Go lang/Django/Python</h3>
              
            
              <h2 className="font-bold text-sm sm:text-[1.4vw]">Mobile</h2>
              <h3 className="font-medium text-[3.3vw] sm:text-[1.5vw]">Swift/Kotlin/Alamofire/Firebase/CoreData/Room/Realm/<br/>Coroutine/Rxjava/RxSwift/Unit Test/Navigation</h3>
              
           </div>
            <div className="TRight h-[50vh] sm:h-[70vh] w-full sm:w-1/2 font-bold text-sm sm:text-[1.4vw] pl-[9vw] sm:pl-[12vw] pr-[0vw] sm:pr-[2vw]  flex items-start justify-evenly flex-col">
              <h2>iOS Development</h2>
              <h2>Android Development</h2>
              <h2>Web Development</h2>
              <h2>UI/UX Design</h2>
              <h2>Testing</h2>
              <h2>Launch</h2>
              <h2>IT consulting</h2>
            </div>
        </div>
    </div>
  )
}

export default Technology