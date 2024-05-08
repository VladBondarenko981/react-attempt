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
  const status = useAppSelector((state) => state.user.user.isAuthorized);
  console.log(status);
  return (
    <div>
      {status === true ? (
        <>
          <HeaderAutorizationUser />
        </>
      ) : (
        <>
          <HeaderNoAutorizationUser />
        </>
      )}
      {status === true ? (
        <>
          <AuthWeatherNow />
        </>
      ) : (
        <>
          <GuestWeatherNow />
        </>
      )}
      <WeatherFiveDays />
      {status === true ? (
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
