"use client";
import "react-slideshow-image/dist/styles.css";
import { Button } from "@nextui-org/button";
import { Slide } from "react-slideshow-image";
import Image from "next/image";
import { ClientOnly } from "../ClientOnly";

export function SectionSlider() {
  const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ];
  return (
    <section className="w-full relative">
      <div className="absolute flex flex-col top-[360px] px-24 gap-4 z-40 w-full">
        <h1 className="text-white font-bold text-4xl w-[450px]">
          Projetos de piscinas Profissionais, com os Melhores produtos!
        </h1>

        <Button className="rounded-3xl bg-[#64AFCF] flex justify-center items-center text-[#F9F9F9] px-[22px] py-4 w-[250px]">
          Faça seu orçamento aqui!
        </Button>
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
              width={500}
              height={500}
              className="max-w-full h-[700px] w-full object-cover"
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
