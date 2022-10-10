import React from "react";
import { Link } from "react-router-dom";

function Registration() {
  return (
    <div className="flex flex-col md:flex-row px-2.5 md:px-0">
      <div className="md:w-1/2 flex flex-col items-end md:pr-[69px]  justify-center order-2 md:order-1">
        <div className="md:w-[497px]">
          <h2 className="font-bold text-[34px] text-nun text-primary">
            Get started with easily register
          </h2>
          <p className="font-normal	text-xl text-nun self-center mt-2.5">
            Free register and you can enjoy it
          </p>
          <div className="relative">
            <input
              className="border border-solid border-black w-full rounded-lg	px-14	py-6 mt-8 outline-0"
              type="email"
            />
            <p className="text-nun font-semibold text-3.5 absolute top-[19px] left-9 bg-white px-2.5">
              Email Addres
            </p>
          </div>
          <div className="relative">
            <input
              className="border border-solid border-black w-full rounded-lg	pl-14	py-6 mt-8 outline-0"
              type="text"
            />
            <p className="text-nun font-semibold text-3.5 absolute top-[19px] left-9 bg-white px-2.5">
              Full name
            </p>
          </div>
          <div className="relative">
            <input
              className="border border-solid border-black w-full rounded-lg	pl-14	py-6 mt-8 outline-0"
              type="password"
            />
            <p className="text-nun font-semibold text-3.5 absolute top-[19px] left-9 bg-white px-2.5">
              Password
            </p>
          </div>
          <button
            class="rounded-full w-full 
          text-center bg-primary py-5 px-36 text-white font-nun font-semibold text-xl mt-8"
          >
            Sign Up
          </button>
          <p className="font-open font-normal	text-primary mt-8 w-full text-center">
            Already have an account ?
            <Link className="font-bold font-nun text-bold ml-2" to="/login">
              Sign In
            </Link>
          </p>
        </div>
      </div>

      {/* Raght Welcome Side */}
      <div className="md:w-1/2 md:h-screen bg-primary order-1 md:order-2">
        <div className="flex flex-col  justify-center items-center md:h-screen py-2 md:py-8">
          <picture className="hidden md:block">
            <img src="images/logo.png" alt="" loading="lazy" className="w-52" />
          </picture>
          <h2 className="!text-white font-nun text-4xl font-extrabold">
            Welcome To Our
            <span className="text-yell font-extrabold text-5xl">Chaty!</span>
          </h2>
          <p className="text-white text-nun text-base hidden md:block w-[439px] leading-5 mt-4 font-normal">
            If you are working on something that you really care about, you
            don’t have to be pushed. The vision pulls you
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
