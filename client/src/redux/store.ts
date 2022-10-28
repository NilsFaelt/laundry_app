import { configureStore } from "@reduxjs/toolkit";
import showActiveMenuSlice from "./menuSlice";
import bookedTimesSlice from "./bookedTimesSlice";

const store = configureStore({
  reducer: {
    bookedTimesReducer: bookedTimesSlice,
    showActiveMenuReducer: showActiveMenuSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store;
