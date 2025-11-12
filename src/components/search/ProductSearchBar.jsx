import React, { useEffect, useRef, useState } from "react";
// FiSearch 아이콘을 사용하지 않는 대신 인라인 SVG를 사용하므로 이 import는 제거할 수 있습니다.
// import { FiSearch } from "react-icons/fi";
import products from "../../data/products";

const ProductSearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const [isFocused, setIsFocused] = useState(false);

  const wrapperRef = useRef();

  // const handleSearch = (e) => {
  //   const keyword = e.target.value;

  //   console.log("keyword", keyword);
  //   setQuery(keyword);

  //   // name 또는 brand에서 검색어 포함 여부 확인 (대소문자 무시)
  //   const filtered = products.filter(
  //     (item) =>
  //       item.brand.toLowerCase().includes(keyword.toLowerCase()) ||
  //       item.name.toLowerCase().includes(keyword.toLowerCase())
  //   );
  //   console.log("filtered", filtered);

  //   setResults(filtered);

  //   if (keyword === "") {
  //     setResults([]);
  //   }
  // };

  return (
    // 1. 전체 컨테이너에 relative 유지
    <div
      ref={wrapperRef}
      className="w-full max-w-3xl mx-auto relative mt-6 mb-6"
    >
      <input
        placeholder="상품명을 검색하세요"
        className="
          w-full
          border border-gray-300
          rounded-full 
          py-3 pl-12 pr-12  
          text-sm tracking-wide
          placeholder-gray-400
          focus:outline-none focus:border-black focus:ring-1 focus:ring-black
          transition
        "
        onFocus={() => setIsFocused(true)}
        onChange={(e) => setQuery(e.target.value)}
      />
      {results.length > 0 && (
        <ul
          className="
            absolute left-0 right-0 mt-2 bg-white border rounded-lg shadow-lg
            max-h-60 overflow-y-auto z-10
          "
        >
          {results.map((item) => (
            <li
              key={item.id}
              className="
                px-4 py-2 text-sm cursor-pointer hover:bg-gray-100
                flex justify-between
              "
            >
              <span>{item.name}</span>
              <span className="text-gray-500 text-xs">{item.brand}</span>
            </li>
          ))}
        </ul>
      )}

      {/* 2. 검색 아이콘 (오른쪽 내부 배치) */}
      <button
        className="
          absolute right-0 top-1/2 transform -translate-y-1/2 
          w-12 h-12 
          flex items-center justify-center 
          text-gray-400 hover:text-black 
          cursor-pointer
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="5" />
          <line x1="16.5" y1="16.5" x2="21" y2="21" />
        </svg>
      </button>

      {isFocused && <SearchDropdown />}
    </div>
  );
};

export default ProductSearchBar;
