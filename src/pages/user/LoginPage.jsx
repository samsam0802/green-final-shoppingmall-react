import React from "react";
import SocialLoginButtons from "../../components/signup/SocialLoginButtons";
import { useNavigate } from "react-router-dom";
import HomeBar from "../../layouts/mainpage/HomeBar";

const LoginPage = () => {
  const navigate = useNavigate();

  const joinHandleClick = () => {
    navigate("/joinpage");
  };

  const findId = () => {
    console.log("아이디찾기 버튼이 눌렸습니다.");
  };

  const findPassword = () => {
    console.log("비밀번호찾기 버튼이 눌렸습니다.");
  };

  return (
    <div className="p-6 space-y-6">
      <div className="min-h-screen bg-white">
        <HomeBar />
        <div className="p-6 space-y-6">
          <h1 className="text-2xl font-bold text-center">로그인</h1>
          <div className="flex flex-col items-center gap-3">
            <input
              className="w-64 h-10 px-3 border rounded"
              name="email"
              type="email"
              placeholder="Enter your email address"
            />
            <input
              className="w-64 h-10 px-3 border rounded"
              name="password"
              type="password"
              placeholder="Enter password"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-center">
            <button
              className="flextext-black text-2xl font-semibold px-4 py-2 rounded bg-white hover:bg-black hover:text-white transition m-2"
              onClick={joinHandleClick}
            >
              Sign In
            </button>
          </div>
        </div>
        <div>
          <ul className="flex justify-center text-sm text-gray-600">
            <li>
              <button className="underline m-2 p-1" onClick={findId}>
                아이디 찾기
              </button>
            </li>
            <li>
              <button className="underline m-2 p-1" onClick={findPassword}>
                비밀번호 찾기
              </button>
            </li>
            <li>
              <button className="underline m-2 p-1" onClick={joinHandleClick}>
                회원가입
              </button>
            </li>
          </ul>
        </div>
        <SocialLoginButtons />
      </div>
    </div>
  );
};
export default LoginPage;
