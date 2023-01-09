import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SettingsState {
  bookingLimit: number;
}

const initialState: SettingsState = {
  bookingLimit: 3,
};

export const settingsSlice = createSlice({
  name: "settingsSlice",
  initialState,
  reducers: {
    updateBookingLimit: (state, action: PayloadAction<number>) => {
      state.bookingLimit = action.payload;
    },
  },
});

export const { updateBookingLimit } = settingsSlice.actions;
export default settingsSlice.reducer;
