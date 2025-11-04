import React from "react";

const UserInfoResultTable = () => {
  const headers = [
    "선택",
    "번호",
    "아이디",
    "이름(닉네임)",
    "이메일/핸드폰",
    "등급",
    "가입일",
    "관리",
  ];

  const dummyData = [
    {
      id: 1,
      username: "user1",
      nickname: "닉1",
      email: "user1@test.com",
      phone: "010-0000-0001",
      grade: "일반",
      joinDate: "2025-10-30",
      status: "정상",
    },
    {
      id: 2,
      username: "user2",
      nickname: "닉2",
      email: "user2@test.com",
      phone: "010-0000-0002",
      grade: "매니저",
      joinDate: "2025-10-29",
      status: "휴면",
    },
    {
      id: 3,
      username: "user3",
      nickname: "닉3",
      email: "user3@test.com",
      phone: "010-0000-0003",
      grade: "관리자",
      joinDate: "2025-10-28",
      status: "탈퇴",
    },
  ];

  const gradeOptions = ["일반", "매니저", "관리자"];

  return (
    <div className="w-full mt-6">
      {/* 상단 컨트롤 영역 */}
      <div className="flex justify-between items-center mb-3 text-gray-700 flex-wrap gap-2 px-2">
        <span className="font-semibold text-lg">
          검색 결과 (총 {dummyData.length} 명)
        </span>

        <div className="flex items-center gap-2 flex-wrap">
          <button className="bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1 rounded-md border border-blue-200 cursor-pointer transition shadow-sm">
            이메일 발송
          </button>
          <button className="bg-green-50 text-green-700 hover:bg-green-100 px-3 py-1 rounded-md border border-green-200 cursor-pointer transition shadow-sm">
            SMS 발송
          </button>
          <button className="bg-gray-200 text-gray-700 px-3 py-1 rounded-md border border-gray-300 cursor-pointer hover:bg-gray-300 transition shadow-sm">
            다운로드
          </button>

          {/* 정렬 기준 드롭다운 */}
          <select
            defaultValue="recent"
            className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md cursor-pointer bg-white shadow-sm hover:bg-gray-50 transition"
          >
            <option value="recent">최근 가입 순</option>
            <option value="old">오래된 가입 순</option>
          </select>

          {/* 페이지당 표시 개수 드롭다운 */}
          <select
            defaultValue="10"
            className="border border-gray-300 text-gray-700 px-3 py-1 rounded-md cursor-pointer bg-white shadow-sm hover:bg-gray-50 transition"
          >
            <option value="10">10개</option>
          </select>
        </div>
      </div>

      {/* 테이블 영역 */}
      <div className="overflow-x-auto border border-gray-300 rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-300 text-sm text-center">
          <thead className="bg-gray-100">
            <tr className="text-gray-700 font-semibold text-sm">
              {headers.map((header) => (
                <th key={header} className="px-3 py-3 whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {dummyData.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50 transition">
                <td className="px-2 py-3">
                  <input
                    type="checkbox"
                    className="w-3.5 h-3.5 accent-blue-600 cursor-pointer"
                  />
                </td>
                <td className="px-3 py-3">{user.id}</td>
                <td className="px-3 py-3 text-blue-600 cursor-pointer hover:underline">
                  {user.username}
                </td>
                <td className="px-3 py-3">{user.nickname}</td>
                <td className="px-3 py-3">
                  {user.email} / {user.phone}
                </td>
                <td className="px-3 py-3">
                  <select
                    defaultValue={user.grade}
                    className="border border-gray-300 px-2 py-[2px] text-sm text-gray-700 outline-none rounded-md"
                  >
                    {gradeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-3 py-3">{user.joinDate}</td>
                <td className="px-3 py-3">
                  <div className="flex items-center justify-center gap-1 whitespace-nowrap">
                    <span
                      className={`px-2 py-1 text-xs font-semibold rounded-full ${
                        user.status === "정상"
                          ? "bg-green-100 text-green-800"
                          : user.status === "휴면"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                    {user.status === "탈퇴" && (
                      <button className="text-blue-600 text-sm px-1 py-[1px] cursor-pointer">
                        복구
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfoResultTable;
