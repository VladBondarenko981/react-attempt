import React from "react";
import styles from "./AuthDigitalWeather.module.css";
// import { DigitalWeather } from "./DigitalWeather/DigitalWeather";
// import { WideWeather } from "./types";
import { DigitalItems } from "./DigitalItems/DigitalItems";

export const AuthDigitalWeather = () => {
  let date = new Date();
  let day = date.getDate();
  const email = localStorage.getItem("email");
  return (
    <div className={styles.table}>
      <h4>Weekly Forecast</h4>
      {17 % 8 != 0 ? (
        <>
          <DigitalItems
          // wideWeather={wideWeather}
          // dayIndex={0}
          // dayIndexTwo={wideWeather.data.length % 8}
          // day={day}
          />
        </>
      ) : (
        <></>
      )}
      <DigitalItems
      // wideWeather={wideWeather}
      // dayIndex={wideWeather.data.length % 8}
      // dayIndexTwo={(wideWeather.data.length % 8) + 8}
      // day={day + 1}
      />
      <DigitalItems
      // wideWeather={wideWeather}
      // dayIndex={(wideWeather.data.length % 8) + 8}
      // dayIndexTwo={(wideWeather.data.length % 8) + 16}
      // day={day + 2}
      />
      <DigitalItems
      // wideWeather={wideWeather}
      // dayIndex={(wideWeather.data.length % 8) + 16}
      // dayIndexTwo={(wideWeather.data.length % 8) + 24}
      // day={day + 3}
      />
    </div>
  );
};
