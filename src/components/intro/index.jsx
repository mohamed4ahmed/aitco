import React from "react";
import engsalah1 from "../../assets/img/engsalah1.png";
import engsalah2 from "../../assets/img/engsalah2.png";
import Avatar2 from "../../assets/img/full-nguoi-edit.webp";
import "./style.css";
const Greeting = () => {
  return (
    <div className="intro-wrapper">
      <div className="nav-wrapper">
        <div className="nav-wrapper-left__dots-wrapper">
          <div className="browser-dot dot-1"></div>
          <div className="browser-dot dot-2"></div>
          <div className="browser-dot dot-3"></div>
        </div>
        <ul className="nav-wrapper-right__navigation-list">
          <li>
            <a href="mailto:engsalah@aitcosa.com">Contact</a>
          </li>
        </ul>
      </div>
      <div className="left-column">
        <img className="avatar" src={Avatar2} alt="Avatar2" />
        <h5>AITCO Profile</h5>
        <p>{"Advanced International Trade Co"}</p>
      </div>
      <div className="right-column">
        <div className="right-column__preview-shadow">
          <div className="right-column__preview">
            <div className="corner corner-tl"></div>
            <div className="corner corner-tr"></div>
            <h3>What AITCO Do?</h3>
            <p style={{ fontSize: "16px" }}>
            Advanced International Trading Company (AITCO) is a leading Saudi company in the field of construction services that came to contribute to achieving the Kingdom’s Vision 2030, which is a pioneer in achieving a comprehensive economic development renaissance led by the Custodian of the Two Holy Mosques, King Salman bin Abdulaziz, and His Royal Highness Prince Mohammed bin Salman bin Abdulaziz, Crown Prince and Prime Minister - may God protect them.
            </p>
            <img className="avatar" src={engsalah1} alt="engsalah1" />
            <img className="avatar" src={engsalah2} alt="engsalah2" />

            <div className="corner corner-br"></div>
            <div className="corner corner-bl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greeting;
