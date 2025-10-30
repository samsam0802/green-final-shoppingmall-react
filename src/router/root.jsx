import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminIndex from "../pages/admin/AdminIndex";
import adminRouter from "./adminRouter";

const Main = lazy(() => import("../pages/user/MainPage"));
const LoginPage = lazy(() => import("../pages/user/LoginPage"));
const SignPage = lazy(() => import("../pages/user/SignUpPage"));
const ReviewPage = lazy(() => import("../components/ReviewListComponent"));
const ReviewAddPage = lazy(() =>
  import("../components/ReviewActionsComponent")
);

const ProductList = lazy(() => import("../pages/product/ProductListPage"));
const ProductDetail = lazy(() => import("../pages/product/ProductDetailPage"));
const Order = lazy(() => import("../pages/order/OrderPage"));
const OrderComplete = lazy(() => import("../pages/order/OrderCompletePage"));
const OrderHistory = lazy(() => import("../pages/order/OrderHistoryPage"));
const Cart = lazy(() => import("../pages/cart/CartPage"));
const AdminOrdMgrPage = lazy(() =>
  import("../components/AdminOrderMgrComponent")
);
const Loading = <div>Loading...</div>;

const root = createBrowserRouter([
  {
    path: "",
    element: (
      <Suspense fallback={Loading}>
        <Main />
      </Suspense>
    ),
  },
  {
    path: "loginpage",
    element: (
      <Suspense fallback={Loading}>
        <LoginPage />
      </Suspense>
    ),
  },
  {
    path: "joinpage",
    element: (
      <Suspense fallback={Loading}>
        <SignPage />
      </Suspense>
    ),
  },
  {
    path: "product/list",
    element: (
      <Suspense fallback={Loading}>
        <ProductList />
      </Suspense>
    ),
  },
  {
    path: "product/detail/:id",
    element: (
      <Suspense fallback={Loading}>
        <ProductDetail />
      </Suspense>
    ),
  },
  {
    path: "order",
    element: (
      <Suspense fallback={Loading}>
        <Order />
      </Suspense>
    ),
  },
  {
    path: "order/complete",
    element: (
      <Suspense fallback={Loading}>
        <OrderComplete />
      </Suspense>
    ),
  },
  {
    path: "order/history",
    element: (
      <Suspense fallback={Loading}>
        <OrderHistory />
      </Suspense>
    ),
  },
  {
    path: "cart",
    element: (
      <Suspense fallback={Loading}>
        <Cart />
      </Suspense>
    ),
  },
  {
    path: "review",
    element: (
      <Suspense fallback={Loading}>
        <ReviewPage />
      </Suspense>
    ),
  },
  {
    path: "reviewadd",
    element: (
      <Suspense fallback={Loading}>
        <ReviewAddPage />
      </Suspense>
    ),
  },
  {
    path: "adminordmgr",
    element: (
      <Suspense fallback={Loading}>
        <AdminOrdMgrPage />
      </Suspense>
    ),
  },
  {
    path: "admin",
    element: (
      <Suspense fallback={Loading}>
        <AdminIndex />
      </Suspense>
    ),
    children: adminRouter(),
  },
]);

export default root;
