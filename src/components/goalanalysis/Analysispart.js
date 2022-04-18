import React from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Piechartbtn from "../piechartbtn/Piechartbtn";
import "./Analysispart.css";

function Analysispart() {
  return (
    <Router>
      <>
        <div className="d-flex justify-content-start mt-2">
          <h3 className="navmenu">Goal analysis</h3>
        </div>
        <div className="piechartdiv">
          <div className="d-flex pt-4 ml-2">
            <Link to="/" style={{ textDecoration: "none" }}>
              <h5 className="ml-5 innernavmenu">perfomance</h5>
            </Link>
            <Link to="/progress" style={{ textDecoration: "none" }}>
              <h5 className="ml-2 innernavmenu">progress</h5>
            </Link>
          </div>
          <Switch>
            <Route exact={true} path="/">
              <Piechartbtn />
            </Route>
            <Route path="/progress">
              <h1>progress</h1>
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default Analysispart;
