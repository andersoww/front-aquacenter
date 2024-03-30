"use client";
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from "next/link";
import { PopoverMenuNavBar } from "./PopoverMenuNavBar";
import { usePathname } from "next/navigation";
import { SmoothScroll } from "@/utils/SmoothScroll";
import clsx from "clsx";

export function NavBar() {
  const path = usePathname();

  return (
    <header className={clsx("flex justify-between max-md:justify-center items-center bg-[#C23336] w-full h-[75px] fixed top-0 z-50 max-md:pl-[40px] gap-4", {
      'px-8': path === '/budget',
      'pl-[100px]': path !== '/budget'
    })}>
      <div className="absolute left-12 md:hidden">
        <PopoverMenuNavBar />
      </div>

      <Link href="/">
        <Image src="/logo.png" width={200} height={100} alt="" />
      </Link>

      <ButtonGroup className={clsx("text-[#F9F9F9] flex justify-end max-[1100px]:hidden", {
        'ml-auto': path !== '/budget'
      })}>
        {[
          { title: "INÍCIO", href: "home" },
          { title: "QUEM SOMOS", href: "aboutUs" },
          { title: "PROJETOS RECENTES", href: "projects" },
          { title: "NOSSAS SOLUÇÕES", href: "solutions" },
          { title: "CONTATO", href: "contact" },
        ].map((head, index) => {
          return (
            <Button key={index} className="" color="" variant="light">
              <Link
                href={`/#${head.href}`}
                onClick={(e) => {
                  if (path === "/") SmoothScroll(e);
                }}
              >
                <p className="whitespace-pre-line font-bold text-sm">
                  {head.title}
                </p>
              </Link>
            </Button>
          );
        })}
      </ButtonGroup>


      {path === '/budget' && (
        <div className="flex gap-2 items-center">
          <Link href="https://www.instagram.com/aquacenterbebedouro/">
            <Image
              width={30}
              height={30}
              alt=""
              className="object-contain"
              src="/instagram.png"
            />
          </Link>

          <Link href="https://www.facebook.com/aquacenterbebedouro/?locale=pt_BR">
            <Image
              width={30}
              height={30}
              alt=""
              className="hover:cursor-pointer"
              src="/facebook.png"
            />
          </Link>
        </div>
      )}


      <div
        className={clsx(
          "relative w-4/12 h-full max-[1100px]:w-1/2 max-md:hidden",
          { hidden: path === "/budget" }
        )}
      >
        <div className="flex text-base justify-start items-center w-full bg-[#0a2e72] h-full px-11 polygon absolute z-10 ml-1 gap-4">
          <Link href="/budget">
            <Button className="rounded-3xl bg-[#64AFCF] flex justify-center items-center text-[#F9F9F9] px-[22px] py-4 font-bold">
              QUERO UM ORÇAMENTO
            </Button>
          </Link>

          <div className="flex gap-2 items-center">
            <Link href="https://www.instagram.com/aquacenterbebedouro/">
              <Image
                width={30}
                height={30}
                alt=""
                className="object-contain"
                src="/instagram.png"
              />
            </Link>

            <Link href="https://www.facebook.com/aquacenterbebedouro/?locale=pt_BR">
              <Image
                width={30}
                height={30}
                alt=""
                className="hover:cursor-pointer"
                src="/facebook.png"
              />
            </Link>
          </div>
        </div>
        <div className="flex w-full pr-10 bg-white h-full polygon absolute z-0" />
      </div>
    </header>
  );
}
