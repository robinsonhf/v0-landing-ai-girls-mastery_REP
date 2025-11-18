'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import getDefaultImages from '../getDefaultImages'

interface CarouselItem { img: string; title?: string }
interface CarouselGroup { title: string; items: CarouselItem[]; showTitle?: boolean }

export default function CarouselSection() {
  const [carouselImages, setCarouselImages] = useState(getDefaultImages())

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const groups: CarouselGroup[] = [
    { title: 'Genera contenido profesional', items: carouselImages.content, showTitle: true },
    { title: 'Ejemplos de contenido que puedes crear', items: carouselImages.examples, showTitle: true },
    { title: 'Inspírate con estos estilos de contenido', items: carouselImages.lifestyle, showTitle: false },
  ]

  return (
    <div className="space-y-20">
      {groups.map((group, gIdx) => (
        <section key={gIdx} className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
          <div className="max-w-6xl mx-auto">
            {group.showTitle && (
              <div className="scroll-animate text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">{group.title}</h2>
                <p className="text-lg text-muted-foreground">
                  {group.title.includes('profesional') ? 'Mira los tipos de contenido que tus avatares pueden crear y ganar dinero con ellos' : 'Diversidad de escenarios para generar ingresos como influencer digital'}
                </p>
              </div>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {group.items.map((item, i) => (
                <div key={i} className="scroll-animate rounded-xl overflow-hidden bg-secondary/50 border border-border hover:border-accent transition-colors group cursor-pointer" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="relative overflow-hidden h-80">
                    <Image src={item.img || '/placeholder.svg'} alt={item.title || 'Contenido'} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    {item.title && (
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <p className="text-white font-semibold">{item.title}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            {group.showTitle && (
              <div className="mt-12 scroll-animate text-center">
                <p className="text-lg font-semibold text-primary mb-6">{group.title.includes('profesional') ? 'Tu avatar puede crear todo esto y ganar dinero en cada plataforma' : 'Todos estos tipos de contenido puedes crearlos y monetizarlos con tu avatar digital'}</p>
                <a href="https://whop.com/ecomx-19d4/ia-avatar-master/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-xl transition-shadow">
                  Aprende a crear este contenido
                </a>
              </div>
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
