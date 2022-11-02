import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userLslice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginUser: (state, action) => {
      return action.payload;
    },
    loggOutUser: (state) => {
      return null;
    },
  },
});

export const { loginUser, loggOutUser } = userLslice.actions;
export default userLslice.reducer;
