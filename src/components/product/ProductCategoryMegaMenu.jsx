import React from "react";

const ProductCategoryMegaMenu = ({ isOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-0 w-full bg-white shadow-lg border-t z-50 p-8 grid grid-cols-4 gap-8">
      {/* 1열 */}
      <div>
        <h3 className="font-semibold mb-3">스킨케어</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>스킨/토너</li>
          <li>에센스/세럼</li>
          <li>크림</li>
          <li>로션</li>
          <li>미스트</li>
          <li>패드</li>
        </ul>
      </div>

      {/* 2열 */}
      <div>
        <h3 className="font-semibold mb-3">메이크업</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>립</li>
          <li>베이스</li>
          <li>아이</li>
          <li>치크</li>
        </ul>
      </div>

      {/* 3열 */}
      <div>
        <h3 className="font-semibold mb-3">바디케어</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>바디워시</li>
          <li>바디로션</li>
          <li>핸드케어</li>
          <li>바디오일</li>
        </ul>
      </div>

      {/* 4열 */}
      <div>
        <h3 className="font-semibold mb-3">헤어케어</h3>
        <ul className="space-y-1 text-sm text-gray-600">
          <li>샴푸</li>
          <li>트리트먼트</li>
          <li>헤어오일</li>
          <li>스타일링</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCategoryMegaMenu;
