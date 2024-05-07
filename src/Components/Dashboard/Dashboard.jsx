import React from "react";
import "../Dashboard/Dashboard.css";
import Table from "../../Comp/Table";
import Bar1 from "../../Graphs/Bar1";
import Bar2 from "../../Graphs/Bar2";
import Pie from "../../Graphs/Pie";
import Bar4 from "../../Graphs/Bar4";
const Dashboard = () => {
  return (
    <>
      <div className="container1">
        <div className="revenue">
          <Table field={"Revenue Loss"} value={"PKR 1,07,552"} />
        </div>
        <div className="potential">
          <Table field={"Potential Issue"} value={"50"} />
        </div>
        <div className="power">
          <Table field={"Power Loss"} value={"2.216 (KW)"} />
        </div>
      </div>
      <div className="chartcontainer">
        <div className="chart1">
          <h2>Fault Type Distribution</h2>
          <Bar1 />
        </div>
        <div className="chart2">
          <h2>Accumulative Power-Loss (Per Fault Type)</h2>
          <Bar2 />
        </div>
        <div className="chart3">
          <Pie />
        </div>
        <div className="chart4">
          <h2>Accumulative Financial-Loss (Per Fault Type)</h2>
          <Bar4 />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
