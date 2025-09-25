import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  return (
    <section className="bg-[#7f0e0e] min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#faaca2] leading-tight mb-12">
            <div className="block">The</div>
            <div className="block">Beauty</div>
            <div className="block">Club</div>
          </h1>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/reserva">
              <Button
                size="lg"
                className="bg-[#faaca2] text-[#7f0e0e] font-outfit font-semibold hover:bg-[#ffe3dc] transition-colors px-8 py-4 text-lg"
              >
                Reserva ahora
              </Button>
            </Link>
            <Link href="/ubicaciones">
              <Button
                size="lg"
                variant="outline"
                className="border-[#faaca2] text-[#faaca2] font-outfit font-semibold hover:bg-[#faaca2] hover:text-[#7f0e0e] transition-colors px-8 py-4 text-lg bg-transparent"
              >
                Ver Ubicaciones
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
