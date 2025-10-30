import React, { useState } from "react";
import Stepper from "./Stepper";

function Input({ label, required, ...props }) {
  return (
    <label className="grid gap-2">
      <span className="text-sm font-medium">
        {label} {required && <b className="text-rose-600">*</b>}
      </span>
      <input
        {...props}
        className="h-11 px-3 rounded-md border outline-none focus:ring-2 focus:ring-zinc-900 text-sm transition"
      />
    </label>
  );
}

export default function InfoStep({ value, onChange, onPrev, onSubmit }) {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!value.username || value.username.length < 4)
      e.username = "아이디는 4자 이상";
    if (!value.password || value.password.length < 6)
      e.password = "비밀번호는 6자 이상";
    if (value.password !== value.password2)
      e.password2 = "비밀번호가 일치하지 않습니다";
    if (!value.name) e.name = "이름을 입력하세요";
    if (!value.email || !/^\S+@\S+\.\S+$/.test(value.email))
      e.email = "이메일 형식 오류";
    if (!value.phone || !/^\d{10,11}$/.test(value.phone))
      e.phone = "휴대전화 숫자만 10~11자리";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <Stepper step={2} />

      <div className="grid gap-5">
        <Input
          label="아이디 입력"
          required
          value={value.username || ""}
          onChange={(e) => onChange({ ...value, username: e.target.value })}
          placeholder="예) product1234"
        />
        {errors.username && (
          <p className="text-xs text-rose-600">{errors.username}</p>
        )}

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Input
              label="비밀번호(영문,숫자,특수문자 6~15자)"
              required
              type="password"
              value={value.password || ""}
              onChange={(e) => onChange({ ...value, password: e.target.value })}
              placeholder="••••••"
            />
            {errors.password && (
              <p className="text-xs text-rose-600">{errors.password}</p>
            )}
          </div>
          <div>
            <Input
              label="비밀번호 재입력"
              required
              type="password"
              value={value.password2 || ""}
              onChange={(e) =>
                onChange({ ...value, password2: e.target.value })
              }
              placeholder="••••••"
            />
            {errors.password2 && (
              <p className="text-xs text-rose-600">{errors.password2}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Input
              label="이름 입력"
              required
              value={value.name || ""}
              onChange={(e) => onChange({ ...value, name: e.target.value })}
              placeholder="홍길동"
            />
            {errors.name && (
              <p className="text-xs text-rose-600">{errors.name}</p>
            )}
          </div>
          <div>
            <Input
              label="이메일 입력"
              required
              value={value.email || ""}
              onChange={(e) => onChange({ ...value, email: e.target.value })}
              placeholder="name@example.com"
            />
            {errors.email && (
              <p className="text-xs text-rose-600">{errors.email}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div>
            <Input
              label="휴대전화 입력 (숫자만)"
              required
              value={value.phone || ""}
              onChange={(e) =>
                onChange({ ...value, phone: e.target.value.replace(/\D/g, "") })
              }
              placeholder="01012345678"
            />
            {errors.phone && (
              <p className="text-xs text-rose-600">{errors.phone}</p>
            )}
          </div>
          <div className="grid gap-2">
            <span className="text-sm font-medium">생년월일</span>
            <div className="grid grid-cols-3 gap-3">
              <input
                placeholder="YYYY"
                maxLength={4}
                value={value.birthY || ""}
                onChange={(e) =>
                  onChange({
                    ...value,
                    birthY: e.target.value.replace(/\D/g, ""),
                  })
                }
                className="h-11 px-3 rounded-md border focus:ring-2 focus:ring-zinc-900 text-sm"
              />
              <input
                placeholder="MM"
                maxLength={2}
                value={value.birthM || ""}
                onChange={(e) =>
                  onChange({
                    ...value,
                    birthM: e.target.value.replace(/\D/g, ""),
                  })
                }
                className="h-11 px-3 rounded-md border focus:ring-2 focus:ring-zinc-900 text-sm"
              />
              <input
                placeholder="DD"
                maxLength={2}
                value={value.birthD || ""}
                onChange={(e) =>
                  onChange({
                    ...value,
                    birthD: e.target.value.replace(/\D/g, ""),
                  })
                }
                className="h-11 px-3 rounded-md border focus:ring-2 focus:ring-zinc-900 text-sm"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="size-4"
              checked={value.marketingSms || false}
              onChange={(e) =>
                onChange({ ...value, marketingSms: e.target.checked })
              }
            />
            SMS 수신 동의 (선택)
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="size-4"
              checked={value.marketingEmail || false}
              onChange={(e) =>
                onChange({ ...value, marketingEmail: e.target.checked })
              }
            />
            이메일 수신 동의 (선택)
          </label>
        </div>
      </div>

      <div className="flex justify-between pt-4">
        <button
          type="button"
          onClick={onPrev}
          className="px-6 h-11 rounded-md border text-sm font-semibold hover:bg-zinc-50"
        >
          이전
        </button>
        <button
          type="submit"
          className="px-6 h-11 rounded-md bg-zinc-900 text-white text-sm font-semibold hover:opacity-90"
        >
          회원가입
        </button>
      </div>
    </form>
  );
}
