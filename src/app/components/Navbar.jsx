import React from 'react'
function Navbar() {
  return (
    <div className="nav bg-white flex justify-between items-center  mt-3 mr-3 ml-3 rounded-2xl shadow-xl ">
            <div className="navpart1 flex items-center justify-between sm:justify-start ml-[3vw] mr-[3vw] sm:mr-[0vw] w-[100%] sm:w-1/6">
             
              <img
                src="https://logowik.com/content/uploads/images/letter-c2569.logowik.com.webp"
                className="h-[20vw] sm:h-[8vw] object-cover"
              />
               <img
                src="https://cdn-icons-png.flaticon.com/512/660/660376.png"
                className="h-[15vw] sm:h-[0vw] "
              />
            </div>      
            <div className="navpart2 hidden sm:flex items-center justify-center font-bold text-2xl gap-[2vw] w-1/3">
               <h2>Services</h2>
              <h2>Media</h2>
              <h2>Cases</h2>
              <h2>FAQ</h2>
              <h2>Contacts</h2>
              </div>
            <div className="navpart3 hidden sm:flex justify-around w-1/3 font-semibold mr-[2vw]">
              <div className="phone  flex flex-wrap items-center justify-around w-1/3">
                <img
                  src="https://aafst.ae/wp-content/uploads/2023/01/foot-smartphone-icon.png"
                  className="h-[4vw]"
                />
                <h2>+91 00000000</h2>
              </div>
              <div className="gmail flex flex-wrap items-center justify-around w-1/3">
                <img
                  src="https://aafst.ae/wp-content/uploads/2023/01/foot-mail-icon.png"
                  className="h-[3vw]"
                />
                <h2>demo@gmail.com</h2>
              </div>
            </div>
    </div>
  )
}

export default Navbar