"use client";

import { BrandAnimation } from "@/components/BrandAnimation";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <section className="w-full flex justify-center bg-[#F8F8F8]">
        <div className="max-w-5xl flex flex-col gap-8 px-4 py-14 items-center">
          <h1 className="font-bold text-3xl text-[#0A2E72] uppercase text-center">
            Quem Somos
          </h1>

          <p className="text-[#707070] text-center font-medium">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>

          <Image
            src="/FOTO_01.jpg"
            alt=""
            width={400}
            height={400}
            className="w-full"
          />
        </div>
      </section>

      <section className="w-full bg-[#64AFCF] flex justify-center bg-[url('/background.png')]">
        <div className="max-w-5xl justify-between w-full px-4 py-14 flex gap-8">
          {/* Card */}
          <div>
            <div className="p-4 bg-white shadow-sm w-[300px] h-[250px] rounded-md">
              <h1 className="font-bold text-2xl text-[#0A2E72] p-4 text-left">
                Entre em contato Agora mesmo!
              </h1>
            </div>
          </div>

          {/* Text */}
          <div className="text-white gap-8 flex flex-col">
            <h3 className="text-xl font-semibold">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, qu nostrud exercitation ullamco laboris nisi
              ut aliquip.
            </p>
          </div>
        </div>
      </section>
      <BrandAnimation />
      <Footer />
    </main>
  );
}
