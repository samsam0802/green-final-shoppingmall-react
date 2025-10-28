// import { lazy, Suspense } from "react";

// const { createBrowserRouter } = require("react-router-dom");
// const Loading = <div>Loading...</div>;

// const root = createBrowserRouter([
//   {
//     path: "",
//     element: (
//       <Suspense fallback={Loading}>
//         <Main />
//       </Suspense>
//     ),
//   },
//   {
//     path: "todo",
//     element: (
//       <Suspense fallback={Loading}>
//         <TodoIndex />
//       </Suspense>
//     ),
//     children: todoRouter(),
//   },
//   {
//     path: "score",
//     element: (
//       <Suspense fallback={Loading}>
//         <ScoreIndexPage />
//       </Suspense>
//     ),
//     children: scoreRouter(),
//   },
//   {
//     path: "products",
//     element: (
//       <Suspense fallback={Loading}>
//         <ProductsIndex />
//       </Suspense>
//     ),
//     children: productRouter(),
//   },
//   {
//     path: "address",
//     element: (
//       <Suspense fallback={Loading}>
//         <AddressIndex />
//       </Suspense>
//     ),
//     children: addressRouter(),
//   },
//   {
//     path: "member",
//     children: memberRouter(),
//   },
// ]);

// export default root;
