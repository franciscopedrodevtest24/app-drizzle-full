"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";

interface NavLinks {
  title: string;
  menus: {
    title: string;
    link: string;
  }[];
}

export function Navigation() {
  const [open, setOpen] = useState(false);

  const links: NavLinks[] = [
    {
      title: "Sobre a ozuna",
      menus: [
        { title: "Nossa História", link: "#" },
        { title: "Equipe", link: "#" },
        { title: "Valores", link: "#" },
      ],
    },
    {
      title: "Serviços",
      menus: [
        { title: "Telecomunicações", link: "#" },
        { title: "Energias Renováveis", link: "#" },
        { title: "Automação", link: "#" },
      ],
    },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="flex container mx-auto px-6 py-4 items-center justify-between">
        {/* Logo */}
        <div className="w-32">
          <Image
            src={"/assets/logo-ozuna-header.svg"}
            alt="logo"
            width={1000}
            height={1000}
            className="w-32 h-12 object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-8 font-[corbel] font-normal">
          <a
            href="#inicio"
            className="text-white hover:text-accent transition-colors"
          >
            Início
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
                    <a href={menu.link}>{menu.title}</a>
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
        </nav>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Idioma */}
          <div className="hidden md:flex items-center gap-2">
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
          <ModeToggle />

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={open} onOpenChange={setOpen} modal>
              <SheetTrigger asChild>
                <Button
                
                  className="text-white hover:text-accent transition"
                  onClick={() => setOpen(true)}
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>

              <SheetContent
                side="right"
                className="bg-black/40 text-white backdrop-blur-md border-l border-white/10"
              >
                <div className="flex justify-between items-center mb-6">
                  <Image
                    src={"/assets/logo-ozuna-header.svg"}
                    alt="logo"
                    width={1000}
                    height={1000}
                    className="w-28 h-10 object-contain"
                  />
                  {/* <Button onClick={() => setOpen(false)}>
                    <X className="w-6 h-6 text-white" />
                  </Button> */}
                </div>

                <nav className="flex flex-col gap-4 font-[corbel] p-1">
                  <a
                    href="#inicio"
                    className="hover:text-accent transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    Início
                  </a>

                  {links.map((group, i) => (
                    <div key={i}>
                      <p className="font-semibold text-accent uppercase mb-2">
                        {group.title}
                      </p>
                      <div className="flex flex-col gap-2 pl-3 text-sm">
                        {group.menus.map((menu) => (
                          <a
                            key={menu.title}
                            href={menu.link}
                            className="hover:text-accent transition"
                            onClick={() => setOpen(false)}
                          >
                            {menu.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}

                  <a
                    href="#contacto"
                    className="hover:text-accent transition"
                    onClick={() => setOpen(false)}
                  >
                    Contacto
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
