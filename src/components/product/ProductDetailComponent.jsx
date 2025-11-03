import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../../data/products";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import ProductDetailBuy from "./detail/ProductDetailBuy";
import ProductDetailReview from "./detail/ProductDetailReview";
import ProductDetailQnA from "./detail/ProductDetailQnA";
import ProductDetailInfo from "./detail/ProductDetailInfo";
import RestockAlertModal from "./RestockAlertModal";

export default function ProductDetailComponent() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [openOptionList, setOpenOptionList] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [openRestockModal, setOpenRestockModal] = useState(false);

  // ✅ 탭 상태
  const [tab, setTab] = useState("info"); // info | buy | review | qna

  const options = product.options || [];

  const handleSelectOption = (op) => {
    setSelectedOption(op.label);
    setOpenOptionList(false);

    const exists = selectedItems.find((item) => item.label === op.label);
    if (exists) {
      setSelectedItems((prev) =>
        prev.map((i) => (i.label === op.label ? { ...i, qty: i.qty + 1 } : i))
      );
    } else {
      setSelectedItems((prev) => [
        ...prev,
        {
          id: op.id,
          label: op.label,
          qty: 1,
          price: op.price,
        },
      ]);
    }
  };

  const changeQty = (label, delta) => {
    setSelectedItems((prev) =>
      prev
        .map((i) =>
          i.label === label ? { ...i, qty: Math.max(1, i.qty + delta) } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  const totalPrice = selectedItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const handleClickOrder = () => {
    if (selectedItems.length === 0) return alert("옵션을 선택해주세요.");

    navigate("/order", {
      state: {
        items: selectedItems.map((i) => ({
          id: product.id,
          name: product.name + " - " + i.label,
          brand: product.brand,
          originalPrice: product.originalPrice,
          salePrice: i.price,
          qty: i.qty,
          image: product.image,
        })),
      },
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-8 mt-12 pb-32 text-[#111111]">
      {/* 경로 */}
      <div className="text-sm text-gray-500 mb-6 flex gap-2">
        <Link to="/" className="hover:underline">
          홈
        </Link>{" "}
        /<span>{product.categoryMain}</span> /<span>{product.categorySub}</span>
      </div>

      {/* 상품 상단영역 */}
      <div className="grid grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src={product.image}
            className="w-full h-[480px] object-cover rounded-lg border"
          />
        </div>

        <div className="space-y-5">
          <div className="text-sm text-gray-500">{product.brand}</div>
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <div>
            <p className="line-through text-gray-400">
              {product.originalPrice.toLocaleString()}원
            </p>
            <p className="text-3xl font-bold text-[#111111]">
              {product.discountPrice.toLocaleString()}원
              <span className="text-[#ff5c00] text-lg ml-2">
                {product.discountRate}%↓
              </span>
            </p>
          </div>

          {/* 옵션 선택 */}
          <div className="border rounded-md">
            <button
              onClick={() => setOpenOptionList(!openOptionList)}
              className="w-full text-left px-4 py-3 flex justify-between"
            >
              {selectedOption || "옵션을 선택해주세요"}
              <span>▾</span>
            </button>

            {openOptionList && (
              <div className="border-t max-h-48 overflow-y-auto">
                {options.map((op) => (
                  <div
                    key={op.id}
                    className={`w-full px-4 py-3 flex justify-between items-center border-b ${
                      op.stock === 0
                        ? "text-gray-400 cursor-not-allowed"
                        : "hover:bg-gray-100 cursor-pointer"
                    }`}
                    onClick={() => op.stock > 0 && handleSelectOption(op)}
                  >
                    <span>{op.label}</span>

                    {op.stock === 0 && (
                      <span
                        className="text-[#ff5c00] text-xs underline cursor-pointer"
                        onClick={(e) => {
                          e.stopPropagation(); // ✅ 옵션 선택 방지
                          setOpenRestockModal(true);
                        }}
                      >
                        재입고 알림
                      </span>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* 선택된 구매 목록 */}
          {selectedItems.length > 0 && (
            <div className="mt-4 border rounded-md p-4 space-y-3 bg-gray-50">
              {selectedItems.map((item) => (
                <div
                  key={item.label}
                  className="flex justify-between items-center"
                >
                  <span>{item.label}</span>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => changeQty(item.label, -1)}
                      className="border rounded px-2 text-sm"
                    >
                      -
                    </button>
                    <span>{item.qty}</span>
                    <button
                      onClick={() => changeQty(item.label, +1)}
                      className="border rounded px-2 text-sm"
                    >
                      +
                    </button>
                    <span className="font-semibold ml-4">
                      {(item.price * item.qty).toLocaleString()}원
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* 총 금액 */}
          <div className="text-lg font-semibold pt-2">
            총 금액:{" "}
            <span className="text-[#111111] text-2xl">
              {totalPrice.toLocaleString()}원
            </span>
          </div>

          {/* 버튼 */}

          <div className="flex gap-3 pt-4">
            <button
              className="flex-1 py-3 rounded-md border border-[#111111] text-[#111111] hover:bg-gray-100"
              onClick={() => alert("장바구니에 담겼습니다")}
            >
              장바구니
            </button>
            <button
              className="flex-1 py-3 rounded-md bg-[#111111] text-white hover:bg-black"
              onClick={handleClickOrder}
            >
              바로구매
            </button>

            <button onClick={() => setLiked(!liked)} className="text-3xl">
              {liked ? (
                <AiFillHeart className="text-[#ff5c00]" />
              ) : (
                <AiOutlineHeart className="text-gray-400" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ✅ 탭 메뉴 (상태로 화면 전환) */}
      <div className="border-b flex gap-10 text-lg font-semibold py-3">
        <button
          onClick={() => setTab("info")}
          className={
            tab === "info"
              ? "text-[#111111] border-b-2 border-[#111111]"
              : "text-gray-400"
          }
        >
          상품설명
        </button>
        <button
          onClick={() => setTab("buy")}
          className={
            tab === "buy"
              ? "text-[#111111] border-b-2 border-[#111111]"
              : "text-gray-400"
          }
        >
          구매정보
        </button>
        <button
          onClick={() => setTab("review")}
          className={
            tab === "review"
              ? "text-[#111111] border-b-2 border-[#111111]"
              : "text-gray-400"
          }
        >
          리뷰
        </button>
        <button
          onClick={() => setTab("qna")}
          className={
            tab === "qna"
              ? "text-[#111111] border-b-2 border-[#111111]"
              : "text-gray-400"
          }
        >
          Q&A
        </button>
      </div>

      {/* ✅ 탭 컨텐츠 */}
      {tab === "info" && <ProductDetailInfo />}
      {tab === "buy" && <ProductDetailBuy product={product} />}
      {tab === "review" && <ProductDetailReview />}
      {tab === "qna" && <ProductDetailQnA />}

      <RestockAlertModal
        isOpen={openRestockModal}
        onClose={() => setOpenRestockModal(false)}
      />
    </div>
  );
}
