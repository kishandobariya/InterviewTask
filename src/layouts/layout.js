import React, { useState } from "react";

// styles and other imports
import Header from "../components/header/header";
import Sidebar from "../components/sidebar/sidebar";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="w-full flex min-h-screen bg-[#F9F9F9]">
      <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className={` ${isSidebarOpen ? 'hidden' : 'block'}  w-[100%]`}>
        <Header setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
