import React from "react";
import Profiles from "../assets/Personal.png";
import "./Home.css";
import Prolarg from "./Prolarg";
const Profile = () => {
  return (
    <div className="relative scroll-smooth -z-20">
      <div className="w-full flex flex-col items-center md:hidden">
        <div className="bg-black rounded-2xl border-2 border-white mt-[75px] px-[20px] py-2 ">
          <h1 className="text-col text-[1.6rem] font-bold text-center ">
            My Name Is Yorn PheaReak
          </h1>
        </div>
        {/* Small Screen on Above */}
        <div className="md:w-[95%]  flex justify-between ">
          <div className=" px-8 pb-16 flex justify-center overflow-hidden bg-transparent  ">
            <img
              src={Profiles}
              alt="Profile"
              className=" w-[450px] my-2 border-3 border-white rounded-full bg-transparent backdrop-blur-sm  animate__animated animate__zoomIn"
            />
          </div>
        </div>
        {/* ON down For MObile Screen */}
        <div className="text-white text-[3rem] flex gap-10 justify-center absolute bottom-[45px] left-[50%] -translate-x-[50%] items-center font-serif md:hidden">
          <h3 className="anima-one px-[20px] bg-slate-100 text-black font-bold rounded-full absolute right-[5rem] cursor-pointer ">
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

      {/* Mediam Screen */}
      <div className="max-md:hidden w-full flex flex-col items-center  mt-[50px] min-lg:hidden">
        <div className="w-full flex my-5 justify-around">
          <img
            src={Profiles}
            alt="Picture"
            className="w-[45%] border-2 border-white rounded-full bg-transparent backdrop-blur-sm animate__animated animate__zoomIn "
          />
          <div className="w-[50%] flex flex-col items-center justify-center gap-10 text-center">
            <h1 className="text-col text-[2rem] font-bold px-10 py-2 overflow-hidden  bg-transparent backdrop-blur-lg border-2 border-white rounded-4xl">
              Yorn PheaReak
            </h1>
            <h1 className="text-[2rem] font-serif font-bold  text-transparent bg-clip-text bg-gradient-to-l from-white to-blue-400 animate-pulse">
              I'm WebDeveloper
              <div className="w-[100%]  h-[4px] rounded-full bg-gradient-to-r from-blue-700 to-purple-600 via-pink-400"></div>
            </h1>
          </div>
        </div>
      </div>
      <Prolarg />
    </div>
  );
};

export default Profile;
