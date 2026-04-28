import React from "react";
import { SpecialityData } from "../assets/assets";
import { Link } from "react-router-dom";
import "./SpecialityMenu.css";

const SpecialityMenu = () => {
  return (
    <div id="Speciality" className="Speciality-container">
      <h1 className="Speciality-heading">Find my Speciality</h1>
      <p className="Speciality-description">
        Choose from our various specialities and book an appointment with ease.
      </p>

      <div className="Speciality-row">
        {SpecialityData.map((item, index) => (
          <Link
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="Speciality-item"
            key={index}
            to={`/doctors/${item.Speciality.toLowerCase()}`} // Convert to lowercase for URL consistency
          >
            <div className="Speciality-image-container">
              <img
                src={item.image}
                alt={item.Speciality}
                className="Speciality-image"
              />
            </div>
            <p className="Speciality-name">{item.Speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
