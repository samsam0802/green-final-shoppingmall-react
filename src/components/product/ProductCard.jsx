import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();

  const handleClickDetail = () => {
    navigate(`/product/detail/${product.id}`);
  };

  return (
    <div
      key={product.id}
      className="border rounded-xl shadow hover:shadow-lg transition p-4"
      onClick={handleClickDetail}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-3"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-500">{product.category}</p>
      <p className="text-gray-800 font-bold mt-1">
        {product.price.toLocaleString()}원
      </p>
    </div>
  );
};

export default ProductCard;
