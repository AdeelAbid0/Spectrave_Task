import React from "react";
import { Chart } from "react-google-charts";
const Pie = () => {
  const data = [
    ["Pizza", "Popularity"],
    ["Active Bypass Diode", 26],
    ["Single-Cell Hotspot", 60],
    ["Multi-Cell Hotspot", 14],
  ];
  const options = {
    title: "Fault Type Distribution(Percentage)",
    colors: ["red", "yellow", "orange"],
  };
  return (
    <>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    </>
  );
};

export default Pie;
