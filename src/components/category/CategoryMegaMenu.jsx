import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CategoryMegaMenu = ({ isOpen }) => {
  const [activeTab, setActiveTab] = useState("뷰티");
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleClickList = () => {
    navigate({ pathname: "/product/list" });
  };

  return (
    <div className="absolute left-0 w-full bg-white border-t shadow-lg z-50 p-6">
      {/* 상위 카테고리 탭 */}
      <div className="flex gap-6 border-b pb-3 mb-4 text-sm font-medium">
        {["뷰티", "의류", "모자", "신발"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              ${
                activeTab === tab ? "text-black font-semibold" : "text-gray-500"
              }
            `}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* 카테고리별 내용 (내부는 와이어프레임 수준) */}
      <div className="grid grid-cols-4 gap-8 text-sm text-gray-600">
        {activeTab === "뷰티" && (
          <>
            <CategoryColumn
              title="스킨케어"
              items={["스킨/토너", "세럼", "크림", "패드", "선케어"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="메이크업"
              items={["립", "아이", "베이스", "네일"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="바디케어"
              items={["바디워시", "바디로션", "핸드크림"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="헤어케어"
              items={["샴푸", "트리트먼트", "헤어오일"]}
              onItemClick={handleClickList}
            />
          </>
        )}

        {activeTab === "의류" && (
          <>
            <CategoryColumn
              title="상의"
              items={["반팔", "긴팔", "셔츠", "후드", "니트"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="하의"
              items={["청바지", "슬랙스", "조거팬츠", "반바지"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="아우터"
              items={["자켓", "패딩", "가디건", "코트"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="원피스"
              items={["미니", "롱", "정장 원피스"]}
              onItemClick={handleClickList}
            />
          </>
        )}

        {activeTab === "모자" && (
          <>
            <CategoryColumn
              title="캡/볼캡"
              items={["베이직 캡", "로고 캡"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="비니"
              items={["니트 비니", "울 비니"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="버킷햇"
              items={["면", "패브릭", "촘촘 버킷햇"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="기타"
              items={["헤어밴드", "머플러와 함께"]}
              onItemClick={handleClickList}
            />
          </>
        )}

        {activeTab === "신발" && (
          <>
            <CategoryColumn
              title="운동화"
              items={["러닝화", "테니스화", "캔버스 스니커즈"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="구두"
              items={["로퍼", "옥스퍼드", "더비슈즈"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="샌들/슬리퍼"
              items={["쿠션 슬라이드", "리조트 샌들"]}
              onItemClick={handleClickList}
            />
            <CategoryColumn
              title="부츠"
              items={["첼시 부츠", "워커", "롱부츠"]}
              onItemClick={handleClickList}
            />
          </>
        )}
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
          onClick={onItemClick}
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default CategoryMegaMenu;
