import React from "react";
import { Routes, Route } from "react-router-dom";
import Styles from "../Styles/Main.module.css";
import Home from "./Home";
export const Main = () => {
  return (
    <div className={Styles.main}>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
};
