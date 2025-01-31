import Skill from "./Skill";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import Tailwind from "../assets/taildwin.png";
import Bootstrap from "../assets/bootstrap.png";
import Reactt from "../assets/react.png";
import Php from "../assets/php.png";
import "../component/Home.css";
const Lgreview = () => {
  return (
    <>
      <div className="max-lg:hidden my-10 ">
        <div className="w-[30%] m-auto animate-pulse">
          <h1 className="text-col text-[3rem] text-white text-center my-2 font-mono px-5   border-2 border-white rounded-4xl bg-transparent backdrop-blur-xl">
            Skill
          </h1>
        </div>
        <div className="w-[90%] m-auto h-[5px] rounded-full bg-transparent bg-gradient-to-l from-sky-700 to-pink-400"></div>
      </div>
      <div className="max-lg:hidden w-[100%] m-auto grid grid-cols-3  ">
        <Skill image={Html} name={"HTML"}>
          <div className="w-[100%] h-2 rounded-4xl ml-3 bg-sky-100 m-auto my-3 relative">
            <div className="max-w-[80%] h-2 bg-transparent bg-gradient-to-l from-sky-700 to-pink-400 "></div>
            <div className=" w-12 text-center absolute -bottom-4 right-[19px] border-[2px] border-black rounded-full cursor-pointer">
              <p className="px-[9px] py-[12px] bg-slate-100 rounded-full text-[12px] font-bold text-col hover:bg-black hover:text-white active:bg-black active:text-white  transition">
                90%
              </p>
            </div>
          </div>
        </Skill>
        {/* CSS Card */}
        <Skill image={Css} name={"CSS"}>
          <div className="w-[100%] h-2 rounded-4xl ml-3 bg-sky-100 m-auto my-3 relative">
            <div className="max-w-[78%] h-2 bg-transparent bg-gradient-to-l from-sky-700 to-pink-400 "></div>
            <div className=" w-12 text-center absolute -bottom-4 right-[26px] border-[2px] border-black rounded-full cursor-pointer">
              <p className="px-[9px] py-[12px] bg-slate-100 rounded-full text-[12px] font-bold text-col hover:bg-black hover:text-white active:bg-black active:text-white  transition">
                80%
              </p>
            </div>
          </div>
        </Skill>
        {/* Js Card */}
        <Skill image={Js} name={"JavaScript"}>
          <div className="w-[100%] h-2 rounded-4xl ml-3 bg-sky-100 m-auto my-3 relative">
            <div className="max-w-[75%] h-2 bg-transparent bg-gradient-to-l from-sky-700 to-pink-400 "></div>
            <div className=" w-12 text-center absolute -bottom-4 right-[39px] border-[2px] border-black rounded-full cursor-pointer">
              <p className="px-[9px] py-[12px] bg-slate-100 rounded-full text-[12px] font-bold text-col hover:bg-black hover:text-white active:bg-black active:text-white  transition">
                70%
              </p>
            </div>
          </div>
        </Skill>
        {/* Taliwindcss Card */}
        <Skill image={Tailwind} name={"Tailwindcss"}>
          <div className="w-[100%] h-2 rounded-4xl ml-3 bg-sky-100 m-auto my-3 relative">
            <div className="max-w-[78%] h-2 bg-transparent bg-gradient-to-l from-sky-700 to-pink-400 "></div>
            <div className=" w-12 text-center absolute -bottom-4 right-[26px] border-[2px] border-black rounded-full cursor-pointer">
              <p className="px-[9px] py-[12px] bg-slate-100 rounded-full text-[12px] font-bold text-col hover:bg-black hover:text-white active:bg-black active:text-white  transition">
                80%
              </p>
            </div>
          </div>
        </Skill>
        {/* Bootstrap card */}
        <Skill image={Bootstrap} name={"Bootstrap"}>
          <div className="w-[100%] h-2 rounded-4xl ml-3 bg-sky-100 m-auto my-3 relative">
            <div className="max-w-[78%] h-2 bg-transparent bg-gradient-to-l from-sky-700 to-pink-400 "></div>
            <div className=" w-12 text-center absolute -bottom-4 right-[30px] border-[2px] border-black rounded-full cursor-pointer">
              <p className="px-[9px] py-[12px] bg-slate-100 rounded-full text-[12px] font-bold text-col hover:bg-black hover:text-white active:bg-black active:text-white  transition">
                75%
              </p>
            </div>
          </div>
        </Skill>
        {/* React Card */}
        <Skill image={Reactt} name={"ReactJS"}>
          <div className="w-[100%] h-2 rounded-4xl ml-3 bg-sky-100 m-auto my-3 relative">
            <div className="max-w-[75%] h-2 bg-transparent bg-gradient-to-l from-sky-700 to-pink-400 "></div>
            <div className=" w-12 text-center absolute -bottom-4 right-[39px] border-[2px] border-black rounded-full cursor-pointer">
              <p className="px-[9px] py-[12px] bg-slate-100 rounded-full text-[12px] font-bold text-col hover:bg-black hover:text-white active:bg-black active:text-white  transition">
                70%
              </p>
            </div>
          </div>
        </Skill>
        {/* PHP card */}
        <Skill image={Php} name={"PHP"}>
          <div className="w-[100%] h-2 rounded-4xl ml-3 bg-sky-100 m-auto my-3 relative">
            <div className="max-w-[75%] h-2 bg-transparent bg-gradient-to-l from-sky-700 to-pink-400 "></div>
            <div className=" w-12 text-center absolute -bottom-4 right-[39px] border-[2px] border-black rounded-full cursor-pointer">
              <p className="px-[9px] py-[12px] bg-slate-100 rounded-full text-[12px] font-bold text-col hover:bg-black hover:text-white active:bg-black active:text-white  transition">
                70%
              </p>
            </div>
          </div>
        </Skill>
      </div>
    </>
  );
};

export default Lgreview;
