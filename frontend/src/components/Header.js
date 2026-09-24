import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/__redux_store__/userSlice";
import { LOGO } from "../utils/constants";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({ uid: uid, emailId: email, displayName: displayName }),
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  return (
    <header className="absolute left-0 top-0 z-10 box-border flex w-full items-center justify-between bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.75)_70%,transparent_100%)] px-[4%] py-[18px]">
      <img
        alt="Netflix"
        src={LOGO}
        className="h-[42px] w-auto"
      />
      <div>
        {user && (
          <button
            onClick={handleSignOut}
            className="rounded bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-colors hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black"
          >
            Sign Out
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
