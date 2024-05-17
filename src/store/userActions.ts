import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  registrationPayload,
  loginData,
  loginPayload,
  FavouriteCities,
} from "./types";
import { emplace } from "@reduxjs/toolkit/dist/utils";
import { UserInfo } from "./types";

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

export const addFavouriteCities = createAsyncThunk<
  {},
  FavouriteCities,
  { rejectValue: string }
>(
  "user/addFavouriteCities",
  async function (favouriteCities, { rejectWithValue }) {
    const { city, password } = favouriteCities;
    const response = await fetch(
      "http://localhost:5000/users/addFavouriteCities",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ city, password }),
      }
    );

    console.log("Response status:", response.status);

    if (!response.ok) {
      return rejectWithValue("Can't add favourite city.");
    }

    const data = await response.json();
    console.log(data);

    return data;
  }
);

export const loadCities = createAsyncThunk<[], string, { rejectValue: string }>(
  "users/loadCities",
  async function (password, { rejectWithValue }) {
    const response = await fetch("http://localhost:5000/users/loadCities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ password }),
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      return rejectWithValue("Can't load cities.");
    }

    const data = await response.json();
    console.log(data);

    return data;
  }
);

export const loadPhotoUser = createAsyncThunk<
  string,
  string,
  { rejectValue: string }
>("users/loadPhotoUser", async function (email, { rejectWithValue }) {
  const response = await fetch("http://localhost:5000/users/photoUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  console.log("Response status:", response.status);

  if (!response.ok) {
    return rejectWithValue("Can't load cities.");
  }

  const data = await response.text();
  return data;
});

export const changePhotoUser = createAsyncThunk<
  string,
  { file: string; email: string },
  { rejectValue: string }
>("users/changePhotoUser", async function (photoInfo, { rejectWithValue }) {
  const { file, email } = photoInfo;
  const response = await fetch("http://localhost:5000/users/changePhoto", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ file, email }),
  });

  console.log("Response status:", response.status);

  if (!response.ok) {
    return rejectWithValue("Can't load cities.");
  }
  const data = (await response.text()) as string;
  return data;
});

export const changeUserEmail = createAsyncThunk<
  string,
  { newEmail: string; email: string },
  { rejectValue: string }
>("auth/changeEmail", async function (emailInfo, { rejectWithValue }) {
  const { newEmail, email } = emailInfo;
  const response = await fetch("http://localhost:5000/auth/changeEmail", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ newEmail, email }),
  });

  console.log("Response status:", response.status);

  if (!response.ok) {
    return rejectWithValue("Can't load cities.");
  }
  const data = (await response.text()) as string;
  return data;
});

export const changeUserPassword = createAsyncThunk<
  string,
  { password: string; newPassword: string; email: string },
  { rejectValue: string }
>("auth/changePassword", async function (passwordInfo, { rejectWithValue }) {
  const { password, newPassword, email } = passwordInfo;
  const response = await fetch("http://localhost:5000/auth/changePassword", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ password, newPassword, email }),
  });

  console.log("Response status:", response.status);

  if (!response.ok) {
    return rejectWithValue("Can't load cities.");
  }
  const data = (await response.text()) as string;
  return data;
});

export const loadInfoByToken = createAsyncThunk<
  UserInfo,
  { password: string },
  { rejectValue: string }
>("users/loadInfoByToken", async function (passwordInfo, { rejectWithValue }) {
  const { password } = passwordInfo;
  const response = await fetch("http://localhost:5000/users/loadInfoByToken", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },

    body: JSON.stringify({ password }),
  });

  console.log("Response status:", response.status);

  if (!response.ok) {
    return rejectWithValue("Can't load cities.");
  }
  const data = await response.json();
  return data;
});
