import React from "react";
import Styles from "../Styles/Panel.module.css";
import Nav from "./Navigation";
console.log(Nav)


const Panel = (props) => {
  const { windowStatus, setWindowStatus, classNeim } = props;
  const handleWindowsStatus = (e) => {
    const target = e.target.name;
    if (target === "minimize") {
      const w = document.querySelector(`.${classNeim}`)
      const element = w.lastChild;
      w.style["height"] = "4vmin"
      element.style["display"] = "none"
    }
    if (target === "restore") {
      const w = document.querySelector(`.${classNeim}`)
      w.style["height"] = "auto"
      setWindowStatus("block");
      const element = w.lastChild;
      element.style["display"] = "block"

    }

    if (target === "close") {
      setWindowStatus("none");
    }
  };
  return (
    <div className={Styles.panel}>
      <button
        onClick={(e) => {
          handleWindowsStatus(e);
        }}
        name="minimize"
        className={Styles.minimize}
      >
        _
      </button>
      <button
        onClick={(e) => {
          handleWindowsStatus(e);
        }}
        name="restore"
        className={Styles.restore}
      >
        ❐
      </button>
      <button
        onClick={(e) => {
          handleWindowsStatus(e);
        }}
        name="close"
        className={Styles.close}
      >
        X
      </button>
    </div>
  );
};

export default Panel;
