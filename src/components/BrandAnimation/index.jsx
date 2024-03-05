"use client";
import Image from "next/image";
import { useMemo, useEffect, useState } from "react";
import { animate, motion, useMotionValue } from "framer-motion";
import useMeasure from "react-use-measure";
import { ClientOnly } from "../ClientOnly";

export function BrandAnimation() {
  const brands = useMemo(
    () => [
      { path: "/discord.svg" },
      { path: "/ifood.svg" },
      { path: "/whatsapp-logo.png" },
      { path: "/amazon.png" },
      { path: "/discord.svg" },
      { path: "/ifood.svg" },
      { path: "/whatsapp-logo.png" },
      { path: "/amazon.png" },
      { path: "/discord.svg" },
      { path: "/ifood.svg" },
      { path: "/whatsapp-logo.png" },
      { path: "/amazon.png" },
    ],
    []
  );

  const FAST_DURATION = 25;
  const SLOW_DURATION = 75;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width, mustFinish]);

  return (
    <section className="w-full justify-center py-20 flex gap-8 px-8">
      <div className="w-full max-w-7xl scroll">
        <h1 className="font-bold text-4xl text-[#0A2E72] text-center max-sm:text-3xl">
          Marcas e Parceiros
        </h1>

        <ClientOnly>
          <motion.div
            className="flex mt-10"
            style={{ x: xTranslation }}
            ref={ref}
            onHoverStart={() => {
              setMustFinish(true);
              setDuration(SLOW_DURATION);
            }}
            onHoverEnd={() => {
              setMustFinish(true);
              setDuration(FAST_DURATION);
            }}
          >
            {brands.map((item, index) => {
              return (
                <Image
                  key={index}
                  src={item.path}
                  alt=""
                  width={100}
                  height={250}
                  className="h-[100px] min-w-[250px] object-contain"
                />
              );
            })}
          </motion.div>
        </ClientOnly>
      </div>
    </section>
  );
}
