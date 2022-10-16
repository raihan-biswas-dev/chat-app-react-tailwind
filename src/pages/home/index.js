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
    <div className="md:flex justify-between">
      <div className="md:w-[186px]">
        <Sidebar active="home" />
      </div>
      <div className="w-[427px]">
        <Search />
        <Group />
        <FriendReq />
      </div>
      <div className="w-[344px]">
        <Friends />
        <MyGroups />
      </div>
      <div className="w-[344px]">
        <UserList />
        <BlockedUser />
      </div>
    </div>
  );
}

export default Home;
