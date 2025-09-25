import Header from "@/components/header"
import Footer from "@/components/footer"
import AboutSection from "@/components/about-section"

export const metadata = {
  title: "Sobre Nosotros - The Beauty Club",
  description:
    "Conoce la historia de The Beauty Club. Somos más que un salón de belleza, creamos momentos únicos.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}
