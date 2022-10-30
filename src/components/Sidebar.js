import React, { useState, useRef } from "react";
import { getAuth, signOut } from "firebase/auth";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineCloudUpload,
  AiOutlineClose,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FiSettings } from "react-icons/fi";
import { BiExit } from "react-icons/bi";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Sidebar({ active }) {
  const auth = getAuth();
  let navigate = useNavigate();

  let [showImgPopUp, setShowImgPopUp] = useState(false);
  const [image, setImage] = useState("");
  let [previewImg, setPreviewImg] = useState("");

  // React img cropper
  const cropperRef = useRef(null);
  const onCrop = () => {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    setPreviewImg(cropper.getCroppedCanvas().toDataURL());
  };

  let handleSignOut = () => {
    signOut(auth).then(() => {
      toast.success("Sign Out  Successful");
      setTimeout(() => {
        navigate("/register");
      }, 2000);
    });
  };

  let handleProfileUpload = () => {
    setShowImgPopUp(!showImgPopUp);
    previewImg("");
  };

  let handleClosePopUp = () => {
    setShowImgPopUp(false);
  };

  let handleSelectImg = (e) => {
    // console.log(e.target.files[0].name);

    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
      setImage(reader.result);
    };

    reader.readAsDataURL(files[0]);
  };

  // ===============upload image pop up

  return (
    <div className="w-full flex xl:flex-col justify-center mdl:w-full xl:justify-start items-center bg-[#414D62] xl:bg-primary xl:h-full px-10 xl:py-8 fixed bottom-0 xl:static z-10">
      <ToastContainer position="top-left" theme="dark" />
      <div className="flex xl:flex-col items-center  xl:items-start p-2.5 xl:p-0">
        <div className="relative group">
          <picture>
            <img
              src={auth.currentUser.photoURL}
              alt="profile-1"
              loading="lazy"
              className="h-[40px] w-[40px] xl:h-[100px] xl:w-[100px] rounded-full"
            />
          </picture>
          <div
            className="hidden group-hover:block"
            onClick={handleProfileUpload}
          >
            <div className="flex justify-center items-center h-[40px] w-[40px] xl:h-[100px] xl:w-[100px] rounded-full bg-slate-400 absolute left-0 top-0">
              <AiOutlineCloudUpload className="text-white text-4xl" />
            </div>
          </div>
        </div>

        <h6 className="text-center text-sm font-pop font-normal text-white">
          {auth.currentUser.displayName}
        </h6>
        <div className="flex xl:flex-col items-center xl:pt-8 xl:gap-y-10 gap-x-4 xl:gap-x-1 ">
          <div
            className={`${
              active === "home" &&
              "relative z-10 after:absolute after:top-0 after:left-[-60%] xl:after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-xl p-4 before:absolute before:top-0 before:right-[-56px] xl:before:bg-primary before:w-3 before:h-[68px] before:rounded-l-xl before:drop-shadow-2xl"
            }`}
          >
            <AiOutlineHome
              className={`${
                active === "home"
                  ? "text-2xl xl:text-4xl xl:text-primary"
                  : "text-2xl xl:text-4xl text-white"
              }`}
            />
          </div>

          <div
            className={`${
              active === "message" &&
              "relative z-10 after:absolute after:top-0 after:left-[-60%] after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-xl p-4 before:absolute before:top-0 before:right-[-56px] before:bg-primary before:w-3 before:h-[68px] before:rounded-l-xl before:drop-shadow-2xl"
            }`}
          >
            <AiOutlineMessage
              className={`${
                active === "message"
                  ? "text-2xl xl:text-4xl text-primary"
                  : "text-2xl xl:text-4xl text-white"
              }`}
            />
          </div>
          <div
            className={`${
              active == "notification" &&
              "relative z-10 after:absolute after:top-0 after:left-[-60%] after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-xl p-4 before:absolute before:top-0 before:right-[-56px] before:bg-primary before:w-3 before:h-[68px] before:rounded-l-xl before:drop-shadow-2xl"
            }`}
          >
            <IoMdNotificationsOutline
              className={`${
                active === "notification"
                  ? "text-2xl xl:text-4xl  text-primary"
                  : "text-2xl xl:text-4xl text-white"
              }`}
            />
          </div>
          <div
            className={`${
              active == "settings" &&
              "relative z-10 after:absolute after:top-0 after:left-[-60%] after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-xl p-4 before:absolute before:top-0 before:right-[-56px] before:bg-primary before:w-3 before:h-[68px] before:rounded-l-xl before:drop-shadow-2xl"
            }`}
          >
            <FiSettings
              className={`${
                active == "settings"
                  ? "text-2xl xl:text-4xl text-primary"
                  : "text-2xl xl:text-4xl text-white"
              }`}
            />
          </div>
          <div
            className={`${
              active == "exit" &&
              "relative z-10 after:absolute after:top-0 after:left-[-60%] after:bg-white after:h-full after:overflow-x-hidden after:w-[242%] after:content[''] after:z-[-1] after:rounded-l-xl p-4 before:absolute before:top-0 before:right-[-56px] before:bg-primary before:w-3 before:h-[68px] before:rounded-l-xl before:drop-shadow-2xl"
            }`}
          >
            <BiExit
              onClick={handleSignOut}
              className={`${
                active == "exit"
                  ? "text-2xl xl:text-4xl text-primary"
                  : "text-2xl xl:text-4xl text-white"
              }`}
            />
          </div>
        </div>
      </div>
      {/* Photo Modal */}

      {showImgPopUp && (
        <div className="w-full h-screen bg-primary flex justify-center items-center fixed left-0 top-0 z-10">
          <div className="p-8 bg-white rounded font-pop font-bold relative">
            <AiOutlineClose
              className="absolute text-4xl right-8 top-8 text-[#ff5733] cursor-pointer"
              onClick={handleClosePopUp}
            />
            <h1 className="text-primary font-bold text-2xl">Upload image</h1>
            <div className="relative">
              {previewImg ? (
                <img
                  src={previewImg}
                  alt="profile-1"
                  loading="lazy"
                  className="h-[40px] w-[40px] xl:h-[100px] xl:w-[100px] rounded-full"
                />
              ) : (
                <img
                  src={auth.currentUser.photoURL}
                  alt="profile-1"
                  loading="lazy"
                  className="h-[40px] w-[40px] xl:h-[100px] xl:w-[100px] rounded-full"
                />
              )}

              <input
                className="border border-solid border-black w-[70%] rounded-lg font-normal	px-[38px] py-2	sml:py-6 mt-8 outline-0"
                type="file"
                onChange={handleSelectImg}
              />
            </div>
            <Cropper
              src={image}
              style={{ height: 200, width: 10 }}
              // Cropper.js options
              initialAspectRatio={2 / 2}
              guides={false}
              crop={onCrop}
              ref={cropperRef}
            />
            <button
              className="rounded-full w-[70%] 
          text-center bg-primary py-2 md:px-4 text-white font-nun font-normal text-base mt-8"
            >
              Upload
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
