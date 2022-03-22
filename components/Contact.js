import React from "react";
import Add from "./Add";
import View from "./View";

function Contact() {
  return (
    <div className="h-screen bg-slate-800 p-14  md:flex space-y-7 md:space-x-14 md:space-y-0  ">
      <Add />
      <View />
    </div>
  );
}

export default Contact;
