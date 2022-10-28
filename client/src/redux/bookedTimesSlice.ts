import { createSlice } from "@reduxjs/toolkit";

const initialState: any = {};

const bookedTimesSlice = createSlice({
  name: "bookedTimes",
  initialState,
  reducers: {
    getData: (state, action) => {
      console.log(action.payload);
      state = action.payload;
    },
  },
});

export const { getData } = bookedTimesSlice.actions;
export default bookedTimesSlice.reducer;
