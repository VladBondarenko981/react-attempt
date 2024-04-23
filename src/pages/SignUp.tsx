import React from "react";
import { HeaderAutorizationUser } from "../components/AutorizationUser/HeaderAutorizationUser/HeaderAutorizationUser";
import { HeaderNoAutorizationUser } from "../components/NoAutorizationUser/HeaderNoAutorizationUser/HeaderNoAutorizationUser";
import { SignUpComponent } from "../components/CommonComponents/SignUpComponent/SignUpComponent";
import { useAppSelector } from "../hooks/hooks";

type Props = {};

export const SignUp = (props: Props) => {
  const status = useAppSelector((state) => state.user.user.isAuthorized);
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
      <SignUpComponent />
    </div>
  );
};
