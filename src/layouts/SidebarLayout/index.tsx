import { Outlet } from 'react-router-dom';
import SidebarMenu from './SidebarMenu';
import Header from './Header';

const SidebarLayout = () => {
  return (
    <>
      <aside className="hidden h-full w-[260px] flex-none p-[26px] md:block ">
        <div className="grid grid-cols-1 gap-6">
          <div className="flex justify-between">
            <p>ADMIN</p>
          </div>
          <div className="flex w-full flex-col items-center gap-[10px]">
            <div className="w-1/3">
              <div className="h-full w-full rounded-full bg-white"></div>
            </div>
          </div>
          <SidebarMenu />
        </div>
      </aside>
      <div className="flex w-full flex-col overflow-y-auto bg-[#E4E4E4]">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default SidebarLayout;
