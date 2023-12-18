"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ClientOnly } from "../ClientOnly";
import Link from "next/link";

export function SectionSlider() {
  return (
    <section className="w-full relative" id="Home">
      <div className="absolute flex flex-col mt-[360px] px-24 max-md:px-4 gap-4 z-40 w-full">
        <h1 className="text-white font-bold text-4xl max-md:text-3xl w-[450px]">
          Projetos de piscinas Profissionais, com os Melhores produtos!
        </h1>

        <Link href="/budget">
          <Button className="rounded-3xl bg-[#64AFCF] flex justify-center items-center text-[#F9F9F9] px-[22px] py-4 w-[250px] font-bold">
            Faça seu orçamento aqui!
          </Button>
        </Link>
      </div>

      <ClientOnly
        fallback={
          <Image
            src="/FOTO_01.jpg"
            alt=""
            width={500}
            height={500}
            className="max-w-full h-[700px] w-full object-cover"
          />
        }
      >
        <Slide
          prevArrow={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-left text-white"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          }
          nextArrow={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-chevron-right text-white"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          }
        >
          <div className="each-slide-effect">
            <Image
              src="/FOTO_01.jpg"
              alt=""
              width={4000}
              height={500}
              className="h-[700px] object-cover"
            />
          </div>
        </Slide>
      </ClientOnly>

      <div className="custom-shape-divider-bottom-1701619986">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
}
