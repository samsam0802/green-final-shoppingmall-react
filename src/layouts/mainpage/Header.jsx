// src/components/common/Header.jsx (예시)
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const loginHandleClick = () => {
    navigate("/loginpage");
  };

  const joinHandleClick = () => {
    navigate("/joinpage");
  };

  // ✅ 마이페이지로 이동
  const mypageHandleClick = () => {
    navigate("/mypage");
  };

  const cartHandleClick = () => {
    navigate("/cart");
  };

  return (
    <header className="bg-white border-b">
      {/* 상단 안내 라인 */}
      <div className="bg-gray-100 text-center text-xs text-gray-700 py-1 border-b border-gray-200">
        [WELCOME] 공지/이벤트(미정)
      </div>

      {/* 메인 헤더 */}
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        {/* 왼쪽 비워둔 자리 */}
        <div />

        {/* 가운데 로고/타이틀 */}
        <div className="text-center leading-tight">
          <h1 className="text-3xl font-extrabold">
            <span className="text-black">신소라와</span>
            <span className="text-gray-700"> 세남자</span>
          </h1>
          <p className="text-[11px] text-gray-400 mt-0.5">사이트 부제(미정)</p>
        </div>

        {/* 오른쪽 액션 버튼들 */}
        <div className="text-sm text-gray-500 flex items-center gap-4">
          <button
            className="cursor-pointer opacity-60 hover:opacity-100 transition"
            onClick={loginHandleClick}
          >
            LOGIN
          </button>
          <button
            className="cursor-pointer opacity-60 hover:opacity-100 transition"
            onClick={joinHandleClick}
          >
            JOIN
          </button>
          <button
            className="cursor-pointer opacity-60 hover:opacity-100 transition"
            onClick={mypageHandleClick}
          >
            MYPAGE
          </button>
          <button
            className="cursor-pointer opacity-60 hover:opacity-100 transition"
            onClick={cartHandleClick}
          >
            CART
          </button>
        </div>
      </div>
    </header>
  );
}
