"use client";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef } from "react";

export function BrandAnimation() {
  const scroller = useRef(null);
  const scrollerInner = useRef(null);

  const addAnimation = useCallback(() => {
    const scrollerList = Array.from(scroller.current.children);
    const scrollerContent = Array.from(scrollerInner.current.children);

    scrollerList.forEach((item) => {
      scroller.current.setAttribute("data-animated", true);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute("aria-hidden", true);
        scrollerInner.current.appendChild(duplicatedItem);
      });
    });
  }, []);

  useEffect(() => {
    if (scroller.current && scrollerInner.current) {
      addAnimation();
    }
  }, [scroller, scrollerInner, addAnimation]);

  const brands = useMemo(
    () => [
      { path: "/discord.svg" },
      { path: "/ifood.svg" },
      { path: "/whatsapp-logo.png" },
      { path: "/amazon.png" },
      { path: "/discord.svg" },
      { path: "/ifood.svg" },
      { path: "/whatsapp-logo.png" },
      { path: "/amazon.png" },
      { path: "/discord.svg" },
      { path: "/ifood.svg" },
      { path: "/whatsapp-logo.png" },
      { path: "/amazon.png" },
    ],
    []
  );

  return (
    <section className="w-full justify-center py-20 flex flex-col items-center gap-4 px-8">
      <h1 className="font-bold text-5xl text-[#0A2E72] text-center max-sm:text-3xl">
        Marcas e Parceiros
      </h1>
      <div className="scroller" ref={scroller}>
        <ul
          className="tag-list scroller__inner flex items-center"
          ref={scrollerInner}
        >
          {brands.map((item, index) => {
            return (
              <li key={index}>
                <Image src={item.path} alt="" width={100} height={50} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
