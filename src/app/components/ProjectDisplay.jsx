import Image from 'next/image'
import React from 'react'
import HouseIcon from '@mui/icons-material/House'
import LocationOnIcon from '@mui/icons-material/LocationOn';;
function ProjectDisplay({props})

 {
    
  return (
    <div className=" min-h-[100vh] min-w-full mt-[8vw] sm:mt-[0vw] flex flex-col justify-evenly sm:justify-center items-center sm:flex-row">
        <div className="LeftSide w-full h-[60vh] sm:h-[100vh] sm:w-[70%] flex items-start justify-evenly flex-col">
            <div className="Heading">
              <h1 className="font-bold text-[5vw] sm:text-[3vw]">{props[0].Heading}</h1>
            </div>
            <div className="Information ">
             <h3 className="font-medium sm:font-normal text-[4vw] sm:text-[1.8vw]">{props[0].Information}</h3>
            </div>
            <div className="Tech">
             <h3 className="font-medium sm:font-sm  text-[4vw] sm:text-[1.7vw]">{props[0].Tech}</h3>
            </div>
            <div className="LocationTopic flex w-full sm:w-1/3 items-center sm:items-start gap-[2vw] sm:gap-[0.5vw]">
            <LocationOnIcon style={{color:"rgb(255,186,0)"}}/><h3 className="font-semibold text-[4vw] sm:text-[1.5vw]">{props[0].Location}</h3>
            <HouseIcon style={{color:"rgb(255,186,0)"}}/><h3 className="font-semibold text-[4vw] sm:text-[1.5vw]">{props[0].Topic}</h3>
            </div>
            <div className="UGAU flex w-1/2 items-start justify-between gap-[2vw] sm:gap-[0vw]">
            <h3 className="font-bold text-[3.5vw] sm:text-[1.5vw]">{props[0].UserGrowth}<br/>User Growth</h3>
            <h3 className="font-bold text-[3.5vw] sm:text-[1.5vw]"> {props[0].ActiveUsers}<br/>Active User</h3>
            </div>
            <div className="Stores">
                
            </div>
        </div>
        <div className="RightSide">
        <Image src={props[0].ImageSrc}/>
        </div>
    </div>
  )
}

export default ProjectDisplay