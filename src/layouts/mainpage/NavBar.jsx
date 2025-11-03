import React, { useState } from "react";
import CategoryMegaMenu from "../../components/category/CategoryMegaMenu";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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
    <nav className="bg-[#111111]">
      <div className="max-w-7xl mx-auto h-12 flex items-center px-8 gap-8">
        {/* ☰ 카테고리 */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 text-white font-semibold whitespace-nowrap"
        >
          {/* 햄버거 */}
          <span className="flex flex-col gap-[3px]">
            <span className="w-5 h-[2px] bg-white rounded" />
            <span className="w-5 h-[2px] bg-white rounded" />
            <span className="w-5 h-[2px] bg-white rounded" />
          </span>
          <span>카테고리</span>
        </button>

        {/* 메뉴들 */}
        <ul className="flex items-center gap-7 text-[13px]">
          {menus.map((menu, idx) => (
            <li key={idx} className="shrink-0">
              <button
                className="inline-flex items-center gap-1 text-white/85 hover:text-white whitespace-nowrap transition-colors cursor-default"
                aria-disabled
              >
                <span>{menu}</span>
                <span className="text-white/40 text-[12px]">(미정)</span>
              </button>
            </li>
          ))}
        </ul>

        {/* 오른쪽 비워둠 (나중에 아이콘 넣을 자리) */}
        <div className="ml-auto" />
      </div>

      {/* 메가메뉴 */}
      <CategoryMegaMenu isOpen={open} />
    </nav>
  );
}
