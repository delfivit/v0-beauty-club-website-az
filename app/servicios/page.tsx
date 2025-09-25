import Header from "@/components/header"
import Footer from "@/components/footer"
import ServicesSection from "@/components/services-section"

export const metadata = {
  title: "Servicios - The Beauty Club",
  description:
    "Descubre todos nuestros servicios de belleza: manicura, pedicura, lifting de pestañas, depilación y más. Precios y reservas en Bilbao, Cádiz y Málaga.",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}
