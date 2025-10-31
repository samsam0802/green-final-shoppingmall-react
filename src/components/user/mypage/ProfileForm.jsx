// src/components/user/mypage/ProfileForm.jsx
import React, { useState } from "react";

export default function ProfileForm() {
  const [form, setForm] = useState({
    name: "홍길동",
    email: "test@example.com",
    phone: "01012345678",
    birthYmd: "19900101",
    marketingSms: true,
    marketingEmail: false,
    zipCode: "",
    roadAddress: "",
    detailAddress: "",
    currentPassword: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.currentPassword) {
      alert("수정하려면 현재 비밀번호를 입력하세요.");
      return;
    }
    console.log("profile update payload:", form);
    alert("지금은 스케치 단계입니다. 백엔드 붙인 후 실제로 저장하세요 🙂");
  };

  const handleFindAddress = () => {
    alert("여기에 다음/카카오 우편번호 팝업 붙일 예정입니다.");
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* 기본 정보 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">이름</label>
          <input
            name="name"
            className="w-full border border-zinc-200 rounded-lg h-11 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            value={form.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">이메일</label>
          <input
            name="email"
            type="email"
            className="w-full border border-zinc-200 rounded-lg h-11 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">휴대전화번호</label>
          <input
            name="phone"
            maxLength={11}
            className="w-full border border-zinc-200 rounded-lg h-11 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">
            생년월일 (8자리)
          </label>
          <input
            name="birthYmd"
            maxLength={8}
            className="w-full border border-zinc-200 rounded-lg h-11 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            value={form.birthYmd}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* 주소 */}
      <div className="pt-1 border-t border-dashed border-zinc-200"></div>
      <div>
        <p className="text-sm font-semibold mb-3 text-zinc-800">거주지 주소</p>
        <div className="flex flex-col sm:flex-row gap-2 mb-3">
          <input
            name="zipCode"
            placeholder="우편번호"
            className="sm:w-48 border border-zinc-200 rounded-lg h-11 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            value={form.zipCode}
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={handleFindAddress}
            className="inline-flex items-center justify-center px-4 h-11 rounded-lg bg-zinc-900 text-white text-sm hover:bg-zinc-800"
          >
            주소찾기
          </button>
        </div>
        <div className="mb-3">
          <input
            name="roadAddress"
            placeholder="도로명주소"
            className="w-full border border-zinc-200 rounded-lg h-11 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            value={form.roadAddress}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            name="detailAddress"
            placeholder="상세주소"
            className="w-full border border-zinc-200 rounded-lg h-11 px-3 focus:outline-none focus:ring-2 focus:ring-zinc-900/10"
            value={form.detailAddress}
            onChange={handleChange}
          />
        </div>
      </div>

      {/* 마케팅 동의 */}
      <div className="flex flex-wrap gap-6">
        <label className="flex items-center gap-2 text-sm text-zinc-700">
          <input
            type="checkbox"
            name="marketingSms"
            checked={form.marketingSms}
            onChange={handleChange}
            className="w-4 h-4"
          />
          SMS 수신
        </label>
        <label className="flex items-center gap-2 text-sm text-zinc-700">
          <input
            type="checkbox"
            name="marketingEmail"
            checked={form.marketingEmail}
            onChange={handleChange}
            className="w-4 h-4"
          />
          Email 수신
        </label>
      </div>

      {/* 현재 비밀번호 */}
      <div>
        <label className="block text-sm font-medium mb-1">
          현재 비밀번호 <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="currentPassword"
          placeholder="정보를 수정하려면 현재 비밀번호를 입력하세요."
          className="w-full border border-zinc-200 rounded-lg h-11 px-3 focus:outline-none focus:ring-2 focus:ring-red-400/30"
          value={form.currentPassword}
          onChange={handleChange}
        />
        <p className="text-xs text-zinc-400 mt-1">
          서버에서 실제 로그인 비밀번호와 일치하는지 다시 검증해야 합니다.
        </p>
      </div>

      {/* 저장 버튼 */}
      <div className="pt-2">
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-zinc-900 text-white rounded-lg text-sm hover:bg-zinc-800"
        >
          저장
        </button>
      </div>
    </form>
  );
}
