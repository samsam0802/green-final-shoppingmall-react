import React, { useState } from "react";
import products from "../../data/products";
import { useNavigate, useParams } from "react-router-dom";
import RestockAlertModal from "../../components/product/RestockAlertModal";

const ProductDetailComponent = () => {
  const [isSoldOut, setIsSoldOut] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [count, setCount] = useState(1);

  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((i) => i.id == id);

  if (!product)
    return (
      <div className="p-8 max-w-4xl mx-auto">상품을 찾을 수 없습니다.</div>
    );

  const discountRate = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleClickList = () => navigate(-1);
  const handleClickCheckout = () => navigate("/order");

  return (
    <div className="p-8 max-w-4xl mx-auto">
      {/* ✅ 카테고리 경로 */}
      <div className="text-sm text-gray-400 mb-3">
        {product.categoryMain} &gt; {product.categorySub}
      </div>

      <div className="flex gap-8">
        {/* ✅ 이미지 */}
        <img
          src={product.image}
          alt={product.name}
          className="w-96 h-96 object-cover rounded-md border"
        />

        {/* ✅ 상품 정보 */}
        <div className="flex-1">
          {/* 브랜드 */}
          <p className="text-sm text-gray-500">{product.brand}</p>

          {/* 상품명 */}
          <h1 className="text-2xl font-bold mt-1">{product.name}</h1>

          {/* 가격 */}
          <div className="mt-4">
            {discountRate > 0 && (
              <span className="text-red-500 text-lg font-bold mr-2">
                {discountRate}%
              </span>
            )}
            <span className="text-2xl font-bold">
              {product.price.toLocaleString()}원
            </span>
            {product.originalPrice && (
              <span className="text-gray-400 line-through ml-2 text-sm">
                {product.originalPrice.toLocaleString()}원
              </span>
            )}
          </div>

          {/* 적립 포인트 (예시용) */}
          <p className="text-sm text-gray-500 mt-2">
            구매 시 최대 {(product.price * 0.05).toLocaleString()}원 적립
          </p>

          {/* ✅ 수량 선택 */}
          <div className="mt-6 flex items-center gap-3">
            <button
              className="border px-3 py-1 rounded-md"
              onClick={() => count > 1 && setCount(count - 1)}
            >
              -
            </button>
            <span className="font-semibold">{count}</span>
            <button
              className="border px-3 py-1 rounded-md"
              onClick={() => setCount(count + 1)}
            >
              +
            </button>
          </div>

          {/* ✅ 버튼 영역 */}
          <div className="flex gap-3 mt-8">
            {isSoldOut ? (
              <button
                className="border bg-gray-400 text-white px-4 py-2 rounded-md hover:bg-gray-500 flex-1"
                onClick={() => setShowAlertModal(true)}
              >
                재입고 알림 신청
              </button>
            ) : (
              <>
                <button className="border px-4 py-2 rounded-md flex-1">
                  장바구니
                </button>
                <button
                  className="bg-black text-white px-4 py-2 rounded-md flex-1"
                  onClick={handleClickCheckout}
                >
                  구매하기
                </button>
              </>
            )}
          </div>

          {/* 목록 */}
          <button
            className="mt-4 text-gray-500 underline underline-offset-4 text-sm"
            onClick={handleClickList}
          >
            목록으로 돌아가기
          </button>
        </div>
      </div>

      {/* ✅ 재입고 알림 모달 */}
      <RestockAlertModal
        isOpen={showAlertModal}
        onClose={() => setShowAlertModal(false)}
      />
    </div>
  );
};

export default ProductDetailComponent;
