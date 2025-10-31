"use client";

import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { ModeToggle } from "./mode-toggle";

// <DropdownMenu >
//             <DropdownMenuTrigger  className="flex items-center gap-1 text-white hover:text-accent transition-colors">
//               Sobre a ozuna
//               <ChevronDown className="w-4 h-4" />
//             </DropdownMenuTrigger>
//             <DropdownMenuContent>
//               <DropdownMenuItem>Nossa História</DropdownMenuItem>
//               <DropdownMenuItem>Equipe</DropdownMenuItem>
//               <DropdownMenuItem>Valores</DropdownMenuItem>
//             </DropdownMenuContent>
//           </DropdownMenu>

interface NavLinks {
  title: string;
  menus: {
    title: string;
    link: string;
  }[];
}

export function Navigation() {
  const links: NavLinks[] = [
    {
      title: "Sobre a ozuna",
      menus: [
        {
          title: "Nossa História",
          link: "#",
        },
        {
          title: "Equipe",
          link: "#",
        },
        {
          title: "Valores",
          link: "#",
        },
      ],
    },
    {
      title: "Serviços",
      menus: [
        {
          title: "Telecomunicações",
          link: "#",
        },
        {
          title: "Energias Renováveis",
          link: "#",
        },
        {
          title: "Automação",
          link: "#",
        },
      ],
    }
  ];



  return (
    <header className="w-full fixed  z-1 bg-black/20 backdrop-blur-sm">
      <div className="  flex container mx-auto px-6 py-4 items-center justify-between  overflow-hidden">
        <div className="block">
          <div className="w-32">
            <Image
              src={"/assets/logo-ozuna-header.svg"}
              alt="logo"
              width={1000}
              height={1000}
              className="w-32 h-12 object-center"
            />
          </div>
        </div>

        <div className="hidden md:flex items-center gap-8 font-[corbel] font-normal ">
          <a
            href="#inicio"
            className="text-white hover:text-accent transition-colors"
          >
            Inicio
          </a>

          {links.map((item, index) => (
            <DropdownMenu key={`${index}-${item.title}`}>
              <DropdownMenuTrigger className="flex items-center gap-1 text-white hover:text-accent transition-colors">
                {item.title}
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                {item.menus.map((menu) => (
                  <DropdownMenuItem key={menu.title}>
                    {menu.title}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          ))}

          
          <a
            href="#contacto"
            className="text-white hover:text-accent transition-colors"
          >
            Contacto
          </a>
        </div>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-sm overflow-hidden">
              <div className="w-full h-1/2 bg-red-600" />
              <div className="w-full h-1/2 bg-yellow-400" />
            </div>
            <div className="flex items-center gap-1 text-white text-sm">
              <span className="font-semibold">PT</span>
              <span className="text-white/50">|</span>
              <span className="text-white/70 hover:text-white cursor-pointer">
                EN
              </span>
              <span className="text-white/50">|</span>
              <span className="text-white/70 hover:text-white cursor-pointer">
                ZH
              </span>
            </div>
          </div>

          {/* Theme Toggle */}
          {/* <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="text-white hover:text-accent hover:bg-white/10"
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </Button> */}
          <ModeToggle />
        </div>
      </div>
    </header>
  );
}
