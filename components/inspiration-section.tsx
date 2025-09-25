"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const nailImages = [
  "/images/nails1.jpeg",
  "/images/nails2.jpeg",
  "/images/nails3.jpeg",
  "/images/nails4.jpg",
  "/images/nails5.jpg",
  "/images/nails6.jpg",
  "/images/nails7.jpg",
  "/images/nails8.jpg",
  "/images/nails9.jpg",
  "/images/nails10.jpg",
]

export default function InspirationSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const imagesPerView = 3

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1 >= nailImages.length ? 0 : prev + 1))
    }, 3000) // Auto-advance every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const visibleImages = []
  for (let i = 0; i < imagesPerView; i++) {
    const index = (currentIndex + i) % nailImages.length
    visibleImages.push(nailImages[index])
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[#7f0e0e] mb-4 font-butler">
            Inspírate con nuestros diseños
          </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 transition-all duration-700 ease-in-out"
              style={{ transform: `translateX(0)` }}
            >
              {visibleImages.map((image, index) => (
                <div key={currentIndex + index} className="aspect-square relative rounded-lg overflow-hidden">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`Diseño de uñas ${currentIndex + index + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            {nailImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ease-in-out transform hover:scale-110 ${
                  index === currentIndex ? "bg-[#7f0e0e] scale-110" : "bg-[#d48b71] hover:bg-[#7f0e0e]"
                }`}
                aria-label={`Ir a imagen ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
