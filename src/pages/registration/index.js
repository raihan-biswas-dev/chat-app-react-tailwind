import React from "react";

function Registration() {
  return (
    <div className="flex">
      <div className="w-1/2"></div>

      {/* Raght Welcome Side */}
      <div className="w-1/2 h-screen bg-primary">
        <div className="flex flex-col  justify-center items-center h-screen py-8">
          <picture>
            <img src="images/logo.png" alt="" loading="lazy" className="w-52" />
          </picture>
          <h2 className="!text-white font-nun text-3xl font-extrabold">
            Welcome To Our{" "}
            <span className="text-yell font-extrabold text-4xl">Chaty!</span>
          </h2>
          <p className="text-white font-nun text-xs w-[323px] leading-5 mt-4 font-normal">
            If you are working on something that you really care about, you
            don’t have to be pushed. The vision pulls you
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
