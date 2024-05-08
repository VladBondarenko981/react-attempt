import React from "react";
import styles from "./GuestDigitalWeather.module.css";
import { DigitalItemsProps } from "./types";
import { DigitalItems } from "./DigitalItems/DigitalItems";
import { useAppSelector } from "../../../hooks/hooks";
import { RootState } from "../../../store/store";

export const GuestDigitalWeather: React.FC = () => {
  const digitalWeather = useAppSelector(
    (state: RootState) => state.weather.weather.digitalWeather
  );
  const lengthOfDigitalWeather = digitalWeather.data.length % 8;
  const digitalItemsData: DigitalItemsProps[] = [
    { correctTime: 0, amountOfDays: lengthOfDigitalWeather },
    {
      correctTime: lengthOfDigitalWeather,
      amountOfDays: 8,
    },
    {
      correctTime: lengthOfDigitalWeather + 8,
      amountOfDays: 8,
    },
    {
      correctTime: lengthOfDigitalWeather + 16,
      amountOfDays: 8,
    },
  ];

  return (
    <div className={styles.table}>
      <h4>Weekly Forecast</h4>
      <h1>To see digital weather, you must login.</h1>
    </div>
  );
};
