import React, { useState, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../../data/products";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import ProductDetailBuy from "./detail/ProductDetailBuy";
import ProductDetailReview from "./detail/ProductDetailReview";
import ProductDetailQnA from "./detail/ProductDetailQnA";
import ProductDetailInfo from "./detail/ProductDetailInfo";

export default function ProductDetailComponent() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  const [tab, setTab] = useState("info"); // info | buy | review | qna
  const [liked, setLiked] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(product.image);
  const [showShippingModal, setShowShippingModal] = useState(false);

  const totalPrice = product.discountPrice * quantity;

  // ✅ 섹션 위치 참조
  const infoRef = useRef(null);
  const buyRef = useRef(null);
  const reviewRef = useRef(null);
  const qnaRef = useRef(null);

  const scrollTo = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop - 80,
      behavior: "smooth",
    });
  };

  const handleClickOrder = () => {
    navigate({pathname:"/order"})
  }

  return (
    <div className="max-w-7xl mx-auto px-8 mt-12 pb-32">

      {/* ====== 경로 표시 ====== */}
      <div className="text-sm text-gray-500 mb-6 flex gap-2">
        <Link to="/" className="hover:underline">홈</Link> /
        <span>{product.categoryMain}</span> /
        <span>{product.categorySub}</span>
      </div>

      {/* ====== 상품 요약 영역 ====== */}
      <div className="grid grid-cols-2 gap-12 mb-16">
        <div>
          <img
            src={selectedImage}
            className="w-full h-[480px] object-cover rounded-lg border"
          />
          <div className="flex gap-3 mt-4">
            {[product.image, ...(product.images || [])].map((img, idx) => (
              <img
                key={idx}
                src={img}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                  selectedImage === img ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>

        <div className="space-y-5">
          <div className="text-sm text-gray-500">{product.brand}</div>
          <h1 className="text-2xl font-bold">{product.name}</h1>

          <div>
            <p className="text-gray-400 line-through">
              {product.originalPrice.toLocaleString()}원
            </p>
            <p className="text-3xl font-bold text-red-500">
              {product.discountPrice.toLocaleString()}원
              <span className="text-blue-500 text-lg ml-2">
                {product.discountRate}%↓
              </span>
            </p>
          </div>

          <button
            className="text-sm text-gray-600 underline"
            onClick={() => setShowShippingModal(true)}
          >
            배송비 안내
          </button>

          <div className="flex items-center gap-3">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="border px-3 py-1 rounded">-</button>
            <span className="text-lg font-semibold">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="border px-3 py-1 rounded">+</button>
          </div>

          <div className="text-lg font-semibold">
            총 상품금액:{" "}
            <span className="text-red-500 text-2xl">{totalPrice.toLocaleString()}원</span>
          </div>

          <div className="flex gap-3 pt-2">
            <button className="flex-1 border py-3 rounded-md hover:bg-gray-100" onClick={()=>alert("장바구니에 담겼어요")}>장바구니</button>
            <button className="flex-1 py-3 rounded-md text-white bg-red-500" onClick={handleClickOrder}>바로구매</button>
            <button onClick={() => setLiked(!liked)} className="text-3xl ml-2">
              {liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart className="text-gray-400" />}
            </button>
          </div>
        </div>
      </div>

      {/* ==== 탭 메뉴 ==== */}
      <div className="sticky top-0 bg-white z-10 border-b flex gap-10 text-lg font-semibold py-3 mt-10">
        <button className={tab === "info" ? "text-black border-b-2" : "text-gray-500"} onClick={() => setTab("info")}>상품설명</button>
        <button className={tab === "buy" ? "text-black border-b-2" : "text-gray-500"} onClick={() => setTab("buy")}>구매정보</button>
        <button className={tab === "review" ? "text-black border-b-2" : "text-gray-500"} onClick={() => setTab("review")}>리뷰</button>
        <button className={tab === "qna" ? "text-black border-b-2" : "text-gray-500"} onClick={() => setTab("qna")}>Q&A</button>
      </div>

      {/* ==== 탭 콘텐츠 영역 ==== */}
      {tab === "info" && <ProductDetailInfo />}
      {tab === "buy" && <ProductDetailBuy />}
      {tab === "review" && <ProductDetailReview />}
      {tab === "qna" && <ProductDetailQnA />}


      {/* ===== 배송비 안내 모달 ===== */}
      {showShippingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-xl">
            <h3 className="font-bold text-lg mb-3">배송비 안내</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>기본 배송비: 2,500원</li>
              <li>도서산간: +2,500원</li>
              <li>제주지역: +2,500원</li>
              <li>제주도서산간: +7,000원</li>
            </ul>
            <button className="mt-5 w-full py-2 border rounded-md hover:bg-gray-100"
              onClick={() => setShowShippingModal(false)}
            >
              확인
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
