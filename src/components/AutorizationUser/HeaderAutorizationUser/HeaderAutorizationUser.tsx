import React from "react";
import styles from "./HeaderAutorizationUser.module.css";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../hooks/hooks";
import { logOut } from "../../../store/userSlice";

type Props = {};

export const HeaderAutorizationUser = (props: Props) => {
  const dispatch = useAppDispatch();
  const handleTwoChange = () => {
    dispatch(logOut(false));
    localStorage.setItem("password", "");
    localStorage.setItem("email", "");
    localStorage.setItem("isAuthorized", "false");
  };
  return (
    <div className={styles.header}>
      <div className={styles.headersHome}>
        <Link to="/">Home</Link>
      </div>
      <select></select>
      {/* <select value={selectedOption} onChange={handleChange}>
        {cities &&
          cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
      </select> */}
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
