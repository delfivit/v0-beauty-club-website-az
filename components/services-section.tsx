import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

const servicesData = {
  bilbao: {
    name: "Bilbao",
    phone: "660 252 523",
    bookingScript:
      '<script type="text/javascript" src="https://booksy.com/widget/code.js?id=100023&country=es&lang=es"></script>',
    services: [
      { name: "Brow lamination", price: "20€" },
      { name: "Depilación de cejas", price: "10€" },
      { name: "Depilación de cejas + labio", price: "15€" },
      { name: "Depilación de cejas + tinte", price: "15€" },
      { name: "Tinte de ceja", price: "10€" },
      { name: "Depilación de mentón", price: "10€" },
      { name: "Depilación de mentón + labio superior", price: "15€" },
      { name: "Depilación de labio superior", price: "6€" },
      { name: "Facial completo", price: "20€" },
      { name: "Arreglo de uña", price: "3€" },
      { name: "Manicura rusa", price: "32€" },
      { name: "Manicura semipermanente", price: "19€" },
      { name: "Decoración", price: "1€" },
      { name: "Retiro semipermanente", price: "7€" },
      { name: "Retoque acrílico", price: "43€" },
      { name: "Uñas acrílicas con forma", price: "50€" },
      { name: "Uñas soft gel", price: "36€" },
      { name: "Manicura con nivelación", price: "28€" },
      { name: "Manicura rusa + nivelación", price: "42€" },
      { name: "Manicura + parafina", price: "35€" },
      { name: "Retiro acrílico", price: "18€" },
      { name: "Retirar soft gel", price: "32€" },
      { name: "Uñas nuevas acrílicas", price: "48€" },
      { name: "Pedicura completa", price: "39€" },
      { name: "Cortar uñas + semi", price: "19€" },
      { name: "Lifting pestañas", price: "36€" },
      { name: "Servicio de extensión de pestañas", price: "40€" },
      { name: "Extensión de pestañas", price: "60,50€" },
      { name: "Lifting de pestañas + tinte de pestañas", price: "41€" },
      { name: "Tinte de pestañas", price: "10€" },
    ],
  },
  cadiz: {
    name: "Cádiz",
    phone: "692 728 828",
    bookingScript:
      '<script type="text/javascript" src="https://booksy.com/widget/code.js?id=94053&country=es&lang=es"></script>',
    services: [
      { name: "Manicura rusa sin esmaltado", price: "17,00€" },
      { name: "Manicura semi con Refuerzo/Nivelación", price: "26,00€" },
      { name: "Manicura esmaltado normal", price: "14,00€" },
      { name: "Manicura Rusa + Esmaltado a elección", price: "40,00€" },
      { name: "Uñas Soft-Gel", price: "38,00€" },
      { name: "Manicura Semipermanente (sin decoración)", price: "19,00€" },
      { name: "Uñas de Acry-Gel", price: "30,00€" },
      { name: "Suplemento de Manicura Francesa", price: "1,00€" },
      { name: "Suplemento Decoración Avanzada", price: "2,00€" },
      { name: "Relleno Uñas de Soft-Gel", price: "28,00€" },
      { name: "Suplemento Decoración Básica", price: "1,00€" },
      { name: "1 Uña Semipermanente", price: "1,50€" },
      { name: "1 Uña de Acry-Gel", price: "3,00€" },
      { name: "Retirar Semipermanente", price: "7,00€" },
      { name: "Retirar Acrílico/Acry-Gel", price: "10,00€" },
      { name: "Pedicura Semipermanente", price: "20,00€" },
      { name: "Retirar Semipermanente en pies", price: "7,00€" },
      { name: "Pedicura SPA + Semipermanente", price: "30,00€" },
      { name: "Reconstrucción de uña", price: "3,00€" },
      { name: "Pedicura con esmaltado normal", price: "18,00€" },
      { name: "Pedicura SPA + esmalte normal", price: "24,00€" },
      { name: "Limado + recorte de cutículas pies", price: "15,00€" },
      { name: "Lifting de Pestañas + Tinte", price: "30,00€" },
      { name: "Lifting de Pestañas", price: "25,00€" },
      { name: "Depilación labio superior", price: "5,00€" },
      { name: "Depilación de cejas con cera", price: "6,00€" },
      { name: "Limpieza facial con hidratación", price: "25,99€" },
    ],
  },
  malaga: {
    name: "Málaga",
    phone: "674 039 794",
    bookingScript:
      '<script type="text/javascript" src="https://booksy.com/widget/code.js?id=100020&country=es&lang=es"></script>',
    services: [
      { name: "Depilación con cera de axilas", price: "15,00€" },
      { name: "Masaje con Piedras Calientes", price: "35,00€" },
      { name: "Dermapen con ácido hialurónico", price: "50,00€" },
      { name: "Maderoterapia", price: "40,00€" },
      { name: "Depilación de cejas con cera", price: "15,00€" },
      { name: "Depilación de labio superior", price: "15,00€" },
      { name: "Masaje Para La Caída del Cabello", price: "35,00€" },
      { name: "Dermaplaning Cosmético", price: "40,00€" },
      { name: "Dermapen con vitamina C", price: "50,00€" },
      { name: "Hidra Lips Glow con Ácido Hialurónico", price: "30,00€" },
      { name: "Yoga Facial", price: "30,00€" },
      { name: "Facial Para Pieles Sensibles o Rosácea", price: "35,00€" },
      { name: "Limpieza Facial Profunda", price: "45,00€" },
      { name: "Masaje Relajante", price: "40,00€" },
      { name: "Exosomas Anti Age", price: "55,00€" },
      { name: "Exfoliación de Espalda", price: "45,00€" },
      { name: "Depilación de barbilla con cera", price: "15,00€" },
      { name: "Laminado de cejas", price: "30,00€" },
      { name: "Masaje Anti Celulitis", price: "40,00€" },
      { name: "Day Spa", price: "60,00€" },
      { name: "Lifting de pestañas", price: "35,00€" },
      { name: "Manicura esmaltado semipermanente", price: "20,00€" },
      { name: "Retirada semipermanente manos", price: "5,00€" },
      { name: "Manicura semipermanente con refuerzo", price: "26,00€" },
      { name: "Uñas de Soft gel talla S", price: "32,00€" },
      { name: "Soft gel talla M", price: "36,00€" },
      { name: "Soft gel talla L", price: "42,00€" },
      { name: "Uñas polygel talla M", price: "38,00€" },
      { name: "Esmaltado semipermanente en pies", price: "20,00€" },
      { name: "Limado y corte de uñas", price: "8,00€" },
      { name: "Decoración de uña", price: "2,00€" },
      { name: "Cambios de estructura de uña", price: "3,00€" },
    ],
  },
}

