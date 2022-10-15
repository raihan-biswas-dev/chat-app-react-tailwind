import React from "react";
import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { BiExit } from "react-icons/bi";

function Sidebar() {
  return (
    <div className="w-full bg-primary h-screen px-10 py-8">
      <picture>
        <img
          src="images/profile-1.png"
          alt="profile-1"
          loading="lazy"
          className="h-[100px] w-[100px] rounded"
        />
      </picture>
      <div className="flex flex-col items-center pt-8 gap-y-10">
        <AiOutlineHome className="text-4xl text-white " />
        <AiOutlineMessage className="text-4xl text-white " />
        <IoMdNotificationsOutline className="text-4xl text-white " />
        <FiSettings className="text-4xl text-white " />
        <BiExit className="text-4xl text-white " />
      </div>
    </div>
  );
}

export default Sidebar;
