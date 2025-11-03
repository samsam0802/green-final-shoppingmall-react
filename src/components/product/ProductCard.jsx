import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const handleClickDetail = () => {
    navigate(`/product/${product.id}`);
  };

  return (
    <div
      className="border border-[#e5e5e5] rounded-lg hover:shadow-md transition cursor-pointer p-4 relative bg-white"
      onClick={handleClickDetail}
    >
      {/* 찜 버튼 */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLiked(!liked);
        }}
        className="absolute bottom-3 right-3 text-2xl hover:scale-110 transition"
      >
        {liked ? (
          <AiFillHeart className="text-[#ff5c00]" />
        ) : (
          <AiOutlineHeart className="text-gray-400" />
        )}
      </button>

      {/* 상품 이미지 */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-3 bg-gray-100"
      />

      {/* 브랜드 */}
      <h2 className="text-sm text-gray-500">{product.brand}</h2>

      {/* 상품명 */}
      <h3 className="text-base font-semibold mt-1 line-clamp-2 text-[#111111]">
        {product.name}
      </h3>

      {/* 가격 영역 */}
      <div className="mt-2">
        {product.originalPrice && (
          <p className="text-sm line-through text-gray-400">
            {product.originalPrice.toLocaleString()}원
          </p>
        )}

        <p className="text-lg font-bold text-[#111111] flex items-center gap-2">
          {product.discountPrice.toLocaleString()}원
          {product.discountRate > 0 && (
            <span className="text-sm text-[#ff5c00]">
              {product.discountRate}%↓
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
