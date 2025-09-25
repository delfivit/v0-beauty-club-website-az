import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

const locations = [
  {
    name: "Bilbao",
    image: "/images/local-bilbao.jpg",
    address: "C/ Máximo Aguirre 11 bis",
    phone: "660 25 25 23",
    hours: "Lun-Vie: 9:30-20:30, Sáb: 9:30-14:00, Dom: Cerrado",
    bookingUrl: "/reserva#bilbao",
  },
  {
    name: "Cádiz",
    image: "/images/local-cadiz.jpg",
    address: "Avenida Cayetano del Toro 33",
    phone: "692 728 828",
    hours: "Lun-Vie: 9:30-20:30, Sáb-Dom: Cerrado",
    bookingUrl: "/reserva#cadiz",
  },
  {
    name: "Málaga",
    image: "/images/local-malaga.jpg",
    address: "Calle Antonio Luis Carrión N9 LOCAL 2",
    phone: "674 039 794",
    hours: "Lun, Mar, Jue, Vie: 9:30-20:30, Mié: 11:30-20:30, Sáb-Dom: Cerrado",
    bookingUrl: "/reserva#malaga",
  },
]

export default function LocationsSection() {
  return (
    <section className="bg-[#fcf6f5] py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7f0e0e] mb-4 font-serif">
            Estamos en Bilbao, Málaga y Cádiz
          </h2>
          <p className="text-xl text-[#d48b71] font-mono">pero nuestra esencia es la misma en cada lugar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src={location.image || "/placeholder.svg"}
                  alt={`Salon ${location.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-[#7f0e0e] mb-4 font-serif">{location.name}</h3>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start text-[#7f0e0e]">
                    <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{location.address}</span>
                  </div>

                  <div className="flex items-center text-[#7f0e0e]">
                    <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                    <span className="text-sm">{location.phone}</span>
                  </div>

                  <div className="flex items-start text-[#7f0e0e]">
                    <Clock className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm">{location.hours}</span>
                  </div>
                </div>

                <Link href={location.bookingUrl}>
                  <Button className="w-full bg-[#7f0e0e] text-[#ffe3dc] font-outfit font-semibold hover:bg-[#d48b71] transition-colors">
                    Reservar Cita
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
