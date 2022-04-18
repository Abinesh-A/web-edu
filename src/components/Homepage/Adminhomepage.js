import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faQuestionCircle,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

function Adminhomepage() {
  return (
    <div>
    <div className="d-flex justify-content-between">
      <div className="d-flex">
      <img
        src="https://img.icons8.com/color/25/000000/google-logo.png"
        alt="google logo"
        className="ml-3 mt-3 mb-3"
        style={{height:"40px",width:"40px"}}
      />
      <h5 className="mt-4 font-weight-bold text-muted">GOOGLE STORE</h5>
      </div>
      <div className="d-flex mt-3 align-items-stretch">
        <div className="pr-3"><FontAwesomeIcon icon={faSearch}/></div>
        <div className="pr-3"><FontAwesomeIcon icon={faQuestionCircle} /></div>
        <div className="pr-3"><FontAwesomeIcon icon={faShoppingCart} /></div>
      </div>
    </div>
    <div className="d-flex flex-row">
      <div className="d-flex">
      <h1>Google Pixel 4a</h1>
      <ul className="d-flex mt-3">
        <li style={{listStyle:"none"}} className="mr-3"><a>Overview</a></li>
        <li style={{listStyle:"none"}} className="mr-3"><a>Tech Specs</a></li>
        <li style={{listStyle:"none"}} className="mr-3"><a>Compare</a></li>
      </ul>
      </div>
      <div className="d-flex justify-content-end flex-fill">
      <button className="btn  btn-primary btn-lg mr-3">Find Retailers</button>
      </div>
    </div>
    </div>
  );
}

export default Adminhomepage;
