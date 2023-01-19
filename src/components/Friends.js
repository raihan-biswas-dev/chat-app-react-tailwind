import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue, set, push } from "firebase/database";
import { getAuth, SAMLAuthProvider } from "firebase/auth";

function Friends() {
  const db = getDatabase();
  const auth = getAuth();

  let [friends, setFriends] = useState([]);

  useEffect(() => {
    const userRef = ref(db, "friends/");
    onValue(userRef, (snapshot) => {
      let friendsReqArr = [];

      snapshot.forEach((item) => {
        if (
          auth.currentUser.uid === item.val().receiverid ||
          auth.currentUser.uid === item.val().senderid
        ) {
          friendsReqArr.push({ ...item.val(), key: item.key });
        }
      });
      setFriends(friendsReqArr);
    });
  }, [db, auth.currentUser.uid]);

  let handleBlock = (item) => {
    console.log(item);
    auth.currentUser.uid === item.senderid
      ? set(push(ref(db, "blockusers")), {
          block: item.receivername,
          blockid: item.receiverid,
          blockby: item.sendername,
          blockbyid: item.senderid,
        })
      : set(push(ref(db, "blockusers")), {
          block: item.sendername,
          blockid: item.senderid,
          blockby: item.receivername,
          blockbyid: item.receiverid,
        });
  };

  return (
    <div className="shadow-sm drop-shadow-md rounded-md shadow-[#1b2a443b] p-2.5 mt-11 h-[451px] overflow-y-scroll">
      <h3 className="font-pop font-semibold	 text-xl text-primary mb-4">
        Friends
      </h3>

      {friends.map((item) => (
        <div className="flex justify-around items-center border-b border-solid border-pribary pt-2 pb-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <img
            src="images/friend-1.png"
            alt=""
            className="w-[70px] h-[70px] rounded"
          />
          <div className="ml-4 xl:ml-0">
            <h3 className="font-pop font-semibold text-lg text-primary">
              {auth.currentUser.uid === item.senderid ? (
                <h4>{item.receivername} </h4>
              ) : (
                <h4>{item.sendername} </h4>
              )}
            </h3>
            <p className="font-pop font-normal text-sm text-para">
              Full Stack Engineer!
            </p>
          </div>
          <div>
            <button
              onClick={() => handleBlock(item)}
              className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize"
            >
              block
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Friends;
