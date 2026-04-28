import React, { createContext, useState } from "react";
import { assets } from "../assets/assets";


// Create the context
export const AppContext = createContext();

// Create the provider component

export const AppContextProvider = (props) => {
  // State for doctors
  const [Doctors] = useState([
    {
      docid: "1",
      name: "Dr Lordiana Rimmaudo",
      image: assets.OIP || "https://via.placeholder.com/150",
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "4 years",
      about: "Dr Lordiana is very nice and you can feel comfortable speaking with her and she also gives a very good herbal medicine",
      fees: 60,
      address: "16 Charly Street, 52234 Aachen, Germany",
      available: true
    },
    {
      docid: "2",
      name: "Dr William Edres",
      image: assets.Image|| "https://via.placeholder.com/150",
      speciality: "Internal Medicine",
      degree: "MBBS",
      experience: "4 years",
      about: "Dr William is very helpful and very professional at his work",
      fees: 50,
      address: "16 Charly Street, 52234 Aachen, Germany",
      available:true
    },
    {
      docid:"3",
      name: "Dr Ronald Swarwoski",
      image: assets.OIP26 || "https://via.placeholder.com/150",
      speciality: "Plastic Surgeon",
      degree: "MBBS",
      experience: "8 years",
      about: "Dr Ronald is very professional at his work",
      fees: 70,
      address: "16 Charly Street, 52234 Aachen, Germany",
      available: true
    },
    {
      docid:"4",
      name: "Dr Diana Mohamed",
      image: assets.dr || "https://via.placeholder.com/150",
      speciality: "Dermatologist",
      degree: "MBBS",
      experience: "5 years",
      about: "Dr Diana is an expert dermatologist with a passion for skincare.",
      fees: 70,
      address: "16 Charly Street, 52234 Aachen, Germany",
      available: true
    },
  ]);
  
  

  const currencySymbol='$';
  const value = {
    Doctors,
    currencySymbol
  };

  return (
    <AppContext.Provider value={value}>
      {props.children}
     
    </AppContext.Provider>
  );
};
export default AppContext;