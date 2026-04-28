import React ,{useContext ,useEffect,useState}from "react";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const RelatedDoctors=({Speciality,docid})=> {
const navigate=useNavigate();
const {Doctors}=useContext(AppContext);
const [relDoc,setRelDocs]=useState([]);

useEffect(()=> {
if(Doctors.length> 0 &&Speciality){
    const DoctorsData=Doctors.filter((doc)=>doc.Speciality===Speciality&&doc._id !==docid)
    setRelDocs(DoctorsData)
}

},[Doctors,Speciality,docid])

return(
    <div>
 <div className="top-doctors-container">
      <h2 className="heading">Top Doctors</h2>
      <div className="doctors-row">
        {relDoc.slice(0, 3).map((doctor) => (
          <div
            key={doctor.docid} // Use docid as the key

            className="doctor-card cursor-pointer"

            onClick={() => navigate(`/Appointment/${doctor.docid}`)}

 // Navigate to Appointment page
          >
           
            <div className="doctor-image-container">
              <img
                 src={doctor.image || "https://via.placeholder.com/150"}
                alt={doctor.name || "Doctor"}
                className="doctor-image"
              />
            </div>
            <p className="doctor-name">{doctor.name || "N/A"}</p>
            <p className="doctor-speciality">{doctor.speciality || "General Practitioner"}</p>
            <button
              className={`availability-button ${
                doctor.available ? "available" : "not-available"
              }`}
            >
              {doctor.available ? "Available" : "Not Available"}
            </button>
          </div>
        ))}
      </div>
    </div>
    </div>
)
}
export default RelatedDoctors;