import { SidebarProvider, SidebarTrigger } from "@/app/components/ui/sidebar";
import { AppSidebar } from "@/app/components/ui/app-sidebar";
import {
  Users,
  LayoutGrid,
  User,
  FileClock,
  DatabaseBackup,
  LogOut,
  DollarSign,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Admin({children}: {children: React.ReactNode}) {
  // Menu items.
  const items = [
    {
      title: "Dashboard",
      url: "#",
      icon: LayoutGrid,
    },
    {
      title: "Profile",
      url: "#",
      icon: User,
    },
    {
      title: "User Management",
      url: "#",
      icon: Users,
    },
    {
      title: "Audit",
      url: "#",
      icon: FileClock,
    },
    {
      title: "Backup & Restore",
      url: "#",
      icon: DatabaseBackup,
    },
    {
      title: "Log out",
      url: "#",
      icon: LogOut,
    },
  ];

  return (
    <SidebarProvider>
      <div className="flex w-full">
        <AppSidebar items={items} />
        <div className="w-full">
          <header className="border-b bg-sidebar flex items-center gap-[1rem] justify-between  screen py-[.8rem]">
            <SidebarTrigger />

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>ML</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <User /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <LogOut /> Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>

          <div className="screen py-[1rem] flex flex-col gap-[1rem]">
              {children}
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
}
