"use client";
import { useState } from "react";
import { SmoothScroll } from "@/utils/SmoothScroll";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import { usePathname } from "next/navigation";

export function PopoverMenuNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname();

  return (
    <Popover placement={"bottom"} isOpen={isOpen}>
      <PopoverTrigger onClick={() => setIsOpen(true)}>
        <div className="flex flex-col gap-1 hover:cursor-pointer">
          <div className="w-5 h-1 bg-white" />
          <div className="w-3 h-1 bg-white" />
          <div className="w-5 h-1 bg-white" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-[#E3E3E3] w-[200px] flex flex-col rounded-md gap-2 p-2 ml-8">
        {[{ title: "INÍCIO", href: "home" },
        { title: "QUEM SOMOS", href: "aboutUs" },
        { title: "PROJETOS RECENTES", href: "projects" },
        { title: "NOSSAS SOLUÇÕES", href: "solutions" },
        { title: "CONTATO", href: "contact" },].map(
          (head, index) => {
            return (
              <a
                key={index}
                href={`/#${head.href}`}
                onClick={(e) => {
                  if (path === "/") {
                    setIsOpen(false)
                    SmoothScroll(e);
                  }
                }}
                className="flex w-full hover:bg-neutral-400/80 duration-200 rounded-md p-2"
              >
                {head.title}
              </a>
            );
          }
        )}
      </PopoverContent>
    </Popover>
  );
}
