import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const LoginPage = lazy(() => import("../pages/LoginPage"));
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
]);

export default root;
