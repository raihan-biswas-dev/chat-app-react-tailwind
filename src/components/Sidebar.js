import React from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { BiExit } from "react-icons/bi";

function Sidebar({ active }) {
  return (
    <div className="w-full flex flex-col justify-center bg-primary h-screen px-10 py-8">
      <picture>
        <img
          src="images/profile-1.png"
          alt="profile-1"
          loading="lazy"
          className="h-[100px] w-[100px] rounded"
        />
      </picture>
      <div className="flex flex-col items-center pt-8 gap-y-10">
        <div
          className={`${
            active == "home" &&
            "relative z-10 after:absolute after:top-0 after:left-[-60%] after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-lg p-4 before:absolute before:top-0 before:right-[-56px] before:bg-primary before:w-3 before:h-[68px] before:rounded-l-lg before:drop-shadow-2xl"
          }`}
        >
          <AiOutlineHome
            className={`${
              active == "home" ? "text-4xl text-primary" : "text-4xl text-white"
            }`}
          />
        </div>

        <div
          className={`${
            active == "message" &&
            "relative z-10 after:absolute after:top-0 after:left-[-60%] after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-lg p-4 before:absolute before:top-0 before:right-[-56px] before:bg-primary before:w-3 before:h-[68px] before:rounded-l-lg before:drop-shadow-2xl"
          }`}
        >
          <AiOutlineMessage
            className={`${
              active == "message"
                ? "text-4xl text-primary"
                : "text-4xl text-white"
            }`}
          />
        </div>

        <IoMdNotificationsOutline className="text-4xl text-white " />
        <FiSettings className="text-4xl text-white " />
        <BiExit className="text-4xl text-white mt-5" />
      </div>
    </div>
  );
}

export default Sidebar;
