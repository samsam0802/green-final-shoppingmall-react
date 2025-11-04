import React from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORY_DATA } from "../../data/categories";

const slug = (s) => encodeURIComponent(String(s).replace(/\//g, "-"));

const CategoryMegaMenu = ({ isOpen }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const goMain = (main) => navigate(`/category/${slug(main)}`);
  const goSub = (main, sub) => navigate(`/category/${slug(main)}/${slug(sub)}`);
  const goDeep = (main, sub, deep) =>
    navigate(`/category/${slug(main)}/${slug(sub)}/${slug(deep)}`);

  return (
    <div className="absolute left-0 w-full bg-white border-t shadow-lg z-50 p-6">
      <div className="grid grid-cols-5 gap-8 text-sm text-gray-700">
        {CATEGORY_DATA.map((col) => (
          <div key={col.main}>
            {/* ✅ 1차 카테고리 클릭 가능 */}
            <h3
              className="font-semibold mb-3 text-black cursor-pointer hover:text-[#111]"
              onClick={() => goMain(col.main)}
            >
              {col.main}
            </h3>

            {/* ✅ 2차/3차 */}
            <ul className="space-y-1">
              {col.subs.map((s) => (
                <li key={s.name} className="mb-2">
                  <button
                    className="hover:text-black cursor-pointer"
                    onClick={() => goSub(col.main, s.name)}
                  >
                    {s.name}
                  </button>

                  {/* 3차 카테고리는 카테고리 메뉴에서 제거 */}
                  {/* {s.children?.length > 0 && (
                    <ul className="ml-2 mt-1 space-y-1 text-gray-500">
                      {s.children.map((deep) => (
                        <li key={deep}>
                          <button
                            className="hover:text-black cursor-pointer"
                            onClick={() => goDeep(col.main, s.name, deep)}
                          >
                            {deep}
                          </button>
                        </li>
                      ))}
                    </ul>
                  )} */}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryMegaMenu;
