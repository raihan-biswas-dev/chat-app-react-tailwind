import React, { useState } from "react";

function Group() {
  let [cGroup, setCGroup] = useState(false);
  let [groupName, setGroupName] = useState("");
  let [groupTagLine, setGroupTagline] = useState("");
  return (
    <div className="shadow-sm drop-shadow-md rounded-md shadow-[#1b2a443b] p-2.5 mt-[25px] h-[427px] overflow-y-scroll">
      <h3 className="font-pop flex justify-between font-semibold	 text-xl text-primary mb-4">
        Groups List
        <button
          onClick={() => setCGroup(!cGroup)}
          className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize"
        >
          {cGroup ? "Go Back" : "Create Group"}
        </button>
      </h3>
      {cGroup ? (
        <div>
          <input
            type="text"
            name="group"
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:text-primary block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Group Name"
            onChange={(e) => setGroupName(e.target.value)}
          />
          <input
            type="text"
            name="group"
            class="mt-2 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:text-primary block w-full rounded-md sm:text-sm focus:ring-1"
            placeholder="Group Tagline"
            onChange={(e) => setGroupTagline(e.target.value)}
          />
          <button
            className="rounded-full w-full 
          text-center bg-primary  text-white font-nun font-semibold py-2 mt-2"
            // onClick={handleSubmit}
          >
            Create
          </button>
        </div>
      ) : (
        <div className="flex justify-around items-center border-b border-solid border-pribary pt-2 pb-2.5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 last:border-0">
          <img
            src="images/group-1.png"
            alt=""
            className="w-[70px] h-[70px] rounded"
          />
          <div className="ml-4 xl:ml-0">
            <h3 className="font-pop font-semibold text-lg text-primary">
              MERN Stack
            </h3>
            <p className="font-pop font-normal text-sm text-para">
              MERN Full Stack Engineer!
            </p>
          </div>
          <div>
            <button className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize">
              join
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Group;
