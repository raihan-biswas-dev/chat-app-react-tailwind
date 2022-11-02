import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { getAuth } from "firebase/auth";
import { AiOutlineUserAdd } from "react-icons/ai";
import { FaUserCheck, FaUserFriends } from "react-icons/fa";

function UserList() {
  const db = getDatabase();
  const auth = getAuth();
  const [userList, setUserList] = useState([]);
  let [friend, setFriend] = useState([]);
  let [friendList, setFriendList] = useState([]);

  useEffect(() => {
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      let arr = [];

      snapshot.forEach((item) => {
        if (item.key !== auth.currentUser.uid) {
          arr.push({ ...item.val(), id: item.key });
        }
      });
      setUserList(arr);
    });
  }, [db, auth.currentUser.uid]);

  let handleFrReSent = (item) => {
    set(push(ref(db, "friendrequest")), {
      sendername: auth.currentUser.displayName,
      senderid: auth.currentUser.uid,
      receivername: item.name,
      receiverid: item.id,
    });
  };

  useEffect(() => {
    const friendRef = ref(db, "friendrequest/");
    onValue(friendRef, (snapshot) => {
      let friendArr = [];
      snapshot.forEach((item) => {
        friendArr.push(item.val().receiverid + item.val().senderid);
      });
      setFriend(friendArr);
    });
  }, [db]);
  // =======================================================
  useEffect(() => {
    const friendRef = ref(db, "friends");
    onValue(friendRef, (snapshot) => {
      let friendArr = [];
      snapshot.forEach((item) => {
        friendArr.push(item.val().receiverid + item.val().senderid);
      });
      setFriendList(friendArr);
    });
  }, [db]);

  return (
    <div className="shadow-sm drop-shadow-md rounded-md shadow-[#1b2a443b] p-2.5 mt-11 h-[451px] overflow-y-scroll">
      <h3 className="font-pop font-semibold	 text-xl text-primary mb-4">
        Users
      </h3>

      {userList.map((item) => (
        <div className="flex justify-between items-center border-b border-solid border-pribary pt-2 pb-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <img
            src={item.photoURL}
            alt=""
            className="w-[70px] h-[70px] rounded-full"
          />
          <div className="">
            <h3 className="font-pop font-semibold text-lg text-primary">
              {item.name}
            </h3>
            <p className="font-pop font-normal text-sm text-para">Engineer</p>
          </div>
          <div>
            {friendList.includes(item.id + auth.currentUser.uid) ||
            friendList.includes(auth.currentUser.uid + item.id) ? (
              <button className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize">
                <FaUserFriends />
              </button>
            ) : friend.includes(item.id + auth.currentUser.uid) ||
              friend.includes(auth.currentUser.uid + item.id) ? (
              <button className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize">
                <FaUserCheck />
              </button>
            ) : (
              <button
                onClick={() => handleFrReSent(item)}
                className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize"
              >
                <AiOutlineUserAdd />
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
