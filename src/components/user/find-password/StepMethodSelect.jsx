// src/components/member/find-password/StepMethodSelect.jsx
import React, { useState } from "react";

const StepMethodSelect = ({ method, setMethod, userId, onNext }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // 휴대폰 입력 핸들러
  const handlePhoneChange = (e) => {
    const { value } = e.target;

    // 1) 빈값은 그냥 허용
    if (value === "") {
      setPhone("");
      return;
    }

    // 2) 숫자만 허용
    if (!/^\d+$/.test(value)) {
      alert("숫자만 입력하세요.");
      return; // setState 안 함 → 이전 값 유지
    }

    // 3) 11자리 제한
    if (value.length > 11) {
      alert("휴대폰 번호는 11자리까지만 입력 가능합니다.");
      return;
    }

    setPhone(value);
  };

  const handleSend = () => {
    if (method === "email") {
      if (!email) {
        alert("인증을 받을 이메일을 입력해주세요.");
        return;
      }
      // TODO: 이메일 인증번호 발송 API
      console.log("인증번호 발송:", {
        userId,
        method: "email",
        email,
      });
    } else {
      if (!phone) {
        alert("휴대폰 번호를 입력해주세요.");
        return;
      }
      if (phone.length !== 11) {
        alert("휴대폰 번호는 11자리로 입력해주세요. 예) 01012345678");
        return;
      }
      // TODO: 휴대폰 인증번호 발송 API
      console.log("인증번호 발송:", {
        userId,
        method: "sms",
        phone,
      });
    }

    onNext();
  };

  return (
    <div className="mt-8 space-y-4">
      <p className="text-sm text-gray-500">
        비밀번호를 재설정할 방법을 선택하세요.
      </p>

      {/* 인증 방식 선택 */}
      <div className="flex gap-3">
        <button
          type="button"
          onClick={() => setMethod("email")}
          className={`cursor-pointer flex-1 h-10 rounded-md border text-sm transition ${
            method === "email"
              ? "border-gray-900 text-gray-900 bg-gray-50"
              : "border-gray-200 text-gray-400"
          }`}
        >
          이메일 인증
        </button>
        <button
          type="button"
          onClick={() => setMethod("sms")}
          className={`cursor-pointer flex-1 h-10 rounded-md border text-sm transition ${
            method === "sms"
              ? "border-gray-900 text-gray-900 bg-gray-50"
              : "border-gray-200 text-gray-400"
          }`}
        >
          휴대폰 인증
        </button>
      </div>

      {/* 선택된 방식에 따라 인풋 바뀜 */}
      {method === "email" ? (
        <div className="space-y-1">
          <label className="text-xs text-gray-500">인증받을 이메일</label>
          <input
            type="email"
            className="w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            placeholder="example@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <p className="text-[11px] text-gray-400">
            가입 시 등록한 이메일과 다르더라도 인증만 되면 사용할 수 있습니다.
          </p>
        </div>
      ) : (
        <div className="space-y-1">
          <label className="text-xs text-gray-500">휴대폰 번호</label>
          <input
            type="text"
            inputMode="numeric" // 모바일 키패드 숫자
            pattern="\d*" // 일부 브라우저용 힌트
            maxLength={11} // UI 차원에서도 11자리 제한
            className="w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            placeholder="01012345678"
            value={phone}
            onChange={handlePhoneChange}
          />
          <p className="text-[11px] text-gray-400">
            숫자만 입력해주세요. 하이픈(-) 없이 11자리입니다.
          </p>
        </div>
      )}

      <button
        onClick={handleSend}
        className="w-full h-11 cursor-pointer rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-black transition"
      >
        인증번호 발송
      </button>
    </div>
  );
};

export default StepMethodSelect;
