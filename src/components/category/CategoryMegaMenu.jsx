import React from "react";
import { useNavigate } from "react-router-dom";

const CategoryMegaMenu = ({ isOpen }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const handleCategorySelect = (main, sub) => {
    const slug = encodeURIComponent(sub.replace(/\//g, "-"));
    navigate(`/category/${main}/${slug}`);
  };

  return (
    <div className="absolute left-0 w-full bg-white border-t shadow-lg z-50 p-6">
      <div className="grid grid-cols-5 gap-8 text-sm text-gray-700">
        <CategoryColumn
          title="스킨케어"
          items={[
            "스킨/토너",
            "에센스/세럼/앰플",
            "크림",
            "로션",
            "미스트/오일",
            "스킨케어 세트",
          ]}
          onItemClick={(sub) => handleCategorySelect("뷰티", sub)}
        />

        <CategoryColumn
          title="메이크업"
          items={["립", "베이스메이크업", "아이메이크업", "네일"]}
          onItemClick={(sub) => handleCategorySelect("뷰티", sub)}
        />

        <CategoryColumn
          title="헤어케어"
          items={["샴푸/린스", "트리트먼트/팩", "두피앰플/토닉"]}
          onItemClick={(sub) => handleCategorySelect("뷰티", sub)}
        />

        <CategoryColumn
          title="바디케어"
          items={["바디워시", "바디로션", "핸드크림"]}
          onItemClick={(sub) => handleCategorySelect("뷰티", sub)}
        />

        <CategoryColumn
          title="향수/디퓨저"
          items={["향수", "미니/고체향수", "홈프래그런스"]}
          onItemClick={(sub) => handleCategorySelect("뷰티", sub)}
        />
      </div>
    </div>
  );
};

const CategoryColumn = ({ title, items, onItemClick }) => (
  <div>
    <h3 className="font-semibold mb-3 text-black">{title}</h3>
    <ul className="space-y-1">
      {items.map((item) => (
        <li
          key={item}
          className="hover:text-black cursor-pointer"
          onClick={() => onItemClick(item)}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default CategoryMegaMenu;
