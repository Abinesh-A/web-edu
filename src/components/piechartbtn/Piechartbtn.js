import React from "react";
import { Link, Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Piechart from "../piechart/Piechart";

function Piechartbtn() {
  return (
    <Router>
      <div className="row mb-3">
        <div className="col  mt-3">
          <Link to="/">
            <button className="perbtn">All</button>
          </Link>
        </div>
        <div className="col  mt-3">
          <Link to="/10th">
            <button className="perbtnwhite">10th</button>
          </Link>
        </div>
        <div className="col  mt-3">
          <Link to="/stateexam">
            <button className="perbtnwhite">StateLevelExam</button>
          </Link>
        </div>
        <div className="col  mt-3">
          <Link to="/H&W">
            <button className="perbtnwhite">HeightandWeight </button>
          </Link>
        </div>
        <div className="col  mt-3">
          <Link to="/physicaltest">
            <button className="perbtnwhite">PhysicalTest</button>
          </Link>
        </div>
        <div className="col  mt-3">
          <Link to="/training">
            <button className="perbtnwhite">Training</button>
          </Link>
        </div>
      </div>

      <Switch>
        <div className="row">
          <div className="col">
            <Route path="/">
              <Piechart data="ALL" />
            </Route>
          </div>
          <div className="col">
            <Route path="/10th">
              <Piechart data="10th DATA" />
            </Route>
          </div>
          <div className="col">
            <Route path="/stateexam">
              <Piechart data="STATE EXAM" />
            </Route>
          </div>
          <div className="col">
            <Route path="/H&W">
              <Piechart data="HEIGHT AND WEIGHT" />
            </Route>
          </div>
          <div className="col">
            <Route path="/physicaltest">
              <Piechart data="PHYSICAL TEST" />
            </Route>
          </div>
          <div className="col">
            <Route path="/training">
              <Piechart data="TRAINING" />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
}

export default Piechartbtn;
