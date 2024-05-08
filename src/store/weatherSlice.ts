import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  loadDigitalWeather,
  loadGeoWeather,
  loadWeatherFiveDays,
  loadWeatherNow,
} from "./weatherActions";
import { act } from "react-dom/test-utils";
import { useAppDispatch } from "../hooks/hooks";

export type WeatherNow = {
  nameCity: string;
  temperature: number;
  icon: string;
};

export type WeatherFiveDays = {
  day: string[];
  temperature: number[];
  icon: string[];
};

export type DigitalWeather = {
  data: {
    icon: string;
    temperature: number;
    rain: string;
    humidity: number;
    wind: number;
  }[];
};

type Weather = {
  weatherData: WeatherNow;
  weatherFiveDays: WeatherFiveDays;
  digitalWeather: DigitalWeather;
};

type WeatherState = {
  weather: Weather;
  loading: boolean;
  error: string | null;
};

const initialState: WeatherState = {
  weather: {
    weatherData: {
      nameCity: "",
      temperature: 0,
      icon: "",
    },
    weatherFiveDays: {
      day: [],
      temperature: [],
      icon: [],
    },
    digitalWeather: {
      data: [],
    },
  },
  loading: false,
  error: null,
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadWeatherNow.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadWeatherNow.fulfilled, (state, action) => {
        state.loading = false;
        state.weather.weatherData.temperature = action.payload.temperature;
        state.weather.weatherData.nameCity = action.payload.nameCity;
        state.weather.weatherData.icon = action.payload.icon;
      })
      .addCase(loadWeatherFiveDays.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadWeatherFiveDays.fulfilled, (state, action) => {
        state.loading = false;
        state.weather.weatherFiveDays.temperature = action.payload.temperature;
        state.weather.weatherFiveDays.icon = action.payload.icon;
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth();
        let daysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
        const days = [];
        for (let i = 0; i < 5; i++) {
          let forecastDay = day + i;
          if (forecastDay > daysInMonth) {
            forecastDay -= daysInMonth;
            month++;
            if (month > 11) {
              month = 0;
            }
            daysInMonth = new Date(date.getFullYear(), month + 1, 0).getDate();
          }
          days.push(`${forecastDay}.${month + 1}`);
        }

        state.weather.weatherFiveDays.day = days;
      })
      .addCase(loadDigitalWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadDigitalWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather.digitalWeather.data = action.payload.data;
      })
      .addCase(loadGeoWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loadGeoWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.weather.weatherData.nameCity = action.payload;
      });
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
