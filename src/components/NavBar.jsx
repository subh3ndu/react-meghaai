import React from "react";
import { FiSettings } from "react-icons/fi";
import { FaRegQuestionCircle } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

export const NavBar = () => {
  return (
    <div className="h-16 bg-indigo-900 flex justify-between items-center">
      <h1 className="text-white ml-10">MeghaAI</h1>
      <div className="flex gap-x-3 mr-10">
        <FaRegQuestionCircle
          size={30}
          color="white"
          style={{ cursor: "pointer" }}
        />
        <FiSettings size={30} color="white" style={{ cursor: "pointer" }} />
        <CgProfile size={30} color="white" style={{ cursor: "pointer" }} />
      </div>
    </div>
  );
};
