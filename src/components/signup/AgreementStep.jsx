import React from "react";
import Stepper from "./Stepper";

export default function AgreementStep({ value, onChange, onNext }) {
  const allChecked = value.tos && value.privacy && value.age14;
  const toggleAll = (e) => {
    const v = e.target.checked;
    onChange({ ...value, tos: v, privacy: v, age14: v, sms: v, email: v });
  };

  return (
    <div className="space-y-6">
      <Stepper step={1} />

      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            id="all"
            type="checkbox"
            className="size-4"
            checked={allChecked && value.sms && value.email}
            onChange={toggleAll}
          />
          <span className="text-sm font-semibold">내용 확인 및 전체 동의</span>
        </label>

        <section className="border rounded-lg overflow-hidden">
          <header className="px-4 py-2 bg-zinc-50 text-sm font-semibold border-b">
            회원가입 약관
          </header>
          <textarea
            readOnly
            className="w-full h-40 p-4 text-sm text-zinc-700 outline-none"
            value={`제1조(목적) ... 샘플 내용\n\n제2조(약관의 효력 및 변경) ...`}
          />
          <div className="px-4 py-3 border-t flex items-center gap-2 text-sm">
            <input
              id="tos"
              type="checkbox"
              className="size-4"
              checked={value.tos}
              onChange={(e) => onChange({ ...value, tos: e.target.checked })}
            />
            <label htmlFor="tos">구매 이용 약관에 동의합니다. (필수)</label>
          </div>
        </section>

        <section className="border rounded-lg overflow-hidden">
          <header className="px-4 py-2 bg-zinc-50 text-sm font-semibold border-b">
            개인정보 처리방침
          </header>
          <textarea
            readOnly
            className="w-full h-40 p-4 text-sm text-zinc-700 outline-none"
            value={`1. 수집 및 이용 목적 ... 샘플 내용`}
          />
          <div className="px-4 py-3 border-t flex items-center gap-2 text-sm">
            <input
              id="privacy"
              type="checkbox"
              className="size-4"
              checked={value.privacy}
              onChange={(e) =>
                onChange({ ...value, privacy: e.target.checked })
              }
            />
            <label htmlFor="privacy">
              개인정보 수집/이용에 동의합니다. (필수)
            </label>
          </div>
        </section>

        <div className="grid gap-3">
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="size-4"
              checked={value.age14}
              onChange={(e) => onChange({ ...value, age14: e.target.checked })}
            />
            만 14세 이상입니다. (필수)
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="size-4"
              checked={value.sms}
              onChange={(e) => onChange({ ...value, sms: e.target.checked })}
            />
            SMS 수신 동의 (선택)
          </label>
          <label className="inline-flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              className="size-4"
              checked={value.email}
              onChange={(e) => onChange({ ...value, email: e.target.checked })}
            />
            이메일 수신 동의 (선택)
          </label>
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <button
          disabled={!allChecked}
          onClick={onNext}
          className={`px-6 h-11 rounded-md text-white text-sm font-semibold transition
            ${
              allChecked
                ? "bg-zinc-900 hover:opacity-90"
                : "bg-zinc-300 cursor-not-allowed"
            }`}
        >
          다음
        </button>
      </div>
    </div>
  );
}
