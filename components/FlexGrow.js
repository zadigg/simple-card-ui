import React from "react";

function FlexGrow() {
  return (
    <div className="flex flex-col justify-between h-screen items-center">
      <div className="h-16 bg-green-700 ">Header</div>
      <div className=" bg-yellow-400 flex-grow">Body</div>
      <div className="h-16 bg-red-700 ">Footer</div>
    </div>
  );
}

export default FlexGrow;
