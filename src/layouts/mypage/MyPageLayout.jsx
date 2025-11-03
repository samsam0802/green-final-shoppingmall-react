// src/layouts/mypage/MyPageLayout.jsx
import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const menuGroups = [
  {
    title: "쇼핑정보",
    items: [
      { to: "/mypage/orders", label: "주문내역" },
      { to: "/mypage/wish", label: "찜목록" },
    ],
  },
  {
    title: "혜택관리",
    items: [
      { to: "/mypage/coupons", label: "쿠폰함" },
      // { to: "/mypage/points", label: "적립금" },
    ],
  },
  {
    title: "회원정보",
    items: [
      { to: "/mypage/profile", label: "개인정보수정" },
      { to: "/mypage/password", label: "비밀번호 변경" },
      { to: "/mypage/withdraw", label: "회원탈퇴", danger: true },
    ],
  },
  {
    title: "나의 게시글",
    items: [
      { to: "/mypage/inquiries", label: "1:1 문의내역" },
      { to: "/mypage/productqna", label: "상품 문의내역" },
      { to: "/mypage/reviews", label: "나의 리뷰내역" },
      { to: "/helpcenter", label: "고객 센터" },
    ],
  },
];

export default function MyPageLayout() {
  return (
    <div className="min-h-screen bg-[#f4f5f7]">
      {/* 전체 컨테이너 */}
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8 flex flex-col gap-6 lg:flex-row">
        {/* ================= 모바일 / 태블릿 탭 ================= */}
        <div className="lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {menuGroups.flatMap((group) =>
              group.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `whitespace-nowrap px-4 py-2 rounded-full text-sm border ${
                      isActive
                        ? item.danger
                          ? "bg-red-500 text-white border-red-500"
                          : "bg-slate-900 text-white border-slate-900"
                        : "bg-white text-slate-700 hover:bg-slate-50"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))
            )}
          </div>
        </div>

        <aside className="hidden lg:block w-64 shrink-0">
          <div className="bg-slate-900 rounded-2xl shadow-sm overflow-hidden text-slate-100">
            <div className="px-6 py-5 border-b border-slate-800">
              <p className="text-xs uppercase tracking-wide text-slate-400 mb-1">
                MY PAGE
              </p>
              <h2 className="text-lg font-bold">홍길동 님</h2>
              <p className="text-xs text-slate-400 mt-2">
                기본등급 · 최근 주문 1건
              </p>
            </div>

            {/* 섹션들 */}
            <nav className="py-3 text-sm">
              {menuGroups.map((group) => (
                <div key={group.title} className="mb-3">
                  <p className="px-6 py-2 text-[0.7rem] tracking-wide uppercase text-slate-400/80">
                    {group.title}
                  </p>
                  <div className="flex flex-col">
                    {group.items.map((item) => (
                      <NavLink
                        key={item.to}
                        to={item.to}
                        className={({ isActive }) =>
                          `px-6 py-2 flex items-center justify-between transition ${
                            isActive
                              ? item.danger
                                ? "bg-red-500 text-white"
                                : "bg-slate-100 text-slate-900"
                              : "text-slate-100/80 hover:bg-slate-800"
                          }`
                        }
                      >
                        {({ isActive }) => (
                          <>
                            <span
                              className={`${
                                item.danger && !isActive ? "text-red-300" : ""
                              }`}
                            >
                              {item.label}
                            </span>
                            {isActive ? (
                              <span
                                className={`text-xs ${
                                  item.danger
                                    ? "text-white/70"
                                    : "text-slate-500"
                                }`}
                              >
                                ●
                              </span>
                            ) : null}
                          </>
                        )}
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </nav>
          </div>
        </aside>

        <main className="flex-1">
          {/* 검은 박스처럼 보이는 상단 요약 영역 - 페이지 공통 */}
          <div className="hidden lg:flex gap-4 mb-6">
            <div className="flex-1 bg-slate-900 rounded-2xl px-6 py-5 text-white flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-200/80 mb-1">
                  홍길동 님은 <b>기본등급</b>입니다.
                </p>
                <p className="text-xs text-slate-300">
                  구매금액 0원 · 쿠폰 2개 · 위시리스트 3건
                </p>
              </div>
              <div className="flex gap-3 text-xs">
                <button className="px-3 py-1 rounded-full bg-white/10 hover:bg-white/20">
                  등급혜택 안내
                </button>
                <button className="px-3 py-1 rounded-full bg-white text-slate-900">
                  회원정보 수정
                </button>
              </div>
            </div>
          </div>

          <div className="lg:max-w-4xl">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
}
