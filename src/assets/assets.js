// Importing all assets
import Image from "./OIP (8).jpg";
import OIP from"./OIP 7.jpg";
import OIP26 from "./OIP (26).jpg";
import Myprofile from "./Myprofile.png";
import logo from "./logo.jpg";
import arrow_icon from './arrow_icon.svg';
import dropdown_icon from './dropdown_icon.svg';
import header from "./R.jpg";
import profile from"./profile.jpg";
import Header from"./header.jpg";
import groupimage from "./group image.jpg";
import Dermatologist from"./download (4).jpg";
import Internal_Medicine from"./OIP (15).jpg";
import Medical_Plastic_Surgery from"./OIP (13).jpg";
import appointment from"./appointment.webp";
import Healthlogo from"./HealthWellness-midsize.jpg";
import verfied_icon from "./verfied_icon.svg";
import info_icon from"./info_icon.svg";
import doctors from"./doctors.png";
import Aboutus from"./aboutt.jpg";
import Contactus from"./Contact us.jpg";
import dr from"./dr.webp";

export const assets = {
    Image,
  
    Contactus,
    OIP26,
   Myprofile,
    Healthlogo,
    logo,
    arrow_icon,
    dropdown_icon,
    header,
    profile,
    Header,
    groupimage,
    Dermatologist,
    Internal_Medicine,
    Medical_Plastic_Surgery,
    OIP,
    appointment,
    Aboutus,
    verfied_icon,
    info_icon,
    doctors,
    
    dr,

};
export const SpecialityData =[
    {
    
        Speciality:"Dermatologist",
        image:assets.Dermatologist,
        





    },

    {

    Speciality:"Internal medicine",
    image: assets.Internal_Medicine,

    },

    {


        "Speciality":"Plastic surgeon",
        image:assets.Medical_Plastic_Surgery,


        }



 ]




// Doctors data with references to assets
export const Doctors = [
    {
        docid: "1",
        name: "Dr Lordiana Rimmaudo",
        image: assets.OIP, // Reference the imported `Image`
        speciality: "Dermatologist",
        degree: "MBBS",
        experience: "4 years",
        about: "Dr Lordiana is very nice and you can feel comfortable speaking with her and she also gives a very good herbal medicine",
        fees: 60,
        address: "16 Charly Street, 52234 Aachen, Germany",
    },
    {
        docid: "2",
        name: "Dr William Edres",
        image: assets.Image, // Reference the imported `portait` image
        speciality: "Internal Medicine",
        degree: "MBBS",
        experience: "4years",
        about: "Dr William is very helpful and very professional at his work",
        fees: 50,
        address: "16 Charly Street, 52234 Aachen, Germany",
    },
    {
        docid: "3",
        name: "Dr Ronald Swarwoski",
        image: assets.OIP26, // Reference the imported `portait` image
        speciality: "Plastic Surgeon",
        degree: "MBBS",
        experience: "8 years",
        about: "Dr Ronald is very professional at his work",
        fees: 70,
        address: "16 Charly Street, 52234 Aachen, Germany",
    },
    {
    docid: "4",
    name: "Dr Diana Mohamed",
    image: assets.dr, // Reference the imported `Image`
    speciality: "Dermatologist",
    degree: "MBBS",
    experience: "5years",
    about: "",
    fees: 70,
    address: "16 Charly Street, 52234 Aachen, Germany",
    },

];
