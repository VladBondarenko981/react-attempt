import { createAsyncThunk } from "@reduxjs/toolkit";
import { WeatherNow, WeatherFiveDays, DigitalWeather } from "./weatherSlice";
import { GeoData } from "./types";

export const loadWeatherNow = createAsyncThunk<
  WeatherNow,
  string,
  { rejectValue: string }
>(
  "weather/loadWeatherNow",
  async function (cityName: string, { rejectWithValue }) {
    const body = { value: cityName };
    const response = await fetch("http://localhost:5000/weather/weather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      return rejectWithValue("Can't load Weather.");
    }

    const data = (await response.json()) as WeatherNow;
    return data;
  }
);

export const loadWeatherFiveDays = createAsyncThunk<
  { temperature: number[]; icon: string[] },
  string,
  { rejectValue: string }
>(
  "weather/loadWeatherFiveDays",
  async function (cityName, { rejectWithValue }) {
    const response = await fetch(
      "http://localhost:5000/weather/weatherFiveDays",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cityName }),
      }
    );

    if (!response.ok) {
      return rejectWithValue("Can't load Weather.");
    }

    const data = (await response.json()) as {
      temperature: number[];
      icon: string[];
    };
    return data;
  }
);

export const loadDigitalWeather = createAsyncThunk<
  DigitalWeather,
  string,
  { rejectValue: string }
>("weather/loadDigitalWeather", async function (cityName, { rejectWithValue }) {
  const response = await fetch("http://localhost:5000/weather/wideWeather", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ cityName }),
  });

  if (!response.ok) {
    return rejectWithValue("Can't load Weather.");
  }

  const data = (await response.json()) as DigitalWeather;
  console.log(data);
  return data;
});

export const loadGeoWeather = createAsyncThunk<
  string,
  GeoData,
  { rejectValue: string }
>(
  "weather/loadGeoWeather",
  async function ({ longitude, latitude }, { rejectWithValue }) {
    const response = await fetch("http://localhost:5000/weather/firstWeather", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ longitude, latitude }),
    });

    console.log("Response status:", response.status);
    if (!response.ok) {
      return rejectWithValue("Can't load Weather.");
    }
    const data = (await response.text()) as string;
    return data;
  }
);
