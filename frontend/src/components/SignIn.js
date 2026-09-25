import { useRef, useState } from "react";
import validateCredentials from "../utils/validateCredentials";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { NETFLIX_BACKGROUND } from "../utils/constants";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);
  const [errors, setErrors] = useState({});

  const email = useRef();
  const password = useRef();

  function handleSignInAndUp(event) {
    event.preventDefault();
    const validationErrors = validateCredentials(
      email.current.value.trim(),
      password.current.value,
    );
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }
    if (!signInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value.trim(),
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          setErrors({ form: error.message });
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value.trim(),
        password.current.value,
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          setErrors({ form: error.message });
        });
    }
  }

  function handleSignFormInClick() {
    setSignInForm(!signInForm);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src={NETFLIX_BACKGROUND}
        alt="Netflix background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/50 to-black/85" />
      <form className="relative z-10 my-4 w-[calc(100%-2rem)] max-w-md rounded-lg border border-white/10 bg-black/75 px-5 py-8 text-white shadow-2xl shadow-black/60 backdrop-blur-[2px] sm:px-16 sm:py-12">
        <h1 className="mb-7 text-2xl font-bold sm:text-3xl">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          ref={email}
          className="mb-4 w-full rounded bg-[#333] px-4 py-4 text-sm text-white outline-none placeholder:text-gray-400 focus:bg-[#454545]"
          type="email"
          placeholder="Email or phone number"
        />
        {errors.email && (
          <p className="-mt-2 mb-4 text-sm text-red-500">{errors.email}</p>
        )}
        {!signInForm && (
          <input
            className="mb-4 w-full rounded bg-[#333] px-4 py-4 text-sm text-white outline-none placeholder:text-gray-400 focus:bg-[#454545]"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          ref={password}
          className="mb-6 w-full rounded bg-[#333] px-4 py-4 text-sm text-white outline-none placeholder:text-gray-400 focus:bg-[#454545]"
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <p className="-mt-4 mb-4 text-sm text-red-500">{errors.password}</p>
        )}
        {errors.form && (
          <p className="-mt-4 mb-4 text-sm text-red-500">{errors.form}</p>
        )}
        <button
          onClick={handleSignInAndUp}
          className="w-full rounded bg-[#e50914] py-3 font-semibold transition-colors hover:bg-[#f40612]"
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>
        {signInForm && (
          <div className="mt-4 flex justify-between text-xs text-gray-400">
            <label className="flex items-center gap-1">
              <input type="checkbox" className="accent-gray-500" />
              Remember me
            </label>
            <a href="#" className="hover:underline">
              Need help?
            </a>
          </div>
        )}
        <p className="mt-8 text-sm text-gray-400 sm:mt-12 sm:text-base">
          {signInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={handleSignFormInClick}
            className="text-white hover:underline"
          >
            {signInForm ? "Sign up now." : "Sign in now."}
          </button>
        </p>
      </form>
    </div>
  );
};

export default Login;
