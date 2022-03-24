import React from "react";
import { PhoneIcon, DotsVerticalIcon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import db from "../firebase/firebase";
function View() {
  const [contacts, setContact] = useState();

  console.log(contacts);

  useEffect(
    () =>
      onSnapshot(collection(db, "contacts"), (snapshot) =>
        setContact(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      ),
    []
  );
  asd

  return (
    <div className="bg-white flex-grow rounded-2xl p-10">
      <div className=" text-3xl font-arial font-bold text-gray-700">
        Contact
      </div>
      <div className="bg-gray-100 h-full shadow-2xl p-2 pt-4 ">
        {/*  */}
        {contacts?.map((contact) => (
          <div key={contact.id} className="flex items-center">
            <div>
              <PhoneIcon className="h-8 text-gray-400" />
            </div>
            <div className="flex-grow pl-5">
              <div className="text-2xl font-bold text-gray-600">
                <h1>
                  {contact.fname} {contact.lname}
                </h1>
              </div>
              <div className="text-md text-gray-500">
                <h1>
                  {contact.phone}{" "}
                  <span className="hidden lg:inline-block">
                    Last call on 8:02AM
                  </span>
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
        ))}

        {/*  */}
      </div>
    </div>
  );
}

export default View;
