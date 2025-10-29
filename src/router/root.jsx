import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Main = lazy(() => import("../pages/user/MainPage"));
const LoginPage = lazy(() => import("../pages/user/LoginPage"));
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
]);

export default root;
