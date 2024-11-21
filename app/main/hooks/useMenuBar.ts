"use client"

import { MouseEventHandler, useState } from "react";

export const useMenuBar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleMenu: MouseEventHandler<HTMLButtonElement> = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleMenu };
};