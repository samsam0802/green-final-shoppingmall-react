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
    },
    {
      id: 2,
      username: "user2",
      nickname: "닉2",
      email: "user2@test.com",
      phone: "010-0000-0002",
      grade: "매니저",
      joinDate: "2025-10-29",
    },
    {
      id: 3,
      username: "user3",
      nickname: "닉3",
      email: "user3@test.com",
      phone: "010-0000-0003",
      grade: "관리자",
      joinDate: "2025-10-28",
    },
  ];

  const gradeOptions = ["일반", "매니저", "관리자"];

  return (
    <div className="border border-gray-300 bg-white mt-6 mx-auto w-full">
      {/* 상단 영역 */}
      <div className="p-3 border-b border-gray-300 flex justify-between items-center">
        <span>총 {dummyData.length}명의 회원이 검색되었습니다.</span>
        <div className="flex items-center gap-2">
          <button className="bg-blue-600 text-white px-4 py-2 text-sm font-medium cursor-pointer">
            이메일 발송
          </button>
          <button className="bg-green-600 text-white px-4 py-2 text-sm font-medium cursor-pointer">
            SMS 발송
          </button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 text-sm font-medium cursor-pointer">
            다운로드
          </button>
        </div>
      </div>

      {/* 테이블 영역 */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-center text-sm">
          <thead>
            <tr>
              {headers.map((h, i) => (
                <th
                  key={i}
                  className={`py-[6px] px-2 border-b border-r border-gray-300 text-gray-700 font-semibold ${
                    i === headers.length - 1 && "border-r-0"
                  }`}
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {dummyData.map((user, idx) => {
              const notLast = idx !== dummyData.length - 1;
              return (
                <tr key={user.id}>
                  {/* 선택 체크박스 */}
                  <td
                    className={`py-[6px] px-1 w-[45px] border-r border-gray-300 ${
                      notLast && "border-b border-gray-300"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="w-[14px] h-[14px] cursor-pointer accent-blue-600"
                    />
                  </td>

                  {/* 번호 */}
                  <td
                    className={`py-[6px] px-2 border-r border-gray-300 text-gray-700 ${
                      notLast && "border-b border-gray-300"
                    }`}
                  >
                    {user.id}
                  </td>

                  {/* 아이디 */}
                  <td
                    className={`py-[6px] px-2 border-r border-gray-300 text-gray-700 ${
                      notLast && "border-b border-gray-300"
                    }`}
                  >
                    {user.username}
                  </td>

                  {/* 이름(닉네임) */}
                  <td
                    className={`py-[6px] px-2 border-r border-gray-300 text-gray-700 ${
                      notLast && "border-b border-gray-300"
                    }`}
                  >
                    {user.nickname}
                  </td>

                  {/* 이메일 / 핸드폰 */}
                  <td
                    className={`py-[6px] px-2 border-r border-gray-300 text-gray-700 ${
                      notLast && "border-b border-gray-300"
                    }`}
                  >
                    {user.email} / {user.phone}
                  </td>

                  {/* 등급 */}
                  <td
                    className={`py-[6px] px-2 border-r border-gray-300 ${
                      notLast && "border-b border-gray-300"
                    }`}
                  >
                    <select
                      defaultValue={user.grade}
                      className="border border-gray-300 px-2 py-[2px] text-sm text-gray-700 outline-none"
                    >
                      {gradeOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </td>

                  {/* 가입일 */}
                  <td
                    className={`py-[6px] px-2 text-gray-700 ${
                      notLast && "border-b border-gray-300"
                    }`}
                  >
                    {user.joinDate}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* 하단 페이지네이션 */}
      <div className="flex justify-center items-center gap-2 p-4 border-t border-gray-300">
        <button className="px-3 py-1 border border-gray-300 text-sm cursor-pointer">
          이전
        </button>
        {Array.from({ length: 10 }, (_, i) => (
          <button
            key={i}
            className="px-3 py-1 border border-gray-300 text-sm cursor-pointer"
          >
            {i + 1}
          </button>
        ))}
        <button className="px-3 py-1 border border-gray-300 text-sm cursor-pointer">
          다음
        </button>
      </div>
    </div>
  );
};

export default UserInfoResultTable;
