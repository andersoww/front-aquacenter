import Image from "next/image";
import { Button, ButtonGroup } from "@nextui-org/button";

export function NavBar() {
  return (
    <nav className="flex justify-between items-center bg-[#C23336] w-full h-[75px] fixed top-0 z-50">
      <Image
        src="/logo.png"
        width={300}
        height={100}
        alt=""
        className="pl-[100px]"
      />
      <ButtonGroup className="text-[#F9F9F9] flex justify-end ml-auto mr-[58px]">
        <Button color="" variant="light">
          Home
        </Button>
        <Button color="" variant="light">
          Quem somos
        </Button>
        <Button color="" variant="light">
          Serviços
        </Button>
        <Button color="" variant="light">
          Redes sociais
        </Button>
        <Button color="" variant="light">
          Contato
        </Button>
      </ButtonGroup>
      <div className="relative w-4/12 h-full">
        <div className="flex text-base justify-start items-center w-full bg-[#0a2e72] h-full px-11 polygon absolute z-10 ml-1">
          <Button className="rounded-3xl bg-[#64AFCF] flex justify-center items-center text-[#F9F9F9] px-[22px] py-4 ml-[26px]">
            Faça seu orçamento
          </Button>
        </div>
        <div className="flex w-full pr-10 bg-white h-full polygon absolute z-0" />
      </div>
    </nav>
  );
}
