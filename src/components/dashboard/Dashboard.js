import Analysispart from "../goalanalysis/Analysispart";
import Headpart from "../headpart/Headpart";
import Recentpart from "../recentpart/Recentpart";
import Mygoalpath from "../mygoalpath/Mygoalpath";
import Mygoal from "../mygoal/Mygoal";
import "./Dashboard.css";
// import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
// import Pichart from "../pichart/Pichart";

function Dashboard(props) {
  return (
    <>
      <h4 className="d-flex mt-2 navmenu">Hello, {props.username}</h4>
      <Mygoalpath />
      <Headpart />
      <Mygoal />
      <Recentpart />
      {/* <Analysispart /> */}
      <div style={{ height: "100px", width: "100%" }}></div>
    </>
  );
}

export default Dashboard;
