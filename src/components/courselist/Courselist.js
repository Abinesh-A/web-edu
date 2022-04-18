import React from "react";
// import coursepic from "./download.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar as fasStar,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Courselist.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Courselist({ data }) {
  const options = ["Add Review", "Comments", "Report to uworld", "Block"];
  const ITEM_HEIGHT = 48;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div div style={{ marginTop: "-7%" }}>
      {data.map((data) => {
        return (
          <div>
            <div className="d-flex coursediv">
              <div>
                <img className="coursepic" alt="course" src={data.img} />
              </div>
              <div className="d-flex flex-column align-items-start w-100 mt-2">
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <h4 className="coursedetail">{data.coursedetail}</h4>
                  </div>
                  <div>
                    <img
                      alt="icon"
                      src="https://img.icons8.com/material-sharp/24/000000/share.png"
                    />
                    <img
                      alt="icon"
                      className="ml-2"
                      src="https://img.icons8.com/emoji/24/000000/heart-suit.png"
                    />
                    <IconButton
                      aria-label="more"
                      id="long-button"
                      aria-controls="long-menu"
                      aria-expanded={open ? "true" : undefined}
                      aria-haspopup="true"
                      onClick={handleClick}
                    >
                      <MoreVertIcon />
                    </IconButton>
                    <Menu
                      id="long-menu"
                      MenuListProps={{
                        "aria-labelledby": "long-button",
                      }}
                      anchorEl={anchorEl}
                      open={open}
                      onClose={handleClose}
                      PaperProps={{
                        style: {
                          maxHeight: ITEM_HEIGHT * 4.5,
                          width: "20ch",
                        },
                      }}
                    >
                      {options.map((option) => (
                        <MenuItem
                          key={option}
                          selected={option === "Pyxis"}
                          onClick={handleClose}
                        >
                          {option}
                        </MenuItem>
                      ))}
                    </Menu>
                  </div>
                </div>
                <div style={{ marginTop: "-10px" }}>
                  <FontAwesomeIcon
                    icon={data.rating >= 1 ? fasStar : faStar}
                    className="starcolor"
                  />{" "}
                  <FontAwesomeIcon
                    icon={data.rating >= 2 ? fasStar : faStar}
                    className="starcolor"
                  />{" "}
                  <FontAwesomeIcon
                    icon={data.rating >= 3 ? fasStar : faStar}
                    className="starcolor"
                  />{" "}
                  <FontAwesomeIcon
                    icon={data.rating >= 4 ? fasStar : faStar}
                    className="starcolor"
                  />{" "}
                  <FontAwesomeIcon
                    icon={data.rating >= 5 ? fasStar : faStar}
                    className="starcolor"
                  />{" "}
                </div>
                <div className="mt-2">
                  <span>
                    <img
                      alt="logo"
                      claassName="mr-2"
                      src="https://img.icons8.com/material-rounded/20/000000/globe--v1.png"
                    />
                    <h7 className="coursename">{data.coursename}</h7>
                  </span>
                </div>
                <div className="mt-2">
                  <span>
                    <small className="coursename mr-2">Created by</small>
                    <small className="coursecreater">{data.creater}</small>
                  </span>
                </div>
                <div className="mt-2 coursespecification">
                  <a href="/">{data.cost}</a>
                  <strike className="ml-2">$80</strike>
                </div>

                <div className="d-flex mt-3">
                  <button className="coursebtn pl-2 pr-2">View More</button>
                  <button className="coursebtn ml-4 pl-2 pr-2">
                    Chat to Tutor
                    <FontAwesomeIcon className="ml-2" icon={faEnvelope} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Courselist;
