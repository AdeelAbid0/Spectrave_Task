import React from "react";
import { Chart } from "react-google-charts";
const Bar1 = () => {
  const data = [
    ["", "", { role: "style" }],
    ["Active Bypass Diode", 15, "red"],
    ["Single-Cell Hotspot", 30, "yellow"],
    ["Multi-Cell Hotspot", 7, "orange"],
  ];
  const options = {
    title: "Accumulative Financial-Loss (Per Fault Type)",
    vAxis: {
      title: "  Fault Count",
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
