import React from "react";
import styles from "./DigitalItems.module.css";
import { DigitalWeatherItem } from "../DigitalWeatherItem/DigitalWeatherItem";
// import { WideWeather } from "../types";

type Props = {};

export const DigitalItems = () => {
  //   const digitalWeatherItems = [];
  //   let num = 24 - 3 * (dayIndexTwo - dayIndex);
  //   for (let i = dayIndex; i < dayIndexTwo; i++) {
  //     digitalWeatherItems.push(
  //       <DigitalWeatherItem
  //         wideWeather={wideWeather}
  //         dayIndex={dayIndex}
  //         time={num}
  //         key={i}
  //       />
  //     );
  //     dayIndex++;
  //     num = num + 3;
  //   }
  return (
    <div className={styles.tableSettingsFirst}>
      {/* {day} */}
      <div className={styles.tableSettingsThird}>
        {/* {digitalWeatherItems} */}
        <DigitalWeatherItem />
        <DigitalWeatherItem />
        <DigitalWeatherItem />
        <DigitalWeatherItem />
        <DigitalWeatherItem />
        <DigitalWeatherItem />
      </div>
    </div>
  );
};
