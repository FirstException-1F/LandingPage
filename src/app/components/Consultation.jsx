"use client"
import React,{useState,useEffect} from 'react'
import TextField from '@mui/material/TextField';

function Consultation() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[BusinessName,SetBusinessName]=useState("");
  const [errors, setErrors] = useState({});
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
      validateForm();
  }, [name, email, password,BusinessName]);
  // Validate form
  const validateForm = () => {
      let errors = {};

      if (!name) {
          errors.name = 'Name is required.';
      }

      if (!email) {
          errors.email = 'Email is required.';
      } else if (!/\S+@\S+\.\S+/.test(email)) {
          errors.email = 'Email is invalid.';
      }

      if (!password) {
          errors.password = 'Password is required.';
      } else if (password.length < 6) {
          errors.password = 'Password must be at least 6 characters.';
      }

      setErrors(errors);
      setIsFormValid(Object.keys(errors).length === 0);
  };
  // Submit
  const handleSubmit = () => {
      if (isFormValid) {
          alert('Form submitted successfully!');
      } else {
          alert('Form has errors. Please correct them.');
      }
  };
  return (
    <div className=" w-full shadow-lg bg-white rounded-xl pt-[4vw] sm:pt-[1vw] pb-[4vw] sm:pb-[0.5vw] mt-[5vw] sm:mt-[1.7vw] mb-[0vw] sm:mb-[1vw]">
        <div className="w-full flex flex-col sm:flex-row">
         <div className="w-full   ">
         <div className="w-full pl-[6vw] sm:pl-[1vw]  ">
         <h1 className="font-bold text-[4vw] sm:text-[1.8vw] ">Leave your contacts and we will call you back within 30 minutes.</h1>
         </div>
         <div className="w-full gap-[6vw] sm:gap-[0vw] mt-[2vw] sm:mt-[1vw]  pl-[6vw] sm:pl-[0vw] pr-[6vw] sm:pr-[0vw] flex items-center justify-around">
         <TextField id="standard-basic" label="Full Name" variant="standard" value={name}  onChange={(e) => setName(e.target.value)}/>
         <TextField id="standard-basic" label="Phone Number" variant="standard"  value={password} onChange={(e) => setPassword(e.target.value)} />
         </div>
         <div className="w-full gap-[6vw] sm:gap-[0vw] mt-[2vw] sm:mt-[2vw] pl-[6vw] sm:pl-[0vw] pr-[6vw] sm:pr-[0vw] pb-[0vw] sm:pb-[1vw] flex items-center justify-around">
         <TextField id="standard-basic" label="Business Name" variant="standard" value={BusinessName} onChange={(e) => SetBusinessName(e.target.value)} />
         <TextField id="standard-basic" label="Business Mail" variant="standard" value={email} onChange={(e) => setEmail(e.target.value)} />
         </div>
         </div>
         <div className="w-full sm:w-1/3 flex items-center sm:items-end justify-center mb-[4vw] sm:mb-[1vw] pr-[6vw] sm:pr-[1vw] pl-[6vw] sm:pl-[0vw] pt-[6vw] sm:pt-[0vw] pb-[0vw] sm:pb-[1vw]">
            <button className="rounded-xl bg-[rgb(167,223,88)] p-2 w-full" 
              
                    onClick={handleSubmit}>Get <br/> Consultation</button>
         </div>
        </div>
    </div>
  )
}

export default Consultation