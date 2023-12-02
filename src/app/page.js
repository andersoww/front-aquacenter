"use client";

import { BrandAnimation } from "@/components/BrandAnimation";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <BrandAnimation />
      <Footer />
    </main>
  );
}
