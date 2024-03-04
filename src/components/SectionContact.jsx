import Image from "next/image";
import { Geolocation } from "@/components/Geolocation";

export function SectionContact() {
  return (
    <section
      className="w-full bg-[#64AFCF] flex justify-center bg-[url('/background.png')]"
      id="contact"
    >
      <div className="max-w-7xl justify-between w-full py-20 px-8 flex gap-16 max-sm:flex-col max-sm:items-center">
        <Geolocation />

        <div className="flex flex-col gap-8 w-2/5 max-sm:w-full max-sm:items-center">
          <p className="font-semibold text-white text-lg">
            Entre em contato agora mesmo pelos nossos Canais de atendimento
            abaixo!
          </p>

          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-2">
              <Image
                src="/icon-tel-red.png"
                alt=""
                width={40}
                height={40}
                className="object-contain"
              />
              <p className="font-semibold text-white text-lg max-sm:text-sm">
                (17) 3342-5400 / (17) 99711-3532
              </p>
            </div>
            <div className="flex items-center gap-2 w-full">
              <Image src="/icon-email-home.png" alt="" width={40} height={40} />

              <p className="font-semibold text-white text-lg max-sm:text-sm">
                contato@aquacenterbebedouro.com.br
              </p>
            </div>

            <p className="font-semibold text-white text-lg w-[60%] max-sm:text-sm">
              Av. Raul Furquim, 574 - Centro, Bebedouro - SP / CEP: 14700-300
            </p>

            <div className="flex flex-col">
              <p className="font-semibold text-white text-lg max-sm:text-sm">
                Horário funcionamento:
              </p>
              <p className="font-semibold text-white text-lg max-sm:text-sm">
                Seg – sexta: 07h30 – 11h30 / 13h00 – 18h00
              </p>
              <p className="font-semibold text-white text-lg max-sm:text-sm">
                Sáb: 08h00 – 12h30
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="max-w-5xl justify-between w-full px-4 py-14 flex gap-8 max-sm:flex-col max-sm:items-center">
        <div>
          <div className="p-8 bg-white shadow-sm w-[300px] h-fit rounded-xl flex flex-col gap-6">
            <h1 className="font-bold text-2xl text-[#0A2E72] text-left">
              Entre em contato Agora mesmo!
            </h1>

            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <Image
                  src="/icon-tel-red.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-contain"
                />
                <p className="font-semibold text-[#0088FF] text-lg">
                  +00 568 467 46
                </p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-semibold text-[#0088FF] text-lg">
                  medicust@gmail.com
                </p>
                <Image
                  src="/icon-email-home.png"
                  alt=""
                  width={40}
                  height={40}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="text-white gap-6 flex flex-col max-sm:items-center max-sm:text-center">
          <h3 className="text-xl font-semibold">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </h3>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, qu nostrud exercitation ullamco laboris nisi ut
            aliquip.
          </p>

          <Image
            src="/icon-clientes-home.png"
            alt=""
            width={200}
            height={150}
          />
        </div>
      </div> */}
    </section>
  );
}
