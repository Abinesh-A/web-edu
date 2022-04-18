import React from "react";
import Chart from "react-google-charts";

function Pichart(props) {
  return (
    <>
      <Chart
        width={"300px"}
        height={"300px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["Work", 11],
          ["Eat", 2],
          ["Commute", 2],
          ["Watch TV", 2],
          ["Sleep", 7],
        ]}
        options={{
          title: props.data,
          // Just add this option
          pieHole: 0.4,
        }}
        rootProps={{ "data-testid": "3" }}
      />
    </>
  );
}

export default Pichart;
