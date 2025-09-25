import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Heart, Users, Award, MapPin } from "lucide-react"

export default function AboutSection() {
  return (
    <section className="py-20">
      {/* Hero Section */}
      <div className="bg-[#7f0e0e] py-20">
        <div className="container mx-auto px-2 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-[#faaca2] mb-6 font-serif">Sobre nosotros</h1>
          <p className="text-xl text-[#ffe3dc] max-w-3xl mx-auto font-mono">
            Tu momento para desconectar
          </p>
        </div>
      </div>
      {/* Main Content */}
      <div className="bg-[#fcf6f5] py-20 pb-0">
        <div className="container mx-auto px-2">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div className="space-y-4 text-[#7f0e0e] leading-relaxed">
                  <p>
                    Somos un espacio de belleza donde cada detalle está pensado para que desconectes, te relajes y
                    salgas sintiéndote más tú.
                  </p>
                  <p>
                    Estamos en Bilbao, Cádiz y Málaga, pero nuestra esencia es la misma en cada lugar.
                  </p>
                  <p>Somos una comunidad que busca sentirse bien y verse mejor.</p>
                </div>
              </div>

              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/images/local-cadiz.jpg" alt="Interior de The Beauty Club" fill className="object-cover" />
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="text-center bg-white p-8 rounded-lg shadow-sm">
                <Heart className="w-12 h-12 text-[#faaca2] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#7f0e0e] mb-3 font-serif">Cuidado Integral</h3>
                <p className="text-[#7f0e0e] text-sm">
                  Cuidamos más allá del color, enfocándonos en tu bienestar
                  completo.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-lg shadow-sm">
                <Award className="w-12 h-12 text-[#faaca2] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#7f0e0e] mb-3 font-serif">Técnica Impecable</h3>
                <p className="text-[#7f0e0e] text-sm">
                  Utilizamos productos de alta calidad y procesos higiénicos con técnica profesional para garantizar los
                  mejores resultados.
                </p>
              </div>

              <div className="text-center bg-white p-8 rounded-lg shadow-sm">
                <Users className="w-12 h-12 text-[#faaca2] mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#7f0e0e] mb-3 font-serif">Comunidad</h3>
                <p className="text-[#7f0e0e] text-sm">
                  Somos una comunidad que busca sentirse bien y verse mejor
                </p>
              </div>
            </div>

            {/* Mission Statement */}
            <div className="bg-white p-8 rounded-lg shadow-sm text-center mb-16">
              <h2 className="text-3xl font-bold text-[#7f0e0e] mb-6 font-serif">Nuestra Misión</h2>
              <p className="text-lg text-[#7f0e0e] leading-relaxed max-w-3xl mx-auto">
                "Tu momento para desconectar"
              </p>
            </div>

            {/* Locations Overview */}
            <div className="text-center pb-20">
              <p className="text-[#7f0e0e] mb-8">
                Encuentra el salón más cercano a ti y vive la experiencia The Beauty Club
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/ubicaciones">
                  <Button className="bg-[#7f0e0e] text-[#ffe3dc] font-outfit font-semibold hover:bg-[#d48b71] transition-colors">
                    <MapPin className="w-4 h-4 mr-2" />
                    Ver Ubicaciones
                  </Button>
                </Link>
                <Link href="/reserva">
                  <Button
                    variant="outline"
                    className="border-[#7f0e0e] text-[#7f0e0e] hover:bg-[#7f0e0e] hover:text-white bg-transparent"
                  >
                    Reservar Cita
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
