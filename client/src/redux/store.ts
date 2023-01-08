import {
  configureStore,
  Middleware,
  combineReducers,
  ThunkAction,
  AnyAction,
} from "@reduxjs/toolkit";
import showActiveMenuSlice from "./menuSlice";
import bookedTimesSlice from "./bookedTimesSlice";
import userSlice from "./userSlice";
import laundryRoomSlice from "./laundryRoomsSlice";
import logger from "redux-logger";
import settingsSlice from "./settingsSlice";

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
const reducer = {
  bookedTimesReducer: bookedTimesSlice,
  showActiveMenuReducer: showActiveMenuSlice,
  userReducer: userSlice,
  laundryRoomReducer: laundryRoomSlice,
  settingsReducer: settingsSlice,
};
const store = configureStore({
  reducer,
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
