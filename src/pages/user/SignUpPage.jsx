// src/pages/join/JoinPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import AgreementStep from "../../components/user/signup/AgreementStep";
import InfoStep from "../../components/user/signup/InfoStep";
import SuccessStep from "../../components/user/signup/SuccessStep";
import HomeBar from "../../layouts/mainpage/HomeBar";
import SignUpChoiceModal from "../../components/user/signup/SignUpChoiceModal";

export default function JoinPage() {
  const [step, setStep] = useState(1);
  const [modalOpen, setModalOpen] = useState(true);

  const [terms, setTerms] = useState({
    tos: false,
    privacy: false,
    age14: false,
    sms: false,
    email: false,
  });

  const [form, setForm] = useState({
    username: "",
    password: "",
    password2: "",
    name: "",
    email: "",
    phone: "",
    birthY: "",
    birthM: "",
    birthD: "",
    marketingSms: false,
    marketingEmail: false,
  });

  // 모달 열릴 때 페이지 스크롤 잠금
  useEffect(() => {
    if (modalOpen) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");
    return () => document.body.classList.remove("overflow-hidden");
  }, [modalOpen]);

  const handleNormalJoin = () => {
    setModalOpen(false); // 모달 닫고
    setStep(1); // 약관 단계부터 시작
  };

  const handleSNS = (type) => {
    // TODO: 실제 SNS 연동 로직 필요 시 추가
    alert(`${type.toUpperCase()} 연동은 추후 추가`);
  };

  const page = useMemo(() => {
    if (step === 1)
      return (
        <AgreementStep
          value={terms}
          onChange={setTerms}
          onNext={() => setStep(2)}
        />
      );
    if (step === 2)
      return (
        <InfoStep
          value={form}
          onChange={setForm}
          onPrev={() => setStep(1)}
          onSubmit={() => setStep(3)}
        />
      );
    return <SuccessStep />;
  }, [step, terms, form]);

  return (
    <div className="min-h-screen bg-white">
      {/* 상단 홈/메인바 (항상 표시) */}
      <HomeBar />

      {/* 가입 방식 선택 모달 (열려 있을 때만 표시) */}
      {modalOpen && (
        <SignUpChoiceModal
          open
          onClose={() => setModalOpen(false)}
          onNormalJoin={handleNormalJoin}
          onSNS={handleSNS}
        />
      )}

      {/* 본문: 모달이 닫힌 후 렌더 */}
      {!modalOpen && (
        <div className="max-w-4xl mx-auto px-6 py-10">
          <h1 className="text-2xl font-bold mb-6">회원가입</h1>
          {page}
        </div>
      )}
    </div>
  );
}
