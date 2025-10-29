import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import AdminIndex from "../pages/admin/AdminIndex";
import adminRouter from "./adminRouter";

const Main = lazy(() => import("../pages/user/MainPage"));
const LoginPage = lazy(() => import("../pages/user/LoginPage"));
const ReviewPage = lazy(() => import("../components/ReviewListComponent"));
const ReviewAddPage = lazy(() =>
  import("../components/ReviewActionsComponent")
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
