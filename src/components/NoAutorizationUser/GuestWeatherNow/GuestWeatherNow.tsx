import React from "react";
import styles from "./GuestWeatherNow.module.css";

type Props = {};

export const GuestWeatherNow = (props: Props) => {
  return (
    <div className={styles.table}>
      <div className={styles.tableSettingsThird}>
        {/* <input
          type="text"
          placeholder=" Your city.."
          value={state}
          onChange={(e) => setState(e.target.value)}
        /> */}
        <input></input>
        {/* <button onClick={handledClick}>Sent</button> */}
        <button>Sent</button>
      </div>

      <div className={styles.tableSettingsFirst}>
        {/* {weatherData.nameCity} */}
        <h1>Zaporizhzhya</h1>
      </div>

      <div className={styles.tableSettingsSecond}>
        {/* <img
          src={`https://openweathermap.org/img/wn/${weatherData.icon}@2x.png`}
        /> */}
        <img src={"https://cdn-icons-png.flaticon.com/512/66/66275.png"} />
        {/* <div>{weatherData.temperature} °C </div> */}
        <div>23 °C</div>
      </div>
    </div>
  );
};
