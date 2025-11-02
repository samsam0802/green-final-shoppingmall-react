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
    <div className="border rounded-xl shadow hover:shadow-lg transition p-4 relative group cursor-pointer">
      
      {/* 찜하기 버튼 (우측 하단) */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          setLiked(!liked);
        }}
        className="absolute bottom-3 right-3 text-2xl hover:scale-110 transition"
      >
        {liked ? <AiFillHeart className="text-red-500" /> : <AiOutlineHeart className="text-gray-400" />}
      </button>

      <div onClick={handleClickDetail}>
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md mb-3 bg-gray-100"
        />

        <h2 className="text-sm text-gray-700">{product.brand}</h2>
        <h3 className="text-base font-semibold mt-1 line-clamp-2">{product.name}</h3>

        <div className="mt-2">
          {product.originalPrice && (
            <p className="text-sm line-through text-gray-400">
              {product.originalPrice.toLocaleString()}원
            </p>
          )}

          <p className="text-lg font-bold text-red-500 flex items-center gap-2">
            {product.discountPrice.toLocaleString()}원
            {product.discountRate > 0 && (
              <span className="text-sm text-blue-500">{product.discountRate}%↓</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
