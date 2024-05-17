import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  registration,
  login,
  addFavouriteCities,
  loadCities,
  loadPhotoUser,
  changePhotoUser,
  changeUserEmail,
  changeUserPassword,
  loadInfoByToken,
} from "./userActions";
import { act } from "react-dom/test-utils";
import { useAppDispatch } from "../hooks/hooks";

type User = {
  password: string;
  email: string;
  cities: string[];
  isAuthorized: boolean;
  message: string;
  photoUser: string;
};

type UserState = {
  user: User;
  loading: boolean;
  userStatus: string | null;
};

const initialState: UserState = {
  user: {
    password: "",
    email: "",
    cities: [],
    isAuthorized: false,
    message: "",
    photoUser: "",
  },
  loading: false,
  userStatus: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    mistakePassword(state, action: PayloadAction<string>) {
      state.userStatus = action.payload;
    },
    logOut(state, action: PayloadAction<boolean>) {
      state.user.isAuthorized = action.payload;
      localStorage.setItem("isAuthorized", "false");
      localStorage.setItem("password", "");
      localStorage.setItem("login", "");
    },
    loadUserProperties(state) {
      const password = localStorage.getItem("password");
      const isAuthorizedString = localStorage.getItem("isAuthorized");
      let isAuthorized = true;
      if (
        isAuthorizedString === "false"
          ? (isAuthorized = false)
          : (isAuthorized = true)
      )
        if (password !== null && isAuthorized !== null) {
          state.user.password = password;
          state.user.isAuthorized = isAuthorized;
        }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.loading = true;
        state.userStatus = null;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false;
        state.userStatus = action.payload as string;
      })
      .addCase(registration.rejected, (state, action) => {
        state.loading = false;
        state.userStatus = action.payload as string;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.userStatus = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user.password = JSON.stringify(action.payload.password);
        localStorage.setItem("password", action.payload.password);
        localStorage.setItem("isAuthorized", "true");
        state.user.isAuthorized = true;
        if (action.payload.message === "success") {
          state.user.message = "You have successfully login";
        }
      })
      .addCase(addFavouriteCities.rejected, (state) => {
        state.loading = true;
        state.userStatus = null;
      })
      .addCase(addFavouriteCities.fulfilled, (state, action) => {
        state.loading = false;
        state.userStatus = action.payload as string;
      })
      .addCase(loadCities.pending, (state) => {
        state.loading = true;
        state.userStatus = null;
      })
      .addCase(loadCities.fulfilled, (state, action) => {
        state.loading = false;
        state.user.cities = action.payload;
        localStorage.setItem("cities", JSON.stringify(action.payload));
      })
      .addCase(loadPhotoUser.pending, (state) => {
        state.loading = true;
        state.userStatus = null;
      })
      .addCase(loadPhotoUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.photoUser = action.payload;
        localStorage.setItem("photo", action.payload);
      })
      .addCase(changePhotoUser.pending, (state) => {
        state.loading = true;
        state.userStatus = null;
      })
      .addCase(changePhotoUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(changeUserEmail.pending, (state) => {
        state.loading = true;
        state.userStatus = null;
      })
      .addCase(changeUserEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user.email = action.payload;
        localStorage.setItem("email", action.payload);
      })
      .addCase(changeUserPassword.pending, (state) => {
        state.loading = true;
        state.userStatus = null;
      })
      .addCase(changeUserPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user.password = action.payload;
        localStorage.setItem("password", action.payload);
      })
      .addCase(loadInfoByToken.pending, (state) => {
        state.loading = true;
        state.userStatus = null;
      })
      .addCase(loadInfoByToken.fulfilled, (state, action) => {
        state.loading = false;
        state.user.email = action.payload.email;
        state.user.password = action.payload.password;
      });
  },
});

export const { mistakePassword, logOut, loadUserProperties } =
  userSlice.actions;

export default userSlice.reducer;
