import React from "react";
import styles from "./HeaderAutorizationUser.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { loadUserProperties, logOut } from "../../../store/userSlice";
import { loadWeatherNow } from "../../../store/weatherActions";
import { useState } from "react";

type Props = {};

export const HeaderAutorizationUser = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleTwoChange = () => {
    dispatch(logOut(false));
    dispatch(loadUserProperties());
  };
  const [selectCity, setSelectCity] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(loadWeatherNow(event?.target.value));
  };
  const cities = useAppSelector((state) => state.user.user.cities);
  return (
    <div className={styles.header}>
      <div className={styles.headersHome}>
        <Link to="/">Home</Link>
      </div>
      <select value={selectCity} onChange={handleChange}>
        {cities &&
          cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
      </select>
      <div className={styles.headers}>
        <Link to="/myProfile">My Profile</Link>
      </div>
      <div className={styles.headers}>
        <Link to="/" onClick={handleTwoChange}>
          Log Out
        </Link>
      </div>
    </div>
  );
};
