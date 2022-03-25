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
  snapshotEqual,
  updateDoc,
  where,
} from "firebase/firestore";
import { useEffect } from "react";

function Add() {
  const [id, setId] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [contacts, setContact] = useState("");
  const [updateMerge, setUpdateMerge] = useState("");

  useEffect(
    () =>
      onSnapshot(collection(db, "contacts"), (snapshot) =>
        setContact(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );

  // const result = contacts?.map((contact) => {
  //   if (contact.fname === firstName && contact.lname === lastName) {
  //     alert("Contact already exists");
  //   }
  // });
  var checkIfContactExist = "false";

  var check = false;
  function myFunction() {
    check = true;
  }
  myFunction();
  // console.log(check);

  function handleNew() {
    for (const contact of contacts) {
      const trimmedFirstName = firstName.trim();
      const trimmedLastName = lastName.trim();
      if (
        contact.fname.trim() === trimmedFirstName &&
        contact.lname.trim() === trimmedLastName
      ) {
        // checkIfContactExist = "true";
        return true;
      } else {
        return false;
      }
    }
  }

  // console.log(handleNew());

  const handleSubmit = async (e) => {
    // if (true) {
    //   console.log(updateMerge);
    //   alert(updateMerge);
    // }
    if (handleNew() == false) {
      const collectionRef = collection(db, "contacts");
      const payload = {
        fname: firstName,
        lname: lastName,
        phone: phone,
        timestamp: serverTimestamp(),
      };

      await addDoc(collectionRef, payload);
      setFirstName("");
      setLastName("");
      setPhone("");
      console.log(false);
    } else {
      console.log(true);
    }

    if (updateMerge === "update") {
      const collectionRef = collection(db, "contacts");
      const qu = query(
        collectionRef,
        where("fname", "==", firstName, "lname", "==", lastName)
      );

      const payload = { phone: phone };
      setDoc(qu, payload);
    } else if (updateMerge === "merge") {
    }
  };
  // console.log(handleNew());

  const handleClear = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
  };
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
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </div>
        {/*  */}

        <div className={handleNew() ? "inline-block" : "hidden"}>
          <div className="flex items-center">
            <input
              className=" h-4 w-4 borderchecked:bg-blue-600 float-left mr-2 cursor-pointer items-center"
              type="radio"
              value="update"
              name="phone"
              id="flexCheckDefault"
              checked={updateMerge === "update"}
              onChange={(e) => setUpdateMerge(e.target.value)}
            />
            <label
              className="inline-block text-gray-800 text-[25px] font-medium cursor-pointer"
              htmlFor="flexCheckDefault"
            >
              Update
            </label>
          </div>
          {/*  */}
          <div className="flex items-center">
            <input
              className=" h-4 w-4 borderchecked:bg-blue-600 float-left mr-2 cursor-pointer items-center"
              type="radio"
              value="merge"
              name="phone"
              id="flexCheckDefault"
              checked={updateMerge === "merge"}
              onChange={(e) => setUpdateMerge(e.target.value)}
            />
            <label
              className="inline-block text-gray-800 text-[25px] font-medium cursor-pointer"
              htmlFor="flexCheckDefault"
            >
              Merge
            </label>
          </div>
        </div>
        {/*  */}
      </div>
      {/*  */}
      <div className="flex justify-between">
        <div className="">
          <button
            onClick={handleSubmit}
            className="px-7 py-2 bg-orange-500 font-semibold rounded-lg"
          >
            Add
          </button>
        </div>
        <div>
          <button
            onClick={handleClear}
            className="px-6 py-2 bg-red-700 text-white font-semibold rounded-lg"
          >
            Clear
          </button>
        </div>
      </div>
      {/*  */}

      {/*  */}

      {/*  */}
    </div>
  );
}

export default Add;
