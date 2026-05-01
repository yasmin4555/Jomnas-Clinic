import React, { useContext, useEffect, useState,useCallback } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
import { assets } from "../assets/assets";
import RelatedDoctors from "../components/RelatedDoctors";
const Appointment = () => {
  const { docid } = useParams();
  const { Doctors, currencySymbol } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState(null);

const navigate=useNavigate();
  const daysOfWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];


  const fetchDataInfo = useCallback(() => {
  const foundDoc = Doctors.find((doc) => doc.docid === docid);

setDocInfo(foundDoc);
}, [Doctors, docid]);

  const getAvailableSlots = useCallback(() => {
  const slots = [];
  const today = new Date();

  for (let i = 0; i < 7; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() + i);

    const endTime = new Date(currentDate);
    endTime.setHours(21, 0, 0, 0);

    if (today.getDate() === currentDate.getDate()) {
      currentDate.setHours(
        currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
      );
      currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
    } else {
      currentDate.setHours(10, 0, 0, 0);
    }

    const timeSlots = [];
    while (currentDate < endTime) {
      const formattedTime = currentDate.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      timeSlots.push({
        datetime: new Date(currentDate),
        time: formattedTime,
      });

      currentDate.setMinutes(currentDate.getMinutes() + 30);
    }

    slots.push(timeSlots);
  }

  setDocSlots(slots);
}, []);



 useEffect(() => {
  fetchDataInfo();
}, [fetchDataInfo]);;

useEffect(() => {
  if (docInfo) {
    getAvailableSlots();
  }
}, [docInfo, getAvailableSlots]);

  return (
    docInfo && (
      <div>
        {/* Doctor Information */}
        <div className="flex flex-col sm:flex-row gap-4">
          <div>
            <img className="bg-primary w-full sm:max-w-72 rounded-lg" src={docInfo.image} alt={docInfo.name} />
          </div>
          <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
            <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
              {docInfo.name}
              <img src={assets.verfied_icon} alt="Verified" />
            </p>
            <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
              <p>
                {docInfo.degree} - {docInfo.Speciality}
              </p>
              <button className="py-0.5 px-2 border text-xs rounded-full">{docInfo.experience}</button>
            </div>
            <div>
              <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
                About <img src={assets.info_icon} alt="Info" />
              </p>
              <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
            </div>
            <p className="text-gray-500 font-medium mt-4">
              Appointment fee: <span className="text-gray-600">{currencySymbol}{docInfo.fees}</span>
            </p>
          </div>
        </div>

       
        {/* Booking Slots */}
        <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
          <p>Booking slots</p>
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-3 mt-4">
            {docSlots.length > 0 &&
              docSlots.map((item, index) => (
                <div
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                    slotIndex === index ? "bg-primary text-white" : "border border-gray-200"
                  }`}
                >
                  <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
                  <p>{item[0] && item[0].datetime.getDate()}</p>
                </div>
              ))}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-4">
            {docSlots.length > 0 &&
              docSlots[slotIndex].map((item, index) => (
                <p
                  key={index}
                  onClick={() => setSlotTime(item.time)}
                  className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${
                    item.time === slotTime ? "bg-primary text-white" : "text-gray-400 border border-gray-300"
                  }`}
                >
                  {item.time.toLowerCase()}
                </p>
              ))}
          </div>
          <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg" onClick={() => navigate(`/payment/${docid}`)}
>
  Book an Appointment</button>

        </div>
        {}
        <RelatedDoctors docid={docid}  Speciality={docInfo.Speciality}/>
      </div>
    )
  );
};

export default Appointment;


