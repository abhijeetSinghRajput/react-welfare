import React from "react";
import image from "../../assets/images/image.png";
import flag from "../../assets/images/india-flag-1.jpg";
import amritMahotsav from "../../assets/images/amrit-mahotsav.jpg";

function MidNavbar() {
  return (
    <nav className="mid-nav">
      <div className="container">
        <div>
          <img src={image} alt="" />
          <div>
            <h2>Social Welfare/Rehabilitation Services</h2>
            <h3>Government of NCT of Delhi</h3>
          </div>
        </div>
        <div>
          <img src={flag} alt="" />
          <img src={amritMahotsav} alt="" />
        </div>
      </div>
    </nav>
  );
}

export default MidNavbar;
