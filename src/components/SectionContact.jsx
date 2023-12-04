import Image from "next/image";

export function SectionContact() {
  return (
    <section className="w-full bg-[#64AFCF] flex justify-center bg-[url('/background.png')]">
      <div className="max-w-5xl justify-between w-full px-4 py-14 flex gap-8">
        <div>
          <div className="p-8 bg-white shadow-sm w-[300px] h-full rounded-md flex flex-col gap-6">
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

        <div className="text-white gap-6 flex flex-col">
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
      </div>
    </section>
  );
}
