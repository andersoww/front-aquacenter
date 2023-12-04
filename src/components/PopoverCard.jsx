"use client";
import { PopoverTrigger, Popover, PopoverContent } from "@nextui-org/popover";
import Image from "next/image";
import { useState } from "react";
import { clsx } from "clsx";

export function PopoverCard({ title, description, image, popoverPosition }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Popover
      placement={popoverPosition || "top"}
      onClose={() => setIsActive(false)}
      onOpenChange={() => setIsActive(true)}
    >
      <PopoverTrigger>
        <div
          className={clsx(
            "flex flex-col items-center gap-4 bg-white shadow-sm w-full h-[200px] border border-[#EFF3F6] p-4",
            {
              "bg-[#E3E3E3]": isActive,
            }
          )}
        >
          <div className="w-[90px] h-[90px] bg-[#ACD5F4] rounded-full flex items-center justify-center">
            <Image src="/icone-piscina01.png" alt="" width={50} height={50} />
          </div>

          <p className="text-[#0A2E72] text-center font-semibold text-xl">
            {title}
          </p>
        </div>
      </PopoverTrigger>
      <PopoverContent className="bg-[#E3E3E3] w-full flex flex-row rounded-3xl justify-between p-8 gap-20">
        <div className="w-full flex flex-col gap-6">
          <h2 className="text-xl font-bold uppercase text-[#0A2E72]">
            {title}
          </h2>
          <p className="font-bold text-base uppercase whitespace-pre-line">
            {description}
          </p>
        </div>
        {image && (
          <Image
            src={image}
            alt={description}
            className="rounded-2xl"
            width={358.44}
            height={200}
          />
        )}
      </PopoverContent>
    </Popover>
  );
}
