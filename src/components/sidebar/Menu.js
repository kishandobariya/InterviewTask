import React from "react";

const Menu = (props) => {
  return (
    <li>
      <a
        href="#"
        className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-gray-500 pr-6"
      >
        <span className="inline-flex justify-center items-center ml-4">
        <img className='w-6 h-6' src={props.name.icon}/>
         </span>
        <span className="ml-2 text-sm tracking-wide truncate">{props.name.name}</span>
      </a>
    </li>
  );
};

export default Menu;
