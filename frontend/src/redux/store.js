import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import userSlice from "./userSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: userSlice,
  },
});
