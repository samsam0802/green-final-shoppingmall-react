// src/components/member/find-password/StepVerifyCode.jsx
import React from "react";

const StepVerifyCode = ({ method, code, setCode, onNext }) => {
  // 인풋에서 바로 거르기
  const handleCodeChange = (e) => {
    const { value } = e.target;

    // 빈값은 허용
    if (value === "") {
      setCode("");
      return;
    }

    // 숫자만
    if (!/^\d+$/.test(value)) {
      alert("인증번호는 숫자만 입력할 수 있습니다.");
      return;
    }

    // 6자리 제한
    if (value.length > 6) {
      alert("인증번호는 6자리입니다.");
      return;
    }

    setCode(value);
  };

  const handleNext = () => {
    if (!code) {
      alert("인증번호를 입력해주세요.");
      return;
    }
    if (code.length !== 6) {
      alert("인증번호 6자리를 모두 입력해주세요.");
      return;
    }
    // TODO: 인증번호 검증 API
    onNext();
  };

  return (
    <div className="mt-8 space-y-4">
      <p className="text-sm text-gray-500">
        {method === "email"
          ? "등록된 이메일로 인증번호를 전송했습니다."
          : "등록된 휴대폰번호로 인증번호를 전송했습니다."}
      </p>
      <div>
        <label className="text-xs text-gray-500">인증번호</label>
        <input
          type="text"
          inputMode="numeric" // 모바일에서 숫자 키패드
          pattern="\d*" // 브라우저 힌트
          maxLength={6} // UI 레벨 제한
          className="mt-1 w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          placeholder="6자리 인증번호"
          value={code}
          onChange={handleCodeChange}
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

export default StepVerifyCode;
