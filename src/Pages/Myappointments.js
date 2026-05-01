import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const Myappointments = () => {
  const { Doctors } = useContext(AppContext);
const{setDoctor}=useState(null);
  const [canceled, setCanceled] = useState(false);
  const navigate = useNavigate();


   useEffect(() => {
    if (Doctors && Doctors.length > 0) {
      setDoctor(Doctors[0]); // optional default doctor
    }
  }, [Doctors, setDoctor]);

  const handlePayOnline = (id) => {
    navigate(`/payment/${id}`);
  };

  const handleCancelAppointment = () => {
    const confirmCancel = window.confirm(
      "Are you sure you want to cancel this appointment?"
    );
    if (confirmCancel) {
      setCanceled(true);
    }
  };

  const handleBookAnotherAppointment = () => {
    navigate("/appointments");
  };

  return (
    <div>
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b">
        My Appointments
      </p>

      <div>
        {!canceled ? (
          Doctors.slice(0, 4).map((item, index) => (
            <div
              className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
              key={index}
            >
              <div>
                <img className="w-32 bg-indigo-50" src={item.image} alt="Doctor" />
              </div>

              <div className="flex-1 text-sm text-zinc-600">
                <p className="text-neutral-800 font-semibold">{item.name}</p>
                <p>{item.Speciality}</p>

                <p className="text-zinc-700 font-medium mt-1">Address:</p>
                <p className="text-xs">{item.address?.line1}</p>
                <p className="text-xs">{item.address?.line2}</p>

                <p className="text-xs mt-1">
                  <span className="text-sm text-neutral-700 font-medium">
                    Date & Time:
                  </span>{" "}
                  25, July, 2024 | 8:30 PM
                </p>
              </div>

              <div className="flex flex-cols gap-2 justify-end">
                <button
                  className="text-sm text-stone-500 sm:min-w-48 py-2 border hover:bg-primary hover:text-white transition-all duration-300"
                  onClick={() => handlePayOnline(item.docid)}
                >
                  Pay Online
                </button>

                <button
                  className="text-sm text-stone-500 sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white transition-all duration-300"
                  onClick={handleCancelAppointment}
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center mt-6">
            <p className="text-lg font-semibold text-red-600">
              Your appointment has been canceled.
            </p>

            <button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-all duration-300"
              onClick={handleBookAnotherAppointment}
            >
              Book Another Appointment
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Myappointments;