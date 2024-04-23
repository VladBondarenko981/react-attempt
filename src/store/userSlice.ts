import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { loginData, registrationPayload } from "./types";
import { loginPayload } from "./types";
import { arch } from "os";

type User = {
  password: string;
  email: string;
  cities: string[];
  isAuthorized: boolean;
  message: string;
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
  },
  loading: false,
  error: null,
};

export const registration = createAsyncThunk<
  string,
  registrationPayload,
  { rejectValue: string }
>(
  "user/registration",
  async function (registrationPayload, { rejectWithValue }) {
    const user = {
      emailUser: registrationPayload.email,
      passwordUser: registrationPayload.password,
    };

    const response = await fetch("http://localhost:5000/auth/registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    if (!response.ok) {
      return rejectWithValue("Can't regist user. Server error.");
    }

    const data = await response.text();
    if (data === "success") {
      return "You have successfully registered";
    } else {
      return "Registration failed, please try again";
    }
  }
);

export const login = createAsyncThunk<
  loginData,
  loginPayload,
  { rejectValue: string }
>("user/login", async function (loginPayload, { rejectWithValue }) {
  const user = {
    emailUser: loginPayload.email,
    passwordUser: loginPayload.password,
  };

  const response = await fetch("http://localhost:5000/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!response.ok) {
    return rejectWithValue("Can't regist user. Server error.");
  }

  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    mistakePassword(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
    logOut(state, action: PayloadAction<boolean>) {
      state.user.isAuthorized = action.payload;
    },
    loadUserProperties(state) {
      const password = localStorage.getItem("password");
      const email = localStorage.getItem("email");
      const isAuthorized = localStorage.getItem("isAuthorized");
      if (password !== null && email !== null && isAuthorized !== null) {
        state.user.password = password;
        state.user.email = email;
        state.user.isAuthorized = Boolean(isAuthorized);
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
      });
  },
});

export const { mistakePassword, logOut, loadUserProperties } =
  userSlice.actions;

export default userSlice.reducer;
