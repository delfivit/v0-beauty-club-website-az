"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#ffe3dc] shadow-sm">
      <div className="container mx-auto px-2">
        {/* Increased header height to accommodate larger logo */}
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            {/* Increased logo size from 180x60 to 240x80 and adjusted height class */}
            <Image
              src="/images/logo-header.png"
              alt="The Beauty Club"
              width={240}
              height={80}
              className="h-18 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <Link
              href="/servicios"
              className="text-[#7f0e0e] font-outfit font-semibold hover:text-[#d48b71] transition-colors"
            >
              Servicios
            </Link>
            <Link
              href="/ubicaciones"
              className="text-[#7f0e0e] font-outfit font-semibold hover:text-[#d48b71] transition-colors"
            >
              Ubicaciones
            </Link>
            <Link
              href="/sobre-nosotros"
              className="text-[#7f0e0e] font-outfit font-semibold hover:text-[#d48b71] transition-colors"
            >
              Sobre Nosotros
            </Link>
          </nav>

          {/* Desktop Reserva Button */}
          <Link href="/reserva" className="hidden md:block">
            <Button className="bg-[#7f0e0e] text-[#ffe3dc] font-outfit font-semibold hover:bg-[#d48b71] transition-colors px-6">
              Reserva
            </Button>
          </Link>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-[#7f0e0e]" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#d48b71]">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/servicios"
                className="text-[#7f0e0e] font-outfit font-semibold hover:text-[#d48b71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Servicios
              </Link>
              <Link
                href="/ubicaciones"
                className="text-[#7f0e0e] font-outfit font-semibold hover:text-[#d48b71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ubicaciones
              </Link>
              <Link
                href="/sobre-nosotros"
                className="text-[#7f0e0e] font-outfit font-semibold hover:text-[#d48b71] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>
              <Link href="/reserva" onClick={() => setIsMenuOpen(false)}>
                <Button className="bg-[#7f0e0e] text-[#ffe3dc] font-outfit font-semibold hover:bg-[#d48b71] transition-colors w-full">
                  Reserva
                </Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
