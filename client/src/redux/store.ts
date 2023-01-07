import { configureStore, Middleware, combineReducers } from "@reduxjs/toolkit";
import showActiveMenuSlice from "./menuSlice";
import bookedTimesSlice from "./bookedTimesSlice";
import userSlice from "./userSlice";
import laundryRoomSlice from "./laundryRoomsSlice";
import logger from "redux-logger";

const reducer = {
  bookedTimesReducer: bookedTimesSlice,
  showActiveMenuReducer: showActiveMenuSlice,
  userReducer: userSlice,
  laundryRoomReducer: laundryRoomSlice,
};
const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
