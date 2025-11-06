import HomeBar from "../../layouts/mainpage/HomeBar";
import LoginComponent from "../../components/user/login/LoginComponent";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* 상단 공통 바 */}
      <HomeBar />
      <LoginComponent />
    </div>
  );
};

export default LoginPage;
