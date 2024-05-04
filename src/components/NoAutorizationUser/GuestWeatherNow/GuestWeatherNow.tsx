import React, { useState } from "react";
import styles from "./GuestWeatherNow.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { loadWeatherNow } from "../../../store/weatherActions";

type Props = {};

export const GuestWeatherNow = (props: Props) => {
  const dispatch = useAppDispatch();
  const nameCity = useAppSelector(
    (state) => state.weather.weather.weatherData.nameCity
  );
  const temperature = useAppSelector(
    (state) => state.weather.weather.weatherData.temperature
  );
  const icon = useAppSelector(
    (state) => state.weather.weather.weatherData.icon
  );
  const [city, setCity] = useState("");
  const handledClick = () => {
    console.log("Work!");
    dispatch(loadWeatherNow(city));
  };
  return (
    <div className={styles.table}>
      <div className={styles.tableSettingsThird}>
        <input
          type="text"
          placeholder=" Your city.."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handledClick}>Sent</button>
      </div>

      <div className={styles.tableSettingsFirst}>{nameCity}</div>

      <div className={styles.tableSettingsSecond}>
        <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
        <div>{temperature} °C </div>
      </div>
    </div>
  );
};
