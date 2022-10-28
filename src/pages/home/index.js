import React from "react";
import FriendReq from "../../components/FriendReq";
import Friends from "../../components/Friends";
import Group from "../../components/Group";
import MyGroups from "../../components/MyGroups";
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";
import UserList from "../../components/UserList";
import BlockedUser from "./../../components/BlockedUser";

function Home() {
  return (
    <div className="max-w-full w-full">
      <div className="xl:flex justify-between p-2.5 xl:p-0 rela">
        <div className="xl:w-[186px] xl:block ">
          <Sidebar active="home" className="" />
        </div>
        <div className="xl:w-[427px]">
          <Search />
          <Group />
          <FriendReq />
        </div>
        <div className="xl:w-[344px]">
          <Friends />
          <MyGroups />
        </div>
        <div className="xl:w-[344px]">
          <UserList />
          <BlockedUser />
        </div>
      </div>
    </div>
  );
}

export default Home;
