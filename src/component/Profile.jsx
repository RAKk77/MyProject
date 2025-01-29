import React from "react";
import Profiles from "../assets/Personal.png";
import "./Home.css";
import Prolarg from "./Prolarg";
const Profile = () => {
  return (
    <div className="relative -z-20">
      <div className="w-full flex flex-col items-center md:hidden">
        <div className="bg-black rounded-2xl border-2 border-white mt-[75px] px-[20px] py-2 ">
          <h1 className="text-col text-[1.6rem] font-bold text-center ">
            My Name Is Yorn PheaReak
          </h1>
        </div>
        {/* Small Screen on Above */}
        <div className="md:w-[90%]  flex justify-between ">
          <div className=" px-12 pb-14 flex justify-center overflow-hidden bg-transparent ">
            <img
              src={Profiles}
              alt="Profile"
              className=" w-[400px] my-1   animate__animated animate__zoomIn"
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
        <div className="flex">
          <img
            src={Profiles}
            alt="Picture"
            className="w-[400px] animate__animated animate__zoomIn"
          />
          <div className="flex flex-col items-center justify-center gap-10 text-center">
            <h1 className="text-col px-5  text-white absolute top-40 right-1 text-[2rem] font-bold rounded-4xl overflow-hidden py-0  bg-transparent backdrop-blur-lg border-2 border-white">
              My Name Is Yorn PheaReak
            </h1>
            <h1 className="text-[2rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-l from-white to-blue-400 animate-pulse">
              I'm WebDeveloper
              <div className="w-[100%] h-[4px] rounded-full bg-gradient-to-r from-blue-700 to-purple-600 via-pink-400"></div>
            </h1>
          </div>
        </div>
        <div className="w-[90%] m-auto my-6 flex flex-col gap-5">
          <div
            className=" text-[1.3rem] px-3 py-5 bg-transparent backdrop-blur-lg border-2 border-white rounded-3xl
           bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text animate__animated animate__zoomInRight"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            ratione nihil dolorem et. Corporis tempora excepturi porro, autem
            labore saepe?
          </div>
          <div
            className=" text-[1.3rem] px-3 py-5 bg-transparent backdrop-blur-lg border-2 border-white rounded-3xl 
            bg-gradient-to-r from-blue-500 to-purple-700 text-transparent bg-clip-text animate__animated animate__zoomInRight"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
            ratione nihil dolorem et. Corporis tempora excepturi porro, autem
            labore saepe?
          </div>
        </div>
      </div>
      <Prolarg />
    </div>
  );
};

export default Profile;
