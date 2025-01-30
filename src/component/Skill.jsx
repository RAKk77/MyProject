import { Children } from "react";

const Skill = ({ image, name, children }) => {
  return (
    <>
      <div className="w-[90%] m-auto border-3 border-white rounded-4xl p-1 my-3 animate__animated animate__zoomIn">
        <div className="flex justify-around p-5 rounded-4xl bg-transparent  bg-gradient-to-br from-slate-200 to-slate-900">
          <div className="p-[2px]  active:bg-white transition ">
            <img
              src={image}
              alt="logo"
              className="w-[99px] border-5 border-black  p-2 rounded-4xl bg-white hover:scale-110 transition"
            />
          </div>
          <div className="w-[50%] items-center flex flex-col gap-5">
            <div className="text-[2rem] font-bold m animate-pulse">{name}</div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
