// src/components/user/mypage/PasswordChangeBox.jsx
import React, { useState } from "react";

export default function PasswordChangeBox() {
  const [pwForm, setPwForm] = useState({
    currentPassword: "",
    newPassword: "",
    newPasswordConfirm: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPwForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!pwForm.currentPassword) {
      alert("현재 비밀번호를 입력하세요.");
      return;
    }
    if (!pwForm.newPassword) {
      alert("새 비밀번호를 입력하세요.");
      return;
    }
    if (pwForm.newPassword !== pwForm.newPasswordConfirm) {
      alert("새 비밀번호가 일치하지 않습니다.");
      return;
    }

    // TODO: axios.post("/api/members/change-password", pwForm, {...})
    console.log("password change payload:", pwForm);
    alert(
      "지금은 스케치 단계입니다. 실제 변경은 백엔드 붙인 후에 동작시켜주세요."
    );
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-1">현재 비밀번호</label>
        <input
          type="password"
          name="currentPassword"
          className="w-full h-10 px-3 border rounded-lg"
          value={pwForm.currentPassword}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">새 비밀번호</label>
        <input
          type="password"
          name="newPassword"
          className="w-full h-10 px-3 border rounded-lg"
          value={pwForm.newPassword}
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">
          새 비밀번호 확인
        </label>
        <input
          type="password"
          name="newPasswordConfirm"
          className="w-full h-10 px-3 border rounded-lg"
          value={pwForm.newPasswordConfirm}
          onChange={handleChange}
        />
      </div>
      <button
        type="submit"
        className="px-5 py-2 bg-zinc-900 text-white rounded-lg text-sm"
      >
        비밀번호 변경
      </button>
    </form>
  );
}
