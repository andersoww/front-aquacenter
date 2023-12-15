"use client";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/popover";
import Link from "next/link";

export function PopoverMenuNavBar({ items }) {
  return (
    <Popover placement={"bottom"}>
      <PopoverTrigger>
        <div className="flex flex-col gap-1">
          <div className="w-5 h-1 bg-white" />
          <div className="w-3 h-1 bg-white" />
          <div className="w-5 h-1 bg-white" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-[#E3E3E3] w-[200px] flex flex-col rounded-md gap-2 p-2 ml-8">
        {items.map((item, i) => (
          <Link
            href={item.link}
            key={i}
            className="flex w-full hover:bg-neutral-400/80 duration-200 rounded-md p-2"
          >
            {item.description}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
}
