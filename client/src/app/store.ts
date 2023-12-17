import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { rootReducer } from "./rootReducer";

export const store = configureStore({
  reducer: rootReducer,
});
