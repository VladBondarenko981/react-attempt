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
} from "./userActions";
import { act } from "react-dom/test-utils";

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
  error: string | null;
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
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    mistakePassword(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    logOut(state, action: PayloadAction<boolean>) {
      state.user.isAuthorized = action.payload;
      localStorage.setItem("isAuthorized", "false");
      localStorage.setItem("password", "");
      localStorage.setItem("login", "");
    },
    loadUserProperties(state) {
      const password = localStorage.getItem("password");
      const email = localStorage.getItem("email");
      const isAuthorizedString = localStorage.getItem("isAuthorized");
      let isAuthorized = true;
      if (
        isAuthorizedString === "false"
          ? (isAuthorized = false)
          : (isAuthorized = true)
      )
        if (password !== null && email !== null && isAuthorized !== null) {
          state.user.password = password;
          state.user.email = email;
          state.user.isAuthorized = isAuthorized;
        }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(registration.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user.password = action.payload.password;
        state.user.email = action.payload.email;
        state.user.isAuthorized = true;
        if (action.payload.message === "success") {
          state.user.message = "You have successfully login";
        }
        localStorage.setItem("email", state.user.email);
        localStorage.setItem("password", state.user.password);
        localStorage.setItem(
          "isAuthorized",
          state.user.isAuthorized.toString()
        );
      })
      .addCase(addFavouriteCities.rejected, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addFavouriteCities.fulfilled, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      .addCase(loadCities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadCities.fulfilled, (state, action) => {
        state.loading = false;
        state.user.cities = action.payload;
        localStorage.setItem("cities", JSON.stringify(action.payload));
      })
      .addCase(loadPhotoUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadPhotoUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user.photoUser = action.payload;
        localStorage.setItem("photo", action.payload);
      })
      .addCase(changePhotoUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changePhotoUser.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(changeUserEmail.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeUserEmail.fulfilled, (state, action) => {
        state.loading = false;
        state.user.email = action.payload;
        localStorage.setItem("email", action.payload);
      })
      .addCase(changeUserPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(changeUserPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user.password = action.payload;
        localStorage.setItem("password", action.payload);
      });
  },
});

export const { mistakePassword, logOut, loadUserProperties } =
  userSlice.actions;

export default userSlice.reducer;
