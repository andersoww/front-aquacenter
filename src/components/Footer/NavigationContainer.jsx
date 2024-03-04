"use client";
import { SmoothScroll } from "@/utils/SmoothScroll";
import { usePathname } from "next/navigation";
import Link from "next/link";

function NavigationContainer({ title, pathname }) {
  const path = usePathname();
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <ul className="gap-4 flex flex-col">
        {pathname.map((item, index) => {
          return (
            <Link
              key={index}
              className="text-white text-sm hover:underline font-medium hover:cursor-pointer"
              href={`/#${item.path}`}
              onClick={(e) => {
                if (path === "/") SmoothScroll(e);
              }}
            >
              {item.name}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export { NavigationContainer };
