"use client"

import Image from "next/image"
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const nailImages = [
  "/images/nails1.jpeg",
  "/images/nails2.jpeg",
  "/images/nails3.jpeg",
  "/images/nails4.jpg",
  "/images/nails5.jpg",
  // Add more nail images as needed
]

export default function InspirationSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const imagesPerView = 4

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + imagesPerView >= nailImages.length ? 0 : prev + imagesPerView))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, nailImages.length - imagesPerView) : Math.max(0, prev - imagesPerView),
    )
  }

  const visibleImages = nailImages.slice(currentIndex, currentIndex + imagesPerView)

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7f0e0e] mb-4 font-serif">
            Inspírate con nuestros diseños
          </h2>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {visibleImages.map((image, index) => (
              <div key={currentIndex + index} className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Diseño de uñas ${currentIndex + index + 1}`}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-[#7f0e0e] text-[#7f0e0e] hover:bg-[#7f0e0e] hover:text-white bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-[#7f0e0e] text-[#7f0e0e] hover:bg-[#7f0e0e] hover:text-white bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
