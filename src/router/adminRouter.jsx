import React, { lazy, Suspense } from "react";

const Loading = <div>Loading...</div>;
const ProductSearch = lazy(() =>
  import("../pages/admin/product/ProductSearchPage")
);
const ProductAdd = lazy(() => import("../pages/admin/product/ProductAddPage"));

const adminRouter = () => {
  return [
    {
      path: "products",
      element: (
        <Suspense fallback={Loading}>
          <ProductSearch />
        </Suspense>
      ),
    },
    {
      path: "product/add",
      element: (
        <Suspense fallback={Loading}>
          <ProductAdd />
        </Suspense>
      ),
    },
  ];
};

export default adminRouter;
