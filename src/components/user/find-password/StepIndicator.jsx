// src/components/member/find-password/StepIndicator.jsx
import React from "react";

const StepIndicator = ({ step }) => {
  return (
    <div className="mt-6 flex justify-between text-xs text-gray-400">
      <span className={step >= 1 ? "text-gray-900" : ""}>1. 아이디 입력</span>
      <span className={step >= 2 ? "text-gray-900" : ""}>2. 인증 수단</span>
      <span className={step >= 3 ? "text-gray-900" : ""}>3. 인증 번호</span>
      <span className={step >= 4 ? "text-gray-900" : ""}>4. 새 비밀번호</span>
    </div>
  );
};

export default StepIndicator;
