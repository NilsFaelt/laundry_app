import { createSlice } from "@reduxjs/toolkit";
import { BookedLaundrytimes } from "../types/laundryTypes";

const initialState: BookedLaundrytimes[] = [];

const bookedTimesSlice = createSlice({
  name: "bookedTimes",
  initialState,
  reducers: {
    addLaundryTime: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addLaundryTime } = bookedTimesSlice.actions;
export default bookedTimesSlice.reducer;
