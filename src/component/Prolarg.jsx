import "./Home.css";
import Photo from "../assets/Personal.png";
const Prolarg = () => {
  return (
    <>
      <div className="min-w-[70%] m-auto mt-[90px] max-lg:hidden flex justify-around  items-center">
        <div className="flex flex-col gap-1 justify-center w-[60%] px-10 h-[60px]">
          <div className="my-3">
            <h2 className="text-[2.5rem] font-bold  font-mono bg-clip-text text-transparent bg-gradient-to-bl from-blue-800 to-pink-600 via-zinc-100 animate-pulse">
              My NAME IS
            </h2>
            <div className="w-[55%] h-[4px] bg-slate-100  text-transparent bg-gradient-to-tl from-blue-800 to-pink-600 via-zinc-100"></div>
          </div>

          <div className="flex gap-1 items-center   ">
            <h2 className="text-col border-[5px] border-white bg-transparent backdrop-blur-md text-[2.3rem] font-bold px-4 rounded-full animate-pulse">
              P
            </h2>
            <h2 className=" text-[2.3rem] font-bold  px-4 py-3 bg-white animate-pulse">
              H
            </h2>
            <h2 className="text-col border-[5px] border-white text-[2.3rem] font-bold  px-4 rounded-full bg-transparent backdrop-blur-md animate-pulse">
              E
            </h2>
            <h2 className=" text-[2.3rem] font-bold  px-4 py-6 bg-white animate-pulse">
              A
            </h2>
            <h2 className="text-col border-[5px] border-white text-[2.3rem] font-bold  px-4 rounded-full bg-transparent backdrop-blur-md animate-pulse">
              R
            </h2>
            <h2 className=" text-[2.3rem] font-bold  px-4 py-10 bg-white animate-pulse">
              E
            </h2>
            <h2 className="text-col border-[5px] border-white text-[2.3rem] font-bold  px-4 rounded-fullbg-transparent backdrop-blur-md rounded-full animate-pulse">
              A
            </h2>
            <h2 className=" text-[2.3rem] font-bold  px-4 py-16 bg-white animate-pulse">
              K
            </h2>
          </div>
        </div>
        <div className="mr-4">
          <img
            src={Photo}
            alt="Logo"
            className="w-[450px] px-10 rounded-full bg-transparent backdrop-blur-md animate__animated animate__zoomIn border-[1px] border-white"
          />
        </div>
      </div>
    </>
  );
};

export default Prolarg;
