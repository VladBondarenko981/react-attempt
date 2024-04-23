import React, { useState } from "react";
import styles from "./SignUpComponent.module.css";
import { useAppSelector, useAppDispatch } from "../../../hooks/hooks";
import { registration } from "../../../store/userSlice";
import { mistakePassword } from "../../../store/userSlice";

type Props = {};

export const SignUpComponent = (props: Props) => {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => state.user.error);
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const handledClick = () => {
    if (firstPassword === secondPassword) {
      const registrationPayload = {
        email: email,
        password: firstPassword,
      };
      dispatch(registration(registrationPayload));
      console.log(error);
      if (error == "You have successfully registered") {
        setTimeout(() => {
          window.location.href = "http://localhost:3000/logIn"; // Переход на страницу логина через 5 секунд
        }, 2000);
      }
    } else {
      dispatch(mistakePassword("Password mismatch"));
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.table}>
        <div className={styles.tableOne}>Sign Up</div>
        <div className={styles.tableTwo}>
          <input
            placeholder=" Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder=" Password"
            type="password"
            value={firstPassword}
            onChange={(e) => setFirstPassword(e.target.value)}
          />
          <input
            placeholder=" Password again"
            type="password"
            value={secondPassword}
            onChange={(e) => setSecondPassword(e.target.value)}
          />
          <h1>{error}</h1>
        </div>
        <div className={styles.tableThree}>
          <button onClick={handledClick}>Sign Up</button>
        </div>
      </div>
    </div>
  );
};
