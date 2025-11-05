// src/components/user/mypage/wishlist/WishListToolbar.jsx
import React from "react";

export default function WishListToolbar({
  allChecked,
  selectedCount,
  totalCount,
  onToggleAll,
  onRemoveSelected,
}) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={onToggleAll}
        className="text-xs rounded-full border px-3 py-1 bg-white hover:bg-zinc-50"
      >
        상품 전체선택{allChecked ? " 해제" : ""}
      </button>
      <button
        type="button"
        onClick={onRemoveSelected}
        className="text-xs rounded-full border px-3 py-1 bg-white hover:bg-zinc-50"
      >
        선택상품 삭제
      </button>
      <span className="ml-auto text-xs text-zinc-500">
        선택 {selectedCount} / {totalCount}
      </span>
    </div>
  );
}
