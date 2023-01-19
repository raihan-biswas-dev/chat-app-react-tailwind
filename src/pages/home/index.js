import React, { useState, useEffect } from "react";
import FriendReq from "../../components/FriendReq";
import Friends from "../../components/Friends";
import Group from "../../components/Group";
import MyGroups from "../../components/MyGroups";
import Search from "../../components/Search";
import Sidebar from "../../components/Sidebar";
import UserList from "../../components/UserList";
import BlockedUser from "./../../components/BlockedUser";
import { useNavigate } from "react-router-dom";
import { AiOutlineMail } from "react-icons/ai";

import { getAuth } from "firebase/auth";

function Home() {
  const auth = getAuth();
  let navigate = useNavigate();

  let [verify, setVerify] = useState(false);

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/login");
    } else {
      if (auth.currentUser.emailVerified) {
        setVerify(true);
      }
    }
  });

  return (
    <div>
      {verify ? (
        <div className="max-w-full w-full">
          <div className="xl:flex justify-between p-2.5 xl:p-0 rela">
            <div className="xl:w-[15%] xl:block ">
              <Sidebar active="home" className="" />
            </div>
            <div className="xl:w-[30%]">
              <Search />
              <Group />
              <FriendReq />
            </div>
            <div className="xl:w-[30%]">
              <Friends />
              <MyGroups />
            </div>
            <div className="xl:w-[25%]">
              <UserList />
              <BlockedUser />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          <h1 className="text-white font-nun text-xl font-bold bg-primary inline p-5 mt-10 rounded">
            Please verify your mail
          </h1>
        </div>
      )}
    </div>
  );
}

export default Home;
