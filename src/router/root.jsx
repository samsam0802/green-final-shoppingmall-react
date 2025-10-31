import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminIndex from "../pages/admin/AdminIndex";
import adminRouter from "./adminRouter";
import mypageRouter from "./mypageRouter";

const Main = lazy(() => import("../pages/user/MainPage"));
const LoginPage = lazy(() => import("../pages/user/LoginPage"));
const SignPage = lazy(() => import("../pages/user/SignUpPage"));
const FindIdPage = lazy(() => import("../pages/user/FindIdPage"));
const FindPasswordPage = lazy(() => import("../pages/user/FindPasswordPage"));
const MyPageLayout = lazy(() => import("../layouts/mypage/MyPageLayout"));

const ReviewPage = lazy(() =>
  import("../components/review/ReviewListComponent")
);
const ReviewAddPage = lazy(() =>
  import("../components/review/ReviewActionsComponent")
);

const ProductList = lazy(() => import("../pages/product/ProductListPage"));
const ProductDetail = lazy(() => import("../pages/product/ProductDetailPage"));

const Order = lazy(() => import("../pages/order/OrderPage"));
const OrderComplete = lazy(() => import("../pages/order/OrderCompletePage"));

const Cart = lazy(() => import("../pages/cart/CartPage"));

const AdminOrdMgrPage = lazy(() =>
  import("../components/admin/order/AdminOrderMgrComponent")
);
const AdminUserInfoMgrPage = lazy(() =>
  import("../components/admin/user/UserInfoMgr")
);
const WithdrawalMemberMgrPage = lazy(() =>
  import("../components/admin/user/WithdrawalMemberMgr")
);

const Helpcenter = lazy(() => import("../pages/helpcenter/HelpCenterPage"));
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
    path: "findid",
    element: (
      <Suspense fallback={Loading}>
        <FindIdPage />
      </Suspense>
    ),
  },
  {
    path: "findpw",
    element: (
      <Suspense fallback={Loading}>
        <FindPasswordPage />
      </Suspense>
    ),
  },
  {
    path: "mypage",
    element: (
      <Suspense fallback={Loading}>
        <MyPageLayout />
      </Suspense>
    ),
    children: mypageRouter(),
  },
  {
    path: "category/:main/:sub",
    element: (
      <Suspense fallback={Loading}>
        <ProductList />
      </Suspense>
    ),
  },
  {
    path: "product/:id",
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
    path: "adminord",
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
  {
    path: "adminuser",
    element: (
      <Suspense fallback={Loading}>
        <AdminUserInfoMgrPage />
      </Suspense>
    ),
    children: adminRouter(),
  },
  {
    path: "adminusersecession",
    element: (
      <Suspense fallback={Loading}>
        <WithdrawalMemberMgrPage />
      </Suspense>
    ),
    children: adminRouter(),
  },
  {
    path: "helpcenter",
    element: (
      <Suspense fallback={Loading}>
        <Helpcenter />
      </Suspense>
    ),
  },
]);

export default root;
