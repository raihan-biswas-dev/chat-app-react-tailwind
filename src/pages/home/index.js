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
    <div className="flex justify-between">
      <div className="max-w-[186px]">
        <Sidebar active="home" />
      </div>
      <div className="max-w-[427px]">
        <Search />
        <Group />
        <FriendReq />
      </div>
      <div className="max-w-[344px]">
        <Friends />
        <MyGroups />
      </div>
      <div className="max-w-[344px]">
        <UserList />
        <BlockedUser />
      </div>
    </div>
  );
}

export default Home;
