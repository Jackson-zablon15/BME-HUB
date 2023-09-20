"use client";
import { close, community, logo, menu, moon, sun } from "@/public/assets";
import { useTheme } from "next-themes";
import Image from "next/image";
import React, { useState } from "react";

import { Moon, Sun } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";


const Topnav = () => {
  const { theme, themes, setTheme } = useTheme();
  const [opened, setOpened] = useState(false);
  const [isDark, setIsDark] = useState(false);

  return (
    <div>
      <div className="h-[10vh] flex justify-between items-center bg-menu-light dark:bg-menu-dark py-4 px-4 shadow-md">
        <div className="flex items-center justify-start">
          <Image
            src={logo}
            alt="BME logo"
            width={38}
            height={38}
            priority
            className="mr-2 rounded-md"
          />
          <h3 className=" dark:text-white text-blue">
            BME HUB
          </h3>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="bg-blue" variant="outline" size="icon">
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 dark:bg-slate-100" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>


        <div className="flex items-center">
          <div className="">
            <Image
              src={theme === 'light' ? moon : sun}
              width={28}
              height={28}
              alt="moon"
              className="cursor-pointer"
              onClick={() => {
                setIsDark(!isDark);
                setTheme( theme === 'dark' ? 'light' : 'dark' );
              }}
            />
          </div>
          <div className="ml-4 transition-all duration-1000">
            <Image
              src={opened ? close : menu}
              alt="menu"
              width={28}
              height={28}
              onClick={() => setOpened(!opened)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topnav;
