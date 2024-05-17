import React from "react";
import { HeaderAutorizationUser } from "../components/AutorizationUser/HeaderAutorizationUser/HeaderAutorizationUser";
import { HeaderNoAutorizationUser } from "../components/NoAutorizationUser/HeaderNoAutorizationUser/HeaderNoAutorizationUser";
import { LogInComponent } from "../components/CommonComponents/LogInComponent/LogInComponent";
import { useAppSelector } from "../hooks/hooks";

type Props = {};

export const LogIn = (props: Props) => {
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
      <LogInComponent />
    </div>
  );
};
