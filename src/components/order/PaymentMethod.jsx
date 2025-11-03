// import React, { useState } from "react";

// const PaymentMethod = () => {
//   const [selected, setSelected] = useState("card");

//   return (
//     <section className="mb-10">
//       <h3 className="text-lg font-semibold mb-3">결제 수단</h3>

//       <div className="grid grid-cols-3 gap-4">
//         <button
//           onClick={() => setSelected("card")}
//           className={`border rounded p-4 ${
//             selected === "card"
//               ? "border-blue-500 bg-blue-50"
//               : "border-gray-300"
//           }`}
//         >
//           신용카드
//         </button>
//         <button
//           onClick={() => setSelected("kakao")}
//           className={`border rounded p-4 ${
//             selected === "kakao"
//               ? "border-blue-500 bg-blue-50"
//               : "border-gray-300"
//           }`}
//         >
//           카카오페이
//         </button>
//         <button
//           onClick={() => setSelected("naver")}
//           className={`border rounded p-4 ${
//             selected === "naver"
//               ? "border-blue-500 bg-blue-50"
//               : "border-gray-300"
//           }`}
//         >
//           네이버페이
//         </button>
//       </div>
//     </section>
//   );
// };

// export default PaymentMethod;
