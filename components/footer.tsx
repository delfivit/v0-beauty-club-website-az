import Link from "next/link"
import { Instagram, Phone, MapPin, Clock } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#ffe3dc] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo */}
          <div className="md:col-span-1">
            <div className="text-[#7f0e0e] font-bold text-xl mb-4">The Beauty Club</div>
            <Link
              href="https://www.instagram.com/thebeautyclub.tbc/"
              target="_blank"
              className="inline-flex items-center text-[#7f0e0e] hover:text-[#d48b71] transition-colors"
            >
              <Instagram className="w-5 h-5 mr-2" />
              @thebeautyclub.tbc
            </Link>
          </div>

          {/* Bilbao */}
          <div>
            <h3 className="text-[#7f0e0e] font-outfit font-semibold text-lg mb-4">Bilbao</h3>
            <div className="space-y-2 text-[#7f0e0e] text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>C/ Máximo Aguirre 11 bis</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>660 25 25 23</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Lun-Vie: 9:30-20:30</div>
                  <div>Sáb: 9:30-14:00</div>
                  <div>Dom: Cerrado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Cádiz */}
          <div>
            <h3 className="text-[#7f0e0e] font-outfit font-semibold text-lg mb-4">Cádiz</h3>
            <div className="space-y-2 text-[#7f0e0e] text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Avenida Cayetano del Toro 33</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>692 728 828</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Lun-Vie: 9:30-20:30</div>
                  <div>Sáb-Dom: Cerrado</div>
                </div>
              </div>
            </div>
          </div>

          {/* Málaga */}
          <div>
            <h3 className="text-[#7f0e0e] font-outfit font-semibold text-lg mb-4">Málaga</h3>
            <div className="space-y-2 text-[#7f0e0e] text-sm">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Calle Antonio Luis Carrión N9 LOCAL 2</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 flex-shrink-0" />
                <span>674 039 794</span>
              </div>
              <div className="flex items-start">
                <Clock className="w-4 h-4 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <div>Lun, Mar, Jue, Vie: 9:30-20:30</div>
                  <div>Mié: 11:30-20:30</div>
                  <div>Sáb-Dom: Cerrado</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#d48b71] mt-8 pt-8 text-center text-[#7f0e0e] text-sm">
          <p>&copy; 2025 The Beauty Club. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
