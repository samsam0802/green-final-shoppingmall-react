// src/components/user/mypage/wishlist/WishListCard.jsx
import React from "react";

export default function WishListCard({ checked, onCheck, onRemove, item }) {
  const { name, seller, price } = item;
  return (
    <div className="flex items-center gap-3 border border-zinc-100 rounded-2xl bg-white p-4">
      <input
        type="checkbox"
        className="size-4"
        checked={checked}
        onChange={onCheck}
      />
      <div className="w-14 h-14 rounded-lg bg-zinc-200 shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="text-sm font-medium truncate">{name}</div>
        <div className="text-xs text-zinc-500 mt-1 truncate">{seller}</div>
        <div className="text-xs text-zinc-500">종료 시간 24 : 00 : 00</div>
        <div className="text-xs text-zinc-700 mt-1 tabular-nums">
          ₩{num(price)}
        </div>
      </div>
      {/* 우측 요약(자리표시용) */}
      <div className="hidden sm:flex flex-col items-end gap-1 mr-2">
        <Row label="최저가" value={`₩${num(price)}`} />
        <Row label="입찰가" value={"000,000원"} />
        <Row label="최고가" value={"000,000원"} />
      </div>
      <button
        type="button"
        className="text-xs text-zinc-400 hover:text-red-500"
        onClick={onRemove}
        aria-label="remove"
        title="삭제"
      >
        ×
      </button>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="text-[11px] text-zinc-500 flex items-center gap-2">
      <span>{label}</span>
      <span className="tabular-nums font-medium text-zinc-700">{value}</span>
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
