import React from "react";

export default function Stepper({ step }) {
  const steps = [
    { id: 1, label: "STEP 01", sub: "약관동의/본인인증" },
    { id: 2, label: "STEP 02", sub: "회원정보입력" },
    { id: 3, label: "STEP 03", sub: "가입완료" },
  ];
  return (
    <div className="w-full bg-white border rounded-xl overflow-hidden">
      <ol className="grid grid-cols-3">
        {steps.map((stepItem) => {
          const active = stepItem.id === step;
          const done = stepItem.id < step;
          return (
            <li
              key={stepItem.id}
              className={`px-6 py-4 flex items-center gap-3 border-r last:border-r-0 ${
                active ? "bg-emerald-50" : "bg-white" // 📌 활성 스텝 배경색 변경
              }`}
            >
              <span
                className={`flex size-8 items-center justify-center rounded-full text-sm font-semibold
        ${
          done
            ? "bg-emerald-600 text-white" // 📌 완료된 스텝 에메랄드 적용
            : active
            ? "bg-emerald-500 text-white" // 📌 활성 스텝 에메랄드 적용
            : "bg-zinc-200 text-zinc-700"
        }`}
              >
                {stepItem.id}
              </span>
              <div className="leading-tight">
                <p
                  className={`text-xs ${
                    active ? "text-emerald-600 font-bold" : "text-zinc-500" // 📌 활성 스텝 텍스트 색상 변경
                  }`}
                >
                  {stepItem.label}
                </p>
                <p
                  className={`text-[12px] ${
                    active ? "text-emerald-700" : "text-zinc-500" // 📌 활성 스텝 텍스트 색상 변경
                  }`}
                >
                  {stepItem.sub}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
