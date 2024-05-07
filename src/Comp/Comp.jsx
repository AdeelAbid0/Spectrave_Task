import React from "react";
import "../Comp/Comp.css";
const Comp = (props) => {
  return (
    <>
      <div className="anomaliesContainer">
        <div className="anomalies1">
          <img src={props.image} alt="defect01" />
        </div>
        <div className="anomalies2">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
            molestias quos ipsum? Consequatur, reiciendis dolor aliquid
            aspernatur quidem debitis quam excepturi harum enim modi ipsum quo,
            numquam eius asperiores autem!
          </p>
        </div>
      </div>
    </>
  );
};

export default Comp;
