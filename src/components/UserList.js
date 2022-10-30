import React, { useState, useEffect } from "react";
import { getDatabase, ref, onValue } from "firebase/database";
import { getAuth } from "firebase/auth";
import { AiOutlineUserAdd } from "react-icons/ai";

function UserList() {
  const db = getDatabase();
  const auth = getAuth();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    const userRef = ref(db, "users/");
    onValue(userRef, (snapshot) => {
      let arr = [];

      snapshot.forEach((item) => {
        if (item.key !== auth.currentUser.uid) {
          arr.push(item.val());
        }
      });
      setUserList(arr);
    });
  }, [db]);

  let handleFrReSent = () => {
    
  };

  return (
    <div className="shadow-sm drop-shadow-md rounded-md shadow-[#1b2a443b] p-2.5 mt-11 h-[451px] overflow-y-scroll">
      <h3 className="font-pop font-semibold	 text-xl text-primary mb-4">
        User List
      </h3>

      {userList.map((item) => (
        <div className="flex justify-around items-center border-b border-solid border-pribary pt-2 pb-2.5">
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
            <button
              onClick={handleFrReSent}
              className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize"
            >
              <AiOutlineUserAdd />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserList;
