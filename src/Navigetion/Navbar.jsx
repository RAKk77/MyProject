import Nlink from "./Nlink";
import Logo from "../assets/logo2.png";
import Logo2 from "../assets/logo3.png";
import { Logs, X } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "animate.css";
const Navbar = () => {
  const [alert, setAlert] = useState(false);

  const handleShow = () => setAlert(!alert);

  return (
    <div className="w-full m-auto bg-slate-300 backdrop-blur-md  border-b-2 shadow-2xl fixed top-0 z-50 md:flex md:w-[100%] md:justify-between md:m-auto ">
      <div className="flex justify-between px-3 py-2 items-center lg:px-[7rem]">
        <div
          className="flex w-[70%] gap-[2rem] justify-between items-center pr-[1.5rem] 
        md:flex-row md:gap-x-[1.3rem]"
        >
          <Link to="/">
            <img
              src={Logo}
              alt="Icone"
              className="w-[110px] md:w-[200px] lg:w-[290px]"
            />
          </Link>
          <img
            src={Logo2}
            alt="Logo"
            className="w-[150px] md:w-[150px] lg:w-[200px]"
          />
        </div>
        <button
          onClick={handleShow}
          className="px-[10px] py-1 hover:text-slate-700 active:scale-110 transition md:hidden"
        >
          {alert ? <X size={30} /> : <Logs size={30} />}
        </button>
      </div>
      <Nlink alert={alert} close={setAlert} />
    </div>
  );
};

export default Navbar;
