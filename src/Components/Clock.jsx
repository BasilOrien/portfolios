import React, { useEffect, useState } from "react";
import Styles from '../Styles/Clock.module.css'

export default function Clock() {
  const date = new Date().toLocaleString();

  const [currentDate, setCurrentDate] = useState(date);

  const updateTime = () => {
    const date = new Date().toLocaleString();
    setCurrentDate(date);
  };

  setInterval(updateTime, 1000);

  return <div className={Styles.clock}>{`${currentDate}`}</div>;
}
