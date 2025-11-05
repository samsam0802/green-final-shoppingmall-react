// src/components/user/mypage/wishlist/WishListRow.jsx
import React from "react";

/**
 * item 필드 예시:
 * { id, name, subtitle, seller, price, originalPrice, thumb }
 * - originalPrice 없으면 회색 취소선 가격은 숨김
 * - subtitle 없으면 한 줄만 노출
 */
export default function WishListRow({ checked, onCheck, onRemove, item }) {
  const { name, subtitle, seller, price, originalPrice, thumb } = item;

  return (
    <div className="grid grid-cols-1 md:grid-cols-[48px_minmax(0,1fr)_140px_110px] items-center">
      {/* 체크박스 (md 이상 표 헤더 정렬) */}
      <div className="hidden md:flex items-center justify-center">
        <input
          type="checkbox"
          className="size-4"
          checked={checked}
          onChange={onCheck}
        />
      </div>

      {/* 상품영역 */}
      <div className="px-4 py-5 flex items-start gap-3">
        {/* 모바일 체크박스 */}
        <input
          type="checkbox"
          className="size-4 md:hidden mt-1"
          checked={checked}
          onChange={onCheck}
        />

        {/* 썸네일 자리 */}
        <div className="w-20 h-20 rounded-lg bg-zinc-200 shrink-0 overflow-hidden">
          {thumb ? (
            <img src={thumb} alt="" className="w-full h-full object-cover" />
          ) : null}
        </div>

        <div className="min-w-0">
          {/* 브랜드/상품명 */}
          <div className="text-sm font-semibold text-zinc-900 truncate">
            {name}
          </div>
          {/* 설명(서브텍스트) */}
          {subtitle ? (
            <div className="mt-1 text-sm text-zinc-600 break-keep">
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>

      {/* 가격 */}
      <div className="px-4 md:text-right md:pr-4 -mt-2 md:mt-0 pb-4 md:pb-0">
        {originalPrice ? (
          <div className="text-sm text-zinc-400 line-through tabular-nums">
            ₩{num(originalPrice)}
          </div>
        ) : null}
        <div className="text-[15px] md:text-base font-bold text-red-500 tabular-nums">
          ₩{num(price)}{" "}
          <span className="text-zinc-400 font-normal align-baseline">~</span>
        </div>
      </div>

      {/* 관리(삭제) */}
      <div className="px-4 pb-4 md:pb-0 flex md:block justify-end">
        <button
          type="button"
          onClick={onRemove}
          className="inline-flex items-center justify-center rounded-md border border-zinc-300 px-4 h-9 text-sm hover:bg-zinc-50"
        >
          삭제
        </button>
      </div>
    </div>
  );
}

function num(n) {
  try {
    return Number(n ?? 0).toLocaleString();
  } catch {
    return "0";
  }
}
