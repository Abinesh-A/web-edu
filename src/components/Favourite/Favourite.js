import React from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Tutorlist from "../tutorlist/Tutorlist";
import Courselist from "../courselist/Courselist";
import { tutordata } from "../tutorlist/tutordata";
import { coursedata } from "../courselist/coursedata";
import "./Favourite.css";

function Favourite() {
  return (
    <Router>
      <div className="d-flex justify-content-center">
        <div>
          <h2 className="favmenu mt-2">Favourite</h2>
        </div>
      </div>
      <div className="d-flex justify-content-start ml-5 pl-4">
        <div className="mr-3">
          <Link
            to="/favourite/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5 className="favmenu">All</h5>
          </Link>
        </div>
        <div className="mr-3">
          <Link
            to="/favourite/favouritecourse"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5 className="favmenu">Course</h5>
          </Link>
        </div>
        <div className="mr-3">
          <Link
            to="/favourite/favouritetutor"
            style={{ textDecoration: "none", color: "black" }}
          >
            <h5 className="favmenu">Tutor</h5>
          </Link>
        </div>
      </div>
      <div style={{ marginTop: "7%", marginLeft: "5%", marginRight: "5%" }}>
        <Switch>
          <Route exact path="/favourite/">
            <Tutorlist data={tutordata} />
            <Courselist data={coursedata} />
          </Route>
          <Route path="/favourite/favouritecourse">
            <Courselist data={coursedata} />
          </Route>
          <Route path="/favourite/favouritetutor">
            <Tutorlist data={tutordata} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Favourite;
