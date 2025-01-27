import React from "react";
import Profiles from "../assets/logo1.png";
import "./Home.css";
const Profile = () => {
  return (
    <div className="relative -z-20">
      <div className="w-full">
        <div className="bg-black rounded-4xl border-2 border-white mt-20 p-2">
          <h1 className="text-col text-white text-[1.6rem] font-bold text-center">
            My Name Is Yorn PheaReak
          </h1>
        </div>
        <img
          src={Profiles}
          alt="Profile"
          className=" border-2 border-white rounded-full my-4"
        />
      </div>
      <div className="text-white text-[3rem] flex gap-10 justify-center absolute bottom-[20px] left-[50%] -translate-x-[50%] items-center font-serif">
        <h3 className="anima-one px-[20px] bg-slate-100 text-black font-bold rounded-full absolute right-[5rem] cursor-pointer">
          R
        </h3>
        <h3 className="anima-tow px-[20px] bg-slate-100 text-black font-bold rounded-full absolute top-[-6rem] cursor-pointer">
          A
        </h3>
        <h3 className="anima-three px-[20px] bg-slate-100 text-black font-bold rounded-full absolute left-[5rem] cursor-pointer">
          K
        </h3>
      </div>
    </div>
  );
};

export default Profile;
