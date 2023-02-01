import React, { useState, useEffect } from "react";
import {
  getDatabase,
  ref,
  onValue,
  set,
  push,
  remove,
} from "firebase/database";
import { getAuth } from "firebase/auth";

function FriendReq() {
  const db = getDatabase();
  const auth = getAuth();
  const [friendReq, setFriendReq] = useState([]);

  useEffect(() => {
    const userRef = ref(db, "friendrequest/");
    onValue(userRef, (snapshot) => {
      let friendReqArr = [];

      snapshot.forEach((item) => {
        if (item.val().receiverid === auth.currentUser.uid)
          friendReqArr.push({ ...item.val(), id: item.key });
      });
      setFriendReq(friendReqArr);
    });
  }, [db, auth.currentUser.uid]);

  let handleAcceptFriendReq = (item) => {
    set(push(ref(db, "friends")), {
      id: item.id,
      sendername: item.sendername,
      senderid: item.senderid,
      receiverid: item.receiverid,
      receivername: item.receivername,
      date: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`,
    }).then(() => {
      remove(ref(db, "friendrequest/" + item.id));
    });
  };

  return (
    <div className="shadow-sm drop-shadow-md rounded-md shadow-[#1b2a443b] p-2.5 mt-[25px] h-[427px] overflow-y-scroll">
      <h3 className="font-pop font-semibold	 text-xl text-primary mb-4">
        Friend Request
      </h3>

      {friendReq.map((item) => (
        <div className="flex justify-around items-center border-b border-solid border-pribary pt-2 pb-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <img
            src="images/friend-1.png"
            alt=""
            className="w-[70px] h-[70px] rounded"
          />
          <div className="ml-4 xl:ml-0">
            <h3 className="font-pop font-semibold text-lg text-primary">
              {item.sendername}
            </h3>
            <p className="font-pop font-normal text-sm text-para">
              Full Stack Engineer!
            </p>
          </div>
          <div>
            <div>
              <button
                onClick={() => handleAcceptFriendReq(item)}
                className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize"
              >
                accept
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default FriendReq;
