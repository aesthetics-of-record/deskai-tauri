import { useMemo } from "react";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import SidebarItem from "./SidebarItem";
import { useLocation } from "react-router-dom";
import { Chat, ColorPalette, Dashboard, Robot, Settings } from "@/icons/global";
import { ModeToggle } from "../global/mode-toggle";

interface LeftSidebarProps {
  className?: string;
}

const LeftSidebar: React.FC<LeftSidebarProps> = ({ className }) => {
  let location = useLocation();

  const routes = useMemo(
    () => [
      {
        icon: Settings,
        label: "Setting",
        active: location.pathname === "/setting",
        href: "/setting",
      },
      {
        icon: Dashboard,
        label: "Dashboard",
        active: location.pathname === "/dashboard",
        href: "/dashboard",
      },
      {
        icon: Chat,
        label: "AI",
        active: location.pathname === "/ai",
        href: "/ai",
      },
    ],
    [location]
  );

  return (
    <div className={cn("flex", className)}>
      <div className="flex flex-col gap-y-2 h-screen w-[240px] border-r bg-slate-200 dark:bg-slate-900 ">
        <div className="flex flex-col gap-y-2 p-4 text-medium text-sm">
          <section className="px-4 flex items-center gap-x-4 group">
            <Robot className="text-5xl" />
            <div className="text-lg">
              <p className="font-bold">Desk-AI</p>
            </div>
          </section>
          <div className="h-6" />
          <section className="flex items-center gap-x-2 px-4">
            <div className="flex-1 flex items-center gap-x-2">
              <ColorPalette />
              <p className="truncate">Theme</p>
            </div>

            <div className="">
              <ModeToggle />
            </div>
          </section>
          <div className="px-4 my-2">
            <Separator className="bg-slate-300 dark:bg-slate-700" />
          </div>

          <section>
            {routes.map((item: any) => {
              return <SidebarItem key={item.label} {...item} />;
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
