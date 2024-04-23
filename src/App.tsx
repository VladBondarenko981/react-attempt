import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { MainForm } from "./pages/MainForm";
import { MyProfile } from "./pages/MyProfile";
import { LogIn } from "./pages/LogIn";
import { SignUp } from "./pages/SignUp";
import { useAppDispatch } from "./hooks/hooks";
import { loadUserProperties } from "./store/userSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(loadUserProperties());
  }, [dispatch]);
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
