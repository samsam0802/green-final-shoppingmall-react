import React, { useState } from "react";
import { ChevronUp, ChevronDown, Trash2, X } from "lucide-react";

// --- 목업 데이터 ---
const brandsData = [
  {
    id: "b1",
    name: "ADIDAS",
    subBrands: [
      { id: "b1-1", name: "에어맥스" }, // 오타를 그대로 반영 (NIKE의 에어맥스가 ADIDAS 아래에 있음)
    ],
  },
  {
    id: "b2",
    name: "NIKE",
    subBrands: [
      { id: "b2-1", name: "후드티" },
      { id: "b2-2", name: "주니어" },
    ],
  },
  { id: "b3", name: "노스페이스" },
  { id: "b4", name: "바넥스" },
  { id: "b5", name: "SAMSUNG" },
  { id: "b6", name: "LG" },
  { id: "b7", name: "SK-II" },
];

const initialBrands = [
  { id: "1", name: "NIKE", isRepresentative: true, path: [{ name: "NIKE" }] },
  {
    id: "2",
    name: "NIKE > 에어맥스",
    isRepresentative: false,
    path: [{ name: "NIKE" }, { name: "에어맥스" }],
  },
];

// ----------------------------------------------------------------------
// 1. 다단계 브랜드 선택 모달 컴포넌트
// ----------------------------------------------------------------------

// 브랜드 경로를 문자열로 변환하는 헬퍼 함수
const getBrandPath = (path) => path.map((c) => c.name).join(" > ");

