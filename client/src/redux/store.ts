import { configureStore, Middleware, combineReducers } from "@reduxjs/toolkit";
import showActiveMenuSlice from "./menuSlice";
import bookedTimesSlice from "./bookedTimesSlice";
import logger from "redux-logger";
import userSlice from "./userSlice";

const reducer = {
  bookedTimesReducer: bookedTimesSlice,
  showActiveMenuReducer: showActiveMenuSlice,
  userReducer: userSlice,
};
const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
