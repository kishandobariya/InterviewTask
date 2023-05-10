import React from "react";
import Menu from "./Menu";
import { menuName } from "../../string/string";
import Icon1 from "../../assets/logo_1.png";
import Icon2 from "../../assets/logo_2.png";

const Sidebar = ({ isSidebarOpen,setIsSidebarOpen }) => {
  return (
    <>
      {isSidebarOpen ? (
        <div className="w-full bg-white sm:hidden md:hidden flex">
          <div className="w-4/5 flex flex-col  text-gray-800">
            <div className="flex flex-col border-r">
              <div className="flex items-center justify-center h-14 mb-3 mt-3">
                <div className="flex items-center">
                  <img src={Icon1} className="h-10 mr-5" alt="Flowbite Logo" />
                  <img src={Icon2} className="h-8 mr-16" alt="Flowbite Logo" />
                </div>
              </div>
              <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                  {menuName.map((data) => {
                    return <Menu name={data} />;
                  })}
                  <li>
                    <a
                      href="#"
                      style={{ marginTop: "230px" }}
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-gray-500 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Logout
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div  className="bg-black w-1/5 opacity-50" onClick={() =>setIsSidebarOpen(false)} />
        </div>
      ) : (
        <div className="w-1/6 bg-white hidden sm:block md:block">
          <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-gray-50 text-gray-800">
            <div className="flex flex-col border-r">
              <div className="flex items-center justify-center h-14 mb-3 mt-3">
                <div className="flex items-center">
                  <img src={Icon1} className="h-10 mr-5" alt="Flowbite Logo" />
                  <img src={Icon2} className="h-8 mr-16" alt="Flowbite Logo" />
                </div>
              </div>
              <div className="overflow-y-auto overflow-x-hidden flex-grow">
                <ul className="flex flex-col py-4 space-y-1">
                  {menuName.map((data) => {
                    return <Menu name={data} />;
                  })}
                  <li>
                    <a
                      href="#"
                      style={{ marginTop: "50px" }}
                      className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-gray-500 pr-6"
                    >
                      <span className="inline-flex justify-center items-center ml-4">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                          ></path>
                        </svg>
                      </span>
                      <span className="ml-2 text-sm tracking-wide truncate">
                        Logout
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
