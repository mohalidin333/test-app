import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/app/components/ui/sidebar";
import { SiNextdotjs } from "react-icons/si";

type AppSidebarProps = {
  title: string;
  url: string;
  icon: React.ElementType;
};

export function AppSidebar({ items }: { items: AppSidebarProps[] }) {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            {/* logo */}
            <div className="py-[2rem] border-b flex items-center justify-center gap-[1rem]">
              <SiNextdotjs size={30} className="text-slate-800" />
              <h2 className="text-xl">
                Next<span className="text-accent">Kit</span>
              </h2>
            </div>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
