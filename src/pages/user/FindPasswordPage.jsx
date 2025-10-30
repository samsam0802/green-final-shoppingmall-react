// src/pages/member/FindPasswordPage.jsx
import React, { useState } from "react";
import HomeBar from "../../layouts/mainpage/HomeBar";
import AuthCardLayout from "../../layouts/auth/AuthCardLayout";
import StepIndicator from "../../components/user/find-password/StepIndicator";
import StepAccount from "../../components/user/find-password/StepAccount";
import StepMethodSelect from "../../components/user/find-password/StepMethodSelect";
import StepVerifyCode from "../../components/user/find-password/StepVerifyCode";
import StepResetPassword from "../../components/user/find-password/StepResetPassword";

const FindPasswordPage = () => {
  const [step, setStep] = useState(1); // 1~4
  const [userId, setUserId] = useState("");
  const [method, setMethod] = useState("email");
  const [code, setCode] = useState("");

  return (
    <div className="min-h-screen bg-gray-50">
      <HomeBar />

      <div className="flex justify-center px-4 py-10">
        <AuthCardLayout
          title="비밀번호 찾기"
          description="본인 확인 후 새 비밀번호를 설정합니다."
        >
          <StepIndicator step={step} />

          {step === 1 && (
            <StepAccount
              userId={userId}
              setUserId={setUserId}
              onNext={() => setStep(2)}
            />
          )}

          {step === 2 && (
            <StepMethodSelect
              method={method}
              setMethod={setMethod}
              userId={userId}
              onNext={() => setStep(3)}
            />
          )}

          {step === 3 && (
            <StepVerifyCode
              method={method}
              code={code}
              setCode={setCode}
              onNext={() => setStep(4)}
            />
          )}

          {step === 4 && <StepResetPassword userId={userId} />}
        </AuthCardLayout>
      </div>
    </div>
  );
};

export default FindPasswordPage;
