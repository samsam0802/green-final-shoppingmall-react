// redux/auth/signupSlice.js

export const signupSlice = {
  signUp: (state, action) => {
    // action.payload는 { terms, signUpForm } 형태
    const newUserData = action.payload.signUpForm;

    // 1. 로컬스토리지에서 기존 회원 목록 가져오기 (현재 Mock DB)
    const existingUsers = localStorage.getItem("users");
    const users = existingUsers ? JSON.parse(existingUsers) : [];

    // 2. 중복 체크 (login_id 기준)
    const isDuplicate = users.some((u) => u.login_Id === newUserData.login_Id);
    if (isDuplicate) {
      state.error = "이미 존재하는 아이디입니다.";
      return; // 중복이면 여기서 Reducer 종료
    }

    // 3. 새 회원 추가
    const userWithId = {
      ...newUserData,
      terms: action.payload.terms, // 약관 데이터 포함
      user_Level: "Bronze",
      createdAt: new Date().toISOString(),
    };
    users.push(userWithId);

    // 4. 로컬스토리지에 저장
    localStorage.setItem("users", JSON.stringify(users));

    console.log("✅ 여기는 SignUpSlice: 회원가입 완료", userWithId);
    state.error = null; // 성공 시 에러 초기화
  },
};
