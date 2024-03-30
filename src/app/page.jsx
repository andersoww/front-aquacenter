import { BrandAnimation } from "@/components/BrandAnimation";
import { SectionContact } from "@/components/SectionContact";
import { SectionSlider } from "@/components/SectionSlider";
import { Check, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const arrayCards = [
    {
      title: "Construção de piscina de vinil",
    },
    { title: "Construção de piscina de alvenaria" },
    { title: "Construção de SPAs" },
    { title: "Instalação de piscina de fibra", popoverPosition: "top-end" },
    { title: "Instalação de piscina de poliéster" },
    { title: "Instalação de manta armada vinílica" },
    { title: "Troca de vinil" },
    { title: "Reforma em piscina de alvenaria" },
    { title: "Aquecimento solar para piscina" },
    { title: "Aquecimento por trocador de calor" },
    { title: "Automação para piscina" },
    { title: "Instalação de capa térmica" },
    { title: "Instalação de cerca de proteção" },
    { title: "Sistemas de desinfecção para piscina" },
    { title: "Bordas e pisos atérmicos" },
    { title: "Instalação de Sauna" },
    { title: "Projeto arquitetônico 3D" },
    { title: "Projetos estrutural e hidráulico" },
    { title: "Aquecimento solar de banho" },
    { title: "Pressurização de sistema de banho" },
  ];

  const referer = [
    "Representante das melhores marcas do segmento",
    "Parceria com grandes arquitetos, profissionais",
    "Fornecimento de projetos em 2D e 3D",
    "Prazos acordados são fielmente seguidos",
    "Atendentes capacitados para tirar dúvidas gerais",
    "Equipe de funcionários uniformizados",
    "Showroom completo",
    "Variedade em produtos químicos e acessórios",
  ];

  return (
    <main className="flex min-h-screen flex-col overflow-hidden scroll-smooth pt-[75px]">
      <SectionSlider />

      <section
        className="w-full flex justify-center bg-[#FFFFFF] py-20 px-8"
        id="aboutUs"
      >
        <div className="max-w-7xl flex flex-col gap-8">
          <h1 className="font-bold text-4xl text-[#0A2E72] text-center max-sm:text-3xl">
            Quem Somos
          </h1>

          <h2 className="text-[#0A2E72] font-semibold text-xl text-center">
            Desde 1987 buscando transformar seu sonho em realidade.
          </h2>

          <div className="flex gap-6 w-full max-sm:flex-col">
            <div className="flex flex-col w-[70%] gap-8 max-sm:w-full">
              <p className="text-right text-[#0A2E72] text-xl max-sm:text-center">
                Assim, nos tornamos referência no <br />
                segmento de piscinas e aquecedores com <br /> grande variedade
                de produtos e serviços <br /> de projeto, construção,
                instalação, <br /> reforma e assistência.
              </p>

              <p className="text-right text-[#0A2E72] text-xl max-sm:text-center">
                Prezamos muito por qualidade nos <br /> produtos e nos serviços
                prestados. Por <br /> isso, somos representantes das melhores
                marcas do Brasil e estamos sempre <br /> atentos aos novos
                lançamentos do <br /> mercado para fazer o seu sonho da área de
                lazer se tornar real.
              </p>
            </div>

            <div className="overflow-hidden rounded-xl w-full">
              <Image
                src="/aboutUs/1.jpg"
                alt=""
                width={730}
                height={380}
                priority
                className="w-full h-[380px] object-cover"
              />
            </div>
          </div>

          <div className="flex gap-6 w-full items-start max-sm:flex-col">
            <div className="overflow-hidden rounded-xl w-[60%] max-sm:w-full">
              <Image
                src="/aboutUs/2.jpg"
                alt=""
                width={730}
                height={380}
                priority
                className="w-full h-[400px] object-cover"
              />
            </div>

            <div className="flex flex-col w-[40%] gap-4 max-sm:w-full">
              <p className="text-left text-[#0A2E72] text-xl max-sm:text-center">
                Contamos com equipe de engenharia e <br /> arquitetura para os
                projetos mais <br /> exigentes. E mão-de-obra de técnicos <br />
                especializados para execução e <br /> assistência.
              </p>

              <p className="text-left text-[#0A2E72] text-xl max-sm:text-center">
                Fundada em Bebedouro – SP atendemos <br /> toda a região em um
                raio de 150 km.
                <br /> Responsável técnico Engenheiro Guido <br /> Poletto. Mais
                de 1.300 projetos <br /> concluídos.
              </p>

              <div className="flex gap-4 max-sm:justify-center">
                <Image
                  src="/icones-02.png"
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
                <Image
                  src="/icones_Prancheta 1.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-[100px]"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-start flex-col gap-3">
            <h3 className="text-[#0A2E72] font-semibold text-xl">
              Porque somos referência:
            </h3>

            <ul className="grid grid-cols-2 gap-2 max-sm:grid-cols-1">
              {referer.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-2 items-center text-[#0A2E72] text-lg"
                >
                  <CheckCircle className="w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="w-full flex flex-col items-center gap-4 bg-[#64AFCF] py-20 px-8"
        id="projects"
      >
        <div className="max-w-7xl flex flex-col gap-8 w-full">
          <h1 className="font-bold text-4xl text-white text-center max-sm:text-3xl">
            Projetos Recentes
          </h1>

          <div className="h-[500px] bg-white shadow-md rounded-lg w-full"></div>
        </div>
      </section>

      <section
        className="w-full flex justify-center bg-[#F8F8F8] py-20 px-8"
        id="solutions"
      >
        <div className="max-w-7xl flex flex-col gap-8" id="NOSSAS SOLUÇÕES">
          <h1 className="font-bold text-4xl text-[#0A2E72] text-center max-sm:text-3xl">
            Nossas soluções
          </h1>

          <div className="grid grid-cols-2 grid-rows-[10] max-md:grid-cols-2 max-sm:grid-cols-1 gap-y-3 gap-x-16">
            {arrayCards.map((item, index) => (
              <div
                key={index}
                className="bg-white shadow-large rounded-xl p-1 w-[400px] max-sm:w-full flex justify-between items-center px-6 "
              >
                <p className="text-[#050505]">{item.title}</p>

                <Check className="w-5 h-5 text-green-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <BrandAnimation />

      <SectionContact />
    </main>
  );
}
