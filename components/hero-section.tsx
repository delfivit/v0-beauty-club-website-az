"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className="bg-[#7f0e0e] min-h-screen flex flex-col items-center justify-center pt-20">
      <div className="container mx-auto px-2 text-center flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div
              className="font-archeron text-[#faaca2] leading-none"
              style={{
                transform: `translateY(${scrollY * 0.3}px) scale(${1 + scrollY * 0.0005})`,
                opacity: Math.max(0.3, 1 - scrollY * 0.002),
              }}
            >
              <div className="text-7xl md:text-9xl lg:text-9xl font-bold leading-[0.4]">the</div>
              <div className="text-7xl md:text-9xl lg:text-[10rem] font-bold leading-[0.9] tracking-wider">Beauty</div>
              <div className="text-7xl md:text-9xl lg:text-9xl font-bold leading-[0.7] tracking-widest">club</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-2 pb-20">
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
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
    </section>
  )
}
