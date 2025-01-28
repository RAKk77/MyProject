import React, { useEffect, useState } from "react";
import { Facebook, MessageCircleMore, Instagram } from "lucide-react";
import { Link } from "react-router-dom";
import "animate.css";

const Nlink = ({ alert, close }) => {
  return (
    <>
      <nav
        className={`pt-[1.8rem] md:inline-flex md:absolute md:right-0 md:top-[60%] md:-translate-y-[88%] ${
          alert
            ? "animate__animated animate__bounceInDown" // Animation for showing
            : "hidden" // Animation for hiding
        } md:block`}
      >
        <ul className="px-[20px] h-[462px] z-20 flex flex-col gap-5 md:flex-row md:gap-2 md:h-[55%] md:px-[10px] lg:px-[6rem] md:z-0 lg:z-0">
          <Link
            onClick={() => close(false)} // Close Nlink when a link is clicked
            to="/"
            className="w-full hover:outline-2 px-12 bg-slate-200 py-2 rounded-3xl text-[1.4rem] active:scale-105 transition md:px-[2rem] md:hover:scale-105 md:py-0 md:bg-transparent"
          >
            Home
          </Link>

          <Link
            onClick={() => close(false)} // Close Nlink when a link is clicked
            to="About"
            className="w-full hover:outline-2 px-12 bg-slate-200 py-2 rounded-3xl text-[1.4rem] active:scale-105 transition md:px-[2rem] md:hover:scale-105 md:py-0 md:bg-transparent"
          >
            About
          </Link>

          <Link
            onClick={() => close(false)} // Close Nlink when a link is clicked
            to="Services"
            className="w-full hover:outline-2 px-12 bg-slate-200 py-2 rounded-3xl text-[1.4rem] active:scale-105 transition md:px-[2rem] md:hover:scale-105 md:py-0 md:bg-transparent"
          >
            Services
          </Link>
        </ul>
        <div className="w-full px-[20px] flex justify-center gap-8 my-10 md:hidden">
          <a
            href="#"
            className="p-2 hover:bg-slate-800 hover:text-white rounded-full active:scale-110 transition"
          >
            <Facebook size={29} />
          </a>
          <a
            href="#"
            className="p-2 hover:bg-slate-800 hover:text-white rounded-full active:scale-110 transition"
          >
            <MessageCircleMore size={29} />
          </a>
          <a
            href="#"
            className="p-2 hover:bg-slate-800 hover:text-white rounded-full active:scale-110 transition"
          >
            <Instagram size={29} />
          </a>
        </div>
      </nav>
    </>
  );
};

export default Nlink;
