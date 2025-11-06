import React, { useState } from "react";
import { ChevronUp, ChevronDown, Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { updateProductRegisterForm } from "../../../redux/slices/features/admin/product/productRegisterSlice";

// 임시 데이터
const categoriesData = [
  {
    id: 1,
    name: "의류",
    depth: 1,
    subCategories: [
      {
        id: 2,
        name: "탑",
        depth: 2,
        subCategories: [
          { id: 3, name: "티셔츠", depth: 3 },
          { id: 4, name: "블라우스", depth: 3 },
          { id: 5, name: "후드티", depth: 3 },
        ],
      },
      { id: 6, depth: 2, name: "아우터" },
      { id: 7, depth: 2, name: "드레스" },
      { id: 8, depth: 2, name: "스커트" },
      { id: 9, depth: 2, name: "팬츠" },
    ],
  },
  { id: 10, depth: 1, name: "유아동" },
  { id: 11, depth: 1, name: "화장품" },
  { id: 12, depth: 1, name: "인테리어" },
  { id: 13, depth: 1, name: "가전" },
  { id: 14, depth: 1, name: "악세사리" },
  { id: 15, depth: 1, name: "티켓" },
];

// 카테고리 경로를 문자열로 변환하는 헬퍼 함수
const getCategoryPath = (path) => path.map((c) => c.name).join(" > ");

// 하나의 열에 카테고리 목록을 렌더링하는 컴포넌트
// categories : subCategories, selectedCategory:currentSelectedPath[depth], onSelect:onSelectCategory
const CategoryColumn = ({ categories, selectedCategory, onSelect }) => (
  <div className="flex-1 bg-white border border-gray-300 rounded-md h-64 overflow-y-auto">
    <ul className="divide-y divide-gray-100">
      {categories.map((category) => (
        <li
          key={category.id}
          className={`px-4 py-2.5 cursor-pointer transition-all duration-150 ${
            selectedCategory?.id === category.id
              ? "bg-blue-600 text-white font-medium"
              : "hover:bg-blue-50 text-gray-700"
          }`}
          onClick={() => onSelect(category)}
        >
          {category.name}
        </li>
      ))}
    </ul>
  </div>
);

// 4개의 열을 만들어내는 컴포넌트
// 첫번째 열은 1차 카테고리, depth=0 , 두번째 열은 2차 카테고리, depth=1
// selectedPath : currentSelectedPath, onSelect: onSelectCategory, columns:4
const CategorySelector = ({ selectedPath, onSelect, columns }) => {
  const getSubCategories = (depth) => {
    if (depth === 0) return categoriesData;
    let current = selectedPath[depth - 1];
    return current?.subCategories || [];
  };

  return (
    <div className="flex space-x-2">
      {Array.from({ length: columns }).map((_, depth) => (
        <CategoryColumn
          key={depth}
          categories={getSubCategories(depth)}
          selectedCategory={selectedPath[depth]}
          onSelect={(category) => onSelect(category, depth)}
        />
      ))}
    </div>
  );
};

export default function ProductCategory() {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(true);
  // 선택된 경로: [{ id: '1', name: '의류', ... }, { id: '2', name: '탑', ... }]
  const [currentSelectedPath, setCurrentSelectedPath] = useState([]);
  // 백엔드로 넘길 등록 카테고리 정보 : selectedCategories (실제로는 1개만 선택되서 1개만 등록할 예정)
  const [selectedCategories, setSelectedCategories] = useState([
    {
      id: 2,
      name: "의류 > 탑",
      isRepresentative: true,
    },
  ]);

  const onSelectCategory = (category, depth) => {
    // 현재 레벨 전까지 자르고 새 카테고리를 추가
    const newPath = currentSelectedPath.slice(0, depth);
    const temp = [...newPath, category];
    console.log("currentSelectedPath : ", temp);
    setCurrentSelectedPath(temp);
  };

  const addCategoryHandler = () => {
    if (currentSelectedPath.length > 0) {
      const lastCategory = currentSelectedPath[currentSelectedPath.length - 1];
      const newCategory = {
        id: lastCategory.id,
        name: getCategoryPath(currentSelectedPath),
        isRepresentative: true,
      };

      // 최하위 카테고리 하나만 선택되도록 함
      setSelectedCategories([newCategory]);
      setCurrentSelectedPath([]);
      // Redux state 관리
      dispatch(
        updateProductRegisterForm({
          section: "category",
          data: newCategory,
        })
      );
    }
    console.log("selectedCategories : ", selectedCategories);
  };

  const deleteCategoryHandler = (id) => {
    setSelectedCategories(selectedCategories.filter((c) => c.id !== id));
  };

  const setRepresentativeHandler = (id) => {
    setSelectedCategories(
      selectedCategories.map((c) => ({
        ...c,
        isRepresentative: c.id === id,
      }))
    );
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        {/* 카테고리 선택 헤더 */}
        <div
          className="flex justify-between items-center px-6 py-4 bg-linear-to-r from-gray-50 to-gray-100 cursor-pointer hover:from-gray-100 hover:to-gray-200 transition-all"
          onClick={() => setIsOpen(!isOpen)}
        >
          <h2 className="text-xl font-bold text-gray-800">카테고리</h2>
          <button className="text-gray-600 hover:text-gray-900 transition-colors">
            {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="p-6">
            {/* 카테고리 선택 영역 */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  카테고리 선택
                </h3>
                <button className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1 transition-colors">
                  <span>최근 연결 카테고리</span>
                </button>
              </div>

              {/* 카테고리 목록 */}
              <div className="bg-gray-50 rounded-lg border border-gray-200 p-4">
                {/* 헤더 */}
                <div className="flex text-sm font-semibold text-gray-700 mb-3 px-1">
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
                <div className="flex justify-center mt-5">
                  <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 px-8 rounded-lg transition-all duration-200 disabled:bg-gray-300 disabled:cursor-not-allowed shadow-sm hover:shadow-md"
                    onClick={addCategoryHandler}
                    disabled={currentSelectedPath.length === 0}
                  >
                    선택한 카테고리 추가
                  </button>
                </div>
              </div>
            </div>

            {/* 선택한 카테고리 영역 */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                선택한 카테고리
              </h3>
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-1/6">
                        대표
                      </th>
                      <th className="px-6 py-3.5 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider w-4/6">
                        카테고리
                      </th>
                      <th className="px-6 py-3.5 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider w-1/6">
                        삭제
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {selectedCategories.map((category) => (
                      <tr
                        key={category.id}
                        className="hover:bg-gray-50 transition-colors"
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-center">
                          <input
                            type="radio"
                            name="representative-category"
                            checked={category.isRepresentative}
                            onChange={() =>
                              setRepresentativeHandler(category.id)
                            }
                            className="w-4 h-4 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {category.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            className="text-gray-400 hover:text-red-600 transition-colors p-1 rounded hover:bg-red-50"
                            onClick={() => deleteCategoryHandler(category.id)}
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

            {/* 새 카테고리 생성 안내 */}
            <div className="mt-6 px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-gray-700">
                💡 신규 카테고리 생성은{" "}
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-medium underline"
                >
                  카테고리 관리
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
