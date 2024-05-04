import React, { useState } from "react";
import styles from "./LogInComponent.module.css";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { login } from "../../../store/userActions";

type Props = {};

export const LogInComponent = (props: Props) => {
  const isAuto = useAppSelector((state) => state.user.user.isAuthorized);
  const message = useAppSelector((state) => state.user.user.message);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handledClick = () => {
    const loginPayload = {
      email: email,
      password: password,
    };
    dispatch(login(loginPayload));
    setTimeout(() => {
      window.location.href = "http://localhost:3000/";
    }, 2000);
  };
  return (
    <div className={styles.main}>
      <div className={styles.table}>
        <div className={styles.tableOne}>Log In</div>
        <div className={styles.tableTwo}>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder=" Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.tableThree}>
          <div>{message}</div>
          <button onClick={handledClick}>Log in</button>
        </div>
      </div>
    </div>
  );
};
