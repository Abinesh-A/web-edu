import React from "react";
import "./Subscription.css";
import { Link } from "react-router-dom";

function Subscription({ data }) {
  return (
    <div className="d-flex justify-content-center">
      {data.map((data) => {
        return (
          <div className="planheaddiv">
            <div className="planheadtextdiv">
              <h5 className="planheadtext">{data.heading}</h5>
              <small className="plancosttext">{data.plancost}</small>
            </div>
            <ul className="mt-3">
              {data.plandetail.map((data) => {
                return (
                  <li className="plandetaillist">
                    <small>{data}</small>
                  </li>
                );
              })}
            </ul>
            <Link to="/payment" style={{ textDecoration: "none" }}>
              <button className="planbtn">Choose Plan</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default Subscription;
