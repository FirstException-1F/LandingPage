import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
function Footer() {
  return (
    <div className="w-full bg-white shadow-3xl rounded-2xl mb-[2vw] mt-[2vw]">
    <div className="w-ful flex items-center justify-center">
      <img src={"https://logowik.com/content/uploads/images/letter-c2569.logowik.com.webp"} className=" w-1/4 sm:w-1/6"/>
    </div>
    <div className="flex h-[15vh] sm:h-[20vh] gap-[2vw]">
    <div className="w-1/4 flex items-center justify-center flex-col">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[0vw] sm:gap-[1vw]">
        <PhoneAndroidIcon/><h3 className="font-bold text-[2.8vw] sm:text-xl">Contact Number</h3>
      </div>
      <div className="gap-[1vw]">
        <h2 className="font-bold text-[3vw] sm:text-xl">+91 00000000</h2>
      </div>
    </div>
    <div className="w-1/4 flex items-center justify-center flex-col ">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[0vw] sm:gap-[1vw]">
        <EmailIcon/><h3 className="font-bold text-[2.8vw] sm:text-xl">Gmail</h3>
      </div>
      <div className="gap-[1vw]">
        <h2 className="font-bold text-[3vw] sm:text-lg">demo@gmail.com</h2>
      </div>
    </div>
    <div className="w-1/4 flex items-center justify-center flex-col">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[0vw] sm:gap-[1vw]">
        <LocationOnIcon/><h3 className="font-bold text-[2.8vw] sm:text-xl">Address</h3>
      </div>
      <div className="gap-[1vw]">
        <h2 className="font-bold text-[3vw] sm:text-xl">Mumbai,India</h2>
      </div>
    </div>
    <div className="w-1/4 flex items-center justify-center flex-col">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-[0vw] sm:gap-[1vw]">
        <InsertDriveFileIcon/><h3 className="font-bold text-[2.8vw] sm:text-xl">Leave a Request</h3>
      </div>
      <div className="gap-[1vw]">
        <h2 className="font-bold text-[3vw] sm:text-xl">Leave a Requet</h2>
      </div>
    </div>
    </div>
</div>  
  )
}

export default Footer