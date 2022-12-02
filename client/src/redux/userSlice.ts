import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserTypeWithNestedAdress } from "../types/userType";

interface UserSliceState {
  user: UserTypeWithNestedAdress | null;
}
const initialState: UserSliceState = {
  user: null,
};

const userLslice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<UserTypeWithNestedAdress>) => {
      state.user = action.payload;
    },
    loggOutUser: (state) => {
      console.log(state.user, "in loggout in reducer");
      state.user = null;
    },
  },
});

export const { loginUser, loggOutUser } = userLslice.actions;
export default userLslice.reducer;
