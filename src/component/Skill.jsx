import { Children } from "react";

const Skill = ({ image, name, children }) => {
  return (
    <>
      <div className="w-[90%] m-auto border-1 border-white rounded-4xl bg-transparent backdrop-blur-sm p-1 my-3 animate__animated animate__zoomIn ">
        <div className="flex justify-around  rounded-4xl bg-transparent px-1 py-2 animationcss">
          <div className="p-[2px]   transition ">
            <img
              src={image}
              alt="logo"
              className="w-[121px] py-0 px-3  hover:scale-110 active:scale-105 transition"
            />
          </div>
          <div className="w-[50%] items-center flex flex-col gap-3 pr-4">
            <div className="text-[1.5rem] font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-pink-900 animate-pulse">
              {name}
            </div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
