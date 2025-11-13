export const loginSlice = {
  // prettier-ignore
  login: (state, action) => { // State를 변경하는 login 함수를 정의
    const { login_Id, password } = action.payload;
    // LoginComponent에서 Props로 전달받을 예정
    // 회원가입 폼에서는 login_id 사용

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    // localStorage에서 꺼내올 키값 users 없으면 [] 빈배열

    // prettier-ignore
    const user = users.find((u) => u.login_Id === login_Id && u.password === password);
    // 로컬스토리지안에서 꺼낸 users가 props로 받은 login_id와 같고, users의 패스워드가 props로 받은 password와 같다면 user에 저장

    if (user) {
      // 로그인 성공
      state.user = user; // initialState 의 user에 user를 저장
      state.isLoggedIn = true; // initialState 의 isLoggedIn에 true를 저장
      state.token = "mock_token_" + Date.now(); // initialState 의 token에 "mock_token" + 현재날짜를 문자열결합으로 저장
      state.error = null; // initialState 의 error에 null값 저장

      localStorage.setItem("token", state.token); // 로컬스토리지에 저장할때는 Key / Value 형태 여기서 키도 문자열, 로컬스토리지 데이터도 문자열이다.
      localStorage.setItem("currentUser", JSON.stringify(user)); // 해당 Stringify는 객체를 문자열로 변환해준다.
      console.log("✅ LoginSlice: 로그인 성공", user);
    } else {
      // 로그인 실패
      state.error = "아이디 또는 비밀번호가 틀렸습니다."; // 로그인이 실패하게되면 userSlice의 state중 error에 해당 문자열을 저장하고 LoginComponent에서 error가 출력되게 해놓았다.
      console.log("❌ LoginSlice: 로그인 실패");
    }
  },

  // prettier-ignore
  logout: (state) => { // 로그아웃 Reducer
    state.user = null; // null 값으로 변경
    state.isLoggedIn = false; // false 값으로 변경
    state.token = null; // null 값으로 변경
    state.error = null; // null 값으로 변경 
    // 여기서 로그아웃은 Header의 로그아웃버튼을 클릭하면 logout() Reducer가 실행되면서 -> 유저정보를 null 또는 false로 만들고 localstorage에 저장된 데이터도 remove 한다.
    localStorage.removeItem("token"); // 로컬스토리지의 해당 키값을 지운다. 밸류도 같이 지워진다.
    localStorage.removeItem("currentUser"); // 로컬스토리지의 해당 키값을 지운다. 밸류도 같이 지워진다.
    console.log("✅ LoginSlice: 로그아웃 완료"); // 해당 로그아웃 Reducer가 실행되고 마지막에 로그가 출력된다.
  },

  // 🔹 로그인 상태 복구 (restoreLogin)
  // prettier-ignore
  restoreLogin: (state) => { // 해당 Reducer가 실행되면 
    const token = localStorage.getItem("token"); // 로컬스토리지에 저장되있는 token 데이터를 불러온다
    const user = localStorage.getItem("currentUser"); // 로컬스토리지에 저장되있는 curruntUser 데이터를 불러온다
    if (token && user) { // 토큰과 유저의 정보가 있다면
      state.user = JSON.parse(user); // user를 객체로 변환해서 user 상태에 저장
      state.isLoggedIn = true; // 로그인확인 상태도 true로 저장
      state.token = token; // 현재 token도 현재상태에 저장
      console.log("✅ LoginSlice: 로그인 상태 복구");
    }
  },

  updateUserRole: (state, action) => {
    const { user_Role } = action.payload; // 여기의 payload는 => "admin" 또는 "user" 임
    if (state.user) {
      state.user.user_Role = user_Role;
      const currentUser = JSON.parse(localStorage.getItem("currentUser"));
      if (currentUser) {
        currentUser.user_Role = user_Role;
        localStorage.setItem("currentUser", JSON.stringify(currentUser));
      }

      console.log(`✅ LoginSlice: 권한 변경 완료 -> ${user_Role}`);
    }
  },
};
