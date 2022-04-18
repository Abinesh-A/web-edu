import React from "react";
import "./Page1.css";

function Page1() {
  return (
    <div>
      <div className="d-flex justify-content-end mt-4">
        <h1 className="navmenu">On time Complete rate: 75%</h1>
      </div>

      <div className="d-flex justify-content-around align-items-center">
        <div className="Box">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <h4 className="navmenu">No of Courses</h4>
              <h6 className="navmenu">8</h6>
            </div>
            <div className="ml-2">
              <img
                className="mt-3"
                src="https://img.icons8.com/ios-filled/60/000000/graduation-cap.png"
              />
            </div>
          </div>
        </div>
        <div className="Box">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <h4 className="navmenu">No of Hours</h4>
              <h6 className="navmenu">13</h6>
            </div>
            <div className="ml-4">
              <img
                className="mt-3"
                src="https://img.icons8.com/color/60/000000/historical.png"
              />
            </div>
          </div>
        </div>
        <div className="Box">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <h4 className="navmenu">No of Progress</h4>
              <h6 className="navmenu">5</h6>
            </div>
            <div className="ml-2">
              <img
                className="mt-3"
                src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/60/000000/external-checkpoint-goal-flag-for-progress-and-opportunity-basic-shadow-tal-revivo.png"
              />
            </div>
          </div>
        </div>
        <div className="Box">
          <div className="d-flex justify-content-around align-items-center">
            <div>
              <h4 className="navmenu">No of Complete</h4>
              <h6 className="navmenu">3</h6>
            </div>
            <div className="ml-2">
              <img
                className="mt-3"
                src="https://img.icons8.com/external-linector-flat-linector/60/000000/external-calendar-university-linector-flat-linector.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page1;
