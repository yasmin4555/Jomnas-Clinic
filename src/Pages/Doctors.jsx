import React, { useContext, useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Doctors = () => {
  const { Speciality } = useParams(); // Get speciality from URL params
  const { Doctors } = useContext(AppContext); // Get doctors from context
  const [filterDoc, setFilterDoc] = useState([]); // State to store filtered doctors
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Doctors data:", Doctors); // Debugging: Ensure we have doctor data
    console.log("Speciality param:", Speciality); // Debugging: Check the speciality from params

    if (Doctors && Doctors.length > 0) {
      if (Speciality) {
        const filtered = Doctors.filter(
          (doctor) =>
            doctor.speciality?.toLowerCase() === Speciality?.toLowerCase()
        );
        console.log("Filtered doctors:", filtered); // Debugging: Check filtered list
        setFilterDoc(filtered);
      } else {
        setFilterDoc(Doctors); // No speciality, show all doctors
      }
    } else {
      console.warn("Doctors data is empty or not loaded.");
      setFilterDoc([]); // Fallback: Set to empty array
    }
  }, [Doctors, Speciality]);

  return (
    <div className="p-6">
      <p className="text-2xl font-semibold text-gray-800">
       <span className="text-center">Browse through the doctors</span> 
      </p>
     
     <div className="flex flex-col sm:flex-row items-start gap-5 mt-5">
      <p onClick={()=>Speciality==="Dermatologist"?navigate('/Doctors'):navigate('/ Doctors/')} className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}>Dermatologist </p>
      <p onClick={()=>Speciality==="Internal medicine"?navigate('/Doctors'):navigate(' /Doctors/')}className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}>Internal Medicine </p>
      <p onClick={()=>Speciality==="Plastic surgeon"?navigate('/Doctors'):navigate('/ Doctors/')}className={'w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer'}>Plastic Surgeon </p>
      <p className="text-gray-600 mt-2">
        Find specialists and book appointments.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {filterDoc.length > 0? (
          filterDoc.map((doctor) => (
            <div
              key={doctor.docid}
              onClick={() => navigate(`/Appointment/doc/${doctor.docid}`)}
              className="flex flex-col items-center text-center border p-4 rounded shadow-md transition-all hover:shadow-lg cursor-pointer"
            >
              <div className="mb-4">
                <img
                  src={doctor.image || "https://via.placeholder.com/150"}
                  alt={doctor.name || "Doctor"}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <p className="font-semibold text-lg">
                {doctor.name || "N/A"}
              </p>
              <p className="text-gray-500">
                {doctor.speciality || "General Practitioner"}
              </p>
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent parent div click event
                  navigate(`/Appointment/doc/${doctor.docid}`);
                }}
                className="mt-3 px-4 py-2 bg-primary text-white rounded"
              >
                View Profile
              </button>
          
            </div>
          ))
        ) : (
          <p className="text-gray-500 col-span-full text-center">
            No doctors found. Please try again later.
          </p>
        )}
     </div>
    </div>
    </div>
  );
};

export default Doctors;
