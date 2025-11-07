import React from "react";
import { useNavigate } from "react-router-dom";
import { CATEGORY_DATA } from "../../data/categories";
import { ChevronRight } from "lucide-react";

const slug = (s) => encodeURIComponent(String(s).replace(/\//g, "-"));

const CategoryMegaMenu = ({ isOpen }) => {
  const navigate = useNavigate();
  if (!isOpen) return null;

  const goMain = (main) => navigate(`/category/${slug(main)}`);
  const goSub = (main, sub) => navigate(`/category/${slug(main)}/${slug(sub)}`);
  const goDeep = (main, sub, deep) =>
    navigate(`/category/${slug(main)}/${slug(sub)}/${slug(deep)}`);

  return (
    <div className="absolute left-0 w-full bg-white border-t border-gray-200 shadow-xl z-50">
      <div className="max-w-7xl mx-auto py-8 px-6">
        <div className="grid grid-cols-5 gap-8">
          {CATEGORY_DATA.map((col) => (
            <div key={col.main} className="space-y-4">
              {/* ✅ 1차 카테고리 클릭 가능 */}
              <h3
                className="text-base font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors flex items-center gap-1 group"
                onClick={() => goMain(col.main)}
              >
                {col.main}
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </h3>

              {/* ✅ 2차/3차 */}
              <ul className="space-y-2">
                {col.subs.map((s) => (
                  <li key={s.name}>
                    <button
                      className="text-sm text-gray-600 hover:text-gray-900 hover:translate-x-1 transition-all duration-200 flex items-center gap-1.5 group"
                      onClick={() => goSub(col.main, s.name)}
                    >
                      <span className="w-1 h-1 bg-gray-400 rounded-full group-hover:bg-blue-600 transition-colors"></span>
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
    </div>
  );
};

export default CategoryMegaMenu;
