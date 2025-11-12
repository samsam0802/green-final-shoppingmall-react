import { createSlice } from "@reduxjs/toolkit";
// 프로젝트 구조에 맞게 경로를 수정해 주세요.
import { loginSlice } from "./loginSlice";
import { signupSlice } from "./signUpSlice";

const initialState = {
  user: null, // 현재 로그인한 사용자 정보
  isLoggedIn: false, // 로그인 상태
  token: null, // 인증 토큰
  error: null, // 에러 메시지
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    ...loginSlice,
    ...signupSlice,
  },
});

export const {
  signUp,
  login,
  logout,
  clearError,
  restoreLogin,
  updateUserRole,
} = userSlice.actions;

export default userSlice.reducer;
