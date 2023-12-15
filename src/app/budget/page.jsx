import { Footer } from "@/components/Footer";
import { Input, Textarea } from "@nextui-org/input";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden scroll-smooth pt-[75px] bg-[#F8F8F8]">
      <section className="w-full flex justify-center relative">
        <div className="absolute bg-[#0A2E72] top-0 w-full h-[40%] z-10" />
        <div className="max-w-7xl w-full px-4 pt-14 flex flex-col gap-8 z-20">
          <h1 className="text-white font-bold text-6xl text-left w-[70%]">
            Entre em contato E solicite seu orçamento Agora mesmo!
          </h1>

          <div className="relative  w-full">
            <div className="flex flex-col w-full gap-6">
              <Image
                src="/img-landingpage.jpg"
                alt=""
                width={800}
                height={600}
                className="w-full rounded-3xl h-[600px] object-cover"
              />

              <div className="flex justify-center w-1/2">
                <Image
                  src="/icon-landinpage-services.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[350px] object-fill"
                />
              </div>
            </div>

            <div className="flex flex-col bg-[rgb(100,175,207)] p-8 rounded-3xl absolute top-0 right-0 text-white h-full w-[600px] justify-center items-center">
              <h1 className="font-bold text-4xl text-left ">
                Diga-nos como podemos te ajudar?
              </h1>

              <div className="flex flex-col gap-8 pt-4 h-full w-full">
                <Input placeholder="Nome" />
                <Input placeholder="E-mail" />
                <Input placeholder="Celular" />
                <Textarea minRows={24} maxRows={24} placeholder="Descrição" />
              </div>

              <Button className="rounded-[400px] bg-[#C23336] flex justify-center items-center text-[#F9F9F9] w-[250px] h-[80px] uppercase text-2xl font-bold">
                Enviar
              </Button>
            </div>
          </div>
          <div className="flex gap-4 pb-8 justify-around items-center">
            <div className="flex gap-4 items-center">
              <h1 className="font-bold text-xl text-[#C23336]">PROJETO</h1>
              <div className="h-6 w-1 bg-[#C23336]" />
              <h1 className="font-bold text-xl text-[#C23336]">EXECUÇÃO</h1>
              <div className="h-6 w-1 bg-[#C23336]" />
              <h1 className="font-bold text-xl text-[#C23336]">ASSISTÊNCIA</h1>
            </div>

            <Image
              src="/icon-qrcode-aquacenter.png"
              alt=""
              width={100}
              height={100}
              className="w-[300px]"
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
