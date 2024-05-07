import React from "react";
import Home from "./Components/Home/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import Site_Info from "./Components/Site_Info/Site_Info";
import Anomalies from "./Components/Anomalies/Anomalies";
import Report from "./Components/Report/Report";
import Navbar from "./Components/Navbar/Navbar";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/site_info" Component={Site_Info} />
          <Route path="/anomalies" Component={Anomalies} />
          <Route path="/report" Component={Report} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
