import { BrandAnimation } from "@/components/BrandAnimation";
import { Footer } from "@/components/Footer";
import { SectionContact } from "@/components/SectionContact";
import { SectionSlider } from "@/components/SectionSlider";
import { Button } from "@nextui-org/button";
import { PopoverCard } from "@/components/PopoverCard";
import Image from "next/image";

export default function Home() {
  const arrayCards = [
    {
      title: "Piscinas de Vinil",
      description:
        "Os benefícios do vinil e mais: \n elimina necessidade perfil de encaixe \n elimina necessidade de extravasor \n (ladrão) \n 05 anos garantia \n 20 - 25 anos vida útil \n 1,50 / 2,00 mm \n + 10 estampas \n solda ultrassônica aplicada \n para moldar a piscina",
      image: "/FOTO_01.jpg",
      popoverPosition: "top-start",
    },
    { title: "Piscinas de Manta Armada" },
    { title: "Piscinas de Alvenaria" },
    { title: "Piscinas Naturais", popoverPosition: "top-end" },
    { title: "Piscinas de Fibra" },
    { title: "Piscinas de Poliester" },
    { title: "Aquecimento De Banho" },
    { title: "Produtos Químicos" },
  ];

  return (
    <main className="flex min-h-screen flex-col overflow-hidden scroll-smooth pt-[75px]">
      <SectionSlider />

      <section
        className="w-full flex justify-center bg-[#F8F8F8]"
        id="Quem Somos"
      >
        <div className="max-w-5xl flex flex-col gap-8 px-4 py-14 items-center">
          <h1 className="font-bold text-3xl text-[#36393f] uppercase text-center">
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

      <section className="w-full flex justify-center bg-[#64AFCF]">
        <div className="w-full max-w-5xl flex flex-col px-4 py-14 text-white gap-16 max-md:justify-center">
          <div className="bg-[#0A2E72] p-4 flex h-full rounded-sm max-md:flex-col w-full">
            <div className="flex flex-col w-1/2 max-md:w-full gap-4 p-4 pt-6  max-md:mb-8">
              <p className="font-semibold text-[#00FFC0]">
                Manage your health care
              </p>
              <h2 className="font-bold text-3xl text-left max-w-[360px]">
                Trust us to be there to help{" "}
                <span className="text-[#0088FF]">all and make</span> things weel
                again.
              </h2>
              <Button className="bg-[#0088FF] w-[200px] mt-8 rounded-3xl text-white font-semibold">
                All Doctors
              </Button>
            </div>

            <div className="w-1/2 max-md:w-full h-[350px] bg-zinc-300 relative">
              <div className="w-14 h-14 rounded-full bg-[#0088FF] flex justify-center items-center border border-white absolute transform -left-7 md:bottom-[50px] max-md:-top-7 max-md:-ml-4 max-md:inset-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="lucide lucide-play fill-white"
                >
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
              </div>
            </div>
          </div>

          <section
            className="w-full max-w-5xl flex flex-col items-center gap-4 bg-[#64AFCF] text-white px-4"
            id="Serviços"
          >
            <h3 className="text-2xl font-bold">NOSSOS SERVIÇOS</h3>
            <p className="text-center">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore fugiat sunt culpa officia deserunt mollit anim est
              laborum.
            </p>

            <div className="grid grid-cols-4 py-16 max-md:grid-cols-2 max-sm:grid-cols-1">
              {arrayCards.map((item, index) => (
                <PopoverCard
                  key={index}
                  description={item.description}
                  image={item.image}
                  popoverPosition={item.popoverPosition}
                  title={item.title}
                />
              ))}
            </div>
          </section>

          <section
            className="flex flex-col items-center gap-4"
            id="Redes sociais"
          >
            <h3 className="text-2xl font-bold">REDES SOCIAIS</h3>
            <p className="text-center w-fit">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore fugiat sunt culpa officia deserunt mollit anim est
              laborum.
            </p>
          </section>
        </div>
      </section>

      <SectionContact />

      <BrandAnimation />

      <Footer />
    </main>
  );
}
