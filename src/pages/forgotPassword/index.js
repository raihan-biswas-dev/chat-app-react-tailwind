import React from "react";

function ForgotPassword() {
  return (
    <div className="w-full h-screen bg-primary flex justify-center items-center">
      <div className="p-12 bg-white rounded font-pop font-bold">
        <h1 className="text-primary font-bold text-2xl">Forgot Password</h1>
        <div className="relative">
          <input
            className="border border-solid border-black w-full rounded-lg font-normal	px-[38px] py-2	sml:py-6 mt-8 outline-0"
            type="email"
            placeholder="Enter your mail"
          />
        </div>
        <button
          className="rounded-full w-full 
          text-center bg-primary py-2 md:px-4 text-white font-nun font-semibold text-xl mt-8"
        >
          Sign In
        </button>
      </div>
    </div>
  );
}

export default ForgotPassword;