// 단일 브랜드 목록 컬럼
const BrandColumn = ({ brands, selectedBrand, onSelect }) => (
  <div className="flex-1 border border-gray-300 h-64 overflow-y-auto">
    <ul className="p-1 text-sm">
      {brands.map((brand) => (
        <li
          key={brand.id}
          className={`px-3 py-1 cursor-pointer transition-colors ${
            selectedBrand?.id === brand.id
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
          onClick={() => onSelect(brand)}
        >
          {brand.name}
        </li>
      ))}
    </ul>
  </div>
);

const BrandSelector = ({ selectedPath, onSelect, columns = 4 }) => {
  const getSubBrands = (level) => {
    if (level === 0) return brandsData;
    let current = selectedPath[level - 1];
    return current?.subBrands || [];
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length: columns }).map((_, level) => (
        <React.Fragment key={level}>
          {/* 이미지를 기반으로 1차 브랜드에만 목록이 있고, 나머지는 비어있는 상태를 구현 */}
          <div className="flex-1">
            {/* 컬럼 헤더 */}
            <div className="text-center text-sm font-semibold text-gray-600 mb-1">
              {level + 1}차 브랜드
            </div>
            <BrandColumn
              brands={getSubBrands(level)}
              selectedBrand={selectedPath[level]}
              onSelect={(brand) => onSelect(brand, level)}
            />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

const BrandSelectionModal = ({ onClose, onBrandAdd }) => {
  // 모달 내에서 현재 선택 중인 브랜드 경로
  const [currentSelectedPath, setCurrentSelectedPath] = useState([]);

  const onSelectBrand = (brand, level) => {
    // 현재 레벨까지만 선택 경로를 자르고 새 브랜드를 추가
    const newPath = currentSelectedPath.slice(0, level);
    newPath.push(brand);
    setCurrentSelectedPath(newPath);
  };

  const handleSelectAndClose = () => {
    if (currentSelectedPath.length > 0) {
      const lastBrand = currentSelectedPath[currentSelectedPath.length - 1];
      const newBrand = {
        id: lastBrand.id, // 실제 ID는 백엔드에서 생성될 수 있음
        path: currentSelectedPath,
        name: getBrandPath(currentSelectedPath),
      };
      onBrandAdd(newBrand);
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl overflow-hidden">
        {/* 모달 헤더 */}
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-semibold text-gray-800">브랜드 연결</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <X size={24} />
          </button>
        </div>

        {/* 모달 콘텐츠: 브랜드 선택 영역 */}
        <div className="p-4">
          <BrandSelector
            selectedPath={currentSelectedPath}
            onSelect={onSelectBrand}
            columns={4}
          />

          {/* 안내 텍스트 */}
          <div className="mt-4 text-sm text-gray-500">
            - 신규 브랜드 생성은{" "}
            <a href="#" className="text-blue-600 hover:underline">
              브랜드
            </a>
            에서 가능합니다.
          </div>
        </div>

        {/* 모달 푸터: 선택/닫기 버튼 */}
        <div className="flex justify-center p-4 border-t space-x-3">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-150 disabled:bg-gray-400"
            onClick={handleSelectAndClose}
            disabled={currentSelectedPath.length === 0}
          >
            선택
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-6 rounded transition duration-150"
            onClick={onClose}
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};

// ----------------------------------------------------------------------
// 2. 메인 컴포넌트: ProductBrand
// ----------------------------------------------------------------------

export default function ProductBrand() {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 상태
  const [brands, setBrands] = useState(initialBrands);
  const [isRegionSet, setIsRegionSet] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  const handleSetRepresentative = (id) => {
    setBrands(
      brands.map((brand) => ({
        ...brand,
        isRepresentative: brand.id === id,
      }))
    );
  };

  const handleDeleteBrand = (id) => {
    const updatedBrands = brands.filter((brand) => brand.id !== id);
    if (
      updatedBrands.length > 0 &&
      !updatedBrands.some((brand) => brand.isRepresentative)
    ) {
      updatedBrands[0].isRepresentative = true;
    }
    setBrands(updatedBrands);
  };

  const handleAddBrand = (newBrand) => {
    // 중복 방지를 위한 간단한 체크 (이름 기준)
    if (!brands.some((b) => b.name === newBrand.name)) {
      const id = Date.now().toString(); // 고유 ID 부여
      setBrands([
        ...brands,
        { ...newBrand, id, isRepresentative: brands.length === 0 },
      ]);
    }
  };

  return (
    <div className="p-4 border border-gray-200 bg-white shadow-lg max-w-4xl mx-auto">
      {/* 브랜드/지역 헤더 */}
      <div
        className="flex justify-between items-center p-3 bg-gray-50 border-b cursor-pointer"
        onClick={toggleOpen}
      >
        <h2 className="text-lg font-semibold text-gray-700">브랜드/지역</h2>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-500">열기 고정</span>
          <button className="text-gray-500 hover:text-gray-700">
            {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="divide-y divide-gray-200">
          {/* 브랜드 영역 */}
          <div className="flex">
            <div className="w-1/5 py-4 px-3 bg-gray-50 border-r text-md font-medium text-gray-800">
              브랜드
            </div>
            <div className="w-4/5 p-4">
              {/* 탭 버튼 */}
              <div className="flex space-x-1 mb-3">
                <button
                  className="bg-blue-500 text-white text-sm font-medium py-1 px-3 rounded-sm hover:bg-blue-600 transition-colors"
                  onClick={() => setIsModalOpen(true)} // 모달 열기
                >
                  브랜드 선택
                </button>
                <button className="bg-gray-200 text-gray-700 text-sm font-medium py-1 px-3 rounded-sm hover:bg-gray-300 transition-colors">
                  최근 연결 브랜드
                </button>
              </div>

              {/* 선택된 브랜드 목록 테이블 */}
              <div className="border border-gray-300">
                <table className="min-w-full divide-y divide-gray-200">
                  {/* ... (테이블 헤더, 바디는 이전과 동일) ... */}
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-1/5">
                        대표
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-3/5">
                        브랜드
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase w-1/5">
                        삭제
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {brands.map((brand) => (
                      <tr key={brand.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="radio"
                            name="representative-brand"
                            checked={brand.isRepresentative}
                            onChange={() => handleSetRepresentative(brand.id)}
                            className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {brand.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            className="text-gray-400 hover:text-red-600"
                            onClick={() => handleDeleteBrand(brand.id)}
                          >
                            <Trash2 size={18} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 모달 렌더링 */}
      {isModalOpen && (
        <BrandSelectionModal
          onClose={() => setIsModalOpen(false)}
          onBrandAdd={handleAddBrand}
        />
      )}
    </div>
  );
}
