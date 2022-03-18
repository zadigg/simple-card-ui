import React from "react";
import Image from "next/image";
import usercircle from "../public/usecircle.jpg";

function Upwork() {
  return (
    <upwork className=" bg-blue-900 w-full absolute  ">
      <div className="flex items-center justify-center   max-w-[75%] mx-auto mt-[50px] ">
        <div className="bg-white w-full  mx-auto h-screen rounded-3xl px-16 py-10  font-semibold flex ">
          {/*  */}
          <div className="w-[65%] divide-x-2 border-r-2 border-gray-100">
            <div className="flex justify-between mr-14">
              <div>
                <Image
                  src={usercircle}
                  alt="Picture of the author"
                  width="108px"
                  height="108px"
                  objectFit="contain"
                  placeholder="blur"
                />
              </div>
              <div>
                <h1 className="bg-[#5160f3] text-[60px] px-7 py-1 rounded-xl text-white">
                  +100
                </h1>
              </div>
            </div>
            {/*  */}
            <div className="mt-16 text-[35px] xl:text-[40px] 2xl:text-[50px]  border-none">
              <span className="text-[#5160f3]">Drew:</span> Greatly appreciated
              on the improvement and changes to the investor dashboard
              <div className="mt-[30px]  text-[#7484ED] font-normal text-[30px]">
                #Sense_of_urgency
              </div>
              <div className="text-sm mt-[45px]">Powered by</div>
            </div>
          </div>
          {/*  */}
          <div className="ml-10">
            <div className="text-[25px] font-semibold">Shoutout to</div>
            {/*  */}
            <div className="space-y-5">
              <div className="flex items-center space-x-4 border-2 rounded-full pr-20">
                <div className="ml-2 mt-1">
                  <Image
                    src={usercircle}
                    alt="Picture of the author"
                    width="55px"
                    height="55px"
                    objectFit="contain"
                    placeholder="blur"
                  />
                </div>
                <div className="text-[25px] text-gray-600">Name</div>
              </div>
              {/*  */}
              <div className="flex items-center space-x-4 border-2 rounded-full pr-20">
                <div className="ml-2 mt-1">
                  <Image
                    src={usercircle}
                    alt="Picture of the author"
                    width="55px"
                    height="55px"
                    objectFit="contain"
                    placeholder="blur"
                  />
                </div>
                <div className="text-[25px] text-gray-600">Name</div>
              </div>
                {/*  */}
                <div className="flex items-center space-x-4 border-2 rounded-full pr-20">
                <div className="ml-2 mt-1">
                  <Image
                    src={usercircle}
                    alt="Picture of the author"
                    width="55px"
                    height="55px"
                    objectFit="contain"
                    placeholder="blur"
                  />
                </div>
                <div className="text-[25px] text-gray-600">Name</div>
              </div>
                {/*  */}
                <div className="flex items-center space-x-4 border-2 rounded-full pr-20">
                <div className="ml-2 mt-1">
                  <Image
                    src={usercircle}
                    alt="Picture of the author"
                    width="55px"
                    height="55px"
                    objectFit="contain"
                    placeholder="blur"
                  />
                </div>
                <div className="text-[25px] text-gray-600">Name</div>
              </div>
                {/*  */}
                <div className="flex items-center space-x-4 border-2 rounded-full pr-20">
                <div className="ml-2 mt-1">
                  <Image
                    src={usercircle}
                    alt="Picture of the author"
                    width="55px"
                    height="55px"
                    objectFit="contain"
                    placeholder="blur"
                  />
                </div>
                <div className="text-[25px] text-gray-600">Name</div>
              </div>
                {/*  */}
                <div className="flex items-center space-x-4 border-2 rounded-full pr-20">
                <div className="ml-2 mt-1">
                  <Image
                    src={usercircle}
                    alt="Picture of the author"
                    width="55px"
                    height="55px"
                    objectFit="contain"
                    placeholder="blur"
                  />
                </div>
                <div className="text-[25px] text-gray-600">Name</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </upwork>
  );
}

export default Upwork;
