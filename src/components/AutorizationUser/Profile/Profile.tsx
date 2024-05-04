import React from "react";
import styles from "./Profile.module.css";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { changePhotoUser, loadPhotoUser } from "../../../store/userActions";
import {
  changeUserEmail,
  changeUserPassword,
} from "../../../store/userActions";

type Props = {};

export const Profile = (props: Props) => {
  const [name, setName] = useState(0);
  const [newEmail, setNewEmail] = useState("");
  const handledClick = () => {
    setName(name + 1);
  };
  const handledClickTwo = () => {
    setName(name + 1);
    const emailFromLocalStorage = localStorage.getItem("email");
    if (emailFromLocalStorage !== null) {
      dispatch(changeUserEmail({ newEmail, email: emailFromLocalStorage }));
    }
  };

  const [nameTwo, setNameTwo] = useState(0);
  const [newPassword, setNewPassword] = useState("");
  const [oldPassword, setNewOldPassword] = useState("");
  const doubleClick = () => {
    setNameTwo(nameTwo + 1);
  };
  const doubleClickTwo = async () => {
    setNameTwo(nameTwo + 1);
    const passwordFromLocalStorage = localStorage.getItem("password");
    const email = localStorage.getItem("email");
    const pass = localStorage.getItem("password");
    if (passwordFromLocalStorage != null && email != null) {
      await dispatch(changeUserPassword({ oldPassword, newPassword, email }));
    }
    if (pass == localStorage.getItem("password")) {
      setNameTwo(-1);
    }
  };
  const [selectedFile, setSelectedFile] = useState<string>("");
  const photoUser = useAppSelector((state) => state.user.user.photoUser);
  const dispatch = useAppDispatch();

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      const base64String = await fileToBase64(file);
      setSelectedFile(base64String);
    }
  };

  const handleUpload = () => {
    const email = localStorage.getItem("email");
    if (selectedFile && email) {
      dispatch(changePhotoUser({ file: selectedFile, email }));
    }
  };

  const fileToBase64 = (file: File | Blob) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };
  const handleSee = () => {
    const email = localStorage.getItem("email");
    if (email) {
      dispatch(loadPhotoUser(email));
    }
    // window.location.reload();
  };
  const photo = localStorage.getItem("photo");
  return (
    <div className={styles.main}>
      <div className={styles.partOne}>
        <img src={`${photo}`} alt="User avatar" />
        <input type="file" onChange={handleChange} />
        <button onClick={handleUpload}>Upload Now</button>
        <button onClick={handleSee}>See Photo</button>
      </div>

      <div className={styles.partTwo}>
        <div className={styles.partTwoOne}>
          {name % 2 == 0 ? (
            <>
              <h1>{localStorage.getItem("email")}</h1>
              <button onClick={handledClick}>Change Email</button>
            </>
          ) : (
            <>
              <h1>Write your new Email</h1>
              <input
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
              />
              <button onClick={handledClickTwo}>Set new Email</button>
            </>
          )}
        </div>

        <div className={styles.partTwoOne}>
          {nameTwo == -1 ? (
            <>
              <h1>You entered the wrong old password</h1>
              <button onClick={() => setNameTwo(1)}>Try it again</button>
            </>
          ) : nameTwo % 2 == 0 ? (
            <>
              <h1>Password</h1>
              <button onClick={doubleClick}>Change Password</button>
            </>
          ) : (
            <>
              <h1>Password</h1>
              <input
                value={oldPassword}
                onChange={(e) => setNewOldPassword(e.target.value)}
              />
              <h1>Write your OLD password</h1>
              <input
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
              <h1>Write your NEW password</h1>
              <button onClick={doubleClickTwo}>Set new Password</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
