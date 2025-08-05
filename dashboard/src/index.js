import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./components/App";
import Dashboard from "./components/Dashboard";
import Funds from "./components/Funds";
import Holdings from "./components/Holdings";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Orders from "./components/Orders";
import Positions from "./components/Positions";
import Summary from "./components/Summary";
import TopBar from "./components/TopBar";
import WatchList from "./components/WatchList";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
