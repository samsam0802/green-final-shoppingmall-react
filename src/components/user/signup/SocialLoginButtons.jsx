import React from "react";

const SocialLoginButtons = ({ className = "" }) => {
  const kakaologinbtn = () => {
    console.log("카카오버튼이 눌렸습니다.");
  };

  const naverloginbtn = () => {
    console.log("네이버버튼이 눌렸습니다.");
  };

  const googleloginbtn = () => {
    console.log("구글버튼이 눌렸습니다.");
  };

  return (
    <div className={`space-y-3 ${className}`}>
      <button
        className="w-full h-11 cursor-pointer rounded-md border border-black-500/50 bg-yellow-400/90 text-sm font-semibold text-black flex items-center gap-3 px-3 hover:bg-emerald-50"
        onClick={kakaologinbtn}
      >
        <span className="flex-1 text-center">카카오 로그인</span>
      </button>

      <button
        className="w-full h-11 cursor-pointer rounded-md border border-black-500/50 bg-emerald-500 text-sm font-semibold text-black flex items-center gap-3 px-3 hover:bg-emerald-50"
        onClick={naverloginbtn}
      >
        <span className="flex-1 text-center">네이버 로그인</span>
      </button>

      <button
        className="w-full h-11 cursor-pointer rounded-md border border-black-500/50 bg-blue-400 text-sm font-semibold text-black flex items-center gap-3 px-3 hover:bg-emerald-50"
        onClick={googleloginbtn}
      >
        <span className="flex-1 text-center">Google 로그인</span>
      </button>
    </div>
  );
};

export default SocialLoginButtons;
