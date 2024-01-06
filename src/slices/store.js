import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
export const redux_store = configureStore({
  reducer: {
    user: userReducer,
  },
});
