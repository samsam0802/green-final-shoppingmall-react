// src/components/member/find-id/FindIdForm.jsx
import React, { useState } from "react";

/**
 * 아이디 찾기 입력 폼
 * - 이름 (한글만)
 * - 휴대폰 (숫자만, 11자리)
 * - 생년월일 (숫자만, 8자리)
 * - (인증번호 발송 후) 인증번호
 */
const FindIdForm = ({ onSuccess }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");
  const [code, setCode] = useState("");
  const [sent, setSent] = useState(false);

  // 이름: 한글만
  const handleNameChange = (e) => {
    const { value } = e.target;

    if (value === "") {
      setName("");
      return;
    }

    // ㄱ-ㅎ, ㅏ-ㅣ, 가-힣 까지만 허용 (기본적인 한글 범위)
    const koreanRegex = /^[가-힣ㄱ-ㅎㅏ-ㅣ\s]+$/;
    if (!koreanRegex.test(value)) {
      alert("이름은 한글만 입력할 수 있습니다.");
      return;
    }

    setName(value);
  };

  // 휴대폰: 숫자만, 11자리
  const handlePhoneChange = (e) => {
    const { value } = e.target;

    if (value === "") {
      setPhone("");
      return;
    }

    if (!/^\d+$/.test(value)) {
      alert("휴대폰 번호는 숫자만 입력할 수 있습니다.");
      return;
    }

    if (value.length > 11) {
      alert("휴대폰 번호는 11자리까지만 입력 가능합니다.");
      return;
    }

    setPhone(value);
  };

  // 생년월일: 숫자만, 8자리
  const handleBirthChange = (e) => {
    const { value } = e.target;

    if (value === "") {
      setBirth("");
      return;
    }

    if (!/^\d+$/.test(value)) {
      alert("생년월일은 숫자만 입력할 수 있습니다.");
      return;
    }

    if (value.length > 8) {
      alert("생년월일은 8자리(YYYYMMDD)로 입력해주세요.");
      return;
    }

    setBirth(value);
  };

  const handleSendCode = () => {
    if (!name || !phone || !birth) {
      alert("이름, 휴대폰, 생년월일을 모두 입력해주세요.");
      return;
    }

    if (phone.length !== 11) {
      alert("휴대폰 번호는 11자리로 입력해주세요. 예) 01012345678");
      return;
    }

    if (birth.length !== 8) {
      alert("생년월일은 8자리(YYYYMMDD)로 입력해주세요.");
      return;
    }

    // TODO: 인증번호 발송 API 호출
    console.log("인증번호 발송:", { name, phone, birth });
    setSent(true);
  };

  const handleSubmit = () => {
    if (!code) {
      alert("인증번호를 입력해주세요.");
      return;
    }
    // TODO: 인증번호 검증 + 아이디 조회 API
    onSuccess && onSuccess("green***@gmail.com");
  };

  return (
    <div className="space-y-4">
      {/* 이름 */}
      <div>
        <label className="text-xs text-gray-500">이름</label>
        <input
          type="text"
          className="mt-1 w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          placeholder="홍길동"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      {/* 휴대폰 */}
      <div>
        <label className="text-xs text-gray-500">휴대폰번호 (숫자만)</label>
        <div className="flex gap-2">
          <input
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength={11}
            className="flex-1 mt-1 h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            placeholder="01012345678"
            value={phone}
            onChange={handlePhoneChange}
          />
          <button
            type="button"
            onClick={handleSendCode}
            className="mt-1 h-10 px-3 text-xs font-semibold rounded-md bg-gray-900 text-white hover:bg-black"
          >
            인증번호 발송
          </button>
        </div>
      </div>

      {/* 생년월일 */}
      <div>
        <label className="text-xs text-gray-500">생년월일 (YYYYMMDD)</label>
        <input
          type="text"
          inputMode="numeric"
          pattern="\d*"
          maxLength={8}
          className="mt-1 w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
          placeholder="19991225"
          value={birth}
          onChange={handleBirthChange}
        />
      </div>

      {/* 인증번호 */}
      {sent && (
        <div>
          <label className="text-xs text-gray-500">인증번호</label>
          <input
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength={6}
            className="mt-1 w-full h-10 px-3 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-gray-900/10"
            placeholder="6자리 인증번호"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
      )}

      <button
        onClick={handleSubmit}
        className="mt-2 w-full h-11 rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-black transition"
      >
        아이디 찾기
      </button>

      <p className="text-[11px] text-gray-400 leading-relaxed">
        * 입력하신 정보는 아이디 찾기 용도로만 사용됩니다.
      </p>
    </div>
  );
};

export default FindIdForm;
