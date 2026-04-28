import React from "react";
import { useNavigate } from "react-router-dom";
import { assets} from "../assets/assets";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


// Sample styled component for the header
const Header = () => {
  const navigate=useNavigate()
  return (

<div className=" flex flex-col md:flex-row flex-wrap bg-primary blue-500 rounded-lg px-5 md:px-10 lg:px-10">
<div className="md:w-1/2 relative flex items-center justify-center">
<div className="Home-container h1">

      {/* Content Wrapper */}

      <div className="md:w-4/5 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw] absolute top-1/2 left-0 transform -translate-y-1/2">
        {/* Heading */}
        <p className="text-4xl md:text-4xl lg:text-4xl text-Black font-semibold leading-snug lg:leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </p>
        <div div className="Home-container h2">
          <p className="mt-4 text-lg md:text-xl text-gray-100 leading-relaxed">
    
            <br />
            schedule your Appointment with us.
          </p>

        {/* Button */}
        <a
  href="#Speciality"
  className="mt-6 bg-white text-blue py-2 px-1 rounded-md shadow-md hover:bg-gray-100 hover:scale-105 transition-transform duration-300 ease-in-out"
>
  Book Appointment
</a>


</div>

     
<div className="Home-background">



 {/* Left Section */}
 
      
    </div>
</div>
  </div>
  </div>
  </div>


);
}
export default Header;