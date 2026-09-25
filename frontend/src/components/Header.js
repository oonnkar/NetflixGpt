import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/__redux_store__/userSlice";
import { LOGO } from "../utils/constants";
import { toogleGPTSearchView } from "../utils/__redux_store__/GPTSlice";
import { changeLanguage } from "../utils/__redux_store__/userChoicesSlice";

const Header = () => {
  const [gptSearchClick, setGptSearchClick] = useState(false);
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const language = useSelector((store) => store.userChoices.lang);

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

  const handleGPTSearchClick = () => {
    setGptSearchClick(!gptSearchClick);
    dispatch(toogleGPTSearchView());
  };

  function setLanguage(lang) {
    dispatch(changeLanguage(lang));
  }

  return (
    <header className="absolute left-0 top-0 z-10 flex w-full items-center justify-between bg-[linear-gradient(180deg,#000_0%,rgba(0,0,0,0.82)_65%,transparent_100%)] px-[4%] py-5 backdrop-blur-[2px]">
      <img
        alt="Netflix"
        src={LOGO}
        className="h-9 w-auto transition-transform duration-200 hover:scale-105 sm:h-[42px]"
      />
      <div className="flex items-center gap-2 sm:gap-3">
        {user && (
          <>
            <div className="flex overflow-hidden rounded-md border border-white/40 bg-black/30 text-xs font-semibold text-white shadow-md backdrop-blur-sm sm:text-sm">
              {(gptSearchClick==true) && (
                <>
                  <button
                    type="button"
                    onClick={() => setLanguage("en")}
                    className={`px-3 py-2 transition-colors sm:px-4 ${
                      language === "en"
                        ? "bg-white text-black"
                        : "hover:bg-white/10"
                    }`}
                    aria-pressed={language === "en"}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => setLanguage("hi")}
                    className={`px-3 py-2 transition-colors sm:px-4 ${
                      language === "hi"
                        ? "bg-white text-black"
                        : "hover:bg-white/10"
                    }`}
                    aria-pressed={language === "hi"}
                  >
                    हिंदी
                  </button>
                </>
              )}
            </div>
            <button
              onClick={handleGPTSearchClick}
              className="rounded-md border border-white/25 bg-white/10 px-3 py-2 text-xs font-semibold text-white shadow-md backdrop-blur-sm transition-all duration-200 hover:border-white/60 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black sm:px-4 sm:text-sm"
            >
              GPT Search
            </button>
            <button
              onClick={handleSignOut}
              className="rounded-md bg-[#e50914] px-3 py-2 text-xs font-semibold text-white shadow-md transition-all duration-200 hover:bg-[#f6121d] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 focus:ring-offset-black sm:px-4 sm:text-sm"
            >
              Sign Out
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
