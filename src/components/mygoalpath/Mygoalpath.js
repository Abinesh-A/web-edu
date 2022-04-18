import "./Mygoalpath.css";
import { pathdata } from "./Mygoalpathdata.js";
import Tagpathdata from "./Tagpathdata";
import { useState, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Mygoalpathscroll() {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  //Slide click
  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);

    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  //Anim
  const anim = (e) => {
    gsap.from(e.target, { scale: 1 });
    gsap.to(e.target, { scale: 1.5 });
  };
  const anim2 = (e) => {
    gsap.from(e.target, { scale: 1.5 });
    gsap.to(e.target, { scale: 1 });
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <>
      <h4 className="d-flex mt-2 navmenu">Doctor-Goalpath</h4>
      <div className="mygoalpathdiv">
        <div className="goalpathmaindiv d-flex justify-content-center align-items-center">
          <ul className="scrolllist" ref={scrl} onScroll={scrollCheck}>
            {/* {courseData.fruits.map((d, i) => ( */}
            <Tagpathdata data={pathdata} />
            {/* ))} */}
          </ul>
        </div>
      </div>
      <div className="d-flex mt-3 justify-content-center">
        <div>
          <button
            className="scrollbtn ml-3"
            onClick={() => slide(-100)}
            // onMouseEnter={(e) => anim(e)}
            // onMouseLeave={(e) => anim2(e)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            {/* <i className="fa fa-angle-left">#</i> */}
          </button>
        </div>
        <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1>
        <div>
          <button
            className="scrollbtn"
            onClick={() => slide(+100)}
            // onMouseEnter={(e) => anim(e)}
            // onMouseLeave={(e) => anim2(e)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
            {/* <i className="fa fa-angle-right">#</i> */}
          </button>
        </div>
      </div>
    </>
  );
}
