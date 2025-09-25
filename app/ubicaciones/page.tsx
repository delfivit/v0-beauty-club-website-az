import Header from "@/components/header"
import Footer from "@/components/footer"
import LocationsDetailSection from "@/components/locations-detail-section"

export const metadata = {
  title: "Ubicaciones - The Beauty Club",
  description:
    "Encuentra nuestros salones de belleza en Bilbao, Cádiz y Málaga. Direcciones, horarios y contacto para reservar tu cita.",
}

export default function LocationsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <LocationsDetailSection />
      </main>
      <Footer />
    </div>
  )
}
