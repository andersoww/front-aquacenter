import { Button } from "@nextui-org/button";
import { Input, Textarea } from "@nextui-org/input";
import Image from "next/image";



function Form() {
  return (
    <div className="flex flex-col bg-[rgb(100,175,207)] p-8 rounded-3xl text-white h-fit gap-4 justify-center items-center w-full">
      <h1 className="font-bold text-4xl text-left max-lg:text-3xl max-sm:text-2xl">
        Solicite um orçamento agora!
      </h1>

      <div className="flex flex-col gap-8 pt-4 h-full w-full">
        <Input placeholder="Nome" />
        <Input placeholder="E-mail" />
        <Input placeholder="Celular" />
        <Textarea minRows={12} maxRows={12} placeholder="Descrição" />
      </div>

      <Button className="rounded-[400px] bg-[#C23336] flex justify-center items-center text-[#F9F9F9] w-full h-[60px] uppercase text-2xl font-bold max-sm:text-xl max-sm:h-[60px]">
        Enviar
      </Button>
    </div>
  )
}

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden scroll-smooth pt-[75px] bg-[#F8F8F8] z-10">
      <section className="w-full relative justify-center flex">
        <div className="w-full h-[850px] bg-[url(/img-landingpage.jpg)] bg-cover relative flex justify-center items-center max-lg:items-start">
          <div className="w-full h-full bg-[#0A2E72] opacity-70 absolute z-10" />

          <div className="z-20 flex gap-8 justify-center max-lg:flex-col max-w-7xl w-full p-8">
            <div className="flex flex-col items-end w-fit gap-4">
              <h1 className="font-extrabold text-right text-7xl text-white w-[500px] max-lg:w-full max-lg:text-center max-lg:text-3xl">VAMOS CONSTRUIR SUA PISCINA!</h1>
              <div className="bg-white rounded-lg flex max-lg:hidden">
                <Image
                  src="/icones-02.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[100px]"
                />
                <Image
                  src="/icones_Prancheta 1.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[100px]"
                />
                <Image
                  src="/icones-03.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[100px]"
                />
              </div>
            </div>
            <Form />
          </div>
        </div>
      </section>
    </main>
  );
}
