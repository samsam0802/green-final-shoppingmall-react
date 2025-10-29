import React, { lazy, Suspense } from "react";

const Loading = <div>Loading...</div>;
const ProductSearch = lazy(() =>
  import("../components/admin/products/ProductSearchPage")
);

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
    // {
    //   path: "",
    //   element: <Navigate replace to="list" />,
    // },
  ];
};

export default adminRouter;
