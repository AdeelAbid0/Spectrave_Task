import React from "react";
import { Chart } from "react-google-charts";
const Bar1 = () => {
  const data = [
    ["", ""],
    ["Active Bypass Diode", 15],
    ["Single-Cell Hotspot", 30],
    ["Multi-Cell Hotspot", 7],
  ];
  const options = {
    title: "Accumulative Financial-Loss (Per Fault Type)",
    colors: ["red", "green", "blue"],
    vAxis: {
      title: "Estimated Annual Loss",
      minValue: 0,
      maxValue: 60000,
      ticks: [0, 10000, 20000, 30000, 40000, 50000],
    },
  };
  return (
    <>
      <Chart
        chartType="Bar"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </>
  );
};

export default Bar1;
