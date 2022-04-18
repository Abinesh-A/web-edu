import React from "react";
import "./Headpart.css";
import imgl from "./imgl.png";
import imgr from "./imgr.png";
import { Link } from "react-router-dom";

function Headpart() {
  return (
    <>
      <div className="row headdiv">
        <div className="col">
          <img src={imgl} alt="leftimage" className="imgl" />
        </div>
        <div className="col-7">
          <h2 className="maintext">
            Reach a Goal as per your Dream with World Class Goal setting
            Platform
          </h2>
          <p className="quote">
            Learn with best Educator and Experts across the Global and keep
            Yourself Updated
          </p>
          <Link to="/setgoal">
            <button className="goalbtn">Set Your Goal</button>
          </Link>
        </div>
        <div className="col">
          <img src={imgr} alt="rightimage" className="imgr" />
        </div>
      </div>
    </>
  );
}

export default Headpart;
