import React from "react";
import Stepper from "./Stepper";

const TOS_CONTENT = `
제1조(목적) 본 약관은 [회사명]이 제공하는 모든 서비스 이용에 관한 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
제2조(약관의 효력 및 변경) 본 약관은 서비스를 이용하고자 하는 모든 이용자에 대하여 그 효력을 발생하며, 회사는 법률에 위배되지 않는 범위 내에서 본 약관을 개정할 수 있습니다.
제3조(이용계약의 성립) 이용계약은 이용자가 약관 내용에 동의하고, 회사가 정한 소정의 절차에 따라 신청을 승낙함으로써 성립합니다.
`;

const PRIVACY_CONTENT = `
1. 수집 및 이용 목적: 회원 가입 및 관리, 서비스 제공에 따른 본인 식별 및 분쟁 조정을 위한 기록 보존.
2. 수집하는 개인정보 항목: 로그인 ID, 비밀번호, 이름, 이메일 주소, 전화번호, 생년월일.
3. 보유 및 이용 기간: 회원 탈퇴 시 또는 법정 의무 기간(통신비밀보호법 등)에 따라 보관 후 파기.
4. 동의 거부권 및 불이익: 귀하는 개인정보 수집 및 이용에 동의를 거부할 권리가 있으나, 필수 항목 미동의 시 회원가입 및 서비스 이용에 제한이 있을 수 있습니다.
`;

export default function AgreementStep({ terms, onChange, onNext }) {
  const allChecked = terms.tos && terms.privacy && terms.age14;
  const toggleAll = (e) => {
    const v = e.target.checked;
    onChange({ ...terms, tos: v, privacy: v, age14: v });
  };

  return (
    <div className="space-y-6">
      <Stepper step={1} />
      <div className="space-y-4">
        <label className="flex items-center gap-2">
          <input
            id="all"
            type="checkbox"
            className="size-4 accent-emerald-500" // 📌 에메랄드 토글 적용
            checked={allChecked}
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
            value={TOS_CONTENT}
          />
          <div className="px-4 py-3 border-t flex items-center gap-2 text-sm">
            <input
              id="tos"
              type="checkbox"
              className="size-4 accent-emerald-500" // 📌 에메랄드 토글 적용
              checked={terms.tos}
              onChange={(e) => onChange({ ...terms, tos: e.target.checked })}
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
            value={PRIVACY_CONTENT}
          />
          <div className="px-4 py-3 border-t flex items-center gap-2 text-sm">
            <input
              id="privacy"
              type="checkbox"
              className="size-4 accent-emerald-500" // 📌 에메랄드 토글 적용
              checked={terms.privacy}
              onChange={(e) =>
                onChange({ ...terms, privacy: e.target.checked })
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
              className="size-4 accent-emerald-500" // 📌 에메랄드 토글 적용
              checked={terms.age14}
              onChange={(e) => onChange({ ...terms, age14: e.target.checked })}
            />
            만 14세 이상입니다. (필수)
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
          ? "bg-emerald-600 hover:bg-emerald-700" // 📌 에메랄드 적용
          : "bg-emerald-300 cursor-not-allowed" // 📌 에메랄드 비활성화 적용
      }`}
        >
          다음
        </button>
      </div>
    </div>
  );
}
