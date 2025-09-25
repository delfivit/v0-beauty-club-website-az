"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"
import { useEffect } from "react"

const locations = [
  {
    name: "Bilbao",
    image: "/images/local-bilbao.jpg",
    address: "C/ Máximo Aguirre 11 bis",
    phone: "660 252 523",
    hours: "Lun-Vie: 9:30-20:30, Sáb: 9:30-14:00, Dom: Cerrado",
    bookingMethod: "booksy",
    bookingScript:
      '<script type="text/javascript" src="https://booksy.com/widget/code.js?id=100020&country=es&lang=es"></script>',
  },
  {
    name: "Cádiz",
    image: "/images/local-cadiz.jpg",
    address: "Avenida Cayetano del Toro 33",
    phone: "692 728 828",
    hours: "Lun-Vie: 9:30-20:30, Sáb-Dom: Cerrado",
    bookingMethod: "booksy",
    bookingScript:
      '<script type="text/javascript" src="https://booksy.com/widget/code.js?id=94053&country=es&lang=es"></script>',
  },
  {
    name: "Málaga",
    image: "/images/local-malaga.jpg",
    address: "Calle Antonio Luis Carrión N9 LOCAL 2",
    phone: "674 039 794",
    hours: "Lun, Mar, Jue, Vie: 9:30-20:30, Mié: 11:30-20:30, Sáb-Dom: Cerrado",
    bookingMethod: "booksy",
    bookingScript:
      '<script type="text/javascript" src="https://booksy.com/widget/code.js?id=94054&country=es&lang=es"></script>',
  },
]

export default function LocationsSection() {
  useEffect(() => {
    // Force reload Booksy widgets after component mounts
    const timer = setTimeout(() => {
      locations.forEach((location) => {
        if (location.bookingMethod === "booksy" && location.bookingScript) {
          const widgetContainer = document.querySelector(`#booksy-widget-${location.name.toLowerCase()}`)
          if (widgetContainer) {
            // Re-inject the script to ensure it loads
            const script = document.createElement("script")
            script.type = "text/javascript"
            let widgetId = "94053" // Default for Cádiz
            if (location.name === "Bilbao") widgetId = "100020"
            if (location.name === "Málaga") widgetId = "94054"
            script.src = `https://booksy.com/widget/code.js?id=${widgetId}&country=es&lang=es`
            script.async = true
            widgetContainer.appendChild(script)
          }
        }
      })
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-[#fcf6f5] py-20">
      <div className="container mx-auto px-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7f0e0e] mb-4 font-butler">
            Estamos en Bilbao, Cádiz y Málaga
          </h2>
          <p className="text-[26px] text-[#d48b71] font-quentin">pero nuestra esencia es la misma en cada lugar</p>
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
                <h3 className="text-2xl font-bold text-[#7f0e0e] mb-4 font-serif text-center">{location.name}</h3>

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

                {location.bookingMethod === "booksy" && location.bookingScript ? (
                  <div className="space-y-4">
                    <div
                      id={`booksy-widget-${location.name.toLowerCase()}`}
                      dangerouslySetInnerHTML={{ __html: location.bookingScript }}
                      className="booksy-widget min-h-[50px]"
                    />
                    <p className="text-sm text-[#d48b71] text-center">Reserva online con Booksy</p>
                  </div>
                ) : (
                  <Link href={`tel:${location.phone.replace(/\s/g, "")}`}>
                    <Button className="w-full bg-[#7f0e0e] text-[#ffe3dc] font-outfit font-semibold hover:bg-[#d48b71] transition-colors">
                      <Phone className="w-4 h-4 mr-2" />
                      Llamar para Reservar
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
