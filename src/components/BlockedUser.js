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

function BlockedUser() {
  const db = getDatabase();
  const auth = getAuth();
  const [blockUsers, setBlockUsers] = useState([]);
  useEffect(() => {
    const userRef = ref(db, "blockusers/");
    onValue(userRef, (snapshot) => {
      let blockUsersArr = [];

      snapshot.forEach((item) => {
        if (item.val().blockbyid === auth.currentUser.uid) {
          blockUsersArr.push({
            id: item.key,
            block: item.val().block,
            blockid: item.val().blockid,
          });
        } else {
          blockUsersArr.push({
            id: item.key,
            block: item.val().blockby,
            blockbyid: item.val().blockbyid,
          });
        }
      });
      setBlockUsers(blockUsersArr);
    });
  }, [db, auth.currentUser.uid]);

  let handleUnblock = (item) => {
    console.log(item);
    set(push(ref(db, "friends")), {
      id: item.id,
      sendername: item.block,
      senderid: item.blockid,
      receiverid: auth.currentUser.uid,
      receivername: auth.currentUser.displayName,
      date: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`,
    }).then(() => {
      remove(ref(db, "blockusers/" + item.id));
    });
  };

  return (
    <div className="shadow-sm drop-shadow-md rounded-md shadow-[#1b2a443b] p-2.5 mt-11 h-[427px] overflow-y-scroll">
      <h3 className="font-pop font-semibold	 text-xl text-primary mb-4">
        Blocked List
      </h3>
      {blockUsers.map((item) => (
        <div className="flex justify-around items-center border-b border-solid border-pribary pt-2 pb-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300">
          <img
            src="images/friend-1.png"
            alt=""
            className="w-[70px] h-[70px] rounded"
          />
          <div className="">
            <h3 className="font-pop font-semibold text-lg text-primary">
              {item.block}
            </h3>
            <p className="font-pop font-normal text-sm text-para">Engineer!</p>
          </div>
          <div>
            {!item.blockbyid && (
              <button
                onClick={() => handleUnblock(item)}
                className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize"
              >
                Unblock
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default BlockedUser;
