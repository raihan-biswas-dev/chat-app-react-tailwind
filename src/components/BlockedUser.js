import React from "react";

function BlockedUser() {
  return (
    <div className="shadow-sm drop-shadow-md rounded-md shadow-[#1b2a443b] p-2.5 mt-11 h-[427px] overflow-y-scroll">
      <h3 className="font-pop font-semibold	 text-xl text-primary mb-4">
        Blocked List
      </h3>
      <div className="flex justify-around items-center border-b border-solid border-pribary pt-2 pb-2.5">
        <img
          src="images/friend-1.png"
          alt=""
          className="w-[70px] h-[70px] rounded"
        />
        <div className="">
          <h3 className="font-pop font-semibold text-lg text-primary">
            Raihan
          </h3>
          <p className="font-pop font-normal text-sm text-para">Engineer!</p>
        </div>
        <div>
          <button className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize">
            Unblock
          </button>
        </div>
      </div>
      <div className="flex justify-around items-center border-b border-solid border-pribary pt-2 pb-2.5">
        <img
          src="images/friend-1.png"
          alt=""
          className="w-[70px] h-[70px] rounded"
        />
        <div className="">
          <h3 className="font-pop font-semibold text-lg text-primary">
            Biswas
          </h3>
          <p className="font-pop font-normal text-sm text-para">React Dev!</p>
        </div>
        <div>
          <button className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize">
            Unblock
          </button>
        </div>
      </div>
      <div className="flex justify-around items-center border-b border-solid border-pribary pt-2 pb-2.5">
        <img
          src="images/friend-1.png"
          alt=""
          className="w-[70px] h-[70px] rounded"
        />
        <div className="">
          <h3 className="font-pop font-semibold text-lg text-primary">
            Rashed
          </h3>
          <p className="font-pop font-normal text-sm text-para">Video Editor</p>
        </div>
        <div>
          <button className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize">
            Unblock
          </button>
        </div>
      </div>
      <div className="flex justify-around items-center border-b border-solid border-pribary pt-2 pb-2.5 last:border-0">
        <img
          src="images/friend-1.png"
          alt=""
          className="w-[70px] h-[70px] rounded"
        />
        <div className="">
          <h3 className="font-pop font-semibold text-lg text-primary">John</h3>
          <p className="font-pop font-normal text-sm text-para">Node Dev</p>
        </div>
        <div>
          <button className="text-white bg-primary py-2.5 px-5 rounded font-pop font-semibold text-sm capitalize">
            Unblock
          </button>
        </div>
      </div>
    </div>
  );
}

export default BlockedUser;
