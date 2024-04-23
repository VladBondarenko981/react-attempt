import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import weatherReducer from "./weatherSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    weather: weatherReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
