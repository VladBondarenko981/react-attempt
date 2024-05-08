import React from "react";
import styles from "./DigitalItems.module.css";
import { DigitalWeatherItem } from "../DigitalWeatherItem/DigitalWeatherItem";

interface Props {
  amountOfDays: number;
  correctTime: number;
}

export const DigitalItems: React.FC<Props> = ({
  correctTime,
  amountOfDays,
}) => {
  let date = new Date();
  let day = date.getDate();

  const times = Array.from({ length: amountOfDays }, (_, index) => {
    const baseTime = amountOfDays > 3 ? 3 : 18;
    return baseTime + index * 3;
  });

  return (
    <div className={styles.tableSettingsFirst}>
      {day}
      <div className={styles.tableSettingsThird}>
        {times.map((time, index) => (
          <DigitalWeatherItem
            key={index}
            correctTime={correctTime + index}
            time={time}
          />
        ))}
      </div>
    </div>
  );
};
