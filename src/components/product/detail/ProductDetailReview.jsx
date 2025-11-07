// import { useState } from "react";

// export default function ProductDetailReview() {
//   const [sort, setSort] = useState("recent");
//   const reviews = [
//     {
//       rating: 5,
//       text: "흡수가 빠르고 촉촉해요!",
//       img: "/images/review/rev1.jpg",
//       user: "happy**",
//       date: "2025.01.12",
//     },
//     {
//       rating: 4,
//       text: "가볍고 데일리로 쓰기 좋아요",
//       user: "moon**",
//       date: "2025.01.08",
//     },
//   ];

//   return (
//     <div className="py-12">
//       {/* 리뷰 헤더 */}
//       <div className="flex justify-between items-end mb-6">
//         <div>
//           <span className="text-3xl font-bold text-red-500">4.8</span>
//           <span className="text-gray-500 ml-2">(22,830)</span>
//         </div>

//         {/* 정렬 선택 */}
//         <select
//           className="border p-2 rounded text-sm"
//           value={sort}
//           onChange={(e) => setSort(e.target.value)}
//         >
//           <option value="recent">최신순</option>
//           <option value="high">별점 높은순</option>
//           <option value="low">별점 낮은순</option>
//         </select>
//       </div>

//       {/* 리뷰 목록 */}
//       <div className="space-y-6">
//         {reviews.map((r, i) => (
//           <div key={i} className="border p-5 rounded-lg text-sm text-gray-700">
//             <div className="text-yellow-400 text-lg">
//               {"★".repeat(r.rating)}{"☆".repeat(5 - r.rating)}
//             </div>
//             {r.img && <img src={r.img} className="w-32 rounded mt-3" />}
//             <div className="mt-3">{r.text}</div>
//             <div className="text-xs text-gray-500 mt-2">
//               {r.user} · {r.date}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
