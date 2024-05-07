import React from "react";
import { Chart } from "react-google-charts";
const Bar1 = () => {
  const data = [
    ["", "", { role: "style" }],
    ["Active Bypass Diode", 50000, "red"],
    ["Single-Cell Hotspot", 35000, "yellow"],
    ["Multi-Cell Hotspot", 15000, "orange"],
  ];
  const options = {
    title: "Accumulative Financial-Loss (Per Fault Type)",
    vAxis: {
      title: "Estimated Annual Loss",
      titleTextStyle: {
        color: "#333",
        fontSize: 14,
        bold: true,
        italic: false,
      },
    },
  };
  return (
    <>
      <Chart
        chartType="ColumnChart"
        width="100%"
        height="400px"
        data={data}
        options={options}
      />
    </>
  );
};

export default Bar1;
