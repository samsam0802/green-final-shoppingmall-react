// src/pages/member/FindIdPage.jsx
import React, { useState } from "react";
import HomeBar from "../../layouts/mainpage/HomeBar";
import AuthCardLayout from "../../layouts/auth/AuthCardLayout";
import FindIdResult from "../../components/user/find-id/FindIdResult";
import FindIdForm from "../../components/user/find-id/FindIdForm";

const FindIdPage = () => {
  // 아이디를 찾았는지 여부 (없으면 폼, 있으면 결과)
  const [foundId, setFoundId] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeBar />

      <div className="flex justify-center px-4 py-10">
        <AuthCardLayout
          title="아이디 찾기"
          description="회원정보에 등록된 본인 정보로 아이디를 찾습니다."
        >
          {foundId ? (
            <FindIdResult idValue={foundId} onReset={() => setFoundId(null)} />
          ) : (
            <FindIdForm onSuccess={(id) => setFoundId(id)} />
          )}
        </AuthCardLayout>
      </div>
    </div>
  );
};

export default FindIdPage;
