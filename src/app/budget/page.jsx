import { Footer } from "@/components/Footer";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden scroll-smooth pt-[75px] bg-[#F8F8F8]">
      <section className="w-full flex justify-center relative">
        <div className="absolute bg-[#0A2E72] top-0 w-full h-[40%] z-10" />
        <div className="max-w-7xl w-full px-4 pt-14 flex flex-col gap-8 z-20 max-lg:px-6">
          <h1 className="text-white font-bold text-6xl text-left max-w-[70%] max-lg:max-w-full max-lg:text-center max-lg:text-5xl max-sm:text-3xl">
            Entre em contato e solicite seu orçamento agora mesmo!
          </h1>

          <div className="relative flex flex-col max-lg:items-center w-full max-lg:gap-12">
            <div className="flex flex-col w-full gap-6 max-lg:hidden">
              <Image
                src="/img-landingpage.jpg"
                alt=""
                width={900}
                height={600}
                className="rounded-3xl object-cover"
              />

              <div className="flex justify-center w-1/2">
                <Image
                  src="/icon-landinpage-services.png"
                  alt=""
                  width={350}
                  height={100}
                />
              </div>
            </div>

            <div className="flex flex-col bg-[rgb(100,175,207)] p-8 rounded-3xl max-lg:relative absolute top-0 right-0 text-white h-full w-[600px] gap-4 max-lg:w-full justify-center items-center">
              <h1 className="font-bold text-4xl text-left max-lg:text-3xl max-sm:text-2xl">
                Diga-nos como podemos te ajudar?
              </h1>

              <div className="flex flex-col gap-8 pt-4 h-full w-full">
                <Input placeholder="Nome" />
                <Input placeholder="E-mail" />
                <Input placeholder="Celular" />
                <Textarea minRows={24} maxRows={24} placeholder="Descrição" />
              </div>

              <Button className="rounded-[400px] bg-[#C23336] flex justify-center items-center text-[#F9F9F9] w-[250px] h-[80px] uppercase text-2xl font-bold max-sm:text-xl max-sm:h-[60px]">
                Enviar
              </Button>
            </div>

            <div className="flex justify-center lg:hidden">
              <Image
                src="/icon-landinpage-services.png"
                alt=""
                width={350}
                height={100}
              />
            </div>
          </div>
          <div className="flex gap-4 pb-8 justify-around items-center max-lg:flex-col max-lg:gap-8 max-lg:pt-4">
            <div className="flex gap-4 items-center font-bold text-xl text-[#C23336] max-sm:flex-col max-sm:w-full">
              <div className="h-6 w-1  max-sm:h-0.5 max-sm:w-full sm:hidden bg-[#C23336]" />
              <h1 className="">PROJETO</h1>
              <div className="h-6 w-1  max-sm:h-0.5 max-sm:w-full bg-[#C23336]" />
              <h1 className="">EXECUÇÃO</h1>
              <div className="h-6 w-1 max-sm:h-0.5 max-sm:w-full bg-[#C23336]" />
              <h1 className="">ASSISTÊNCIA</h1>
              <div className="h-6 w-1  max-sm:h-0.5 max-sm:w-full sm:hidden bg-[#C23336]" />
            </div>

            <Image
              src="/icon-qrcode-aquacenter.png"
              alt=""
              width={300}
              height={100}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
