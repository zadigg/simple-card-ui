import React from "react";

function Cssbattle() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-orange-400 w-60 h-60 rounded-full">
        <div className="flex justify-between m-12">
          <div className="bg-black h-14 w-10 rounded-full z-40"></div>
          <div className="bg-black h-14 w-10 rounded-full z-40"></div>
        </div>
        {/*  */}
        <div className="bg-black h-36 w-36 rounded-full absolute top-[42%] left-[45%] "></div>
        <div className="bg-orange-400 h-36 w-36 mx-auto rounded-full absolute top-[38%] left-[45%]   "></div>
      </div>
    </div>
  );
}

export default Cssbattle;
