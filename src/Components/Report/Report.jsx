import React from "react";
import "../Report/Report.css";
const Report = () => {
  return (
    <>
      <h1>Download Images</h1>
      <a style={{ fontSize: "2rem" }} href="/public/defect01.png" download>
        defect01.png
      </a>
      <br />
      <br />
      <a style={{ fontSize: "2rem" }} href="/public/site_model.jpeg" download>
        site_model.jpeg
      </a>
      <br />
    </>
  );
};

export default Report;
