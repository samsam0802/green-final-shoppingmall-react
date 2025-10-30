import React from "react";

export default function NavBar() {
  const menus = [
    "TitleName",
    "TitleName",
    "TitleName",
    "TitleName",
    "TitleName",
    "TitleName",
    "TitleName",
    "TitleName",
    "TitleName",
  ];

  return (
    <nav className="bg-white border-b shadow-[0_1px_0_0_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-14 px-8">
        <ul className="flex-1 flex justify-center items-center gap-9 text-[13px] font-semibold text-gray-800">
          {menus.map((menu, idx) => (
            <li key={idx}>
              <button
                className="cursor-default hover:text-blue-600 hover:underline underline-offset-8 decoration-2 transition-colors"
                aria-disabled
              >
                {menu} <span className="text-gray-400">(미정)</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5 text-gray-700">
          <span className="opacity-70">🔍</span>
          <span className="opacity-70">👕</span>
          <div className="relative opacity-70">
            <span>👜</span>
            <span className="absolute -top-1.5 -right-2 text-[10px] bg-black text-white rounded-full w-4 h-4 flex items-center justify-center">
              0
            </span>
          </div>
          <span className="opacity-70">👤</span>
          <span className="opacity-70">💬</span>
        </div>
      </div>
    </nav>
  );
}
