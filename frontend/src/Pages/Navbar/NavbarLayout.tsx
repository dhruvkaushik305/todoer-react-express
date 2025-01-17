import React from "react";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { isRunningAtom, timeAtom } from "../../store/stopwatch";
const NavbarLayout: React.FC = React.memo(() => {
  const isLoggedIn = localStorage.getItem("authorization") !== null;
  const setIsRunning = useSetRecoilState(isRunningAtom);
  const setTime = useSetRecoilState(timeAtom);
  const navigate = useNavigate();
  return (
    <div className="flex min-h-[4rem] w-full items-center justify-between bg-gray-200/95 px-2 md:justify-around">
      <header
        className="font-semiBold text-xl text-gray-800 sm:text-2xl md:text-3xl"
        onClick={() => navigate("/")}
      >
        Todoer
      </header>
      {isLoggedIn ? (
        <button
          onClick={() => {
            localStorage.removeItem("authorization");
            setIsRunning(false);
            setTime(0);
            navigate("/");
          }}
          className="rounded-md bg-gray-300 px-3 py-2 font-medium"
        >
          Logout
        </button>
      ) : (
        <div className="flex items-center justify-center gap-2">
          <button
            className="rounded-xl bg-gray-300 px-3 py-2 font-medium"
            onClick={() => navigate("/auth/login")}
          >
            Login
          </button>
          <button
            className="rounded-xl bg-gray-300 px-3 py-2 font-medium"
            onClick={() => navigate("/auth/signup")}
          >
            Signup
          </button>
        </div>
      )}
    </div>
  );
});
export default NavbarLayout;
