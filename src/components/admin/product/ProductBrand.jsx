import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateProductRegisterForm } from "../../../redux/slices/features/admin/product/productRegisterSlice";

// 임시 브랜드 데이터
const brandsData = [
  { id: 1, name: "라네즈" },
  { id: 2, name: "이니스프리" },
  { id: 3, name: "설화수" },
  { id: 4, name: "미샤" },
  { id: 5, name: "헤라" },
  { id: 6, name: "디올" },
  { id: 7, name: "샤넬" },
  { id: 8, name: "맥" },
  { id: 9, name: "크리니크" },
  { id: 10, name: "로레알" },
];

export default function ProductBrand() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  const [selectedBrand, setSelectedBrand] = useState(null);

  const brandChangeHandler = (e) => {
    const brandId = parseInt(e.target.value);
    const brand = brandsData.find((b) => b.id === brandId) || null;
    setSelectedBrand(brand);
    console.log("selectedBrand : ", brand);
    dispatch(
      updateProductRegisterForm({
        section: "brand",
        data: brand,
      })
    );
  };

  return (
    <div className="max-w-6xl mx-auto mt-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* 브랜드 선택 헤더 */}
        <div
          className="flex justify-between items-center px-6 py-4 bg-linear-to-r from-gray-50 to-gray-100 cursor-pointer hover:from-gray-100 hover:to-gray-200 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-xl font-bold text-gray-800">브랜드</h2>
          <button className="text-gray-600 hover:text-gray-900 transition-colors">
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="p-6">
            {/* 브랜드 선택 영역 */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  브랜드 선택
                </h3>
              </div>

              {/* 브랜드 선택 폼 */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
                <div className="max-w-2xl mx-auto">
                  <label
                    htmlFor="brand-select"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    브랜드 선택
                  </label>
                  <select
                    id="brand-select"
                    value={selectedBrand?.id || ""}
                    onChange={brandChangeHandler}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white"
                  >
                    <option value="">브랜드를 선택해주세요</option>
                    {brandsData.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* 브랜드 정보 안내 */}
            <div className="mt-6 px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-700">
                💡 신규 브랜드 등록은{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium underline"
                >
                  브랜드 관리
                </a>
                에서 가능합니다.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
