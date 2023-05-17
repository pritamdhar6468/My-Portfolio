import React, { useState } from "react";
import "./Navbar.css";
import { RxCross2 } from "react-icons/rx";

function Navbar() {

  const[state,setState]=useState(false);
  const handleClick=()=>{
    setState(hide)
  }
  return (
    <div className="bg-green-700 w-full h-[4rem] flex justify-between p-[8px] fixed shadow-lg navbar">
      <div className="text-3xl">logo</div>
      <div className="w-[40%] h-[3rem] border-4 rounded-3xl flex  justify-center  items-baseline relative hide ">
        <ul className="flex gap-8 text-3xl font-bold justify-around items-center  ">
        <li>Projects</li>
        <li>About</li>
        <li>Blogs</li>
        </ul>
       
        </div>
        <div onClick={handleClick} className="text-3xl border rounded-full absolute right-6 top-4 hover:bg-white" >
            <RxCross2 />
        </div>
    </div>
  );
}

export default Navbar;
