import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookedLaundrytimes } from "../types/laundryTypes";

interface BookedTimesState {
  bookedTimes: BookedLaundrytimes[];
}
const initialState: BookedTimesState = {
  bookedTimes: [],
};

const bookedTimesSlice = createSlice({
  name: "bookedTimes",
  initialState,
  reducers: {
    addAllLaundryTimes: (
      state,
      action: PayloadAction<BookedLaundrytimes[]>
    ) => {
      state.bookedTimes = action.payload;
    },
    addLaundryTime: (state, action: PayloadAction<BookedLaundrytimes>) => {
      state.bookedTimes = [...state.bookedTimes, action.payload];
    },
    removeLaundryTime: (state, action: PayloadAction<string>) => {
      state.bookedTimes = state.bookedTimes.filter(
        (time) => time._id !== action.payload
      );
      console.log(state.bookedTimes, "state in reducer");
    },
  },
});

export const { addLaundryTime, removeLaundryTime, addAllLaundryTimes } =
  bookedTimesSlice.actions;
export default bookedTimesSlice.reducer;
