import React, { useState } from "react";
import "../Navbar/Navbar.css";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "primereact/sidebar";
import { Button } from "primereact/button";
const Navbar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  const handleItemClick = (index, path) => {
    setActiveItem(index);
    navigate(path);
  };
  return (
    <>
      <div className="nav">
        <div className="nav1">
          <ul>
            <li
              className={activeItem === 0 ? "active" : ""}
              onClick={() => handleItemClick(0, "/dashboard")}
            >
              Dashboard
            </li>
            <li
              className={activeItem === 1 ? "active" : ""}
              onClick={() => handleItemClick(1, "/site_info")}
            >
              Site Info
            </li>
            <li
              className={activeItem === 2 ? "active" : ""}
              onClick={() => handleItemClick(2, "/anomalies")}
            >
              Anomalies
            </li>
            <li
              className={activeItem === 3 ? "active" : ""}
              onClick={() => handleItemClick(3, "/report")}
            >
              Report
            </li>
          </ul>
        </div>
        <div className="nav2"></div>
      </div>

      <Sidebar
        className="sidebar"
        visible={visible}
        onHide={() => setVisible(false)}
      >
        <ul>
          <li
            className={activeItem === 0 ? "active" : ""}
            onClick={() => handleItemClick(0, "/dashboard")}
          >
            Dashboard
          </li>
          <li
            className={activeItem === 1 ? "active" : ""}
            onClick={() => handleItemClick(1, "/site_info")}
          >
            Site Info
          </li>
          <li
            className={activeItem === 2 ? "active" : ""}
            onClick={() => handleItemClick(2, "/anomalies")}
          >
            Anomalies
          </li>
          <li
            className={activeItem === 3 ? "active" : ""}
            onClick={() => handleItemClick(3, "/report")}
          >
            Report
          </li>
        </ul>
      </Sidebar>
      <Button
        className="fa-solid fa-bars fa-2xl burger"
        onClick={() => setVisible(true)}
      />
    </>
  );
};

export default Navbar;
