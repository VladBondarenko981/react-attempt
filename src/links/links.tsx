import { Route, Routes } from "react-router-dom";
import { MainForm } from "../pages/MainForm";
import { SignUp } from "../pages/SignUp";
import { LogIn } from "../pages/LogIn";
import { MyProfile } from "../pages/MyProfile";

export const AppRoutes = ({}) => (
  <Routes>
    <Route path="mainForm" element={<MainForm />} />
    <Route path="signIn" element={<SignUp />} />
    <Route path="logIn" element={<LogIn />} />
    <Route path="myProfile" element={<MyProfile />} />
  </Routes>
);
