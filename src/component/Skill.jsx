import { Children } from "react";

const Skill = ({ image, name, children }) => {
  return (
    <>
      <div className="w-[90%] m-auto border-2 border-white rounded-4xl p-1 my-2">
        <div className="flex justify-between p-5 rounded-4xl bg-transparent  bg-gradient-to-r from-blue-300 to-pink-400">
          <div className="p-[2px] border-4 border-black  rounded-4xl overflow-hidden">
            <img
              src={image}
              alt="logo"
              className="w-[100px] p-3 rounded-4xl bg-transparent backdrop-blur-lg hover:scale-110 transition"
            />
          </div>
          <div className="w-[70%] text-center">
            <div className="text-[2rem] font-bold">{name}</div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skill;
