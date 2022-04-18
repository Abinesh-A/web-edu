import React, { useState, useEffect } from "react";
import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import Aujinput from "../common/Aujinput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AmplifySignOut,withAuthenticator} from "@aws-amplify/ui-react";
import "./Userhomepage.css";

function Userhomepage() {
  const [shownav, setshownav] = useState("false");
  const [isactive, setisactive] = useState("false");
  const [ismobiles, setIsmobiles] = useState(window.innerWidth > 1200);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth > 997;
        if (ismobile !== ismobiles) setIsmobiles(ismobile);
      },
      false
    );
  }, [ismobiles]);
  const toggleNav = () => {
    document.getElementById("serachbuttonbar").style.display = "none";
    setshownav(!shownav);
  };
  const searchbardown = () => {
    setisactive(!isactive);
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-ligh navbgcolor">
        <a className="navbar-brand" href="/">
          <h1 className="logo">uworld</h1>
        </a>
        <span>
          <button className="navbar-toggler" type="button" onClick={toggleNav}>
            <FontAwesomeIcon icon={faBars} clasName="menubar" />
          </button>
          <div type="button" onClick={searchbardown}>
            <FontAwesomeIcon icon={faSearch} className="searchicon" />
          </div>
        </span>
        <div
          className={
            shownav
              ? "collapse navbar-collapse"
              : "collapse navbar-collapse show"
          }
          id="navbarNav"
        >
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a
                className="nav-link navbgcolor"
                href="/"
              >
                my profile
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link navbgcolor"
                href="/"
              >
                my goal
              </a>
            </li>
            <li className="nav-item ">
            <a
                className="nav-link navbgcolor"
                href="/"
              >
                setting
              </a>
            </li>
            <form className="form-inline my-2 my-lg-0 mr-5 pr-5" id="searchbar">
              <div className="row mt-2 d-flex justify-content-center align-items-center">
                <div className="col-md-8">
                  <div className="forms">
                    <FontAwesomeIcon
                      icon={faSearch}
                      className="fa fa-search is"
                    />
                    <Aujinput
                      type="text"
                      class="form-control"
                      id="forminputs"
                      placeholder="search for your goal"
                    />
                  </div>
                </div>
              </div>
            </form>
            <AmplifySignOut/>
            {/* <div className="dropdown">
              <img
                src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg"
                width="40"
                height="40"
                className="rounded-circle dropbtn"
              />
              <div className="dropdown-content">
                <a href="#">edit profile</a>
                <a href="#">log out</a>
              </div>
            </div> */}
          </ul>
        </div>
      </nav>
      <div className={`${ismobiles ? "hidden" : ""}`}>
        <div
          className={isactive ? "hidden" : "d-flex navbgcolor"}
          id="serachbuttonbar"
        >
          <div className="form  ml-5 mr-5 mb-2 flex-grow-1 ">
            <FontAwesomeIcon icon={faSearch} className="fa fa-search i" />
            <Aujinput
              type="text"
              class="form-control"
              id="forminputdown"
              placeholder="search for your goal"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default withAuthenticator(Userhomepage);
