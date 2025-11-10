export const loginSlice = {
  //prettier-ignore
  login: (state, action) => {  // State를 변경하는 login 함수를 정의
    const { login_Id, password } = action.payload;
    // LoginComponent에서 Props로 전달받을 예정
    // 회원가입 폼에서는 login_id 사용

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // localStorage에서 꺼내올 키값 users 없으면 [] 빈배열

    // prettier-ignore
    const user = users.find((u) => u.login_Id === login_Id && u.password_1 === password);
    // 로컬스토리지안에서 꺼낸 users가 props로 받은 login_id와 같고, users의 패스워드1이 props로 받은 password와 같다면 user에 저장

    if (user) {
      // 로그인 성공
      state.user = user;
      state.isLoggedIn = true;
      state.token = "mock_token_" + Date.now();
      state.error = null;

      localStorage.setItem("token", state.token);
      localStorage.setItem("currentUser", JSON.stringify(user));
      console.log("✅ 여기는 LoginSlice: 로그인 성공", user);
    } else {
      // 로그인 실패
      state.error = "아이디 또는 비밀번호가 틀렸습니다.";
      console.log("❌ LoginSlice: 로그인 실패");
    }
  },

  // 🔹 로그아웃 (logout)
  logout: (state) => {
    state.user = null;
    state.isLoggedIn = false;
    state.token = null;
    state.error = null;

    localStorage.removeItem("token");
    localStorage.removeItem("currentUser");
    console.log("✅ 여기는 LoginSlice: 로그아웃 완료");
  },

  // 🔹 로그인 상태 복구 (restoreLogin)
  restoreLogin: (state) => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("currentUser");
    if (token && user) {
      state.user = JSON.parse(user);
      state.isLoggedIn = true;
      state.token = token;
      console.log("✅ 여기는 LoginSlice : 로그인 상태 복구");
    }
  },
};
