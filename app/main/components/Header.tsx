import { Button } from "@/app/components/ui/button";
import Link from "next/link";
import { SiNextdotjs } from "react-icons/si";
import { LuAlignRight } from "react-icons/lu";
import { LuX } from "react-icons/lu";
import MenuBar from "./MenuBar";
import { useMenuBar } from "@/app/main/hooks/useMenuBar";

export default function HeaderSection() {
  const { isOpen, toggleMenu } = useMenuBar();

  interface menuItemsType {
    text: string;
    link: string;
    variant:
      | "default"
      | "destructive"
      | "outline"
      | "secondary"
      | "accent"
      | "ghost"
      | "link";
  }

  const menuItems: menuItemsType[] = [
    { text: "Home", link: "#home", variant: "link" },
    { text: "Features", link: "#features", variant: "link" },
    { text: "How It Works", link: "#how-it-works", variant: "link" },
    { text: "Pricing", link: "#pricing", variant: "link" },
    { text: "FAQs", link: "#faqs", variant: "link" },
    { text: "Blog", link: "#blog", variant: "link" },
  ];

  return (
    <header className="bg-sidebar shadow-sm flex flex-col gap-[2rem] absolute left-0 right-0 top-0 z-10 screen py-[.8rem] border-b">
      <div className="flex items-center gap-[1rem] flex-wrap justify-between">
        {/* logo */}
        <div className="flex items-center gap-[1rem]">
          <SiNextdotjs size={30} className="text-slate-800" />
          <h2 className="text-xl">
            Next<span className="text-accent">Kit</span>
          </h2>
        </div>

        {/* menu */}
        <div className="hidden md:flex items-center gap-2 ">
          {menuItems.map(({ text, link, variant }, index) => {
            return (
              <Button variant={variant} key={index}>
                <Link href={link}>{text}</Link>
              </Button>
            );
          })}
        </div>

        {/* login */}
        <Button variant={"ghost"} className="hidden md:block">
          <Link href={"/pages/auth/login"}>Login</Link>
        </Button>

        <button
          onClick={toggleMenu}
          className={`lg:hidden ${isOpen ? "hidden" : "block"}`}
        >
          <LuAlignRight size={20} />
        </button>

        <button onClick={toggleMenu} className={isOpen ? "block" : "hidden"}>
          <LuX size={20} />
        </button>
      </div>

      <MenuBar isOpen={isOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
