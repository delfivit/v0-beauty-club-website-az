import Link from "next/link"
import { ExternalLink } from "lucide-react"

const blogLinks = [
  {
    title: "Manicura: diseños y tendencias de uñas 2025",
    url: "https://www.vogue.es/articulos/manicura-disenos-tendencias-unas-2025",
    source: "Vogue",
  },
  {
    title: "Uñas 2025: la tendencia que arrasa",
    url: "https://www.hola.com/belleza/20250128810121/unas-2025-tendencia/",
    source: "Hola",
  },
  {
    title: "Manicura verde: la tendencia del otoño 2025",
    url: "https://www.cosmopolitan.com/es/belleza/unas-manicura/g65828398/manicura-verde-tendencia-otono-2025/",
    source: "Cosmopolitan",
  },
  {
    title: "Uñas cortas de seda: colores y manicuras naturales",
    url: "https://www.vogue.es/articulos/unas-cortas-seda-fotos-colores-manicuras-naturales-otono-2025",
    source: "Vogue",
  },
]

export default function BlogSection() {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-butler font-bold text-[#7f0e0e] mb-4">
            Hechale un vistazo a las últimas tendencias
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogLinks.map((article, index) => (
              <Link
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-[#7f0e0e] font-semibold mb-2 group-hover:text-[#d48b71] transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-[#d48b71] text-sm">{article.source}</p>
                  </div>
                  <ExternalLink className="w-5 h-5 text-[#d48b71] ml-4 flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
