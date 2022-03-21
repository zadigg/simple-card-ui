import React from "react";
import { useState, useEffect } from "react";
import db from "../firebase/firebase";
import { collection, onSnapshot, onSnapshotsInSync } from "firebase/firestore";

function Sharingan() {
  const [todos, setTodos] = useState([{ name: "Loading ...", id: "initial" }]);
  useEffect(() =>
    onSnapshot(collection(db, "todos"), (snapshot) =>
      setTodos(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    )
  );
  return (
    <div className="h-screen bg-slate-800 p-14  md:flex space-y-7 md:space-x-14 md:space-y-0  ">
      <div className="bg-[#6858b1] lg:w-[30%] rounded-2xl p-10 space-y-7 ">
        {/*  */}
        <div className="">
          <button className="bg-orange-500 px-20 py-4 text-xl font-semibold flex mx-auto rounded-xl shadow-2xl shadow-gray-700">
            Edit
          </button>
        </div>
        {/*  */}
        <div className="">
          <div>
            <input
              className="p-3 w-full bg-[#d6d6cf]border-b-2 border-gray-500 text-gray-700 font-medium focus:outline-none focus:border-orange-700 text-xl rounded-xl shadow-2xl shadow-[#070027] "
              type="text"
              placeholder="Enter First Name"
            />
          </div>

          <div className="mt-[5%]">
            <input
              className="p-3 w-full bg-[#d6d6cf]border-b-2 border-gray-500 text-gray-700 font-medium focus:outline-none focus:border-orange-700 text-xl rounded-xl shadow-2xl shadow-[#070027]"
              type="text"
              placeholder="Enter Second Name"
            />
          </div>

          <div className="mt-[5%]">
            <input
              className="p-3 w-full bg-[#d6d6cf]border-b-2 border-gray-500 text-gray-700 font-medium focus:outline-none focus:border-orange-700 text-xl rounded-xl shadow-2xl shadow-[#a99beb]"
              type="text"
              placeholder="Enter Phone number"
            />
          </div>
        </div>
        {/*  */}
        <div className="flex justify-between">
          <div className="">
            <button className="px-7 py-2 bg-orange-500 font-semibold rounded-lg">
              Add
            </button>
          </div>
          <div>
            <button className="px-6 py-2 bg-red-700 text-white font-semibold rounded-lg">
              Clear
            </button>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="bg-[#7961af6b] flex-grow rounded-2xl p-10">hello</div>
    </div>
  );
}

export default Sharingan;
