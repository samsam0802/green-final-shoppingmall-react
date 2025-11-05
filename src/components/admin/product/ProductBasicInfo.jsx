import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";

// 공통 행 레이아웃 컴포넌트 (뼈대용)
const InfoRow = ({ label, required, children, className = "" }) => (
  <div className={`flex border-b border-gray-200 ${className}`}>
    {/* 라벨 영역 */}
    <div className="w-1/4 py-3 px-4 bg-gray-50 text-sm font-medium text-gray-800">
      {label}
      {required && <span className="text-red-500 ml-1">*</span>}
    </div>
    {/* 내용 영역 */}
    <div className="w-3/4 py-3 px-4">{children}</div>
  </div>
);

export default function ProductBasicInfo() {
  const [isOpen, setIsOpen] = useState(true);
  const [productBasicInfo, setProductBasicInfo] = useState({
    productName: "",
    keywords: "",
    productDescription: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setProductBasicInfo((prev) => {
      const temp = { ...prev, [name]: value };
      console.log(temp);
      return temp;
    });
  };

  return (
    <div className="max-w-4xl mx-auto border border-gray-200 bg-white shadow-lg">
      {/* 1. 기본 정보 섹션 헤더 */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center p-3 border-b"
      >
        <h2 className="text-lg font-semibold text-gray-800">기본 정보</h2>

        <button className="text-gray-600 hover:text-gray-900 transition-colors">
          {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
        </button>
      </div>

      {/* 2. 상품명 입력 필드 */}
      {isOpen && (
        <div>
          <InfoRow label="상품명" required>
            <div className="flex items-center space-x-2">
              {/* 상품명 Input */}
              <input
                type="text"
                name="productName"
                onChange={onChangeHandler}
                value={productBasicInfo.productName}
                className="border border-gray-300 rounded-sm p-1 w-full max-w-lg focus:ring-blue-500 focus:border-blue-500"
                aria-label="상품명"
              />
              {/* 글자수 표시 */}
              <span className="text-xs text-gray-500">0 / 255</span>
            </div>
          </InfoRow>

          {/* 2. 상품명 입력 필드 */}
          <InfoRow label="검색어">
            <div className="flex items-center space-x-2">
              {/* 검색어 Input */}
              <input
                type="text"
                name="keywords"
                onChange={onChangeHandler}
                value={productBasicInfo.keywords}
                className="border border-gray-300 rounded-sm p-1 w-full max-w-lg focus:ring-blue-500 focus:border-blue-500"
                aria-label="검색어"
              />
              {/* 글자수 표시 */}
              <span className="text-xs text-gray-500">0 / 255</span>
            </div>
          </InfoRow>

          {/* 3. 간략 설명 입력 필드 */}
          <InfoRow label="간략 설명" required={false}>
            <div className="space-y-2">
              {/* 간략 설명 Input */}
              <input
                type="text"
                name="productDescription"
                onChange={onChangeHandler}
                value={productBasicInfo.productDescription}
                placeholder="간략한 상품 설명을 적어주세요"
                className="border border-gray-300 rounded-sm p-1 w-full max-w-lg focus:ring-blue-500 focus:border-blue-500"
                aria-label="간략 설명"
              />
              <div className="flex justify-between items-center text-xs text-gray-500">
                {/* 안내 텍스트 */}
                <span>
                  * 구글 쇼핑 및 페이스북 픽셀 연동 시 필수 입력 항목입니다.
                </span>
                {/* 글자수 표시 */}
                <span>0 / 255</span>
              </div>
            </div>
          </InfoRow>
        </div>
      )}
      {/* 검색어, 검색용 색상, 추가 정보 등 요청에 따라 생략된 항목의 자리 */}
      {/* 이 부분에 다음 섹션이 붙게 됩니다. */}
    </div>
  );
}
