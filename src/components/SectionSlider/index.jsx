"use client";
import { Button } from "@nextui-org/button";
import Image from "next/image";
import Link from "next/link";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { ClientOnly } from "../ClientOnly";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function SectionSlider() {
  return (
    <section className="w-full relative" id="home">
      <div className="absolute flex flex-col mt-[360px] px-24 max-md:px-4 gap-4 z-40 w-full">
        <h1 className="text-white font-bold text-4xl max-md:text-3xl w-[450px] max-sm:w-full">
          Projetos personalizados para sua piscina!
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
          prevArrow={<ChevronLeft className="text-white w-10 h-10" />}
          nextArrow={<ChevronRight className="text-white w-10 h-10" />}
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
