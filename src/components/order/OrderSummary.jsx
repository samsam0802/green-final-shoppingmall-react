// import React from "react";
// import { Link } from "react-router-dom";

// const OrderSummary = () => {
//   const summary = {
//     productPrice: 37000,
//     discount: 5000,
//     delivery: 2500,
//     total: 34500,
//   };

//   return (
//     <section className="border-t pt-6">
//       <h3 className="text-lg font-semibold mb-4">결제 요약</h3>

//       <div className="space-y-2 text-gray-700">
//         <div className="flex justify-between">
//           <span>상품 금액</span>
//           <span>{summary.productPrice.toLocaleString()}원</span>
//         </div>
//         <div className="flex justify-between">
//           <span>할인 금액</span>
//           <span className="text-red-500">
//             - {summary.discount.toLocaleString()}원
//           </span>
//         </div>
//         <div className="flex justify-between border-b pb-2">
//           <span>배송비</span>
//           <span>{summary.delivery.toLocaleString()}원</span>
//         </div>
//         <div className="flex justify-between font-semibold text-lg pt-3">
//           <span>총 결제 금액</span>
//           <span className="text-blue-600">
//             {summary.total.toLocaleString()}원
//           </span>
//         </div>
//       </div>

//       <div className="text-center mt-8">
//         <Link
//           to="/order/complete"
//           className="bg-blue-500 text-white px-10 py-3 rounded hover:bg-blue-600"
//         >
//           결제하기
//         </Link>
//       </div>
//     </section>
//   );
// };

// export default OrderSummary;
