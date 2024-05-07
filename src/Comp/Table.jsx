import React from "react";
import "./Comp.css";
const Table = (props) => {
  return (
    <>
      <table>
        <tbody>
          <tr style={{ backgroundColor: "lightgray" }}>
            <td style={{ width: "20rem" }}>{props.field}</td>
          </tr>
          {/* <hr style={{ width: "19rem" }} /> */}
          <tr>
            <td
              style={{
                color: "red",
                fontWeight: "600",
                fontFamily: "poppins",
                fontSize: "1.8rem",
              }}
            >
              {props.value}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Table;
