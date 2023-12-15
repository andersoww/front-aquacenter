"use client";
import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";
import Link from "next/link";
import { PopoverMenuNavBar } from "./PopoverMenuNavBar";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export function NavBar() {
  const arrayItems = [
    { description: "Home", link: "/" },
    { description: "Quem somos", link: "/" },
    { description: "Serviços", link: "/" },
    { description: "Redes sociais", link: "/" },
    { description: "Faça seu orçamento", link: "/" },
  ];

  const path = usePathname();

  return (
    <nav className="flex justify-between max-md:justify-center items-center bg-[#C23336] w-full h-[75px] fixed top-0 z-50 pl-[100px] max-md:pl-[40px]">
      <div className="absolute left-12 md:hidden">
        <PopoverMenuNavBar items={arrayItems} />
      </div>
      <Link href="/">
        <Image src="/logo.png" width={200} height={100} alt="" className="" />
      </Link>
      <ButtonGroup className="text-[#F9F9F9] flex justify-end ml-auto mr-[58px] max-[1100px]:hidden">
        <Link href="/">
          <Button color="" variant="light">
            Home
          </Button>
        </Link>
        <Button color="" variant="light">
          Quem somos
        </Button>
        <Button color="" variant="light">
          Serviços
        </Button>
        <Button color="" variant="light">
          Redes sociais
        </Button>
        <Link href="/budget">
          <Button color="" variant="light">
            Contato
          </Button>
        </Link>
      </ButtonGroup>
      <div
        className={clsx(
          "relative w-4/12 h-full max-[1100px]:w-1/2 max-md:hidden",
          { hidden: path === "/budget" }
        )}
      >
        <div className="flex text-base justify-start items-center w-full bg-[#0a2e72] h-full px-11 polygon absolute z-10 ml-1">
          <Link href="/budget">
            <Button className="rounded-3xl bg-[#64AFCF] flex justify-center items-center text-[#F9F9F9] px-[22px] py-4 ml-[26px] font-bold">
              Faça seu orçamento
            </Button>
          </Link>
        </div>
        <div className="flex w-full pr-10 bg-white h-full polygon absolute z-0" />
      </div>
    </nav>
  );
}
