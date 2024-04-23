import React from "react";
import styles from "./DigitalWeatherItem.module.css";
// import { FaCloud, FaSun, FaCloudSun, FaCloudMoon } from "react-icons/fa";

type Props = {};

export const DigitalWeatherItem = () => {
  return (
    <div className={styles.table}>
      {/* <div className={styles.partOne}>
        <div>{`${time}:00`}</div>
        <img
          src={`https://openweathermap.org/img/wn/${wideWeather.data[dayIndex]?.icon}@2x.png`}
        />
        <div>{wideWeather.data[dayIndex]?.temperature} C</div>
      </div>
      <div className={styles.partTwo}>
        <div>
          <img
            src={`https://cdn-icons-png.flaticon.com/512/1975/1975551.png`}
          />
          <div>{wideWeather.data[dayIndex]?.humidity} %</div>
        </div>
        <div>
          <img src={`https://cdn-icons-png.flaticon.com/512/91/91977.png`} />
          <div>{wideWeather.data[dayIndex]?.wind}</div>
          <div>km/h</div>
        </div>
      </div> */}

      <div className={styles.partOne}>
        <div>{`23:00`}</div>
        <img src={`https://cdn-icons-png.flaticon.com/512/66/66275.png`} />
        <div>23 C</div>
      </div>
      <div className={styles.partTwo}>
        <div>
          <img
            src={`https://cdn-icons-png.flaticon.com/512/1975/1975551.png`}
          />
          <div>50 %</div>
        </div>
        <div>
          <img src={`https://cdn-icons-png.flaticon.com/512/91/91977.png`} />
          <div>34</div>
          <div>km/h</div>
        </div>
      </div>
    </div>
  );
};

export default DigitalWeatherItem;
