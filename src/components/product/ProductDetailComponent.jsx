import React, { useState } from "react";
import products from "../../data/products";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import RestockAlertModal from "../../components/product/RestockAlertModal";

const ProductDetailComponent = () => {
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);

  // ✅ 옵션 UI 펼침 상태 (기능 X, UI용)
  const [openColor, setOpenColor] = useState(false);
  const [openSize, setOpenSize] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((i) => i.id == id);

  const handleClickList = () => navigate({ pathname: "/product/list" });
  const handleClickCheckout = () => navigate({ pathname: "/order" });

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Detail Page</h1>

      <ProductCard product={product} />

      {/* ✅ 옵션 선택 영역 */}
      <div className="mt-6 space-y-3">
        {/* 컬러 */}
        <div
          className="border rounded-md p-3 cursor-pointer"
          onClick={() => setOpenColor(!openColor)}
        >
          <div className="flex justify-between text-sm">
            <span>컬러</span>
            <span>{openColor ? "▲" : "▼"}</span>
          </div>
          {openColor && (
            <div className="mt-3 text-sm text-gray-600 space-y-2">
              <div className="border p-2 rounded bg-gray-50">
                옵션1 (예: 화이트)
              </div>
              <div className="border p-2 rounded bg-gray-50">
                옵션2 (예: 핑크)
              </div>
              <div className="border p-2 rounded bg-gray-50">
                옵션3 (예: 블루)
              </div>
            </div>
          )}
        </div>

        {/* 사이즈 */}
        <div
          className="border rounded-md p-3 cursor-pointer"
          onClick={() => setOpenSize(!openSize)}
        >
          <div className="flex justify-between text-sm">
            <span>사이즈</span>
            <span>{openSize ? "▲" : "▼"}</span>
          </div>
          {openSize && (
            <div className="mt-3 text-sm text-gray-600 space-y-2">
              <div className="border p-2 rounded bg-gray-50">
                옵션1 (예: 소형)
              </div>
              <div className="border p-2 rounded bg-gray-50">
                옵션2 (예: 중형)
              </div>
              <div className="border p-2 rounded bg-gray-50">
                옵션3 (예: 대형)
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 버튼 영역 */}
      <div className="flex gap-3 mt-6">
        {isSoldOut ? (
          <button
            className="border bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500"
            onClick={() => setShowAlertModal(true)}
          >
            재입고 알림 신청
          </button>
        ) : (
          <>
            <button className="border bg-gray-300 px-4 py-2 rounded-md">
              장바구니에 담기
            </button>
            <button
              className="border bg-gray-300 px-4 py-2 rounded-md"
              onClick={handleClickCheckout}
            >
              바로구매
            </button>
          </>
        )}

        <button
          className="border bg-gray-200 px-4 py-2 rounded-md"
          onClick={handleClickList}
        >
          목록
        </button>
      </div>

      <RestockAlertModal
        isOpen={showAlertModal}
        onClose={() => setShowAlertModal(false)}
      />
    </div>
  );
};

export default ProductDetailComponent;
