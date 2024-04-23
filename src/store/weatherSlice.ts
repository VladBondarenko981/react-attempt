import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

type WeatherNow = {
  nameCity: string;
  temperature: number;
  icon: string;
};

type WeatherFiveDays = {
  day: string[];
  temperature: string[];
  icon: string[];
};

type DigitalWeather = {
  data: {}[];
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
      });
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
