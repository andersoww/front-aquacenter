import { ClientOnly } from "@/components/ClientOnly";

function Geolocation() {
  return (
    <ClientOnly fallback={<div className="w-3/5 max-sm:w-full h-[400px] rounded-3xl bg-zinc-300 animate-pulse" />}>
      <div className="w-3/5 max-sm:w-full h-[400px] rounded-3xl bg-white overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Av.%20Raul%20Furquim,%20574%20-%20Centro,%20Bebedouro%20-%20SP,%2014700-300+(My%20Business%20Name)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps vehicle tracker</a>
        </iframe>
      </div>
    </ClientOnly>
  );
}

export { Geolocation };
