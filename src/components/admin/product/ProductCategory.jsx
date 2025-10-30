import React, { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, Trash2 } from "lucide-react"; // 아이콘 라이브러리 (예: lucide-react) 사용 가정

// 목업 데이터
const categoriesData = [
  {
    id: "1",
    name: "의류",
    subCategories: [
      {
        id: "1-1",
        name: "탑",
        subCategories: [
          { id: "1-1-1", name: "티셔츠" },
          { id: "1-1-2", name: "블라우스" },
          { id: "1-1-3", name: "후드티" },
        ],
      },
      { id: "1-2", name: "아우터" },
      { id: "1-3", name: "드레스" },
      { id: "1-4", name: "스커트" },
      { id: "1-5", name: "팬츠" },
    ],
  },
  { id: "2", name: "유아동" },
  { id: "3", name: "화장품" },
  { id: "4", name: "인테리어" },
  { id: "5", name: "가전" },
  { id: "6", name: "악세사리" },
  { id: "7", name: "티켓" },
];

// 카테고리 경로를 문자열로 변환하는 헬퍼 함수
const getCategoryPath = (path) => path.map((c) => c.name).join(" > ");

// 단일 카테고리 목록을 렌더링하는 컴포넌트
const CategoryColumn = ({ categories, selectedCategory, onSelect }) => (
  <div className="flex-1 border border-gray-300 h-64 overflow-y-auto">
    <ul className="p-1">
      {categories.map((category) => (
        <li
          key={category.id}
          className={`px-3 py-1 cursor-pointer transition-colors ${
            selectedCategory?.id === category.id
              ? "bg-blue-500 text-white"
              : "hover:bg-gray-100"
          }`}
          onClick={() => onSelect(category)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  </div>
);

const CategorySelector = ({ selectedPath, onSelect, columns }) => {
  const getSubCategories = (level) => {
    if (level === 0) return categoriesData;
    let current = selectedPath[level - 1];
    return current?.subCategories || [];
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length: columns }).map((_, level) => (
        <CategoryColumn
          key={level}
          categories={getSubCategories(level)}
          selectedCategory={selectedPath[level]}
          onSelect={(category) => onSelect(category, level)}
        />
      ))}
    </div>
  );
};

export default function ProductCategory() {
  const [isOpen, setIsOpen] = useState(true);
  // 선택된 경로: [{ id: '1', name: '의류', ... }, { id: '1-1', name: '탑', ... }]
  const [currentSelectedPath, setCurrentSelectedPath] = useState([]);
  // 최종적으로 추가된 카테고리 목록: [{ id: '1-1', name: '의류 > 탑', path: [...] }, ...]
  const [selectedCategories, setSelectedCategories] = useState([
    {
      id: "1",
      path: [{ id: "1", name: "의류" }],
      name: "의류",
      isRepresentative: true,
    },
    {
      id: "1-1",
      path: [
        { id: "1", name: "의류" },
        { id: "1-1", name: "탑" },
      ],
      name: "의류 > 탑",
      isRepresentative: false,
    },
  ]);

  const onSelectCategory = (category, level) => {
    // 현재 레벨까지만 선택 경로를 자르고 새 카테고리를 추가
    const newPath = currentSelectedPath.slice(0, level);
    newPath.push(category);
    setCurrentSelectedPath(newPath);
  };

  const handleAddCategory = () => {
    if (currentSelectedPath.length > 0) {
      const lastCategory = currentSelectedPath[currentSelectedPath.length - 1];
      const newCategory = {
        id: lastCategory.id,
        path: currentSelectedPath,
        name: getCategoryPath(currentSelectedPath),
        isRepresentative: false,
      };

      // 중복 방지
      if (!selectedCategories.some((c) => c.id === newCategory.id)) {
        setSelectedCategories([...selectedCategories, newCategory]);
      }
      setCurrentSelectedPath([]); // 추가 후 선택 초기화
    }
  };

  const handleDeleteCategory = (id) => {
    setSelectedCategories(selectedCategories.filter((c) => c.id !== id));
  };

  const handleSetRepresentative = (id) => {
    setSelectedCategories(
      selectedCategories.map((c) => ({
        ...c,
        isRepresentative: c.id === id,
      }))
    );
  };

  return (
    <div className="p-4 border border-gray-200 bg-white shadow-lg max-w-4xl mx-auto">
      {/* 카테고리 선택 헤더 */}
      <div
        className="flex justify-between items-center p-3 bg-gray-50 border-b cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h2 className="text-lg font-semibold text-gray-700">카테고리</h2>
        <button className="text-gray-500 hover:text-gray-700">
          {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
      </div>

      {isOpen && (
        <>
          {/* 카테고리 선택 영역 */}
          <div className="flex my-4">
            <div className="w-1/4 pr-4 border-r">
              <h3 className="text-md font-medium text-gray-800 mb-2">
                카테고리 선택
              </h3>
            </div>
            <div className="w-3/4 pl-4">
              <div className="flex justify-end mb-2">
                <button className="text-sm text-blue-600 hover:text-blue-800 font-medium">
                  최근 연결 카테고리
                </button>
              </div>

              {/* 카테고리 목록 */}
              <div className="border border-gray-300 p-2">
                {/* 헤더 */}
                <div className="flex text-sm font-semibold text-gray-600 mb-1">
                  <div className="flex-1 text-center">1차 카테고리</div>
                  <div className="flex-1 text-center">2차 카테고리</div>
                  <div className="flex-1 text-center">3차 카테고리</div>
                  <div className="flex-1 text-center">4차 카테고리</div>
                </div>

                {/* 목록 컨테이너 */}
                <CategorySelector
                  selectedPath={currentSelectedPath}
                  onSelect={onSelectCategory}
                  columns={4}
                />

                {/* 선택 버튼 */}
                <div className="flex justify-center mt-4">
                  <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-150 disabled:bg-gray-400"
                    onClick={handleAddCategory}
                    disabled={currentSelectedPath.length === 0}
                  >
                    선택
                  </button>
                </div>
              </div>
            </div>
          </div>

          <hr className="my-4" />

          {/* 선택한 카테고리 영역 */}
          <div className="flex mt-4">
            <div className="w-1/4 pr-4 border-r">
              <h3 className="text-md font-medium text-gray-800 mb-2">
                선택한 카테고리
              </h3>
            </div>
            <div className="w-3/4 pl-4">
              <div className="border border-gray-300">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-1/5">
                        대표
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase w-3/5">
                        카테고리
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase w-1/5">
                        삭제
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedCategories.map((category) => (
                      <tr key={category.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="radio"
                            name="representative-category"
                            checked={category.isRepresentative}
                            onChange={() =>
                              handleSetRepresentative(category.id)
                            }
                            className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">
                          {category.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            className="text-gray-400 hover:text-red-600"
                            onClick={() => handleDeleteCategory(category.id)}
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

          {/* 새 카테고리 생성 안내 */}
          <div className="mt-4 text-sm text-gray-500">
            - 신규 카테고리 생성은{" "}
            <a href="#" className="text-blue-600 hover:underline">
              카테고리
            </a>
            에서 합니다.
          </div>
        </>
      )}
    </div>
  );
}
