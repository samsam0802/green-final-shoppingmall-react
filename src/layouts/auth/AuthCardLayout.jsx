// src/layouts/auth/AuthCardLayout.jsx
import React from "react";

/**
 * 인증 계열 화면(로그인, 아이디 찾기, 비밀번호 찾기 등)을
 * 전부 같은 "카드 모양"으로 보여주기 위한 공통 레이아웃입니다.
 *
 * - 가운데 정렬되는 흰색 박스
 * - width 고정 (max-w-md)
 * - 안쪽 여백(padding) 통일
 * - 제목/설명은 props로 받아서 화면마다 바꿀 수 있게
 */
const AuthCardLayout = ({ title, description, children }) => {
  return (
    <div className="w-full max-w-md bg-white rounded-2xl shadow-sm border border-gray-100 px-8 py-10">
      {title && (
        <h1 className="text-center text-2xl font-semibold text-gray-900">
          {title}
        </h1>
      )}
      {description && (
        <p className="mt-2 text-center text-sm text-gray-500">{description}</p>
      )}
      <div className="mt-8">{children}</div>
    </div>
  );
};

export default AuthCardLayout;
