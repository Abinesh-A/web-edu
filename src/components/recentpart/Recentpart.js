import React from "react";
import Scrollbartutor from "../scrollbartutor/Scrollbartutor";
import Scrollbarcourses from "../scrollbarcourses/Scrollbarcourses";
import "./Recentpart.css";

function Recentpart() {
  return (
    <>
      <div className="d-flex mt-2">
        <h4 className="navmenu">Recent tutor</h4>
      </div>
      <div className="recentdiv">
        <Scrollbartutor />
      </div>
      <div className="d-flex mt-2">
        <h4 className="navmenu">Recent courses</h4>
      </div>
      <div className="recentdiv">
        <Scrollbarcourses />
      </div>
    </>
  );
}

export default Recentpart;
