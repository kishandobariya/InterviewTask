import React from "react";
import { STRING } from "../../string/string";

const Header = ({ setIsSidebarOpen, isSidebarOpen }) => {
  return (
    <div className="flex justify-between py-5 items-center px-6 border-b border-gray-200">
      <span className="font-bold text-2xl hidden sm:block md:block">
        {STRING.PORTFOLIO_SUMMARY}
      </span>
      <div
        className="space-y-2 block sm:hidden md:hidden"
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
        }}
      >
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
        <div className="w-8 h-0.5 bg-gray-600"></div>
      </div>
      <div className="flex items-center">
        <button className="flex items-center gap-2 mr-4 bg-white py-3 px-3 rounded-lg hidden sm:flex md:flex">
          <img src={require("../../assets/add.png")} />
          {STRING.ADD_MODEL_PORTFOLIO}
        </button>
        <div className="flex items-center">
          <img src={require("../../assets/user.png")} />
          <div className="flex flex-col items-start ml-3 g-2">
            <span className="font-bold hidden sm:block md:block">
              {STRING.USER_NAME}
            </span>
            <span className="text-gray-400 font-light hidden sm:block md:block">
              {STRING.PHONE_NUMBER}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
