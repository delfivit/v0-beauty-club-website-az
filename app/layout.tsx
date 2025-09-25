import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-outfit",
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
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Butler:wght@300;400;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Quentin&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">{children}</body>
    </html>
  )
}
