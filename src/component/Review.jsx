import Skill from "./Skill";
import Html from "../assets/html.png";
import Css from "../assets/css.png";
import Js from "../assets/js.png";
import Tailwind from "../assets/taildwin.png";
import Bootstrap from "../assets/bootstrap.png";
import Reactt from "../assets/react.png";
import Php from "../assets/php.png";

const Review = () => {
  return (
    <div>
      <Skill image={Html} name={"HTML"}>
        <div className="w-[200px] h-2 rounded-4xl ml-3 bg-sky-100 m-auto my-3 relative">
          <div className="w-[170px] h-2 bg-transparent bg-gradient-to-br from-red-600 to-yellow-600 "></div>
          <div className=" w-10  text-center absolute -bottom-4 right-[20px] border-[2px] border-black rounded-full cursor-pointer">
            <p className="p-2 bg-slate-100 rounded-full text-[12px] font-bold hover:bg-black hover:text-white active:bg-black active:text-white  transition">
              90%
            </p>
          </div>
        </div>
      </Skill>
      {/* <Skill image={Css} name={"CSS"} percent={"80%"} />
      <Skill image={Js} name={"JaVascript"} percent={"70%"} />
      <Skill image={Tailwind} name={"TailwindCss"} percent={"80%"} />
      <Skill image={Bootstrap} name={"Bootstrap"} percent={"75%"} />
      <Skill image={Reactt} name={"React"} percent={"70%"} />
      <Skill image={Php} name={"PHP"} percent={"70%"} /> */}
    </div>
  );
};

export default Review;
