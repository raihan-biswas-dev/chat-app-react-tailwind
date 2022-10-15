import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Registration() {
  let [email, setEmail] = useState("");
  let [fullName, setFullName] = useState("");
  let [password, setPassword] = useState("");

  let [emailErr, setEmailErr] = useState("");
  let [fullNameErr, setFullNameErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");

  let [show, setShow] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };
  let handleFullName = (e) => {
    setFullName(e.target.value);
    setFullNameErr("");
  };
  let handlePassWord = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  let handleSubmit = () => {
    if (!email) {
      setEmailErr("Email is required");
    } else {
      if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        setEmailErr("Valid Email is required");
      }
    }

    if (!fullName) {
      setFullNameErr("Full name is required");
    } else {
      if (fullName.length < 5) {
        setFullNameErr("Fullname must be greater then 5");
      }
    }

    if (!password) {
      setPasswordErr("Password is required");
    } else {
      if (!/^(?=.*[a-z])/.test(password)) {
        setPasswordErr("Password must contain at least one lowercase");
      } else if (!/^(?=.*[A-Z])/.test(password)) {
        setPasswordErr("Password must contain at least one uppercase ");
      } else if (!/^(?=.*[0-9])/.test(password)) {
        setPasswordErr("Password must contain at least one number ");
      } else if (!/^(?=.*[!@#$%^&*])/.test(password)) {
        setPasswordErr("Password must contain at least one special character ");
      } else if (!/^(?=.{8,})/.test(password)) {
        setPasswordErr("Password be eight characters or longer ");
      }
    }
  };

  let handlePasswordShow = () => {
    setShow(!show);
  };

  return (
    <div className="flex flex-col md:flex-row h-screen sml:flex-row md:px-0 px-2.5 sml:px-0">
      <div className="sml:w-1/2  md:w-1/2 flex flex-col md:items-center sml:items-end md:pr-0 sml:pr-[69px]  justify-center md:order-1 order-2 sml:order-1">
        <div className=" md:w-[75%] sml:w-[497px]">
          <h2 className="font-bold mt-4 sml:mt-0 text-[23px] md:text-[32px] sml:text-[34px] text-nun text-primary">
            Get started with easily register
          </h2>
          <p className="font-normal text-[18px]	sml:text-xl text-nun self-center mt-2.5">
            Free register and you can enjoy Chaty
          </p>
          <div className="relative">
            <input
              className="border border-solid border-black w-full rounded-lg	px-[38px] py-4	sml:py-6 mt-8 outline-0"
              type="email"
              onChange={handleEmail}
            />
            <p className="text-nun font-semibold text-3.5 absolute top-[19px] left-9 bg-white px-2.5">
              Email Addres
            </p>
            {emailErr && (
              <p className="text-nun font-semibold text-3.5 text-[red]">
                {emailErr}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              className="border border-solid border-black w-full rounded-lg	pl-[38px] py-4	sml:py-6 mt-8 outline-0"
              type="text"
              onChange={handleFullName}
            />
            <p className="text-nun font-semibold text-3.5 absolute top-[19px] left-9 bg-white px-2.5">
              Full name
            </p>
            {fullNameErr && (
              <p className="text-nun font-semibold text-3.5 text-[red]">
                {fullNameErr}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              className="border border-solid border-black w-full rounded-lg	pl-[38px] py-4	sml:py-6 mt-8 outline-0"
              type={show ? "text" : "password"}
              onChange={handlePassWord}
            />
            <p className="text-nun font-semibold text-3.5 absolute top-[19px] left-9 bg-white px-2.5">
              Password
            </p>

            {show ? (
              <AiFillEye
                onClick={handlePasswordShow}
                className="text-2xl absolute top-[52px] right-[22px]"
              />
            ) : (
              <AiFillEyeInvisible
                onClick={handlePasswordShow}
                className="text-2xl absolute top-[52px] right-[22px]"
              />
            )}

            {passwordErr && (
              <p className="text-nun font-semibold text-3.5 text-[red]">
                {passwordErr}
              </p>
            )}
          </div>
          <button
            class="rounded-full w-full 
          text-center bg-primary py-3.5 sml:py-5 px- sml:px-36 text-white font-nun font-semibold text-xl mt-8"
            onClick={handleSubmit}
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
      <div className=" md:w-1/2 sml:w-1/2 sml:h-screen bg-primary md:order-1 sml:order-2">
        <div className="flex flex-col md:h-screen justify-center items-center sml:h-screen py-2 sml:py-8">
          <picture className="hidden md:block sml:block">
            <img src="images/logo.png" alt="" loading="lazy" className="w-52" />
          </picture>
          <h2 className="tracking-wide !text-white font-nun p-5 sml:p-0 md:text-4xl text-2xl sml:text-4xl font-bold sml:font-extrabold">
            Welcome To Our
            <span className="text-yell font-extrabold text-[40px] md:text-5xl sml:text-5xl ml-4">
              Chaty!
            </span>
          </h2>
          <p className="text-white text-nun text-base hidden md:block sml:block w-[439px] leading-5 mt-4 font-normal">
            If you are working on something that you really care about, you
            don’t have to be pushed. The vision pulls you
          </p>
        </div>
      </div>
    </div>
  );
}

export default Registration;
