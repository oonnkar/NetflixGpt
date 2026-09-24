import { useState } from "react";

const Login = () => {
  const [signInForm, setSignInForm] = useState(true);

  function handleSignInClick() {
    setSignInForm(!signInForm);
  }

  return (
    <div className="relative flex min-h-screen items-center justify-center bg-black">
      <img
        className="absolute inset-0 h-full w-full object-cover opacity-50"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4263c437-c678-4724-ad80-e3ba0dc8761e/web/IN-en-20260921-TRIFECTA-perspective_95810136-2c4a-4ab4-a323-50418521e261_large.jpg"
        alt="Netflix background"
      />
      <div className="absolute inset-0 bg-black/40" />
      <form className="relative z-10 w-full max-w-md rounded-md bg-black/75 px-8 py-12 text-white shadow-xl sm:px-16">
        <h1 className="mb-7 text-3xl font-bold">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>
        <input
          className="mb-4 w-full rounded bg-[#333] px-4 py-4 text-sm text-white outline-none placeholder:text-gray-400 focus:bg-[#454545]"
          type="email"
          placeholder="Email or phone number"
        />
        {!signInForm && (
          <input
            className="mb-4 w-full rounded bg-[#333] px-4 py-4 text-sm text-white outline-none placeholder:text-gray-400 focus:bg-[#454545]"
            type="text"
            placeholder="Full name"
          />
        )}
        <input
          className="mb-6 w-full rounded bg-[#333] px-4 py-4 text-sm text-white outline-none placeholder:text-gray-400 focus:bg-[#454545]"
          type="password"
          placeholder="Password"
        />
        <button className="w-full rounded bg-[#e50914] py-3 font-semibold transition-colors hover:bg-[#f40612]">
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
        <p className="mt-12 text-gray-400">
          {signInForm ? "New to Netflix?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={handleSignInClick}
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
