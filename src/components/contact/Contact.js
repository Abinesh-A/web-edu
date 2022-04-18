import Aujinput from "../common/Aujinput";
import Aujtextarea from "../common/Aujtextarea";
import Aujbutton from "../common/Aujbutton";
import "./Contact.css";
import React from "react";

const Contact = () => {
  const handlechange = (event, arg) => {
    if (!event.target.validity.valid) {
      document.getElementById(arg).className = "is-invalid form-control";
    } else {
      document.getElementById(arg).className = "form-control";
    }
  };

  return (
    <div className="margint">
      <div className="d-flex justify-content-center">
        <div className="flex-fill"></div>
        <form className="border p-3 flex-grow-1">
          <h1 className="mb-4 color">contact form</h1>
          <div className="row">
            <div className="col mb-3">
              <Aujinput
                type="Name"
                class="form-control"
                placeholder="enter name"
                id="name"
                pattern="[A-Za-z\s]{2,}"
                onChange={(e) => {
                  handlechange(e, "name");
                }}
                required="true"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <Aujinput
                type="email"
                class="form-control"
                id="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                onBlur={(e) => {
                  handlechange(e, "email");
                }}
                placeholder="enter email"
                required="true"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <Aujinput
                type="Name"
                class="form-control"
                id="mobile"
                pattern="[0-9]{10}"
                onBlur={(e) => {
                  handlechange(e, "mobile");
                }}
                placeholder="enter phonenumber"
                required="true"
              />
            </div>
          </div>
          <div className="row">
            <div className="col mb-3">
              <Aujtextarea
                type="comment"
                class="form-control"
                id="floatinginput"
                placeholder="leave your message"
                required="true"
              />
            </div>
          </div>
          <Aujbutton
            type="submit"
            class="btn shadow-none mt-3"
            id="bgcolor"
            name="submit"
          />
        </form>
        <div className="flex-fill "></div>
      </div>
    </div>
  );
};

export default Contact;
