import { Button } from "@/app/components/ui/button";
import {
  CircleDollarSign,
  CircleHelp,
  HandHelping,
  Home,
  LogIn,
  SquarePen,
} from "lucide-react";
import Link from "next/link";
import { MouseEventHandler, ReactNode } from "react";
import { PiHandPointing } from "react-icons/pi";

interface isOpenType {
  isOpen: boolean;
  toggleMenu: MouseEventHandler<HTMLButtonElement>
}

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
  icon: ReactNode;
}

const menuItems: menuItemsType[] = [
  { text: "Home", link: "#home", variant: "link", icon: <Home /> },
  {
    text: "Features",
    link: "#features",
    variant: "link",
    icon: <HandHelping />,
  },
  {
    text: "How It Works",
    link: "#how-it-works",
    variant: "link",
    icon: <PiHandPointing strokeWidth={4} />,
  },
  {
    text: "Pricing",
    link: "#pricing",
    variant: "link",
    icon: <CircleDollarSign />,
  },
  { text: "FAQs", link: "#faqs", variant: "link", icon: <CircleHelp /> },
  { text: "Blog", link: "#blog", variant: "link", icon: <SquarePen /> },
  {
    text: "Login",
    link: "/pages/auth/login",
    variant: "ghost",
    icon: <LogIn />,
  },
];

export default function MenuBar({ isOpen, toggleMenu }: isOpenType) {
  return (
    <nav
      className={`${isOpen ? "flex" : "hidden"} w-full flex-col items-start`}
    >
      {menuItems.map(({ text, link, variant, icon }, index) => {
        return (
          <Button onClick={toggleMenu} variant={variant} key={index}>
            {icon}
            <Link href={link}>{text}</Link>
          </Button>
        );
      })}
    </nav>
  );
}
