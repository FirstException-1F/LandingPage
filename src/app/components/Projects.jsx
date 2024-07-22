import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import EngineeringIcon from '@mui/icons-material/Engineering';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import ProjectDisplay from './ProjectDisplay';
import HouseIcon from '@mui/icons-material/House';
import RealEstate from "../media/RealEstate.png"
function Projects() {
    const props=[{
        Heading:"Projects1",
        Information:"Crafted an innovation rental property management app,seamlessly integrating secure login,absence registration,and a tenant notice board.Elevating the resident experience with user-friendly design and efficient communication channels",
        Tech:"Business analysis/iOS/Android/QA/UI/UX Design",
        Location:"India",
        Topic:"Real Estate",
        UserGrowth:"400%",
        ActiveUsers:"+200000",
        ImageSrc:RealEstate,

    }]
  
  return (
    <div className="min-h-screen w-full pl-[2vw] sm:pl-[5vw]">
          <div className="Proupper min-h-[100vh]  w-full flex flex-col justify-evenly">
          <div className="w-full sm:w-1/2 mb-[5vw] sm:mb-[0vw]">
           <h1 className="font-bold text-[7vw] sm:text-[3vw]">Developed more than 100 projects in 15 industries</h1> 
          </div>
          <div className="flex h-1/2 ">
          <div className="w-full flex flex-col items-start justify-evenly gap-[5vw] sm:gap-[1vw]">
            <h2 className="w-full sm:w-1/2 font-bold sm:font-semibold text-[5vw]  sm:text-xl flex items-center justify-center sm:justify-between flex-col sm:flex-row" >
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px]  bg-white rounded-[50%] flex items-center justify-center">
            <InstagramIcon style={{fontSize:"50px",color:"rgb(255,186,0)"}}/>
            </div>
            <div className="w-full sm:w-[70%] flex items-center justify-start sm:justify-center flex-col sm:flex-row gap-0 sm:gap-2"><span>Social</span> <span>Media</span></div>    
            </h2>
            <h2 className="w-full sm:w-[60%]  font-extrabold sm:font-semibold text-[4vw] sm:text-[1.4vw]  flex items-center justify-between flex-col sm:flex-row ">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center ">
            <SportsSoccerIcon style={{fontSize:"50px",color:"rgb(255,186,0)"}}/>
            </div>
           <div className="w-full sm:w-[70%] flex items-center justify-start flex-col sm:flex-row gap-0 sm:gap-2"><span>Fitness</span> <span>and</span> <span>Sports</span></div>           
            </h2>
            <h2 className="w-full sm:w-1/3 font-extrabold sm:font-semibold text-[4vw] sm:text-[1.4vw] flex items-center justify-center sm:justify-between flex-col sm:flex-row">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center">
            <AccountBalanceIcon style={{fontSize:"40px",color:"rgb(255,186,0)"}}/>
            </div>
              Bank
            </h2>
            <h2 className="w-full sm:w-1/2 font-extrabold sm:font-semibold text-[4vw] sm:text-[1.4vw] flex items-center justify-between flex-col sm:flex-row ">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center ">
            <EngineeringIcon style={{fontSize:"40px",color:"rgb(255,186,0)"}}/>
            </div>
              Constructions 
            </h2>
            <h2 className="w-full sm:w-1/2 font-extrabold sm:font-semibold text-[4vw] sm:text-[1.4vw] flex items-center justify-between  sm:justify-between flex-col sm:flex-row">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center">
            <SportsSoccerIcon style={{fontSize:"50px",color:"rgb(255,186,0)"}}/>
            </div>
             Game Projects
            </h2>
          </div>
          <div className="w-full flex flex-col items-start justify-evenly gap-[5vw] sm:gap-[1vw]">
            <h2 className="w-full sm:w-1/2 font-bold sm:font-semibold text-[5vw]  sm:text-xl flex items-center justify-center sm:justify-between flex-col sm:flex-row" >
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px]  bg-white rounded-[50%] flex items-center justify-center">
            <InstagramIcon style={{fontSize:"50px",color:"rgb(255,186,0)"}}/>
            </div>
            <div className="w-full sm:w-[70%] flex items-center justify-start sm:justify-center flex-col sm:flex-row gap-0 sm:gap-2"><span>Social</span> <span>Media</span></div>    
            </h2>
            <h2 className="w-full sm:w-[60%]  font-extrabold sm:font-semibold text-[4vw] sm:text-[1.4vw]  flex items-center justify-between flex-col sm:flex-row ">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center ">
            <SportsSoccerIcon style={{fontSize:"50px",color:"rgb(255,186,0)"}}/>
            </div>
           <div className="w-full sm:w-[70%] flex items-center justify-start flex-col sm:flex-row gap-0 sm:gap-2"><span>Fitness</span> <span>and</span> <span>Sports</span></div>           
            </h2>
            <h2 className="w-full sm:w-1/3 font-extrabold sm:font-semibold text-[4vw] sm:text-[1.4vw] flex items-center justify-center sm:justify-between flex-col sm:flex-row">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center">
            <AccountBalanceIcon style={{fontSize:"40px",color:"rgb(255,186,0)"}}/>
            </div>
              Bank
            </h2>
            <h2 className="w-full sm:w-1/2 font-extrabold sm:font-semibold text-[4vw] sm:text-[1.4vw] flex items-center justify-between flex-col sm:flex-row ">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center ">
            <EngineeringIcon style={{fontSize:"40px",color:"rgb(255,186,0)"}}/>
            </div>
              Constructions 
            </h2>
            <h2 className="w-full sm:w-1/2 font-extrabold sm:font-semibold text-[4vw] sm:text-[1.4vw] flex items-center justify-between  sm:justify-between flex-col sm:flex-row">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center">
            <SportsSoccerIcon style={{fontSize:"50px",color:"rgb(255,186,0)"}}/>
            </div>
             Game Projects
            </h2>
          </div>
          <div className="w-full flex flex-col items-start justify-evenly gap-[5vw] sm:gap-[1vw]">
            <h2 className="w-full sm:w-1/2 font-extrabold sm:font-semibold text-[5vw]  sm:text-xl flex items-center justify-center sm:justify-between flex-col sm:flex-row" >
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px]  bg-white rounded-[50%] flex items-center justify-center">
            <InstagramIcon style={{fontSize:"50px",color:"rgb(255,186,0)"}}/>
            </div>
            <div className="w-full sm:w-[70%] flex items-center justify-start sm:justify-center flex-col sm:flex-row gap-0 sm:gap-2"><span>Social</span> <span>Media</span></div>    
            </h2>
            <h2 className="w-full sm:w-[60%]  font-bold sm:font-semibold text-[4vw] sm:text-[1.4vw]  flex items-center justify-between flex-col sm:flex-row ">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center ">
            <SportsSoccerIcon style={{fontSize:"50px",color:"rgb(255,186,0)"}}/>
            </div>
           <div className="w-full sm:w-[70%] flex items-center justify-start flex-col sm:flex-row gap-0 sm:gap-2"><span>Fitness</span> <span>and</span> <span>Sports</span></div>           
            </h2>
            <h2 className="w-full sm:w-1/3 font-extrabold sm:font-semibold text-[4vw] sm:text-[1.4vw] flex items-center justify-center sm:justify-between flex-col sm:flex-row">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center">
            <AccountBalanceIcon style={{fontSize:"40px",color:"rgb(255,186,0)"}}/>
            </div>
              Bank
            </h2>
            <h2 className="w-full sm:w-1/2 font-extrabold sm:font-semibold text-[4vw] sm:text-[1.4vw] flex items-center justify-between flex-col sm:flex-row ">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center ">
            <EngineeringIcon style={{fontSize:"40px",color:"rgb(255,186,0)"}}/>
            </div>
              Constructions 
            </h2>
            <h2 className="w-full sm:w-1/2 font-extrabold sm:font-semibold text-[4vw] sm:text-[1.4vw] flex items-center justify-between  sm:justify-between flex-col sm:flex-row">
            <div className="h-[50px] sm:h-[70px] w-[50px] sm:w-[70px] bg-white rounded-[50%] flex items-center justify-center">
            <SportsSoccerIcon style={{fontSize:"50px",color:"rgb(255,186,0)"}}/>
            </div>
             Game Projects
            </h2>
          </div>
          </div>
          </div>
          <div className="Prolower min-h-[100vh] mt-[10vw] sm:mt-[5vw] w-full flex items-start justify-evenly flex-col">
            <div className="w-[70%]">
                <h1 className="font-bold text-[7vw] sm:text-[3vw]">Projects we are proud of</h1> 
                <h3 className="font-medium mt-[6vw] sm:mt-[3vw] text-[4vw] sm:text-2xl">Our software development company is truly proud of the wonderful clients we have worked with.We enjoy a long-term partnership</h3>
            </div>
            <div className="w-full sm:w-1/2 mt-[10vw] sm:mt-[3vw] flex  justify-between font-bold sm:font-medium text-[5vw] sm:text-3xl">
                <h2>Project 1</h2>
                <h2>Project 2</h2>
                <h2>Project 3</h2>
                <h2>Project 4</h2>
            </div>
            <div className="w-full ">
                <ProjectDisplay props={props}/>
            </div>
          </div>
    </div>
  )
}

export default Projects