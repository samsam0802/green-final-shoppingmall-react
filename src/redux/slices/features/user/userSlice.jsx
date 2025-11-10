import { createSlice } from "@reduxjs/toolkit";
import { signupSlice } from "./signUpSlice";
import { loginSlice } from "./loginSlice";

const initialState = {
  user: null,
  isLoggedIn: false,
  token: null,
  error: null,
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    ...signupSlice,
    ...loginSlice,
  },
});

export const { signUp, login, logout, clearError, restoreLogin } =
  userSlice.actions;

export default userSlice.reducer;
