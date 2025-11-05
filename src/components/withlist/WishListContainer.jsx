// src/components/user/mypage/wishlist/WishListContainer.jsx
import React, { useMemo, useState } from "react";
import WishListToolbar from "./WishListToolbar";
import WishListGrid from "./WishListGrid";
import WishListEmpty from "./WishListEmpty";

/** 뼈대 컨테이너: 상태/행동 담당 */
export default function WishListContainer() {
  // TODO: 서버 연동 후 교체
  const [items, setItems] = useState([
    {
      id: 1,
      name: "밀잇",
      subtitle: "밀잇 식단관리 단백질쉐이크 40g 7종 택1",
      seller: "판매자",
      originalPrice: 5900,
      price: 3900,
      thumb: "", // 이미지 있으면 URL
    },
    {
      id: 2,
      name: "메디힐",
      subtitle:
        "[매] 메디힐 램핑 세럼 마스크 6종 택1 (마데카소사이드, PDRN, 콜라겐, 비타민C, 히알루론산, 티트)",
      seller: "판매자",
      originalPrice: 3000,
      price: 1440,
      thumb: "",
    },
    {
      id: 3,
      name: "보다나",
      subtitle: "[브러쉬 무선 고데기] 보다나 이지업 헤어 스타일러 파우더핑크",
      seller: "판매자",
      originalPrice: 109000,
      price: 89900,
      thumb: "",
    },
  ]);
  const [selected, setSelected] = useState(new Set());

  const allChecked = useMemo(
    () => items.length > 0 && selected.size === items.length,
    [items, selected]
  );

  const toggleAll = () => {
    setSelected(allChecked ? new Set() : new Set(items.map((i) => i.id)));
  };
  const toggleOne = (id) => {
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });
  };

  const removeSelected = () => {
    if (selected.size === 0) return;
    // TODO: 선택삭제 API 호출 후 성공 시 상태 반영
    setItems((prev) => prev.filter((it) => !selected.has(it.id)));
    setSelected(new Set());
  };

  const removeOne = (id) => {
    // TODO: 단건 삭제 API
    setItems((prev) => prev.filter((it) => it.id !== id));
    setSelected((prev) => {
      const next = new Set(prev);
      next.delete(id);
      return next;
    });
  };

  if (items.length === 0) return <WishListEmpty />;

  return (
    <div className="space-y-4">
      <WishListToolbar
        allChecked={allChecked}
        selectedCount={selected.size}
        totalCount={items.length}
        onToggleAll={toggleAll}
        onRemoveSelected={removeSelected}
      />
      <WishListGrid
        items={items}
        selected={selected}
        onToggleOne={toggleOne}
        onRemoveOne={removeOne}
      />

      <div className="mt-6 flex justify-center gap-2 text-sm">
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 cursor-not-allowed"
          disabled
        >
          «
        </button>
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 cursor-not-allowed"
          disabled
        >
          ‹
        </button>

        <button className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white">
          1
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          2
        </button>
        <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100">
          3
        </button>

        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
        >
          ›
        </button>
        <button
          type="button"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
        >
          »
        </button>
      </div>
    </div>
  );
}
