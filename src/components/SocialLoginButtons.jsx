import React from "react";

const SocialLoginButtons = () => {
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
    <div className="flex flex-col gap-3">
      <button
        className="p-3 rounded bg-yellow-400 font-bold"
        onClick={kakaologinbtn}
      >
        카카오로 로그인 버튼
      </button>

      <button
        className="p-3 rounded bg-emerald-500 text-white font-bold"
        onClick={naverloginbtn}
      >
        네이버로 로그인 버튼
      </button>

      <button
        className="p-3 rounded bg-blue-400 font-bold"
        onClick={googleloginbtn}
      >
        Google로 로그인 버튼
      </button>
    </div>
  );
};

export default SocialLoginButtons;
