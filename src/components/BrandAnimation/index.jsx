"use client";
import Image from "next/image";
import { ClientOnly } from "../ClientOnly";
import { Parallax } from "../Parallax";

function Partner({ url }) {
  return (
    <Image
      alt="Logo Partner"
      src={url}
      width={250}
      height={100}
      loading="lazy"
      className="h-[100px] min-w-[250px] cursor-pointer object-contain px-6"
    />
  );
}

export function BrandAnimation() {
  const brands = [
    { path: "/brands/argapool.png" },
    { path: "/brands/domclor.png" },
    { path: "/brands/kisol.png" },
    { path: "/brands/maxpool.png" },
    { path: "/brands/sibrape.png" },
    { path: "/brands/hidroall.jpeg" },
    { path: "/brands/odrama.jpg" },
    { path: "/brands/bordapool.jpg" },
    { path: "/brands/solis.png" },
    { path: "/brands/tholz.png" },
    // { path: "/brands/texius.png" },
    // { path: "/brands/viasol.png" },
  ]

  return (
    <section className="w-full justify-center py-20 flex gap-8 px-8">
      <div className="w-full max-w-7xl scroll">
        <h1 className="font-bold text-4xl text-[#0A2E72] text-center max-sm:text-3xl pb-8">
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
