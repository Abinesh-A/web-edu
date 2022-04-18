import React from "react";
import "./Payment.css";

function Payment() {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="flex-fill"></div>
        <div className="flex-shrink-1 paymentmaindiv">
          <h4 className="payheadtext mb-3">Upgrade to premium plan</h4>
          <small className="mb-5">
            You're paying $4.99 for this plan Get access for all live classes
            realtime tutor attend the class via mobile app also
          </small>
          <div className="d-flex flex-column">
            <button className="paymentbtn">Credit Card</button>
            <button className="paymentbtn">Debit Card</button>
            <button className="paymentbtn">Net Banking</button>
            <button className="paymentbtn">Paytm</button>
          </div>
        </div>
        <div className="flex-fill"></div>
      </div>
    </div>
  );
}

export default Payment;
