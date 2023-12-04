import { BrandAnimation } from "@/components/BrandAnimation";
import { Footer } from "@/components/Footer";
import { SectionContact } from "@/components/SectionContact";
import { SectionSlider } from "@/components/SectionSlider";
import { Button } from "@nextui-org/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-hidden scroll-smooth pt-[75px]">
      <SectionSlider />

      <section className="w-full flex justify-center bg-[#F8F8F8]">
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

          <img
            src="/FOTO_01.jpg"
            alt=""
            width={400}
            height={400}
            className="w-full"
          />
        </div>
      </section>

      <section className="w-full flex justify-center bg-[#64AFCF]">
        <div className="max-w-5xl flex flex-col px-4 py-14 text-white gap-16">
          <div className="bg-[#0A2E72] p-4 flex h-[350px] rounded-sm relative">
            <div className="flex flex-col w-1/2 gap-4 p-4 pt-6">
              <p className="font-semibold text-[#00FFC0]">
                Manage your health care
              </p>
              <h2 className="font-bold text-3xl text-left w-[360px]">
                Trust us to be there to help{" "}
                <span className="text-[#0088FF]">all and make</span> things weel
                again.
              </h2>
              <Button className="bg-[#0088FF] w-[200px] mt-8 rounded-3xl text-white font-semibold">
                All Doctors
              </Button>
            </div>

            <div className="w-14 h-14 rounded-full bg-[#0088FF] flex justify-center items-center border border-white absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-20">
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
            <div className="w-1/2 bg-zinc-300"></div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold">NOSSOS SERVIÇOS</h3>
            <p className="text-center w-[700px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore fugiat sunt culpa officia deserunt mollit anim est
              laborum.
            </p>
          </div>

          <div className="grid grid-cols-4 py-16">
            {[
              { title: "Piscinas de Vinil" },
              { title: "Piscinas de Manta Armada" },
              { title: "Piscinas de Alvenaria" },
              { title: "Piscinas Naturais" },
              { title: "Piscinas de Fibra" },
              { title: "Piscinas de Poliester" },
              { title: "Aquecimento De Banho" },
              { title: "Produtos Químicos" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 bg-white shadow-sm w-full h-[200px] border border-[#EFF3F6] p-4"
              >
                <div className="w-[90px] h-[90px] bg-[#ACD5F4] rounded-full flex items-center justify-center">
                  <Image
                    src="/icone-piscina01.png"
                    alt=""
                    width={50}
                    height={50}
                  />
                </div>

                <p className="text-[#0A2E72] text-center font-semibold text-xl">
                  {item.title}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center gap-4">
            <h3 className="text-2xl font-bold">REDES SOCIAIS</h3>
            <p className="text-center w-[700px]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore fugiat sunt culpa officia deserunt mollit anim est
              laborum.
            </p>
          </div>
        </div>
      </section>

      <SectionContact />

      <BrandAnimation />

      <Footer />
    </main>
  );
}
