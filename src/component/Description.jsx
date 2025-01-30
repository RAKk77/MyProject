import React from "react";

const Description = () => {
  return (
    <div className="min-md:hidden w-[90%] m-auto p-2 border-2 border-white rounded-3xl bg-transparent backdrop-blur-sm">
      <h1 className="text-[2.5rem] text-center text-white animate-pulse">
        About me
      </h1>
      <div className="w-[80%] h-[7px] rounded-4xl bg-white m-auto mb-3"></div>
      <div className=" py-3 px-2 ">
        <p className=" text-[1.4rem] font-mono  indent-7 text-transparent bg-clip-text bg-gradient-to-tr from-blue-500 to-pink-400">
          Hello everyone My name is Yorn Pheareak is a dedicated and skilled web
          developer with a strong foundation in both front-end and back-end
          technologies. His expertise spans a modern tech stack, including HTML,
          CSS, JavaScript, Tailwind CSS, Bootstrap, PHP, and React, making him a
          versatile asset for dynamic and responsive web development projects.
          Yorn consistently demonstrates a passion for clean code, user-centric
          design, and efficient problem-solving.
        </p>
      </div>
    </div>
  );
};

export default Description;
