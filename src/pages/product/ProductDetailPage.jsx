import React, { useState } from "react";
import products from "../../data/products";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "../../components/product/ProductCard";
import RestockAlertModal from "../../components/product/RestockAlertModal"; // 모달 import

const ProductDetailPage = () => {
  const [isSoldOut, setIsSoldOut] = useState(true); // 예시용 (true면 품절)
  const [showAlertModal, setShowAlertModal] = useState(false); // 모달 열림/닫힘 상태

  const { id } = useParams(); // URL 파라미터에서 상품 ID 가져오기
  const navigate = useNavigate();

  const product = products.filter((i) => i.id == id)[0];
  console.log(product);

  const handleClickList = () => {
    navigate({ pathname: "../product/list" });
  };

  const handleClickCheckout = () => {
    navigate({ pathname: "../order" });
  };

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Product Detail Page</h1>

      {/* 상품 카드 */}
      <ProductCard product={product} />

      {/* 버튼 영역 */}
      <div className="flex gap-3 mt-4">
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

      {/* 재입고 알림 모달 */}
      <RestockAlertModal
        isOpen={showAlertModal}
        onClose={() => setShowAlertModal(false)}
      />
    </div>
  );
};

export default ProductDetailPage;
