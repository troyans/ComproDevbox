import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function Header() {
  return (
    <header className="px-10 bg-[#5423e7]/95 backdrop-blur-sm sticky top-0 z-50 border-b border-white/10 font-sans">
      <div className="flex flex-row justify-between items-center max-w-7xl mx-auto py-4 xl:px-10">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <p className="text-2xl lg:text-4xl font-bold text-white">Devbox.</p>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-8">

          <Link href="#layanan">
            <p className="text-sm font-medium text-gray-200 hover:text-white transition-colors">Layanan</p>
          </Link>

          <Link href="#portofolio">
            <p className="text-sm font-medium text-gray-200 hover:text-white transition-colors">Portofolio</p>
          </Link>
          
          <Link href="#pricing">
            <p className="text-sm font-medium text-gray-200 hover:text-white transition-colors">Pricing</p>
          </Link>
        
        </nav>

        <div className="flex items-center space-x-3">
          
          <Button variant="secondary" className="bg-white text-black hover:bg-gray-100 rounded-full py-5 text-sm">
            <Link href="https://wa.me/6285319205335?text=Saya%20berminat%20develop%20website%20company%20profile%20">Chat WA Sekarang →</Link> 
          </Button>
        </div>
      </div>
    </header>
  )
}

