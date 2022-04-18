import React from "react";
// import tutorpic from "./tutorimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar as fasStar,
  faPhoneAlt,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import "./Tutorlist.css";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";

function Tutorlist({ data }) {
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
            <div className="d-flex tutordiv">
              <div>
                <img className="tutorpic" alt="tutor" src={data.img} />
              </div>
              <div className="d-flex flex-column align-items-start w-100 mt-2">
                <div className="d-flex justify-content-between w-100">
                  <div className="d-flex">
                    <div>
                      <h4 className="tutorname">{data.name}</h4>
                    </div>
                    <div>
                      <img
                        alt="flag icon"
                        src="https://img.icons8.com/color/25/000000/india.png"
                      />
                    </div>
                    <div>
                      <small
                        className="ml-1"
                        style={{
                          color:
                            data.onlinestatus === "Online" ? "green" : "red",
                        }}
                      >
                        {data.onlinestatus}
                      </small>
                    </div>
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
                <div>
                  <small className="tutorspecification">
                    {data.tutorspecification}
                  </small>
                </div>
                <div className="mt-1">
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
                <div className="d-flex justify-content-between w-100">
                  <div className="d-flex">
                    <h7 className="tutorname mt-1">4-5 Course</h7>
                  </div>
                  <div>
                    <img
                      alt="social media icon"
                      src="https://img.icons8.com/color/24/000000/twitter-squared.png"
                    />
                    <img
                      alt="social media icon"
                      className="ml-1"
                      src="https://img.icons8.com/color/24/000000/youtube-play.png"
                    />
                    <img
                      alt="social media icon"
                      className="ml-1"
                      src="https://img.icons8.com/color/24/000000/linkedin.png"
                    />
                    <img
                      alt="social media icon"
                      className="ml-1"
                      src="https://img.icons8.com/color/24/000000/facebook.png"
                    />
                    <img
                      alt="social media icon"
                      className="ml-1"
                      src="https://img.icons8.com/fluency/24/000000/instagram-new.png"
                    />
                  </div>
                </div>
                <div className="mt-1 tutorspecification">
                  <a href="/">{data.cost}</a>
                  <strike className="ml-2">$80</strike>
                </div>

                <div className="d-flex mt-3">
                  <button className="tutorbtn pl-2 pr-2">View More</button>
                  <button className="tutorbtn pl-2 pr-2 ml-2">
                    Audio
                    <FontAwesomeIcon className="ml-2" icon={faPhoneAlt} />
                  </button>
                  <button className="tutorbtn pl-2 pr-2 ml-2">
                    Chat
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

export default Tutorlist;
