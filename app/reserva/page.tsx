import Header from "@/components/header"
import Footer from "@/components/footer"
import BookingSection from "@/components/booking-section"

export const metadata = {
  title: "Reserva tu Cita - The Beauty Club",
  description:
    "Reserva tu cita en The Beauty Club. Disponible en Bilbao, Cádiz y Málaga. Proceso fácil y rápido a través de Booksy.",
}

export default function BookingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-16">
        <BookingSection />
      </main>
      <Footer />
    </div>
  )
}
