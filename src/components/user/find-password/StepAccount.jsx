// src/components/member/find-password/StepAccount.jsx
import React from "react";

const StepAccount = ({ userId, setUserId, onNext }) => {
  const handleNext = () => {
    if (!userId) {
      alert("아이디를 입력해주세요.");
      return;
    }
    // TODO: 아이디 존재 여부 확인 API
    onNext();
  };

  return (
    <div className="mt-8 space-y-4">
      <div>
        <label className="text-xs text-gray-500">아이디</label>
        <input
          type="text"
          className="mt-1 w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          placeholder="가입하신 아이디를 입력하세요"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
      </div>
      <button
        onClick={handleNext}
        className="w-full h-11 rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-black transition"
      >
        다음
      </button>
    </div>
  );
};

export default StepAccount;
