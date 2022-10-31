import React, { useState, useRef } from "react";
import { getAuth, signOut, updateProfile } from "firebase/auth";
import { ColorRing } from "react-loader-spinner";

import Cropper from "react-cropper";
import {
  getStorage,
  ref,
  uploadString,
  getDownloadURL,
} from "firebase/storage";
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
  const storage = getStorage();

  let [showImgPopUp, setShowImgPopUp] = useState(false);
  const [image, setImage] = useState("");
  let [previewImg, setPreviewImg] = useState("");
  let [imgName, setImgName] = useState("");
  const [cropper, setCropper] = useState();
  let [loading, setLoading] = useState(false);

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
    setImgName("");
    setPreviewImg("");
  };

  let handleClosePopUp = () => {
    setShowImgPopUp(false);
  };

  let handleSelectImg = (e) => {
    setImgName(e.target.files[0].name);

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

  const getCropData = (e) => {
    setLoading(true);
    const storageRef = ref(storage, imgName);
    if (typeof cropper !== "undefined") {
      cropper.getCroppedCanvas().toDataURL();
      // console.log(previewImg);
      const message4 = cropper.getCroppedCanvas().toDataURL();
      uploadString(storageRef, message4, "data_url").then((snapshot) => {
        getDownloadURL(storageRef).then((downloadURL) => {
          updateProfile(auth.currentUser, {
            photoURL: downloadURL,
          })
            .then(() => {
              setLoading(false);
              setShowImgPopUp(false);
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
    }
  };

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

        <h6 className="text-center w-full mt-2 text-sm font-pop font-normal text-white">
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
              onInitialized={(instance) => {
                setCropper(instance);
              }}
            />

            {loading ? (
              <div className="flex justify-center items-center">
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            ) : (
              <button
                className="rounded-full w-[70%] 
          text-center bg-primary py-2 md:px-4 text-white font-nun font-normal text-base mt-8"
                onClick={getCropData}
              >
                Upload
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
