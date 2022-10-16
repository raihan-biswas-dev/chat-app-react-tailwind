import React from "react";
import Group from "../../components/Group";
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";

function Home() {
  return (
    <div className="flex justify-between">
      <div className="max-w-[186px]">
        <Sidebar active="home" />
      </div>
      <div className="max-w-[427px]">
        <Search />
        <Group />
      </div>
      <div className="max-w-[344px]"></div>
      <div className="max-w-[344px]"></div>
    </div>
  );
}

export default Home;
