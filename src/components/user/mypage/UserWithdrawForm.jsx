import React, { useState } from "react";

export default function UserWithdrawForm() {
  const [form, setForm] = useState({
    reason: "서비스가 마음에 들지 않음",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: 실제 탈퇴 API 자리
    console.log("withdraw", form);
    alert("지금은 스케치 단계입니다. 실제 탈퇴는 백엔드 붙이고 진행하세요.");
  };

  return (
    <form className="space-y-4 max-w-lg" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-1">
          탈퇴 사유를 선택해주세요
        </label>
        <select
          name="reason"
          className="w-full border rounded-lg h-10 px-3"
          value={form.reason}
          onChange={handleChange}
        >
          <option value="서비스가 마음에 들지 않음">
            서비스가 마음에 들지 않음
          </option>
          <option value="원하는 상품이 없음">원하는 상품이 없음</option>
          <option value="다른 계정 사용 중">다른 계정 사용 중</option>
          <option value="기타">기타</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          비밀번호 확인 (예정)
        </label>
        <input
          type="password"
          name="password"
          className="w-full border rounded-lg h-10 px-3"
          value={form.password}
          onChange={handleChange}
          placeholder="******"
        />
      </div>
      <button
        type="submit"
        className="px-5 py-2 rounded-lg bg-red-500 text-white text-sm"
      >
        탈퇴하기
      </button>
    </form>
  );
}
