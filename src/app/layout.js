import "../styles/output.css";
import { Footer } from "@/components/Footer";
import { NavBar } from "@/components/NavBar";
import { Providers } from "@/components/Providers";
import { Inter } from "next/font/google";
import { WhatsApp } from "@/components/WhatsApp";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aquacenter",
  description: "Piscinas e Aquecedores",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <NavBar />
          {children}
          <Footer />
          <WhatsApp className="fixed bottom-4 right-2 w-16 h-16 hover:cursor-pointer" />
        </Providers>
      </body>
    </html>
  );
}
