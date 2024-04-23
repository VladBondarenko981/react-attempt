import React from "react";
import { HeaderAutorizationUser } from "../components/AutorizationUser/HeaderAutorizationUser/HeaderAutorizationUser";
import { Profile } from "../components/AutorizationUser/Profile/Profile";

type Props = {};

export const MyProfile = (props: Props) => {
  return (
    <div>
      <HeaderAutorizationUser />
      <Profile />
    </div>
  );
};
