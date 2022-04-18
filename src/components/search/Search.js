import Aujinput from "../common/Aujinput";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import React, { useState, useEffect } from "react";

export const Search = () => {
  let title = "uworld";
  const [mobiles, setMobiles] = useState(window.innerWidth < 1200);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const mobile = window.innerWidth < 300;
        if (mobile !== mobiles) setMobiles(mobile);
      },
      false
    );
  }, [mobiles]);
  const signin = () => {
    document.getElementById("searchhide").style.display = "none";
    document.getElementById("popup").style.display = "block";
  };
  return (
    <div>
      <div className="padding" id="searchhide">
        <div className="row">
          <div className="col-sm justify-content-center align-items-center">
            <div
              className={`${
                mobiles
                  ? "display-3 font-weight-bold color"
                  : "display-2 font-weight-bold color"
              }`}
            >
              {title}
            </div>
          </div>
        </div>
        <div className="container mb-3">
          <div className="row height d-flex justify-content-center align-items-center">
            <div className="col-md-8">
              <div className="form">
                <SearchIcon className="fa fa-search i" />
                <Aujinput
                  type="text"
                  class="form-control pr-5"
                  id="forminput"
                  placeholder="search for your goal"
                />
                <span className="left-pan">
                  <MicIcon className="fa fa-microphone i" />
                </span>
              </div>
            </div>
          </div>
        </div>
        <a
          id="bgcolor"
          class="btn shadow-none btn-lg mt-1 pb-2"
          // name="search"
          href="/userhomepage"
          onClick={signin}
        >
          search
        </a>
      </div>
    </div>
  );
};

export default Search;
