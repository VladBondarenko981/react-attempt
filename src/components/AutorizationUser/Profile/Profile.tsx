import React from "react";
import styles from "./Profile.module.css";

type Props = {};

export const Profile = (props: Props) => {
  return (
    <div className={styles.main}>
      <div className={styles.partOne}>
        <img
          // src={`${photo}`}
          src={
            "https://cdn.icon-icons.com/icons2/1860/PNG/512/cloudy_118029.png"
          }
          alt="User avatar"
        />
        <input
          type="file"
          // onChange={handleChange}
        />
        <button
        // onClick={handleUpload}
        >
          Upload Now
        </button>
        <button
        // onClick={handleSee}
        >
          See Photo
        </button>
      </div>

      <div className={styles.partTwo}>
        <div className={styles.partTwoOne}>
          <h1>{localStorage.getItem("email")}</h1>
          <button
          //   onClick={handledClick}
          >
            Change Email
          </button>
        </div>

        <div className={styles.partTwoOne}>
          <h1>Password</h1>
          <button
          //   onClick={doubleClick}
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};
