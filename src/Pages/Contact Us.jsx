import React from "react";
import { assets } from "../assets/assets";

const Contactus = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 text-gray-500 ">
        <p>
          CONTACT<span className="text-black font-semibold">US</span>
        </p>
      </div>
    

        <div className="container">
       
        <img
          className="contact-image"
          src={assets.Contactus}
          alt="Contact Us"
          width="40%"
        />

      <div className="text">

            <h3>OUR OFFICE</h3>
            <p>
              54709 Willms Station
              <br />
              Suite 350, Washington, USA
            </p>
            <p>
              Tel: (415) 555-0132
              <br />
              Email: greatstackdev@gmail.com
            </p>
            <p></p>
          </div>
    </div>
    </div>
  );
};

export default Contactus;

      




