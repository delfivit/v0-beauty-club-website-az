import type React from "react"
import type { Metadata } from "next"
import localFont from "next/font/local"
import "./globals.css"

const outfit = localFont({
  src: "../public/Outfit-SemiBold.ttf",
  variable: "--font-outfit",
  display: "swap",
})

const butler = localFont({
  src: "../public/Butler_Bold.otf",
  variable: "--font-butler",
  display: "swap",
})

const quentin = localFont({
  src: "../public/Quentin.otf",
  variable: "--font-quentin",
  display: "swap",
})

const archeron = localFont({
  src: "../public/Archeron Pro Stencil Bold.otf",
  variable: "--font-archeron",
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Beauty Club - Salones de Belleza en Bilbao, Cádiz y Málaga",
  description:
    "En The Beauty Club no solo hacemos uñas, creamos momentos. Manicura, pedicura, lifting de pestañas y más. Reserva tu cita en Bilbao, Cádiz o Málaga.",
  keywords: "manicura, pedicura, uñas, belleza, salón, Bilbao, Cádiz, Málaga, lifting pestañas, depilación",
  openGraph: {
    title: "The Beauty Club - Tu momento para desconectar",
    description: "Salones de belleza en España. Servicios de manicura, pedicura y más.",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${outfit.variable} ${butler.variable} ${quentin.variable} ${archeron.variable} antialiased`}
    >
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  )
}
