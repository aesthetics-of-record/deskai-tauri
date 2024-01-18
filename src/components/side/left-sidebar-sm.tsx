import { useMemo } from "react";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { MdOutlineDashboard } from "react-icons/md";
import { IoLogoIonitron, IoSettingsSharp } from "react-icons/io5";
import { ModeToggle } from "../ModeToggle";
import { BsChatDots, BsFileEarmarkZip } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { GiArtificialIntelligence } from "react-icons/gi";
import { AiOutlineDashboard } from "react-icons/ai";

interface LeftSidebarProps {
  className?: string;
}

const LeftSidebarSm: React.FC<LeftSidebarProps> = ({ className }) => {
  const pathname = usePathname();
  const routes = useMemo(
    () => [
      {
        icon: IoSettingsSharp,
        label: "Setting",
        active: pathname === "/setting",
        href: "/setting",
      },
      {
        icon: AiOutlineDashboard,
        label: "Dashboard",
        active: pathname === "/dashboard",
        href: "/dashboard",
      },
      {
        icon: BsChatDots,
        label: "AI",
        active: pathname === "/ai",
        href: "/ai",
      },
    ],
    [pathname]
  );

  return (
    <div className={cn("flex", className)}>
      <div className="flex flex-col gap-y-2 h-screen border-r bg-slate-200 dark:bg-slate-900 ">
        <div className="flex flex-col gap-y-2 py-2 text-medium text-sm">
          <section className="px-2 flex items-center group">
            <IoLogoIonitron
              size={36}
              className="dark:text-slate-400 transition duration-300 dark:group-hover:text-slate-200 group-hover:animate-spin"
            />
          </section>
          <section className="flex items-center px-2">
            <div className="">
              <ModeToggle />
            </div>
          </section>
          <div className="px-2 my-1">
            <Separator className="bg-slate-300 dark:bg-slate-700" />
          </div>

          <section className="flex flex-col items-center gap-y-4">
            {routes.map((item: any) => {
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={cn(
                    "hover:text-slate-600 dark:hover:text-slate-300",
                    item.active
                      ? "text-primary hover:text-primary dark:hover:text-primary"
                      : ""
                  )}
                >
                  <item.icon size={24} />
                </Link>
              );
            })}
          </section>
        </div>
      </div>
    </div>
  );
};

export default LeftSidebarSm;
