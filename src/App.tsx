import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { MainForm } from "./pages/MainForm";
import { MyProfile } from "./pages/MyProfile";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { loadUserProperties } from "./store/userSlice";
import {
  loadDigitalWeather,
  loadGeoWeather,
  loadWeatherFiveDays,
  loadWeatherNow,
} from "./store/weatherActions";
import { loadCities } from "./store/userActions";

function App() {
  const [latitude, setLatitude] = useState<number | null>(null);
  const [longitude, setLongitude] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  const isAuthorized = useAppSelector((state) => state.user.user.isAuthorized);
  const weatherData = useAppSelector(
    (state) => state.weather.weather.weatherData
  );

  useEffect(() => {
    const geo = navigator.geolocation;
    if (geo) {
      geo.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, []);

  useEffect(() => {
    dispatch(loadUserProperties());
    const email = localStorage.getItem("email");
    if (email) {
      dispatch(loadCities(email));
    }
  }, [dispatch]);

  useEffect(() => {
    if (weatherData.nameCity) {
      dispatch(loadWeatherNow(weatherData.nameCity));
      dispatch(loadWeatherFiveDays(weatherData.nameCity));
      dispatch(loadDigitalWeather(weatherData.nameCity));
    }
  }, [dispatch, weatherData.nameCity]);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      dispatch(loadGeoWeather({ latitude, longitude }));
    }
  }, [dispatch, latitude, longitude]);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<MainForm />} />
        <Route path="/signIn" element={<SignUp />} />
        <Route path="/logIn" element={<LogIn />} />
        <Route path="/myProfile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
