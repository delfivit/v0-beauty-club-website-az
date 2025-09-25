"use client"

import { useState } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    text: "El mejor sitio para hacerte las uñas en Bilbao!!! duran un montón sin estropearse!! A parte de la calidad, la atención es siempre excelente por parte de todas las chicas❤️",
    name: "Clau G",
    location: "Bilbao",
    rating: 5,
  },
  {
    text: "Soy de Madrid y pocas veces me han hecho tan bien las uñas. Llegué con unas uñas desastrosas y me fui con unas uñas hechas espectaculares. Volveré siempre! Un placer chicas❤️",
    name: "Alejandra S",
    location: "Cádiz",
    rating: 5,
  },
  {
    text: "Me encanta como me dejan las uñas!! Las tengo frágiles y siempre me da miedo hacerme algo pero llevo todo el verano y están estupendamente! Muy recomendable",
    name: "Cris B",
    location: "Málaga",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-mono text-[#7f0e0e] mb-8">Nuestras clientas hablan por nosotros</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-[#fcf6f5] p-6 rounded-lg shadow-sm">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#faaca2] text-[#faaca2]" />
                    ))}
                  </div>

                  <p className="text-[#7f0e0e] mb-4 text-sm leading-relaxed">"{testimonial.text}"</p>

                  <div className="text-[#d48b71] font-semibold text-sm">
                    {testimonial.name} - {testimonial.location}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
