import React from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { BiExit } from "react-icons/bi";

function Sidebar({ active }) {
  return (
    <div className="w-full flex xl:flex-col justify-center mdl:w-full xl:justify-start items-center bg-[#414D62] xl:bg-primary xl:h-full px-10 xl:py-8 fixed bottom-0 xl:static z-10">
      <div className="flex xl:flex-col items-center  xl:items-start p-2.5 xl:p-0">
        <picture>
          <img
            src="images/profile-1.png"
            alt="profile-1"
            loading="lazy"
            className="h-[40px] w-[40px] xl:h-[100px] xl:w-[100px] rounded"
          />
        </picture>
        <div className="flex xl:flex-col items-center xl:pt-8 xl:gap-y-10 gap-x-4 xl:gap-x-1 ">
          <div
            className={`${
              active === "home" &&
              "relative z-10 after:absolute after:top-0 after:left-[-60%] xl:after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-xl p-4 before:absolute before:top-0 before:right-[-56px] xl:before:bg-primary before:w-3 before:h-[68px] before:rounded-l-xl before:drop-shadow-2xl"
            }`}
          >
            <AiOutlineHome
              className={`${
                active === "home"
                  ? "text-2xl xl:text-4xl xl:text-primary"
                  : "text-2xl xl:text-4xl text-white"
              }`}
            />
          </div>

          <div
            className={`${
              active === "message" &&
              "relative z-10 after:absolute after:top-0 after:left-[-60%] after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-xl p-4 before:absolute before:top-0 before:right-[-56px] before:bg-primary before:w-3 before:h-[68px] before:rounded-l-xl before:drop-shadow-2xl"
            }`}
          >
            <AiOutlineMessage
              className={`${
                active === "message"
                  ? "text-2xl xl:text-4xl text-primary"
                  : "text-2xl xl:text-4xl text-white"
              }`}
            />
          </div>
          <div
            className={`${
              active == "notification" &&
              "relative z-10 after:absolute after:top-0 after:left-[-60%] after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-xl p-4 before:absolute before:top-0 before:right-[-56px] before:bg-primary before:w-3 before:h-[68px] before:rounded-l-xl before:drop-shadow-2xl"
            }`}
          >
            <IoMdNotificationsOutline
              className={`${
                active === "notification"
                  ? "text-2xl xl:text-4xl  text-primary"
                  : "text-2xl xl:text-4xl text-white"
              }`}
            />
          </div>
          <div
            className={`${
              active == "settings" &&
              "relative z-10 after:absolute after:top-0 after:left-[-60%] after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-xl p-4 before:absolute before:top-0 before:right-[-56px] before:bg-primary before:w-3 before:h-[68px] before:rounded-l-xl before:drop-shadow-2xl"
            }`}
          >
            <FiSettings
              className={`${
                active == "settings"
                  ? "text-2xl xl:text-4xl text-primary"
                  : "text-2xl xl:text-4xl text-white"
              }`}
            />
          </div>
          <div
            className={`${
              active == "exit" &&
              "relative z-10 after:absolute after:top-0 after:left-[-60%] after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-xl p-4 before:absolute before:top-0 before:right-[-56px] before:bg-primary before:w-3 before:h-[68px] before:rounded-l-xl before:drop-shadow-2xl"
            }`}
          >
            <BiExit
              className={`${
                active == "exit"
                  ? "text-2xl xl:text-4xl text-primary"
                  : "text-2xl xl:text-4xl text-white"
              }`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
