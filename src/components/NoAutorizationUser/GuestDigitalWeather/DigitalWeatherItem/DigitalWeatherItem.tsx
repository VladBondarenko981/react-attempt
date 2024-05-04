import React from "react";
import styles from "./DigitalWeatherItem.module.css";
import { useAppSelector } from "../../../../hooks/hooks";
// import { FaCloud, FaSun, FaCloudSun, FaCloudMoon } from "react-icons/fa";

interface Props {
  time: number;
  correctTime: number;
}

export const DigitalWeatherItem: React.FC<Props> = ({ correctTime, time }) => {
  const digitalWeather = useAppSelector(
    (state) => state.weather.weather.digitalWeather
  );
  return (
    <div className={styles.table}>
      <div className={styles.partOne}>
        <div>{`${time}:00`}</div>
        <img
          src={`https://openweathermap.org/img/wn/${digitalWeather.data[correctTime]?.icon}@2x.png`}
        />
        <div>{digitalWeather.data[correctTime]?.temperature} C</div>
      </div>
      <div className={styles.partTwo}>
        <div>
          <img
            src={`https://cdn-icons-png.flaticon.com/512/1975/1975551.png`}
          />
          <div>{digitalWeather.data[correctTime]?.humidity} %</div>
        </div>
        <div>
          <img src={`https://cdn-icons-png.flaticon.com/512/91/91977.png`} />
          <div>{digitalWeather.data[correctTime]?.wind}</div>
          <div>km/h</div>
        </div>
      </div>
    </div>
  );
};

export default DigitalWeatherItem;
