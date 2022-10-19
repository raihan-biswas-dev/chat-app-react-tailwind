import React, { useState } from "react";
import { ColorRing } from "react-loader-spinner";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function Login() {
  const auth = getAuth();
  const navigate = useNavigate();

  // ======================
  let [loading, setLoading] = useState(false);
  let [success, setSuccess] = useState("");

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailErr, setEmailErr] = useState("");
  let [passwordErr, setPasswordErr] = useState("");
  let [passwordLengthErr, setPasswordLengthErr] = useState("");

  let [error, setError] = useState("");

  let [show, setShow] = useState(false);

  let handleEmail = (e) => {
    setEmail(e.target.value);
    setEmailErr("");
  };

  let handlePassword = (e) => {
    setPassword(e.target.value);
    setPasswordErr("");
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setEmailErr("Please enter a email address");
    }
    if (!password) {
      setPasswordErr("Please enter a password");
    } else if (password.length < 8) {
      setPasswordLengthErr("Password must be eight characters or longer");
    } else {
      setPasswordLengthErr("");
    }

    setLoading(true);
    toast.success("login Successful");
    signInWithEmailAndPassword(auth, email, password)
      .then((user) => {
        setSuccess("login Successful");
        setLoading(false);
        // setTimeout(() => {
        //   navigate("/");
        // }, 2000);
      })
      .catch((error) => {
        setLoading(false);
        const errorCode = error.code;
        console.log(errorCode);
        if (errorCode.includes("auth/wrong-password")) {
          setError("Password Doesn't match");
        }
        if (errorCode.includes("auth/user-not-found")) {
          setError("Email doesn't match");
        }
      });
  };

  let handlePasswordShow = () => {
    setShow(!show);
  };

  return (
    <div className="md:flex p-2.5 md:p-0">
      <ToastContainer theme="light" />
      <div className=" md:w-1/2 w-full bg-primary md:order-1 sml:order-2">
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

      <div className="md:w-1/2 flex flex-col  md:items-end sml:pr-0 md:pr-[69px] p-8  justify-center md:order-1 order-2 sml:order-1">
        <div className="md:w-[100%]">
          {error && (
            <p className="text-nun font-semibold text-3.5 text-[red]">
              {error}
            </p>
          )}

          {success && (
            <p className="text-nun font-semibold text-3.5 text-[green]">
              {success}
            </p>
          )}
          <h2 className="font-bold text-3xl md:text-[34px] text-nun text-primary">
            Login to your account!
          </h2>
          <div className="md:flex-row  flex flex-col  md:gap-x-2 mt-8 mdl:!flex-row">
            <button className="py-4 mb-5 md:mb-0 px-[40px] border-[1px] rounded-lg shadow-lg">
              <FcGoogle className="inline-block text-[20px]" /> Login with
              Google
            </button>
            <button className="py-4 md:px-[40px] border-[1px]  rounded-lg shadow-lg">
              <FaFacebookSquare className="inline-block text-[20px]" /> Login
              with Facebook
            </button>
          </div>
          <div className="relative">
            <input
              className="border-b border-solid border-black w-full py-4	md:py-6 mt-8 outline-0"
              type="email"
              onChange={handleEmail}
            />
            <p className="text-nun font-semibold text-3.5 absolute top-[19px] bg-white">
              Email Address
            </p>

            {emailErr && (
              <p className="text-nun font-semibold text-3.5 text-[red]">
                {emailErr}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              className="border-b border-solid border-black w-full	py-4	md:py-6 mt-8 outline-0"
              type={show ? "text" : "password"}
              onChange={handlePassword}
            />
            <p className="text-nun font-semibold text-3.5 absolute top-[19px] bg-white">
              Password
            </p>

            {show ? (
              <AiFillEyeInvisible
                onClick={handlePasswordShow}
                className="absolute text-2xl top-[52px] right-[22px]"
              />
            ) : (
              <AiFillEye
                onClick={handlePasswordShow}
                className="absolute text-2xl top-[52px] right-[22px]"
              />
            )}

            {passwordErr && (
              <p className="text-nun font-semibold text-3.5 text-[red]">
                {passwordErr}
              </p>
            )}
          </div>

          {loading ? (
            <div className="flex justify-center items-center">
              <ColorRing
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
              />
            </div>
          ) : (
            <button
              className="rounded-full w-full 
          text-center bg-primary py-5 md:px-36 text-white font-nun font-semibold text-xl mt-8"
              onClick={handleSubmit}
            >
              Sign In
            </button>
          )}

          <p className="font-open font-normal	text-primary mt-8 w-full text-center">
            Don’t have an account ?
            <Link className="font-bold font-nun text-bold ml-2" to="/register">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
