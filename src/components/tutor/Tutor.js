import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
// import ListItemIcon from "@mui/material/ListItemIcon";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Tutorlist from "../tutorlist/Tutorlist";
import Courselist from "../courselist/Courselist";
import { tutordata } from "../tutorlist/tutordata";
import { coursedata } from "../courselist/coursedata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faStar as fasStar,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "./Tutor.css";
// import ListItemText from "@mui/material/ListItemText";

const drawerWidth = 230;

export default function ClippedDrawer() {
  const selectedbylist = [
    {
      url: "/courses",
      name: "Course",
    },
    {
      url: "/tutors",
      name: "Tutor",
    },
  ];
  const [iscategories, setcategories] = useState("false");
  const [isState, setState] = useState("false");
  const handlecategories = () => {
    setcategories(!iscategories);
  };
  const handlestates = () => {
    setState(!isState);
  };
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem>
                <h5>Selected by</h5>
              </ListItem>
              {selectedbylist.map((text, index) => (
                <Link
                  to={text.url}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <ListItem button key={text.name}>
                    <input
                      className="mb-2 mr-2"
                      type="checkbox"
                      id={text.name}
                    />

                    <label for={text.name}>{text.name}</label>
                  </ListItem>
                </Link>
              ))}
            </List>
            <ListItem>
              <h5>Categories</h5>
            </ListItem>
            <List>
              {[
                "Development",
                "Business",
                "Marketing",
                "Lifestyle",
                "Music",
                "Teaching",
                "Design",
              ].map((text, index) => (
                <ListItem button key={text}>
                  <input
                    className="mb-2 mr-2"
                    type="checkbox"
                    id={text}
                  ></input>

                  <label for={text}> {text} </label>
                </ListItem>
              ))}
              <List
                style={{
                  display: iscategories ? "none" : "block",
                  marginTop: "-10px",
                }}
              >
                {["one", "two", "three", "four"].map((text, index) => (
                  <ListItem button key={text}>
                    <input
                      className="mb-2 mr-2"
                      type="checkbox"
                      id={text}
                    ></input>

                    <label for={text}> {text} </label>
                  </ListItem>
                ))}
              </List>
              <button className="seealldropdownbtn" onClick={handlecategories}>
                <FontAwesomeIcon className="mr-2" icon={faChevronDown} />
                See All Categories
              </button>
            </List>
            <ListItem>
              <h5>State</h5>
            </ListItem>
            <List>
              {[
                "Andhra Pradesh",
                "Arunachal Pradesh",
                "Assam",
                "Bihar",
                "Chhattisgarh",
                "Goa",
                "Gujarat",
              ].map((text, index) => (
                <ListItem button key={text}>
                  <input
                    className="mb-2 mr-2"
                    type="checkbox"
                    id={text}
                  ></input>

                  <label for={text}> {text} </label>
                </ListItem>
              ))}
              <List
                style={{
                  display: isState ? "none" : "block",
                  marginTop: "-10px",
                }}
              >
                {["one", "two", "three", "four"].map((text, index) => (
                  <ListItem button key={text}>
                    <input
                      className="mb-2 mr-2"
                      type="checkbox"
                      id={text}
                    ></input>

                    <label for={text}> {text} </label>
                  </ListItem>
                ))}
              </List>
              <button className="seealldropdownbtn" onClick={handlestates}>
                <FontAwesomeIcon className="mr-2" icon={faChevronDown} />
                See All States
              </button>
            </List>
            <ListItem>
              <h5>Reviews</h5>
            </ListItem>
            {["5", "4", "3", "2", "1"].map((text, index) => (
              <List>
                <div style={{ marginLeft: "-40px" }}>
                  <FontAwesomeIcon
                    icon={text >= 1 ? fasStar : faStar}
                    className="starcolor"
                  />{" "}
                  <FontAwesomeIcon
                    icon={text >= 2 ? fasStar : faStar}
                    className="starcolor ml-2"
                  />{" "}
                  <FontAwesomeIcon
                    icon={text >= 3 ? fasStar : faStar}
                    className="starcolor ml-2"
                  />{" "}
                  <FontAwesomeIcon
                    icon={text >= 4 ? fasStar : faStar}
                    className="starcolor ml-2"
                  />{" "}
                  <FontAwesomeIcon
                    icon={text >= 5 ? fasStar : faStar}
                    className="starcolor ml-2"
                  />{" "}
                </div>
              </List>
            ))}
          </Box>
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <Toolbar />
          <Typography paragraph>
            <Switch>
              <Route path="/tutors">
                <Tutorlist data={tutordata} />
              </Route>
              <Route path="/courses">
                <Courselist data={coursedata} />
              </Route>
            </Switch>
          </Typography>
        </Box>
      </Box>
    </Router>
  );
}