export default function ServicesSection() {
  return (
    <section className="py-20 bg-[#fcf6f5]">
      <div className="container mx-auto px-2">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#7f0e0e] mb-4 font-serif">Nuestros Servicios</h1>
          <p className="text-[26px] text-[#d48b71] font-mono">Descubre todos nuestros tratamientos de belleza</p>
        </div>

        <div className="space-y-16">
          {Object.entries(servicesData).map(([key, location]) => (
            <div key={key} className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#7f0e0e] mb-2 font-serif">{location.name}</h2>
                <p className="text-[#d48b71] flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  {location.phone}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {location.services.map((service, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-[#fcf6f5] rounded-lg">
                    <span className="text-[#7f0e0e] font-medium text-sm">{service.name}</span>
                    <span className="text-[#d48b71] font-semibold">{service.price}</span>
                  </div>
                ))}
              </div>

              <div className="text-center">
                {location.bookingScript ? (
                  <div className="space-y-4">
                    <div dangerouslySetInnerHTML={{ __html: location.bookingScript }} className="booksy-widget" />
                    <p className="text-sm text-[#d48b71]">Reserva directamente a través de Booksy</p>
                  </div>
                ) : (
                  <Link href={`/reserva#${key}`}>
                    <Button className="bg-[#7f0e0e] text-[#ffe3dc] font-outfit font-semibold hover:bg-[#d48b71] transition-colors px-8 py-3">
                      Reservar en {location.name}
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 bg-white rounded-lg p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-[#7f0e0e] mb-4 font-serif">¿No encuentras tu tratamiento?</h3>
          <p className="text-[#d48b71] mb-6">Contáctanos y te ayudaremos a encontrar el servicio perfecto para ti</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:660252523">
              <Button
                variant="outline"
                className="border-[#7f0e0e] text-[#7f0e0e] hover:bg-[#7f0e0e] hover:text-white bg-transparent"
              >
                Llamar Bilbao: 660 252 523
              </Button>
            </Link>
            <Link href="tel:692728828">
              <Button
                variant="outline"
                className="border-[#7f0e0e] text-[#7f0e0e] hover:bg-[#7f0e0e] hover:text-white bg-transparent"
              >
                Llamar Cádiz: 692 728 828
              </Button>
            </Link>
            <Link href="tel:674039794">
              <Button
                variant="outline"
                className="border-[#7f0e0e] text-[#7f0e0e] hover:bg-[#7f0e0e] hover:text-white bg-transparent"
              >
                Llamar Málaga: 674 039 794
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
