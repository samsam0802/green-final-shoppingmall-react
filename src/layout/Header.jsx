import React from "react";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="bg-gray-100 text-center text-xs text-gray-700 py-1 border-b border-gray-200">
        [WELCOME] 공지/이벤트(미정)
      </div>

      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        <div />
        <div className="text-center leading-tight">
          <h1 className="text-3xl font-extrabold">
            <span className="text-black">신소라와</span>
            <span className="text-gray-700"> 세남자</span>
          </h1>
          <p className="text-[11px] text-gray-400 mt-0.5">사이트 부제(미정)</p>
        </div>
        <div className="text-sm text-gray-500 space-x-4">
          <button className="cursor-default opacity-60" aria-disabled>
            LOGIN
          </button>
          <button className="cursor-default opacity-60" aria-disabled>
            JOIN
          </button>
        </div>
      </div>
    </header>
  );
}
