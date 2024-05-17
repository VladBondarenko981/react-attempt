import React from "react";
import { HeaderAutorizationUser } from "../components/AutorizationUser/HeaderAutorizationUser/HeaderAutorizationUser";
import { HeaderNoAutorizationUser } from "../components/NoAutorizationUser/HeaderNoAutorizationUser/HeaderNoAutorizationUser";
import { AuthWeatherNow } from "../components/AutorizationUser/AuthWeatherNow/AuthWeatherNow";
import { GuestWeatherNow } from "../components/NoAutorizationUser/GuestWeatherNow/GuestWeatherNow";
import { WeatherFiveDays } from "../components/CommonComponents/WeatherFiveDays/WeatherFiveDays";
import { GuestDigitalWeather } from "../components/NoAutorizationUser/GuestDigitalWeather/GuestDigitalWeather";
import { AuthDigitalWeather } from "../components/AutorizationUser/AuthDigitalWeather/AuthDigitalWeather";
import { useAppSelector } from "../hooks/hooks";

type Props = {};

export const MainForm = (props: Props) => {
  const isAuthorized = useAppSelector((state) => state.user.user.isAuthorized);
  return (
    <div>
      {isAuthorized ? (
        <>
          <HeaderAutorizationUser />
        </>
      ) : (
        <>
          <HeaderNoAutorizationUser />
        </>
      )}
      {isAuthorized ? (
        <>
          <AuthWeatherNow />
        </>
      ) : (
        <>
          <GuestWeatherNow />
        </>
      )}
      <WeatherFiveDays />
      {isAuthorized ? (
        <>
          <AuthDigitalWeather />
        </>
      ) : (
        <>
          <GuestDigitalWeather />
        </>
      )}
    </div>
  );
};
