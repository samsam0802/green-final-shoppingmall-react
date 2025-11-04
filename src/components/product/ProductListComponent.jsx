// src/pages/product/ProductListComponent.jsx
import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../data/products";
import { CATEGORY_DATA } from "../../data/categories";

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

  const [filters, setFilters] = useState({});
  const [sort, setSort] = useState("인기순");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

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
    <div className="max-w-6xl mx-auto p-8 flex gap-8 text-[#111111]">
      {/* ✅ 사이드바 */}
      <aside className="w-56 text-sm border-r pr-5">
        <h2 className="text-[18px] font-bold pb-3 border-b border-gray-300">
          {decodedMain}
        </h2>

        <ul className="mt-4 space-y-3">
          {sideCategory?.subs.map((item) => {
            const isActiveSub = decodedSub === item.name;
            return (
              <li key={item.name}>
                <Link
                  to={`/category/${main}/${encodeURIComponent(
                    item.name.replace(/\//g, "-")
                  )}`}
                  className={`block ${
                    isActiveSub ? "text-black font-semibold" : "text-gray-600"
                  } hover:text-black hover:font-semibold transition`}
                >
                  {item.name}
                </Link>

                {isActiveSub && item.children?.length > 0 && (
                  <ul className="mt-2 space-y-1 ml-3 border-l pl-3 border-gray-200">
                    {item.children.map((child) => (
                      <li key={child}>
                        <Link
                          to={`/category/${main}/${encodeURIComponent(
                            item.name.replace(/\//g, "-")
                          )}/${encodeURIComponent(child.replace(/\//g, "-"))}`}
                          className={`block ${
                            decodedDeep === child
                              ? "text-black font-semibold"
                              : "text-gray-400"
                          } hover:text-black transition`}
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
      </aside>

      {/* ✅ 오른쪽 상품 목록 영역 */}
      <div className="flex-1">
        <h1 className="text-xl font-bold mb-6">
          {decodedMain}
          {decodedSub && ` > ${decodedSub}`}
          {decodedDeep && ` > ${decodedDeep}`}
        </h1>

        {/* 필터 / 정렬 */}
        <ProductFilterBar
          filters={filters}
          setFilters={setFilters}
          brandOptions={[]}
        />
        <ProductSortBar sort={sort} setSort={setSort} />

        {/* ✅ 상품 그리드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          {pagedProducts.map((product) => (
            <div
              key={product.id}
              className="rounded-lg overflow-hidden hover:shadow-md transition"
            >
              <ProductCard product={product} />
            </div>
          ))}

          {pagedProducts.length === 0 && (
            <p className="text-gray-500 text-sm mt-6">
              등록된 상품이 없습니다.
            </p>
          )}
        </div>

        {/* ✅ 페이지네이션 */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ProductListComponent;
