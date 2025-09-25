import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

const locationsData = [
  {
    id: "bilbao",
    name: "Bilbao",
    image: "/images/local-bilbao.jpg",
    address: "C/ Máximo Aguirre 11 bis",
    phone: "660 25 25 23",
    hours: {
      weekdays: "Lunes a Viernes: 9:30 - 20:30",
      saturday: "Sábado: 9:30 - 14:00",
      sunday: "Domingo: Cerrado",
    },
    services: ["Manicura", "Pedicura", "Lifting de Pestañas", "Depilación", "Tratamientos Faciales"],
    bookingUrl: "/reserva#bilbao",
  },
  {
    id: "cadiz",
    name: "Cádiz",
    image: "/images/local-cadiz.jpg",
    address: "Avenida Cayetano del Toro 33",
    phone: "692 728 828",
    hours: {
      weekdays: "Lunes a Viernes: 9:30 - 20:30",
      saturday: "Sábado: Cerrado",
      sunday: "Domingo: Cerrado",
    },
    services: ["Manicura Rusa", "Uñas Soft-Gel", "Pedicura SPA", "Lifting de Pestañas", "Limpieza Facial"],
    bookingUrl: "/reserva#cadiz",
    bookingScript:
      '<script type="text/javascript" src="https://booksy.com/widget/code.js?id=94053&country=es&lang=es"></script>',
  },
  {
    id: "malaga",
    name: "Málaga",
    image: "/images/local-malaga.jpg",
    address: "Calle Antonio Luis Carrión N9 LOCAL 2",
    phone: "674 039 794",
    hours: {
      weekdays: "Lunes, Martes, Jueves, Viernes: 9:30 - 20:30",
      wednesday: "Miércoles: 11:30 - 20:30",
      weekend: "Sábado y Domingo: Cerrado",
    },
    services: ["Masajes", "Dermapen", "Maderoterapia", "Manicura", "Tratamientos Anti-Age"],
    bookingUrl: "/reserva#malaga",
    bookingScript:
      '<script type="text/javascript" src="https://booksy.com/widget/code.js?id=100020&country=es&lang=es"></script>',
  },
]

export default function LocationsDetailSection() {
  return (
    <section className="py-20 bg-[#fcf6f5]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#7f0e0e] mb-4 font-serif">Nuestras Ubicaciones</h1>
          <p className="text-xl text-[#d48b71] font-mono">Encuentra el salón más cercano a ti</p>
        </div>

        <div className="space-y-12">
          {locationsData.map((location) => (
            <div key={location.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={location.image || "/placeholder.svg"}
                    alt={`Salon ${location.name}`}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="p-8">
                  <h2 className="text-3xl font-bold text-[#7f0e0e] mb-6 font-serif">{location.name}</h2>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-start text-[#7f0e0e]">
                      <MapPin className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                      <span>{location.address}</span>
                    </div>

                    <div className="flex items-center text-[#7f0e0e]">
                      <Phone className="w-5 h-5 mr-3 flex-shrink-0" />
                      <Link
                        href={`tel:${location.phone.replace(/\s/g, "")}`}
                        className="hover:text-[#d48b71] transition-colors"
                      >
                        {location.phone}
                      </Link>
                    </div>

                    <div className="flex items-start text-[#7f0e0e]">
                      <Clock className="w-5 h-5 mr-3 mt-1 flex-shrink-0" />
                      <div className="space-y-1">
                        <div>{location.hours.weekdays}</div>
                        {location.hours.wednesday && <div>{location.hours.wednesday}</div>}
                        {location.hours.saturday && <div>{location.hours.saturday}</div>}
                        {location.hours.weekend && <div>{location.hours.weekend}</div>}
                        {location.hours.sunday && <div>{location.hours.sunday}</div>}
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-[#7f0e0e] mb-3">Servicios Destacados</h3>
                    <div className="flex flex-wrap gap-2">
                      {location.services.map((service, index) => (
                        <span key={index} className="bg-[#fcf6f5] text-[#7f0e0e] px-3 py-1 rounded-full text-sm">
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    {location.bookingScript ? (
                      <div>
                        <div
                          dangerouslySetInnerHTML={{ __html: location.bookingScript }}
                          className="booksy-widget mb-2"
                        />
                        <p className="text-sm text-[#d48b71] text-center">Reserva directamente a través de Booksy</p>
                      </div>
                    ) : (
                      <Link href={location.bookingUrl}>
                        <Button className="w-full bg-[#7f0e0e] text-[#ffe3dc] font-outfit font-semibold hover:bg-[#d48b71] transition-colors">
                          Reservar Cita en {location.name}
                        </Button>
                      </Link>
                    )}

                    <Link href="/servicios">
                      <Button
                        variant="outline"
                        className="w-full border-[#7f0e0e] text-[#7f0e0e] hover:bg-[#7f0e0e] hover:text-white bg-transparent"
                      >
                        Ver Todos los Servicios
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
