// src/components/user/mypage/wishlist/WishListGrid.jsx
import React from "react";
import WishListRow from "./WishListRow";

/**
 * 표 형태 그리드
 * - 헤더: 상품 | 가격 | 관리 (md 이상에서 표시)
 * - 행: 체크박스 / 썸네일+정보 / 현재가 / 삭제버튼
 */
export default function WishListGrid({
  items,
  selected,
  onToggleOne,
  onRemoveOne,
}) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white overflow-hidden">
      {/* 헤더 (md 이상) */}
      <div
        className="hidden md:grid grid-cols-[48px_minmax(0,1fr)_140px_110px] items-center px-4 py-3
                text-[13px] text-zinc-600 border-y border-zinc-200 bg-zinc-50/60"
      >
        <div />
        <div className="font-medium">상품</div>
        <div className="font-medium text-right pr-4">가격</div>
        <div className="font-medium text-center">관리</div>
      </div>

      {/* 바디 */}
      <ul className="divide-y divide-zinc-200">
        {items.map((item) => (
          <li key={item.id}>
            <WishListRow
              checked={selected.has(item.id)}
              onCheck={() => onToggleOne(item.id)}
              onRemove={() => onRemoveOne(item.id)}
              item={item}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
