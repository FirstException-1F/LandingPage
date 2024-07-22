import Card from './Card';
import React from 'react'
import Analysis from "../media/SdlcMedia/planing.svg"
import Design from "../media/SdlcMedia/graphic-design.svg"
import Development from "../media/SdlcMedia/coding-language.svg"
import Testing from "../media/SdlcMedia/security.svg"
import Launching from "../media/SdlcMedia/hosting 1.svg"
import Support from "../media/SdlcMedia/application.svg"
import center from "../media/SdlcMedia/center.png"
import Image from 'next/image';
function Sdlc() {

  const dataleft=[{
    Heading:"Analysis",
    Description: "We Craft Precise technical specs,aligning with your business technology, and user requirements.",
    src:Analysis
  },{
    Heading:"Design",
    Description:"We Adapt the Customer's Corporate identity to the platform guidelines.we draw convenient and understandable interfaces.",
    src:Design
  },{
    Heading:"Development",
    Description:"We Create an extensible architecture, write clean and stable code.we integrate with customer technologies.",
    src:Development
  },]
   const dataright=[{
    Heading:"Testing",
    Description:"We Carry out functional testing and do bug fixes.We adapt the application to different phone resolutions.",
    src:Testing
  },{
    Heading:"Launching",
    Description:"We Design the application page and publish it in the App Store anf Google Play Stores.",
    src:Launching
  },{
    Heading:"Support",
    Description:"We Monitor the stability of the application,update it for new devices and versions of iOS and Android",
    src:Support
   }]

  return (
    <div className="min-h-screen w-full bg-yellow-500 pl-[2vw] sm:pl-[5vw] pr-[2vw] sm:pr-[5vw]">
        <h1 className="font-bold text-[7vw] sm:text-[3vw]">Application Development Stages</h1>
      <div className="w-full min-h-screen  flex items-center justify-evenly mt-[2vw] sm:mt-[3vw] flex-col sm:flex-row">
       <div className="w-full sm:w-1/4 h-[50vh] sm:h-[90vh] gap-[2vw] flex items-center flex-row sm:flex-col  ">
        {dataleft.map((cur,idx)=>
         <Card key={idx} props={cur}/>
        )}
       </div>
       <div className="w-1/2 h-[40vh]  flex items-center justify-center">
        <Image src={center}/>
       </div>
       <div className="w-full sm:w-1/4 h-[50vh] sm:h-[90vh] gap-[2vw] flex items-center flex-row sm:flex-col ">
        {dataright.map((cur,idx)=>
         <Card key={idx} props={cur}/>
        )}
       </div>
      </div>
       
    </div>
  )
}

export default Sdlc