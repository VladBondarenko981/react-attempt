import React from "react";
import styles from "./HeaderNoAutorization.module.css";
import { Link } from "react-router-dom";

type Props = {};

export const HeaderNoAutorizationUser = (props: Props) => {
  return (
    <div className={styles.header}>
      <div className={styles.headersHome}>
        <Link to="/">Home</Link>
      </div>
      <div className={styles.headers}>
        <Link to="/logIn">Log In</Link>
      </div>
      <div className={styles.headers}>
        <Link to="/signIn">Sign Up</Link>
      </div>
    </div>
  );
};
