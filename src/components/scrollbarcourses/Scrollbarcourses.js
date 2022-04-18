import "./Scrollbarcourses.css";
import { courseData } from "./Courses.js";
import Tagcourses from "./Tagcourses";
import { useState, useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

export default function Scrollbarcourses() {
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
      <div className="maindiv d-flex justify-content-center align-items-center">
        {scrollX !== 0 && (
          <button
            className="prev scrollbtn"
            onClick={() => slide(-100)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
            {/* <i className="fa fa-angle-left">#</i> */}
          </button>
        )}
        <ul className="scrolllist" ref={scrl} onScroll={scrollCheck}>
          {/* {courseData.fruits.map((d, i) => ( */}
          <Tagcourses data={courseData} />
          {/* ))} */}
        </ul>
        {!scrolEnd && (
          <button
            className="next scrollbtn"
            onClick={() => slide(+100)}
            onMouseEnter={(e) => anim(e)}
            onMouseLeave={(e) => anim2(e)}
          >
            <FontAwesomeIcon icon={faChevronRight} />
            {/* <i className="fa fa-angle-right">#</i> */}
          </button>
        )}
      </div>
      <div className="d-flex justify-content-end">
        <Link to="/allcourse">
          <button className="seeallbtn">see all</button>
        </Link>
      </div>
    </>
  );
}
