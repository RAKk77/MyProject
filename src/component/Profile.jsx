import React from "react";
import Profiles from "../assets/Personal.png";
import "./Home.css";
const Profile = () => {
  return (
    <div className="relative -z-20">
      <div className="w-full flex flex-col items-center ">
        <div className="bg-black rounded-2xl border-2 border-white mt-20 px-[20px] py-2 md:hidden">
          <h1 className="text-col text-[1.6rem] font-bold text-center ">
            My Name Is Yorn PheaReak
          </h1>
        </div>
        {/* Small Screen on Above */}
        <div className="md:w-[90%] md:m-auto flex justify-center relative">
          <div
            className=" p-12 flex justify-center overflow-hidden bg-transparent max-md:backdrop-blur-xs 
          md:w-[100%]  md:absolute md:-z-10 right-[40%]"
          >
            <img
              src={Profiles}
              alt="Profile"
              className=" w-[400px] h-[420px]  my-1 md:w-[480px] md:h-[90vh]  animate__animated animate__zoomIn"
            />
          </div>
          <div className="max-md:hidden w-[100%] absolute flex flex-col items-center px-20 ">
            <div>
              <h1 className="text-white text-[2rem]">
                My Name Is Yorn PheaReak
              </h1>
              <h1 className="text-white text-[2rem]">I'm WebDeveloper</h1>
            </div>
            <div>
              <div className="text-white text-[1rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                ratione nihil dolorem et. Corporis tempora excepturi porro,
                autem labore saepe?
              </div>
              <div className="text-white text-[1rem]">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa
                ratione nihil dolorem et. Corporis tempora excepturi porro,
                autem labore saepe?
              </div>
            </div>
          </div>
        </div>
        {/* ON down For MObile Screen */}
      </div>

      <div className="text-white text-[3rem] flex gap-10 justify-center absolute bottom-[20px] left-[50%] -translate-x-[50%] items-center font-serif md:hidden">
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
  );
};

export default Profile;
