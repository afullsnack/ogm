import { FC } from "react";
import { logout } from "services/UserService";

const LogoutButton: FC = () => {
  return (
    <button
      class="bg-red-500 text-white hover:bg-red-400 px-2 py-1 w-full h-10 active:bg-red-600 tracking-wide mx-auto"
      onClick={() => {
        logout();
      }}>
      LOGOUT
    </button>
  );
};

export default LogoutButton;
