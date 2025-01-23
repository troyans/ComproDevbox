import { cn } from "@/lib/utils";
import { Marquee } from "./ui/marquee";
import Image from "next/image";

const images = [
  "/showcase-flip.png",
  "/showcase-keluargakara.png", 
  "/showcase-kwijaya.png",
  "/showcase-caffino.png",
  "/showcase-grahamedika.png",

];

const firstRow = images.slice(0, images.length / 2);
const secondRow = images.slice(images.length / 2);

const ImageCard = ({ src }: { src: string }) => {
  return (
    <div
      className={cn(
        "relative w-[400px] h-[300px] cursor-pointer overflow-hidden rounded-xl border mx-4",
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
      )}
    >
      <Image 
        src={src}
        alt="Portfolio Image"
        fill
        className="object-cover"
      />
    </div>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex h-[700px] w-screen flex-col items-center justify-center overflow-hidden bg-background ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((src, index) => (
          <ImageCard key={index} src={src} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((src, index) => (
          <ImageCard key={index} src={src} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
    </div>
  );
}
