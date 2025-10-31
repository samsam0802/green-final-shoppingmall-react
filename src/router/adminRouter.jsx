import React, { lazy, Suspense } from "react";

const Loading = <div>Loading...</div>;
const ProductSearch = lazy(() =>
  import("../pages/admin/product/ProductSearchPage")
);
const ProductAdd = lazy(() => import("../pages/admin/product/ProductAddPage"));
const RestockNoti = lazy(() =>
  import("../pages/admin/restock/RestockNotiPage")
);
const SalesStatistics = lazy(() =>
  import("../pages/admin/statistics/SalesStatisticsPage")
);
const CouponManagement = lazy(() =>
  import("../pages/admin/coupon/CouponManagementPage")
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
    {
      path: "product/add",
      element: (
        <Suspense fallback={Loading}>
          <ProductAdd />
        </Suspense>
      ),
    },
    {
      path: "restock/noti",
      element: (
        <Suspense fallback={Loading}>
          <RestockNoti />
        </Suspense>
      ),
    },
    {
      path: "statistics",
      element: (
        <Suspense fallback={Loading}>
          <SalesStatistics />
        </Suspense>
      ),
    },
    {
      path: "coupon/register",
      element: (
        <Suspense fallback={Loading}>
          <CouponManagement />
        </Suspense>
      ),
    },
  ];
};

export default adminRouter;
