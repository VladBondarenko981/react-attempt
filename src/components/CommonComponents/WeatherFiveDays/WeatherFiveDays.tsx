import React from "react";
import styles from "./WeatherFiveDays.module.css";
import { WeatherForFiveDays } from "./types";

export const WeatherFiveDays: React.FC<{}> = () => {
  return (
    <div className={styles.table}>
      <h4>Hourly Forecast</h4>
      <div className={styles.tableSettingsSecond}>
        {/* <div className={styles.tableSettingsFirst}>
          <div>{weather.day[0]}</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon[0]}@2x.png`}
          />
          <div>{weather.temperature[0]} °C </div>
        </div>

        <div className={styles.tableSettingsFirst}>
          <div>{weather.day[1]}</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon[1]}@2x.png`}
          />
          <div>{weather.temperature[1]} °C </div>
        </div>

        <div className={styles.tableSettingsFirst}>
          <div>{weather.day[2]}</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon[2]}@2x.png`}
          />
          <div>{weather.temperature[2]} °C </div>
        </div>

        <div className={styles.tableSettingsFirst}>
          <div>{weather.day[3]}</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon[3]}@2x.png`}
          />
          <div>{weather.temperature[3]} °C </div>
        </div>

        <div className={styles.tableSettingsFirst}>
          <div>{weather.day[4]}</div>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon[4]}@2x.png`}
          />
          <div>{weather.temperature[4]} °C </div>
        </div> */}

        <div className={styles.tableSettingsFirst}>
          <div>18.04</div>
          <img src={`https://cdn-icons-png.flaticon.com/512/66/66275.png`} />
          <div>20 °C </div>
        </div>

        <div className={styles.tableSettingsFirst}>
          <div>19.04</div>
          <img src={`https://cdn-icons-png.flaticon.com/512/66/66275.png`} />
          <div>24 °C </div>
        </div>

        <div className={styles.tableSettingsFirst}>
          <div>20.04</div>
          <img src={`https://cdn-icons-png.flaticon.com/512/66/66275.png`} />
          <div>23 °C </div>
        </div>

        <div className={styles.tableSettingsFirst}>
          <div>21.04</div>
          <img src={`https://cdn-icons-png.flaticon.com/512/66/66275.png`} />
          <div>23 °C </div>
        </div>

        <div className={styles.tableSettingsFirst}>
          <div>22.04</div>
          <img src={`https://cdn-icons-png.flaticon.com/512/66/66275.png`} />
          <div>24 °C </div>
        </div>
      </div>
    </div>
  );
};
