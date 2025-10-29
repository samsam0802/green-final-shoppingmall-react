import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/LoginPage"));
const ReviewPage = lazy(() => import("../components/ReviewListComponent"));
const ReviewAddPage = lazy(() =>
  import("../components/ReviewActionsComponent")
);
const Loading = <div>Loading...</div>;

const root = createBrowserRouter([
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
]);

export default root;
