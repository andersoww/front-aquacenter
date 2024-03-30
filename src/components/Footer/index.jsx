import Image from "next/image";
import Link from "next/link";
import { NavigationContainer } from "./NavigationContainer";

export function Footer() {
  return (
    <>
      <footer className="flex bg-[#0a2e72] justify-center">
        <div className="max-w-7xl w-full px-4 py-14 container bg-[url('/footer.png'),url('/footer.png')] max-md:bg-[url('/footer.png')] max-md:bg-cover flex justify-between max-md:items-start max-md:flex-col max-md:gap-8 max-md:text-start">
          <div className="flex flex-col max-w-[300px] gap-6 max-md:items-start">
            <Image
              src="/logo.png"
              height={100}
              width={200}
              alt="logo"
              className="w-[200px] h-[50px] object-contain"
            />

            <div>
              <p className="text-sm text-left max-md:text-start text-white">
                Sempre buscamos tornar seus
              </p>

              <p className="text-sm text-left max-md:text-start text-white">
                Sonhos em realidade!
              </p>
            </div>
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

          <NavigationContainer
            title="Links Úteis"
            pathname={[
              { name: "Início", path: "home" },
              { name: "Quem Somos", path: "aboutUs" },
              { name: "Projetos Recentes", path: "PROJETOS RECENTES" },
              { name: "Nossas Soluções", path: "solutions" },
              { name: "Contatos", path: "contact" },
              { name: "Quero um Orçamento", path: "" },
            ]}
          />

          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold text-white">Loja</h2>

            <div className="flex flex-col gap-4">
              <p className="text-white text-sm max-sm:text-sm">
                Venha fazer uma visita:
              </p>
              <p className="text-white text-sm max-sm:text-sm">
                Av. Raul Furquim, 574 - Centro,
              </p>
              <p className="text-white text-sm max-sm:text-sm">
                Bebedouro - SP / CEP: 14700-300
              </p>
              <p className="text-white text-sm max-sm:text-sm">Horários:</p>
              <p className="text-white text-sm max-sm:text-sm">
                Seg – sexta: 07h30 – 11h30 / 13h00 – 18h00
              </p>
              <p className="text-white text-sm max-sm:text-sm">
                Sáb: 08h00 – 12h30
              </p>
            </div>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>© Todos os direitos reservados - 2024 - desenvolvido por {""}
          <span className="hover:cursor-pointer hover:underline font-bold">
            <Link href="https://guidesign.com.br/">
              GUIdesign
            </Link>
          </span>
          .</p>
      </div>
    </>
  );
}
