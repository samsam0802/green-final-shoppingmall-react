// import { useState } from "react";

// export default function ProductDetailQnA() {
//   const qna = [
//     { q: "재입고 언제 되나요?", a: "다음주 예정입니다.", status: "답변완료" },
//     { q: "향이 강한가요?", a: null, status: "답변대기" },
//   ];

//   return (
//     <div className="py-12 space-y-4 text-sm">
//       {qna.map((item, i) => (
//         <div key={i} className="border p-5 rounded-lg">
//           <div className="flex justify-between mb-2">
//             <span className="font-semibold">Q. {item.q}</span>
//             <span
//               className={`text-xs px-2 py-1 rounded ${
//                 item.status === "답변완료"
//                   ? "bg-green-100 text-green-600"
//                   : "bg-gray-200 text-gray-600"
//               }`}
//             >
//               {item.status}
//             </span>
//           </div>

//           {item.a && (
//             <div className="mt-3 text-gray-600">
//               <span className="font-medium text-gray-700">A.</span> {item.a}
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }
