import React from "react";
import styles from "./WeatherFiveDays.module.css";
import { WeatherForFiveDays } from "./types";
import { useAppSelector } from "../../../hooks/hooks";
import { WeatherFiveDays as WeatherData } from "../../../store/weatherSlice"; // Переименовываем тип

export const WeatherFiveDays: React.FC<{}> = () => {
  const weatherFiveDays = useAppSelector(
    (state) => state.weather.weather.weatherFiveDays
  );
  return (
    <div className={styles.table}>
      <h4>Hourly Forecast</h4>
      <div className={styles.tableSettingsSecond}>
        {weatherFiveDays.day.map((day, index) => (
          <div className={styles.tableSettingsFirst} key={index}>
            <div>{day}</div>
            <img
              src={`https://openweathermap.org/img/wn/${weatherFiveDays.icon[index]}@2x.png`}
            />
            <div>{weatherFiveDays.temperature[index]} °C</div>
          </div>
        ))}
      </div>
    </div>
  );
};
