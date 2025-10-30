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
        {steps.map((s) => {
          const active = s.id === step;
          const done = s.id < step;
          return (
            <li
              key={s.id}
              className={`px-6 py-4 flex items-center gap-3 border-r last:border-r-0 ${
                active ? "bg-zinc-100" : "bg-white"
              }`}
            >
              <span
                className={`flex size-8 items-center justify-center rounded-full text-sm font-semibold
                ${
                  done
                    ? "bg-emerald-500 text-white"
                    : active
                    ? "bg-black text-white"
                    : "bg-zinc-200 text-zinc-700"
                }`}
              >
                {s.id}
              </span>
              <div className="leading-tight">
                <p
                  className={`text-xs ${
                    active ? "text-black" : "text-zinc-500"
                  }`}
                >
                  {s.label}
                </p>
                <p
                  className={`text-[12px] ${
                    active ? "text-black" : "text-zinc-500"
                  }`}
                >
                  {s.sub}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
