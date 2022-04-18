import Aujinput from "../common/Aujinput";
import Aujlabel from "../common/Aujlabel";
import Aujbutton from "../common/Aujbutton";
import "./Signup.css";
import React, { useState, useEffect } from "react";

function Signup() {
  const [ismobiles, setIsmobiles] = useState(window.innerWidth < 700);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 700;
        if (ismobile !== ismobiles) setIsmobiles(ismobile);
      },
      false
    );
  }, [ismobiles]);

  const handleChange = (event, arg) => {
    if (!event.target.validity.valid) {
      document.getElementById(arg).className = "is-invalid form-control";
    } else {
      document.getElementById(arg).className = "form-control";
    }
  };
  const countrylist = ["india", "australia", "belgium", "canada"];
  const formvalidate = () => {
    let list = ["fname","lname","uname","email","tel","possword","country", ];
    list.forEach((states) => {
      let x = document.getElementById(states).value;
      if (x === "") {
        document.getElementById(states).className = "is-invalid form-control mb-2 pr-5 mb-sm-0";
      }
    });
  };
  
  return (
    <div className="d-flex justify-content-center margintop">
      <div
        className="p-2 flex-fill"
        style={{ display: `${ismobiles ? "none" : ""}` }}>
        &nbsp;
      </div>
      <div className={`${ismobiles ? "flex-fill" : ""}`}>
        <div className="border pb-3 pt-2 pr-3 pl-3 bg">
          <h1 className="color">sign up</h1>
          <form>
            <div className={`${ismobiles ? "" : "row"}`}>
              <div className="col mb-3">
                <fieldset>
                  <Aujlabel class="d-flex small" name="first name" />
                  <Aujinput
                    type="text"
                    class="form-control mb-2 pr-5 mb-sm-0"
                    placeholder="first name"
                    id="fname"
                    pattern="[A-Za-z]{1,20}"
                    onChange={(e) => {
                      handleChange(e, "fname");
                    }}
                  />
                </fieldset>
              </div>
              <div className="col mb-3">
                <fieldset>
                  <Aujlabel class="d-flex small" name="last name" />
                  <Aujinput
                    type="text"
                    class="form-control mb-2 pr-5 mb-sm-0"
                    placeholder="last name"
                    id="lname"
                    pattern="[A-Za-z]{1,20}"
                    onChange={(e) => {
                      handleChange(e, "lname");
                    }}
                  />
                </fieldset>
              </div>
            </div>
            <div className={`${ismobiles ? "" : "row"}`}>
              <div className="col mb-3">
                <fieldset>
                  <Aujlabel class="d-flex small" name="user name" />
                  <Aujinput
                    type="text"
                    class="form-control mb-2 pr-5 mb-sm-0"
                    placeholder="user name"
                    id="uname"
                    pattern="{0-50}"
                    onChange={(e) => {
                      handleChange(e, "uname");
                    }}
                  />
                </fieldset>
              </div>
              <div className="col mb-3">
                <fieldset>
                  <Aujlabel class="d-flex small" name="email" />
                  <Aujinput
                    type="email"
                    class="form-control mb-2 pr-5 mb-sm-0"
                    placeholder="email id"
                    id="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onBlur={(e) => {
                      handleChange(e, "email");
                    }}
                  />
                </fieldset>
              </div>
            </div>
            <div className={`${ismobiles ? "" : "row"}`}>
              <div className="col mb-3">
                <fieldset>
                  <Aujlabel class="d-flex small" name="password" />
                  <Aujinput
                    type="password"
                    class="form-control mb-2 pr-5 mb-sm-0"
                    placeholder="password"
                    id="possword"
                  />
                </fieldset>
              </div>
              <div className="col mb-3">
                <fieldset>
                  <Aujlabel class="d-flex small" name="mobile no" />
                  <Aujinput
                    type="tel"
                    class="form-control mb-2 pr-5 mb-sm-0"
                    placeholder="enter the valid 10 numbers"
                    pattern="[0-9]{10}"
                    id="tel"
                    onBlur={(e) => {
                      handleChange(e, "tel");
                    }}
                  />
                </fieldset>
              </div>
            </div>
            <div className={`${ismobiles ? "" : "row"}`}>
              <div className="col">
                <fieldset>
                  <Aujlabel class="d-flex small" name="country" />
                  <Aujinput
                    class="form-control mb-2 mb-sm-0"
                    list="countries"
                    id="country"/>
                  <datalist id="countries">
                    {countrylist.map((state) => {
                      return <option value={state} />;
                    })}
                  </datalist>
                </fieldset>
              </div>
              <div
                className="col"
                style={{ display: `${ismobiles ? "none" : "block"}` }}>
                <fieldset>
                  <Aujlabel class="d-flex small" name="&nbsp;" />
                  <Aujinput
                    type="text"
                    class="form-control mb-2 pr-5 mb-sm-0 hidden"
                  />
                </fieldset>
              </div>
            </div>
            <div className={`${ismobiles ? "" : "row"}`}>
              <div className="col form-check d-flex ml-3 mt-3">
                <fieldset>
                  <input
                    type="checkbox"
                    className="form-check-input mt-2 checkbox"
                    id="checkbox"
                  />
                  <label className="form-check-label small">
                    <span>
                      <span className="red">*</span>accept the terms &
                      conditions
                    </span>
                  </label>
                </fieldset>
              </div> 
            </div>
          </form>
          <Aujbutton
              class="btn shadow-none mt-3"
              type="submit"
              name="sign up"
              id="bgcolor"
              onClick={formvalidate}
            />
        </div>
      </div>
      <div
        className="p-2 flex-fill"
        style={{ display: `${ismobiles ? "none" : ""}` }}>
        &nbsp;
      </div>
    </div>
  );
}

export default Signup;
