import React from "react";
import "./Myprofile.css";
import Avatar from "@mui/material/Avatar";
import img from "./imgprofile.png";
import {} from "@fortawesome/free-regular-svg-icons";

function Myprofile() {
  return (
    <div className="d-flex mt-5 justify-content-between">
      <div className="align-self-center imgprofile">
        <Avatar sx={{ width: 100, height: 100 }} />
        <div className="addimgbtn">
          <img
            alt="icon"
            src="https://img.icons8.com/material-rounded/24/000000/add-image.png"
          />
        </div>
        <p>username</p>
      </div>
      <div className="infodiv">
        <h3 className="d-flex">Personal Information</h3>
        <form>
          <div className="form-group">
            <label className="d-flex badge">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name"
            />
          </div>
          <div className="form-group">
            <label className="d-flex badge">Phone Number</label>
            <input
              type="tel"
              className="form-control"
              placeholder="Phone number"
            />
          </div>
          <div className="form-group">
            <label className="d-flex badge">Email Address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <div className="form-group">
            <label className="d-flex badge">Address</label>
            <input type="text" className="form-control" placeholder="Address" />
          </div>
          <button type="submit" className="updatebtn">
            Update
          </button>
        </form>
      </div>
      <div className="ml-5">
        <img src={img} alt="img" />
      </div>
    </div>
  );
}

export default Myprofile;
