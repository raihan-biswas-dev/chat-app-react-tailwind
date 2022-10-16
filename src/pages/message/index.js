import React from "react";
import Sidebar from "./../../components/Sidebar";

function Message() {
  return (
    <div className="flex">
      <div className="max-w-[186px]">
        <Sidebar active="message" />
      </div>
      <div className="max-w-[427px]"></div>
      <div className="max-w-[344px]"></div>
      <div className="max-w-[344px]"></div>
    </div>
  );
}

export default Message;
