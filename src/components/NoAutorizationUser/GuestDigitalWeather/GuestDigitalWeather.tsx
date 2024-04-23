import React from "react";
import styles from "./GuestDigitalWeather.module.css";

type Props = {};

export const GuestDigitalWeather = (props: Props) => {
  return (
    <h1 className={styles.table}>
      To see the digital weather, you must be authorized
    </h1>
  );
};
