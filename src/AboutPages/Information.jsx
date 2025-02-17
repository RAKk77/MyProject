import Logo from "../assets/Personal.png";
import { Globe, Mail, MapPinned, Phone } from "lucide-react";
const Information = () => {
  return (
    <div className="mt-[80px]">
      <h1 className="min-md:hidden text-[2rem] text-white w-[80%] bg-transparent backdrop-blur-xl mx-3 border-2 border-white rounded-4xl text-center font-mono colorChange ">
        Briefly About Me
      </h1>
      <div className="min-md:hidden max-w-[95%] m-auto flex flex-col items-center  my-4 bg-transparent backdrop-blur-xs border-2 border-white rounded-4xl animate__animated animate__backInLeft">
        <div className="p-16">
          <img
            src={Logo}
            alt="logo"
            className="min-w-[120px] border-3  border-white rounded-full bg-slate-900 animate__animated animate__zoomIn"
          />
        </div>
        <div className="text-white">
          <h1 className="text-center text-[1.8rem] font-mono animate-pulse">
            My information
          </h1>
          <div className="w-[100%] h-[3px] rounded-4xl bg-sky-800 my-4"></div>
          <section className="px-2">
            <div className="flex gap-4 my-4 text-[1.3rem] hover:scale-110 active:scale-110 text-col transition font-mono">
              <Phone />
              <p>(+855) 0883930493</p>
            </div>
            <div className="flex gap-4 my-4 text-[1.3rem] hover:scale-110 active:scale-110 text-col transition font-mono">
              <Mail />
              <p> yornpheareak168@gmail.com</p>
            </div>
            <div className="flex gap-4 my-4 text-[1.3rem] hover:scale-110 active:scale-110 text-col transition font-mono">
              <MapPinned />
              <p> Phnom Penh</p>
            </div>
            <div className="flex gap-4 my-4 text-[1.3rem] hover:scale-110 active:scale-110 text-col transition font-mono">
              <Globe />
              <a href="#">www.ypheareak.com</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Information;
