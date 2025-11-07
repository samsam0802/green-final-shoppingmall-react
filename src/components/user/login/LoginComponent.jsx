import { useNavigate } from "react-router-dom";
import SocialLoginButtons from "../signup/SocialLoginButtons";
import { useState } from "react";

const LoginComponent = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
    console.log(name, value);
  };

  const loginHandleClick = () => {
    console.log(loginData);

    // api 설정해야한다.
    alert(
      `로그인 버튼이 눌렸습니다. \n 이메일: ${loginData.email} \n 비밀번호: ${loginData.password}`
    );
  };

  const signHandleClick = () => {
    navigate("/joinpage");
  };

  const findIdBtn = () => {
    navigate("/findId");
  };

  const findPasswordBtn = () => {
    navigate("/findpw");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 가운데 로그인 카드 */}
      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-10">
          {/* 제목 */}
          <h1 className="text-center text-2xl font-semibold tracking-tight text-gray-900">
            LOGIN
          </h1>

          {/* 내용 영역 */}
          <>
            {/* 입력폼 */}
            <div className="mt-6 space-y-4">
              <div>
                <label className="text-xs text-gray-500">아이디</label>
                <input
                  className="mt-1 w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                  name="email"
                  type="email"
                  value={loginData.email}
                  onChange={inputChangeHandler}
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <label className="text-xs text-gray-500">비밀번호</label>
                <input
                  className="mt-1 w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                  name="password"
                  type="password"
                  value={loginData.password}
                  onChange={inputChangeHandler}
                  placeholder="Enter password"
                />
              </div>
              {/* 보안접속 자리 */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="inline-block h-4 w-4 rounded-full bg-red-500" />
                보안접속
              </div>
            </div>

            {/* 로그인 버튼 */}
            <button
              onClick={loginHandleClick}
              className="mt-6 w-full h-11 rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-black transition cursor-pointer"
            >
              로그인
            </button>
          </>

          {/* 아이디/비번/회원가입 링크 */}
          <div className="mt-5 mb-5 flex items-center justify-between text-xs text-gray-500">
            <button
              onClick={findIdBtn}
              className="hover:text-gray-900 cursor-pointer"
            >
              아이디찾기
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={findPasswordBtn}
              className="hover:text-gray-900 cursor-pointer"
            >
              비밀번호찾기
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={signHandleClick}
              className="hover:text-gray-900 cursor-pointer"
            >
              회원가입
            </button>
          </div>

          {/* SNS 로그인 */}
          <SocialLoginButtons className="mt-8" />
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
