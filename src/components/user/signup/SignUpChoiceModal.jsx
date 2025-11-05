import React from "react";
import { useNavigate } from "react-router-dom";

export default function SignUpChoiceModal({
  open,
  onClose,
  onNormalJoin,
  onSNS,
}) {
  const navigate = useNavigate();

  if (!open) return null;

  // X 버튼 전용
  const handleCloseAndBack = () => {
    // 모달 닫는 로직을 부모가 넘겨줬다면 먼저 실행
    if (onClose) {
      onClose();
    }
    // 그리고 이전 페이지로
    navigate(-1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* 배경 클릭: 그냥 닫기만 */}
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative w-[560px] bg-white rounded-2xl shadow-xl p-8">
        {/* X 버튼: 닫고 뒤로가기 */}
        <button
          onClick={handleCloseAndBack}
          className="absolute right-4 top-4 text-zinc-400 hover:text-black text-xl"
          aria-label="close"
        >
          X
        </button>

        <div className="text-center">
          <h3 className="text-xl font-bold">일반 회원가입</h3>
          <p className="text-sm text-zinc-500 mt-1">
            일반 양식으로 회원가입을 합니다.
          </p>
          <button
            onClick={onNormalJoin}
            className="mt-4 block mx-auto h-12 w-72 rounded-md bg-amber-800 text-white font-semibold hover:opacity-90"
          >
            회원가입
          </button>
        </div>

        <div className="my-6 h-px bg-zinc-200" />

        <div className="text-center">
          <h3 className="text-xl font-bold">SNS로 회원가입</h3>
          <p className="text-sm text-zinc-500 mt-1">
            SNS 계정으로 간편하게 가입합니다.
          </p>

          <div className="mt-4 flex justify-center gap-3">
            <button
              onClick={() => onSNS("naver")}
              className="h-11 min-w-[88px] rounded-md bg-[#2DB400] text-white font-semibold px-4
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2DB400]/60"
              title="네이버"
            >
              네이버
            </button>
            <button
              onClick={() => onSNS("kakao")}
              className="h-11 min-w-[88px] rounded-md bg-[#FEE500] text-black font-semibold px-4
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FEE500]/60"
              title="카카오"
            >
              카카오
            </button>
            <button
              onClick={() => onSNS("google")}
              className="h-11 min-w-[88px] rounded-md bg-[#4285F4] text-white font-semibold px-4
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4285F4]/60"
              title="구글"
            >
              구글
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
