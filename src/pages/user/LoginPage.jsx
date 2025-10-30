import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeBar from "../../layouts/mainpage/HomeBar";
import SocialLoginButtons from "../../components/signup/SocialLoginButtons";

const LoginPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("member"); // member | guest

  // 비회원용 입력 상태
  const [guestName, setGuestName] = useState("");
  const [guestOrderNo, setGuestOrderNo] = useState("");

  const logigHandleClick = () => {
    alert("로그인 버튼이 눌렸습니다.");
  };

  const signHandleClick = () => {
    navigate("/joinpage");
  };

  const findId = () => {
    console.log("아이디찾기 버튼이 눌렸습니다.");
  };

  const findPassword = () => {
    console.log("비밀번호찾기 버튼이 눌렸습니다.");
  };

  const handleGuestSearch = () => {
    // 여기에 실제 주문조회 API 호출 넣으시면 됩니다
    console.log("비회원 주문조회", guestName, guestOrderNo);
    alert(`비회원 주문조회\n주문자: ${guestName}\n주문번호: ${guestOrderNo}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 공통 바 */}
      <HomeBar />

      {/* 가운데 로그인 카드 */}
      <div className="flex justify-center px-4 py-10">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-10">
          {/* 제목 */}
          <h1 className="text-center text-2xl font-semibold tracking-tight text-gray-900">
            LOGIN
          </h1>

          {/* 탭 */}
          <div className="mt-8 flex border-b border-gray-200">
            <button
              onClick={() => setActiveTab("member")}
              className={`flex-1 pb-3 text-sm font-medium ${
                activeTab === "member"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              회원 로그인
            </button>
            <button
              onClick={() => setActiveTab("guest")}
              className={`flex-1 pb-3 text-sm font-medium ${
                activeTab === "guest"
                  ? "text-gray-900 border-b-2 border-gray-900"
                  : "text-gray-400 hover:text-gray-700"
              }`}
            >
              비회원 주문조회
            </button>
          </div>

          {/* 내용 영역 */}
          {activeTab === "member" ? (
            <>
              {/* 입력폼 */}
              <div className="mt-6 space-y-4">
                <div>
                  <label className="text-xs text-gray-500">아이디</label>
                  <input
                    className="mt-1 w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500">비밀번호</label>
                  <input
                    className="mt-1 w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                    name="password"
                    type="password"
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
                onClick={logigHandleClick}
                className="mt-6 w-full h-11 rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-black transition cursor-pointer"
              >
                로그인
              </button>
            </>
          ) : (
            <>
              {/* 비회원 안내 + 인풋 2개 */}
              <div className="mt-6 space-y-4">
                <div className="flex justify-center">
                  <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center text-gray-400 text-2xl">
                    🛡
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500">
                  비회원의 경우 주문번호로 조회가 가능합니다.
                  <br />
                  주문 시 입력했던 이름과 주문번호를 입력해 주세요.
                </p>

                {/* 주문자 이름 */}
                <div>
                  <label className="text-xs text-gray-500">주문자 이름</label>
                  <input
                    className="mt-1 w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                    type="text"
                    placeholder="주문 시 입력한 이름"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                  />
                </div>

                {/* 주문번호 */}
                <div>
                  <label className="text-xs text-gray-500">주문번호</label>
                  <input
                    className="mt-1 w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
                    type="text"
                    placeholder="예) 2025-10-30-0001"
                    value={guestOrderNo}
                    onChange={(e) => setGuestOrderNo(e.target.value)}
                  />
                </div>

                {/* 조회 버튼 */}
                <button
                  onClick={handleGuestSearch}
                  className="mt-2 w-full h-11 cursor-pointer rounded-md bg-gray-500 text-white text-sm font-semibold hover:bg-gray-600 transition"
                >
                  주문조회
                </button>

                <p className="text-[11px] text-gray-400 text-center">
                  * 주문번호는 주문완료 메일 또는 마이페이지에서 확인
                  가능합니다.
                </p>
              </div>
            </>
          )}

          {/* 아이디/비번/회원가입 링크 */}
          <div className="mt-6 flex items-center justify-between text-xs text-gray-500">
            <button
              onClick={findId}
              className="hover:text-gray-900 cursor-pointer"
            >
              아이디찾기
            </button>
            <span className="text-gray-300">|</span>
            <button
              onClick={findPassword}
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

export default LoginPage;
