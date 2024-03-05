"use client";
import Image from "next/image";
import { useMemo } from "react";
import { ClientOnly } from "../ClientOnly";
import { Parallax } from "../Parallax";

function Partner({ url }) {
  return (
    <Image
      alt="Logo Partner"
      src={url}
      width={250}
      height={100}
      className="h-[100px] min-w-[250px] cursor-pointer object-contain px-6"
    />
  );
}

export function BrandAnimation() {
  const brands = useMemo(
    () => [
      { path: "/amazon.png" },
      { path: "/amazon.png" },
      { path: "/amazon.png" },
      { path: "/amazon.png" },
      { path: "/amazon.png" },
    ],
    []
  );

  return (
    <section className="w-full justify-center py-20 flex gap-8 px-8">
      <div className="w-full max-w-7xl scroll">
        <h1 className="font-bold text-4xl text-[#0A2E72] text-center max-sm:text-3xl">
          Marcas e Parceiros
        </h1>

        <ClientOnly>
          <Parallax baseVelocity={1}>
            <div className="flex w-full">
              {brands.map((item, index) => {
                return <Partner key={index} url={item.path} />;
              })}
            </div>
          </Parallax>
        </ClientOnly>
      </div>
    </section>
  );
}
