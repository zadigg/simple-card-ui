import React from "react";
import { useState } from "react";
import db from "../firebase/firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  onSnapshotsInSync,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";

function Add() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const handleNew = async () => {
    const collectionRef = collection(db, "contacts");
    const payload = {
      fname: firstName,
      lname: lastName,
      timestamp: serverTimestamp(),
    };

    await addDoc(collectionRef, payload);
    setFirstName("");
    setLastName("");
  };

 const handleClear = () => {
   setFirstName("");
   setLastName("");
 }
  return (
    <div className="bg-[#6858b1] lg:w-[30%] rounded-2xl p-10 space-y-7 ">
      {/*  */}
      <div className="">
        <button className="bg-orange-500 font-arial px-20 py-4 text-xl font-semibold flex mx-auto rounded-xl shadow-2xl shadow-gray-700">
          Create Contact
        </button>
      </div>
      {/*  */}

      <div className="">
        <div>
          <input
            className="p-3 w-full bg-[#d6d6cf]border-b-2 border-gray-500 text-gray-700 font-medium focus:outline-none focus:border-orange-700 text-xl rounded-xl shadow-2xl shadow-[#070027] "
            type="text"
            placeholder="Enter First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </div>

        <div className="mt-[5%]">
          <input
            className="p-3 w-full bg-[#d6d6cf]border-b-2 border-gray-500 text-gray-700 font-medium focus:outline-none focus:border-orange-700 text-xl rounded-xl shadow-2xl shadow-[#070027]"
            type="text"
            placeholder="Enter Second Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
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

      <div className="flex justify-between">
        <div className="">
          <button
            onClick={handleNew}
            className="px-7 py-2 bg-orange-500 font-semibold rounded-lg"
          >
            Add
          </button>
        </div>
        <div>
          <button onClick={handleClear} className="px-6 py-2 bg-red-700 text-white font-semibold rounded-lg">
            Clear
          </button>
        </div>
      </div>

      {/*  */}

      {/*  */}
    </div>
  );
}

export default Add;
