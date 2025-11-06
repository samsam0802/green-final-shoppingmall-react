import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../../data/products";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { ChevronRight } from "lucide-react"; // breadcrumb 화살표용

import ProductDetailBuy from "./detail/ProductDetailBuy";
import ProductDetailInfo from "./detail/ProductDetailInfo";
import ProductDetailOptions from "./detail/ProductDetailOptions";
import ReviewListComponent from "../review/ReviewListComponent";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/cartSlice";
import ProductDetailQuantity from "./detail/ProductDetailQuantity";
import ProductQuestion from "../productquestion/ProductQuestion";
import ProductPurchaseInfo from "./detail/ProductPurchaseInfo";

export default function ProductDetailComponent() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [tab, setTab] = useState("info");
  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();

  const handleClickOrderOption = () => {
    if (
      product.options &&
      product.options.length > 0 &&
      selectedItems.length === 0
    )
      return alert("옵션을 선택해주세요.");

    navigate("/order", {
      state: {
        items: selectedItems.map((i) => ({
          id: product.id,
          name: product.name + " - " + i.label,
          brand: product.brand,
          price: product.price,
          qty: i.qty,
          image: product.image,
        })),
      },
    });
  };

  const handleClickOrder = () => {
    navigate("/order", {
      state: {
        items: [
          {
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            qty: qty,
            image: product.image,
          },
        ],
      },
    });
  };

  const handleAddCartOption = (selectedItems) => {
    if (
      product.options &&
      product.options.length > 0 &&
      selectedItems.length === 0
    )
      return alert("옵션을 선택해주세요.");

    selectedItems.map((i) =>
      dispatch(
        addItem({
          id: product.id,
          name: product.name + " - " + i.label,
          brand: product.brand,
          price: product.price,
          qty: i.qty,
          image: product.image,
        })
      )
    );
  };

  const handleAddCart = (product) => {
    dispatch(
      addItem({
        id: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        qty: qty,
        image: product.image,
      })
    );
  };

  const tabs = [
    { key: "info", label: "상품설명" },
    { key: "buy", label: "구매정보" },
    { key: "review", label: "리뷰" },
    { key: "qna", label: "Q&A" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 mt-8 md:mt-12 pb-32">
      {/* 🔹 개선된 경로 (Breadcrumb) */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6 md:mb-8">
        <Link to="/" className="hover:text-gray-900 transition-colors">
          홈
        </Link>
        <span className="text-gray-300">/</span>
        <span className="hover:text-gray-900 transition-colors cursor-pointer">
          {product.categoryMain}
        </span>
        <span className="text-gray-300">/</span>
        <span className="text-gray-900 font-medium">{product.categorySub}</span>
      </nav>

      {/* 🔹 개선된 상품 상단영역 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12 md:mb-16">
        {/* 상품 이미지 */}
        <div className="relative group">
          <div className="aspect-square overflow-hidden rounded-2xl bg-gray-50 border border-gray-200 shadow-sm">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* 상품 정보 */}
        <div className="space-y-6">
          {/* 브랜드 */}
          <div className="inline-block px-4 py-1.5 bg-gradient-to-r from-gray-100 to-gray-50 rounded-full text-sm text-gray-700 font-semibold border border-gray-200">
            {product.brand}
          </div>

          {/* 상품명 */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
            {product.name}
          </h1>

          {/* 가격 */}
          <div className="py-5 border-y-2 border-gray-900">
            <p className="text-3xl md:text-4xl font-bold text-gray-900">
              {product.price.toLocaleString()}
              <span className="text-lg font-normal text-gray-600 ml-2">원</span>
            </p>
          </div>

          {/* 옵션 선택 */}
          {product.options.length > 0 && (
            <ProductDetailOptions
              product={product}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          )}

          {/* 수량 선택 (옵션 없을 때) */}
          {product.options.length === 0 && (
            <ProductDetailQuantity
              qty={qty}
              setQty={setQty}
              price={product.price}
            />
          )}

          {/* 🔹 개선된 버튼 영역 */}
          <div className="flex gap-3 pt-6">
            {product.options.length > 0 ? (
              <>
                <button
                  className="flex-1 py-4 rounded-xl border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 active:scale-95"
                  onClick={() => handleAddCartOption(selectedItems)}
                >
                  장바구니
                </button>
                <button
                  className="flex-1 py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl"
                  onClick={() => handleClickOrderOption()}
                >
                  바로구매
                </button>
              </>
            ) : (
              <>
                <button
                  className="flex-1 py-4 rounded-xl border-2 border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-all duration-300 active:scale-95"
                  onClick={() => handleAddCart(product)}
                >
                  장바구니
                </button>
                <button
                  className="flex-1 py-4 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl"
                  onClick={() => handleClickOrder()}
                >
                  바로구매
                </button>
              </>
            )}
            <button
              onClick={() => setLiked(!liked)}
              className="p-4 rounded-xl border-2 border-gray-200 hover:border-red-400 hover:bg-red-50 transition-all duration-300 active:scale-95"
            >
              {liked ? (
                <AiFillHeart className="w-6 h-6 text-red-500" />
              ) : (
                <AiOutlineHeart className="w-6 h-6 text-gray-400" />
              )}
            </button>
          </div>

          {/* 🔹 배송 정보 추가 */}
          <div className="mt-8 p-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl border border-gray-200 space-y-3 text-sm">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">배송비</span>
              <span className="font-bold text-gray-900">무료배송</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">배송기간</span>
              <span className="font-bold text-gray-900">평균 1~3일</span>
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 개선된 탭 메뉴 */}
      <div className="sticky top-0 bg-white z-10 border-b-2 border-gray-200 shadow-sm">
        <div className="flex gap-0 overflow-x-auto">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`flex-1 min-w-[100px] py-5 text-base font-bold transition-all relative ${
                tab === t.key
                  ? "text-gray-900"
                  : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {t.label}
              {tab === t.key && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-900 rounded-t-full" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* 탭 컨텐츠 */}
      <div className="mt-8">
        {tab === "info" && <ProductDetailInfo />}
        {tab === "buy" && <ProductPurchaseInfo />}
        {tab === "review" && <ReviewListComponent />}
        {tab === "qna" && <ProductQuestion />}
      </div>
    </div>
  );
}
