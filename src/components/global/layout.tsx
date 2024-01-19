import LeftSidebar from "@/components/side/left-sidebar";
import WindowTitlebar from "@/components/titlebar/window-titlebar";
import { Outlet } from "react-router-dom";
import LeftSidebarSm from "../side/left-sidebar-sm";

const Layout = () => {
  return (
    <div className="flex">
      <LeftSidebar className="hidden md:block" />
      <LeftSidebarSm className="block md:hidden" />
      <div className="flex-1">
        <WindowTitlebar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
