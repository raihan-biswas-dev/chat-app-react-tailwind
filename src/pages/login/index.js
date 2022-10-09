import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";

function Login() {
  return (
    <div className="flex">
      <div className="w-1/2 flex flex-col items-end pr-[69px]  justify-center">
        <div className="w-[497px]">
          <h2 className="font-bold text-[34px] text-nun text-primary">
            Login to your account!
          </h2>
          <div className="flex gap-x-2 mt-8">
            <button className="py-4 px-[40px] border-[1px] rounded-lg shadow-lg">
              <FcGoogle className="inline-block text-[20px]" /> Login with
              Google
            </button>
            <button className="py-4 px-[40px] border-[1px]  rounded-lg shadow-lg">
              <FaFacebookSquare className="inline-block text-[20px]" /> Login
              with Facebook
            </button>
          </div>
          <div className="relative">
            <input
              className="border-b border-solid border-black w-full	py-6 mt-8 outline-0"
              type="email"
            />
            <p className="text-nun font-semibold text-3.5 absolute top-[19px] bg-white">
              Email Addres
            </p>
          </div>
          <div className="relative">
            <input
              className="border-b border-solid border-black w-full	py-6 mt-8 outline-0"
              type="password"
            />
            <p className="text-nun font-semibold text-3.5 absolute top-[19px] bg-white">
              Password
            </p>
          </div>
          <button
            class="rounded-full w-full 
          text-center bg-primary py-5 px-36 text-white font-nun font-semibold text-xl mt-8"
          >
            Sign In
          </button>
          <p className="font-open font-normal	text-primary mt-8 w-full text-center">
            Don’t have an account ?
            <Link className="font-bold font-nun text-bold ml-2" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>

      {/* Raght Welcome Side */}
      <div className="w-1/2 h-screen bg-primary">
        <div className="flex flex-col  justify-center items-center h-screen py-8">
          <picture>
            <img src="images/logo.png" alt="" loading="lazy" className="w-52" />
          </picture>
          <h2 className="!text-white font-nun text-4xl font-extrabold">
            Welcome To Our{" "}
            <span className="text-yell font-extrabold text-5xl">Chaty!</span>
          </h2>
          <p className="text-white text-nun text-base w-[439px] leading-5 mt-4 font-normal">
            If you are working on something that you really care about, you
            don’t have to be pushed. The vision pulls you
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
