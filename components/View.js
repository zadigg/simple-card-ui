import React from "react";
import { PhoneIcon, DotsVerticalIcon } from "@heroicons/react/solid";
function View() {
  return (
    <div className="bg-white flex-grow rounded-2xl p-10">
      <div className=" text-3xl font-arial font-bold text-gray-700">
        Contact
      </div>
      <div className="bg-gray-100 h-full shadow-2xl p-2 pt-4 ">
        {/*  */}
        <div className="flex items-center">
          <div>
            <PhoneIcon className="h-8 text-gray-400" />
          </div>
          <div className="flex-grow pl-5">
            <div className="text-2xl font-bold text-gray-600">
              <h1>Abel Kibebe</h1>
            </div>
            <div className="text-md text-gray-500">
              <h1>
                251924029960 <span className="hidden lg:inline-block">Last call on 8:02AM</span>
              </h1>
            </div>
          </div>
          <div className="hidden lg:flex items-center">
            <div>
              <button className="py-2 px-16 bg-blue-400 rounded-lg">
                Call
              </button>
            </div>
            <div>
              <DotsVerticalIcon className="h-8 text-gray-400" />
            </div>
          </div>
        </div>
        {/*  */}h
      </div>
    </div>
  );
}

export default View;
