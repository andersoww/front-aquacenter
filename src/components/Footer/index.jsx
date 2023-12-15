import Image from "next/image";
import Link from "next/link";

function NavigationContainer({ title, pathname }) {
  return (
    <div className="flex flex-col gap-8">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <ul className="gap-4 flex flex-col">
        {pathname.map((item, index) => {
          return (
            <li key={index} className="text-white text-sm">
              <Link href={item.path}>{item.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <>
      <footer className="flex bg-[#0a2e72] justify-center">
        <div className="max-w-5xl w-full px-4 py-14 container bg-[url('/footer.png'),url('/footer.png')] max-md:bg-[url('/footer.png')] max-md:bg-cover flex justify-between items-center max-md:items-start max-md:flex-col max-md:gap-8 max-md:text-start">
          <div className="flex flex-col max-w-[300px] gap-6 max-md:items-start">
            <Image
              src="/logo.png"
              height={100}
              width={200}
              alt="logo"
              className="w-[200px] h-[50px] object-contain"
            />
            <p className="text-sm text-left max-md:text-start text-white">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing industries mockups.
            </p>

            <div className="flex pt-4 gap-2 items-center">
              <div className="p-2 border-2 border-[#90a9d8] rounded-full bg-[##163C86] hover:cursor-pointer flex items-center justify-center h-[40px] w-[40px]">
                <Image
                  width={40}
                  height={30}
                  alt=""
                  className="object-contain"
                  src="/instagram.svg"
                />
              </div>

              <Image
                width={50}
                height={40}
                alt=""
                className="hover:cursor-pointer"
                src="/facebook.svg"
              />
            </div>
          </div>

          <div className="flex gap-24 max-md:flex-col max-md:gap-6">
            <NavigationContainer
              title="Departments"
              pathname={[
                { name: "FAQ", path: "" },
                { name: "Privacy Policy", path: "" },
                { name: "Help", path: "" },
                { name: "Contact", path: "" },
                { name: "Contact", path: "" },
              ]}
            />

            <NavigationContainer
              title="Quick Links"
              pathname={[
                { name: "Men", path: "" },
                { name: "Women", path: "" },
                { name: "Kids", path: "" },
                { name: "Shoes", path: "" },
                { name: "Shoes", path: "" },
              ]}
            />

            <NavigationContainer
              title="Blog Post"
              pathname={[
                { name: "Men", path: "" },
                { name: "Women", path: "" },
                { name: "Kids", path: "" },
                { name: "Shoes", path: "" },
                { name: "Shoes", path: "" },
              ]}
            />
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <p>Copyright 2023 All Rights Reserved.</p>
      </div>
    </>
  );
}
