import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import products from "../../data/products";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import ProductDetailBuy from "./detail/ProductDetailBuy";
// import ProductDetailReview from "./detail/ProductDetailReview";
import ProductDetailQnA from "./detail/ProductDetailQnA";
import ProductDetailInfo from "./detail/ProductDetailInfo";
// import RestockAlertModal from "./RestockAlertModal";
import ProductDetailOptions from "./detail/ProductDetailOptions";
import ReviewListComponent from "../review/ReviewListComponent";
import { useDispatch, useSelector } from "react-redux";
import { addItem, changeQty, removeItem } from "../../store/cartSlice";
import ProductDetailQuantity from "./detail/ProductDetailQuantity";

export default function ProductDetailComponent() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  const [liked, setLiked] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]); // ✅ 옵션 선택 상태는 여기 딱 하나만

  const [tab, setTab] = useState("info");
  //옵션 없는 상품의 수량을 구하기 위한 state
  const [qty, setQty] = useState(1);

  // cartSlice에 action을 전달할 dispatch 불러오기
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
    console.log("handleClickOrder");
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
            <p className="text-[#111111]">{product.price.toLocaleString()}원</p>
            {/* <p className="text-3xl font-bold text-[#111111]">
              {product.discountPrice.toLocaleString()}원
              <span className="text-[#ff5c00] text-lg ml-2">
                {product.discountRate}%↓
              </span>
            </p> */}
          </div>

          {/* ✅ 옵션 UI */}
          {/* 옵션이 있을 때 뜨는 옵션 선택창 */}
          {product.options.length > 0 && (
            <ProductDetailOptions
              product={product}
              selectedItems={selectedItems}
              setSelectedItems={setSelectedItems}
            />
          )}

          {/* 옵션이 없을때 뜨는 수량 조절창 */}
          {product.options.length === 0 && (
            <ProductDetailQuantity
              qty={qty}
              setQty={setQty}
              price={product.price}
            />
          )}

          {/* 버튼 */}
          {product.options.length > 0 && (
            <div className="flex gap-3 pt-4">
              <button
                className="flex-1 py-3 rounded-md border border-[#111111] text-[#111111] hover:bg-gray-100"
                onClick={() => handleAddCartOption(selectedItems)}
              >
                장바구니
              </button>

              <button
                className="flex-1 py-3 rounded-md bg-[#111111] text-white hover:bg-black"
                onClick={() => handleClickOrderOption()}
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
          )}
          {product.options.length === 0 && (
            <div className="flex gap-3 pt-4">
              <button
                className="flex-1 py-3 rounded-md border border-[#111111] text-[#111111] hover:bg-gray-100"
                onClick={() => handleAddCart(product)}
              >
                장바구니
              </button>

              <button
                className="flex-1 py-3 rounded-md bg-[#111111] text-white hover:bg-black"
                onClick={() => handleClickOrder()}
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
          )}
        </div>
      </div>

      {/* ✅ 탭 */}
      <div className="border-b flex gap-10 text-lg font-semibold py-3">
        {["info", "buy", "review", "qna"].map((key) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={
              tab === key
                ? "text-[#111111] border-b-2 border-[#111111]"
                : "text-gray-400"
            }
          >
            {key === "info"
              ? "상품설명"
              : key === "buy"
              ? "구매정보"
              : key === "review"
              ? "리뷰"
              : "Q&A"}
          </button>
        ))}
      </div>

      {tab === "info" && <ProductDetailInfo />}
      {tab === "buy" && <ProductDetailBuy product={product} />}
      {/* {tab === "review" && <ProductDetailReview />} */}
      {tab === "review" && <ReviewListComponent />}
      {tab === "qna" && <ProductDetailQnA />}
    </div>
  );
}
