import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  return (
    <div className="bg-[#5423e7] backdrop-blur-sm w-full">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-32 -mt-[40px] pt-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
              Tingkatkan Reputasi Perusahaan Anda dengan Website Profesional!
            </h1>

            <p className="text-lg md:text-xl text-gray-200 font-normal">
              Bangun citra profesional dengan website yang mendukung <br />
              bisnis Anda
            </p>

            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-black hover:bg-gray-100 text-base font-medium rounded-full py-7"
            >
              <Link href="#pricing">Saya mau redesign website →</Link>
            </Button>
          </div>

          <div className="hidden lg:block relative w-full h-full">
            <div className="relative w-full aspect-[4/3] scale-125 lg:scale-150">
              <Image
                src="/hero.png"
                alt="Dashboard Preview"
                fill
                className="object-contain rounded-lg transform rotate-3 drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection

