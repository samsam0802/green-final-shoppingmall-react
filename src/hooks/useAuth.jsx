import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user, isLoggedIn } = useSelector((state) => state.userSlice);

  const isAdmin = user?.user_Role === "admin";

  return {
    currentUser: user,
    isAdmin,
    isLoggedIn,
  };
};
