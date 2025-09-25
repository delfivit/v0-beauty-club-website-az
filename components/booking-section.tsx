"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MapPin, Clock, ArrowRight } from "lucide-react"

const bookingData = [
  {
    id: "bilbao",
    name: "Bilbao",
    image: "/images/local-bilbao.jpg",
    address: "C/ Máximo Aguirre 11 bis",
    phone: "660 25 25 23",
    hours: "Lun-Vie: 9:30-20:30, Sáb: 9:30-14:00",
    bookingMethod: "booksy",
    bookingScript:
      '<script type="text/javascript" src="https://booksy.com/widget/code.js?id=100023&country=es&lang=es"></script>',
    description: "Reserva online a través de Booksy",
  },
  {
    id: "cadiz",
    name: "Cádiz",
    image: "/images/local-cadiz.jpg",
    address: "Avenida Cayetano del Toro 33",
    phone: "692 728 828",
    hours: "Lun-Vie: 9:30-20:30",
    bookingMethod: "booksy",
    bookingScript:
      '<script type="text/javascript" src="https://booksy.com/widget/code.js?id=94053&country=es&lang=es"></script>',
    description: "Reserva online a través de Booksy",
  },
  {
    id: "malaga",
    name: "Málaga",
    image: "/images/local-malaga.jpg",
    address: "Calle Antonio Luis Carrión N9 LOCAL 2",
    phone: "674 039 794",
    hours: "Lun, Mar, Jue, Vie: 9:30-20:30, Mié: 11:30-20:30",
    bookingMethod: "booksy",
    bookingScript:
      '<script type="text/javascript" src="https://booksy.com/widget/code.js?id=100020&country=es&lang=es"></script>',
    description: "Reserva online a través de Booksy",
  },
]

export default function BookingSection() {
  useEffect(() => {
    // Load Booksy scripts dynamically
    const scripts = document.querySelectorAll('script[src*="booksy.com"]')
    scripts.forEach((script) => {
      if (script.parentNode) {
        const newScript = document.createElement("script")
        newScript.src = script.getAttribute("src") || ""
        newScript.type = "text/javascript"
        script.parentNode.replaceChild(newScript, script)
      }
    })
  }, [])

  return (
    <section className="py-20">
      {/* Hero Section */}
      <div className="bg-[#7f0e0e] py-20">
        <div className="container mx-auto px-2 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#faaca2] mb-6 font-serif">Reserva tu Cita</h1>
          <p className="text-[25px] text-[#ffe3dc] max-w-3xl mx-auto font-mono">
            Tu momento para desconectar está a un clic de distancia
          </p>
        </div>
      </div>
      {/* Booking Options */}
      <div className="bg-white py-20">
        <div className="container mx-auto px-2">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#7f0e0e] mb-4 font-serif">Elige tu ubicación</h2>
          </div>

          <div className="space-y-12">
            {bookingData.map((location) => (
              <div key={location.id} id={location.id} className="bg-[#fcf6f5] rounded-lg shadow-lg overflow-hidden">
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

                    <p className="text-[#d48b71] mb-6">{location.description}</p>

                    {location.bookingMethod === "booksy" && location.bookingScript ? (
                      <div className="space-y-4">
                        <div dangerouslySetInnerHTML={{ __html: location.bookingScript }} className="booksy-widget" />
                        <p className="text-sm text-[#d48b71] text-center">Widget de reserva de Booksy</p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <Link href={`tel:${location.phone.replace(/\s/g, "")}`}>
                          <Button className="w-full bg-[#7f0e0e] text-[#ffe3dc] font-outfit font-semibold hover:bg-[#d48b71] transition-colors">
                            <Phone className="w-4 h-4 mr-2" />
                            Llamar para Reservar
                          </Button>
                        </Link>
                        <Link href="/servicios">
                          <Button
                            variant="outline"
                            className="w-full border-[#7f0e0e] text-[#7f0e0e] hover:bg-[#7f0e0e] hover:text-white bg-transparent"
                          >
                            Ver Servicios y Precios
                          </Button>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-[#fcf6f5] py-20">
        <div className="container mx-auto px-2 text-center">
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold text-[#7f0e0e] mb-4 font-serif">¿Necesitas ayuda?</h2>
            <p className="text-[#d48b71] mb-6">
              Si tienes alguna duda sobre nuestros servicios o necesitas ayuda para reservar, no dudes en contactarnos.
              Estamos aquí para ayudarte.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="tel:660252523">
                <Button
                  variant="outline"
                  className="border-[#7f0e0e] text-[#7f0e0e] hover:bg-[#7f0e0e] hover:text-white bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Bilbao: 660 25 25 23
                </Button>
              </Link>
              <Link href="tel:692728828">
                <Button
                  variant="outline"
                  className="border-[#7f0e0e] text-[#7f0e0e] hover:bg-[#7f0e0e] hover:text-white bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Cádiz: 692 728 828
                </Button>
              </Link>
              <Link href="tel:674039794">
                <Button
                  variant="outline"
                  className="border-[#7f0e0e] text-[#7f0e0e] hover:bg-[#7f0e0e] hover:text-white bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Málaga: 674 039 794
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
