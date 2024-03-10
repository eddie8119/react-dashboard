import React from "react";
import { Outlet } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import Header from "./Header";

const SidebarLayout = () => {
  return (
    <>
      <div className="h-full bg-box-bg hidden md:block w-[260px] flex-none p-[26px] ">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex justify-between">
            <p>ADMIN</p>
          </div>
          <div className="w-full flex flex-col items-center gap-[10px]">
            <div className="w-1/3">
              <div className="w-full h-full rounded-full bg-white"></div>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-gray">某某室內設計</h1>
              <p className="text-primary">使用者姓名</p>
            </div>
          </div>
          <SidebarMenu />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default SidebarLayout;
