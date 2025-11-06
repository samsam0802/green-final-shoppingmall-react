// src/pages/product/ProductListComponent.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/products";
import { CATEGORY_DATA } from "../../data/categories";
import { ChevronRight } from "lucide-react";

import ProductCard from "../../components/product/ProductCard";
import ProductSortBar from "./ProductSortBar";
import ProductFilterBar from "../filter/ProductFilterBar";
import Pagination from "./Pagination";

const ProductListComponent = () => {
  const { main, sub, deep } = useParams();

  const decodedMain = decodeURIComponent(main).replace(/-/g, "/");
  const decodedSub = sub ? decodeURIComponent(sub).replace(/-/g, "/") : null;
  const decodedDeep = deep ? decodeURIComponent(deep).replace(/-/g, "/") : null;

  // ✅ 제품 필터링
  let categoryProducts = products.filter((p) => p.categoryMain === decodedMain);

  if (decodedSub) {
    categoryProducts = categoryProducts.filter(
      (p) => p.categorySub === decodedSub
    );
  }

  if (decodedDeep) {
    categoryProducts = categoryProducts.filter(
      (p) => p.categoryDeep === decodedDeep
    );
  }

  console.log("decodedMain:", decodedMain);
  console.log("decodedSub:", decodedSub);
  console.log("decodedDeep:", decodedDeep);
  console.log(
    "products:",
    products.map((p) => ({
      main: p.categoryMain,
      sub: p.categorySub,
      deep: p.categoryDeep,
    }))
  );
  console.log("결과:", categoryProducts);

  //브랜드 필터(브랜드별로 상품 조회 가능하게 하는 필터)
  const [filters, setFilters] = useState({});

  //정렬 필터에 사용할 state
  const [sort, setSort] = useState("판매순");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  // 제품 브랜드들을 brandOptions에 담아서 ProductFilterBar에 전달(브랜드 별로 나오도록 필터 적용)
  // ✅ 수정 후: Set을 사용하여 중복 브랜드 제거
  const brandOptions = [...new Set(categoryProducts.map((p) => p.brand))];

  console.log("brandOptions:", brandOptions);

  // ✅ 정렬 (원하면 나중에 확장 가능)
  const sortedProducts = [...categoryProducts];

  // 예시: 정렬 기능은 필요 시 확장 가능

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
  const pagedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const sideCategory = CATEGORY_DATA.find((c) => c.main === decodedMain);

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 flex flex-col lg:flex-row gap-8">
      {/* ✅ 사이드바 */}
      <aside className="w-full lg:w-64 shrink-0">
        <div className="sticky top-4 bg-white rounded-2xl border-2 border-gray-200 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 pb-4 border-b-2 border-gray-900">
            {decodedMain}
          </h2>

          <ul className="mt-5 space-y-2">
            {sideCategory?.subs.map((item) => {
              const isActiveSub = decodedSub === item.name;
              return (
                <li key={item.name}>
                  <Link
                    to={`/category/${main}/${encodeURIComponent(
                      item.name.replace(/\//g, "-")
                    )}`}
                    className={`block px-4 py-2.5 rounded-lg transition-all ${
                      isActiveSub
                        ? "bg-gray-900 text-white font-semibold"
                        : "text-gray-700 hover:bg-gray-100 font-medium"
                    }`}
                  >
                    {item.name}
                  </Link>

                  {isActiveSub && item.children?.length > 0 && (
                    <ul className="mt-2 space-y-1 ml-4 pl-4 border-l-2 border-gray-300">
                      {item.children.map((child) => (
                        <li key={child}>
                          <Link
                            to={`/category/${main}/${encodeURIComponent(
                              item.name.replace(/\//g, "-")
                            )}/${encodeURIComponent(
                              child.replace(/\//g, "-")
                            )}`}
                            className={`block px-3 py-2 rounded-lg text-sm transition-all ${
                              decodedDeep === child
                                ? "bg-gray-100 text-gray-900 font-semibold"
                                : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                            }`}
                          >
                            {child}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </aside>

      {/* ✅ 오른쪽 상품 목록 영역 */}
      <div className="flex-1 min-w-0">
        {/* 브레드크럼 */}
        <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
          <span className="font-medium text-gray-900">{decodedMain}</span>
          {decodedSub && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-900">{decodedSub}</span>
            </>
          )}
          {decodedDeep && (
            <>
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="font-medium text-gray-900">{decodedDeep}</span>
            </>
          )}
        </nav>

        {/* 카테고리 제목 */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {decodedDeep || decodedSub || decodedMain}
          </h1>
          <p className="text-sm text-gray-500">
            총{" "}
            <span className="font-semibold text-gray-900">
              {sortedProducts.length}
            </span>
            개의 상품
          </p>
        </div>

        {/* 🔹 필터 / 정렬 - 수정된 부분 */}
        <div className="mb-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex flex-col gap-4">
            {/* 브랜드 필터 */}
            <ProductFilterBar
              filters={filters}
              setFilters={setFilters}
              brandOptions={brandOptions}
            />

            {/* 정렬 바 */}
            <ProductSortBar sort={sort} setSort={setSort} />
          </div>
        </div>

        {/* ✅ 상품 그리드 */}
        {pagedProducts.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {pagedProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 px-4">
            <div className="w-20 h-20 mb-4 rounded-full bg-gray-100 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
                />
              </svg>
            </div>
            <p className="text-gray-600 text-lg font-medium mb-1">
              등록된 상품이 없습니다
            </p>
            <p className="text-gray-400 text-sm">
              다른 카테고리를 선택해보세요
            </p>
          </div>
        )}

        {/* ✅ 페이지네이션 */}
        {totalPages > 1 && (
          <div className="mt-12">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductListComponent;
