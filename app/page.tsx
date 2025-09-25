import Header from "@/components/header"
import Footer from "@/components/footer"
import HeroSection from "@/components/hero-section"
import LocationsSection from "@/components/locations-section"
import InspirationSection from "@/components/inspiration-section"
import TestimonialsSection from "@/components/testimonials-section"
import BlogSection from "@/components/blog-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <LocationsSection />
        <InspirationSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </div>
  )
}
