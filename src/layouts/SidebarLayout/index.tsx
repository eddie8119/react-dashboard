import React from "react";
// import NavList from "./NavList";

const SidebarLayout = () => {
  return (
    <div className="h-full bg-box-bg hidden md:block w-[260px]  flex-none p-[26px]">
      <div className="flex justify-between">
        <p>ADMIN</p>
      </div>
      <div className="w-full flex flex-col items-center gap-[10px]">
        <div className="w-1/3">
          <div className="w-full h-full rounded-full bg-white"></div>
        </div>
        <div className="flex flex-col items-center">
          <h1 className="text-gray">ffffff</h1>
          <p className="text-primary">dddddd</p>
        </div>
      </div>

      {/* <NavList /> */}
    </div>
  );
};

export default SidebarLayout;
