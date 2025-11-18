'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Check, Zap, Shield, Users } from 'lucide-react'
import Link from 'next/link'

function getDefaultImages() {
  return {
    content: [
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_100_Videos_Mujeres_1-p0VxF.jpg',
        title: 'Contenido Fitness & Wellness',
      },
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_Videos_Mujeres_2-0M6sJ.jpg',
        title: 'Contenido de Viajes & Lifestyle',
      },
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_105_Videos_Mujeres_7-ruDuS.jpg',
        title: 'Contenido Fashion & Trends',
      },
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_22_gempages_570357700764894432-1ac3141d-3780-4ebd-a36a-185ce37058e3-2BMPC.png',
        title: 'Contenido Temático Premium',
      },
    ],
    examples: [
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_170_gempages_570357700764894432-37a49508-3ab3-41ec-83a7-0c6367e8aedb-6iXFkZd0CsKE3wklTZxDkg2CABYJZr.png',
        title: 'Contenido de Lifestyle',
      },
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_167_gempages_570357700764894432-4f333a86-247c-4aa8-a38a-7c800406af41-oCLUT74ZNmzAOESq78e6UQyerqAev6.png',
        title: 'Contenido de Moda & Viajes',
      },
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_169_gempages_570357700764894432-c29f76b4-3ae2-4413-a00d-69c9707dbcb0-pRXYLirC9884UrpX4Ra3WIPXtkaMds.png',
        title: 'Contenido Exclusivo Premium',
      },
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_173_gempages_570357700764894432-1ac3141d-3780-4ebd-a36a-185ce37058e3-qOvBWmiH0WdVndZRocx83LNOqAlfvc.png',
        title: 'Contenido Temático Variado',
      },
    ],
    lifestyle: [
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_225_gempages_570357700764894432-819b0f0c-1fd2-494a-b43d-52d150c304d3-rq38UYkqaM6eBrmIEKOhMMb0fvBWOV.jpg',
      },
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_234_gempages_570357700764894432-cfb8f8a0-df62-4dd0-b9ba-6a50991418f4-T6GpI59T0zAHSNyPKrRFhJLgJlFvsX.jpg',
      },
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_233_gempages_570357700764894432-9c558067-c254-41bc-8a6f-0519999ce991-NDmPPplX8dI8PfPfv0lRXcdL7MI2dV.jpg',
      },
      {
        img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_100_Videos_Mujeres_3-LuKLEkSeFktPHOkkD77xPVOnMzurCj.jpg',
      },
    ],
  }
}

export default function LandingPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [carouselImages, setCarouselImages] = useState(getDefaultImages())

  useEffect(() => {
    const saved = localStorage.getItem('carouselImages')
    if (saved) {
      try {
        setCarouselImages(JSON.parse(saved))
      } catch {
        setCarouselImages(getDefaultImages())
      }
    }
  }, [])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in')
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    const elements = document.querySelectorAll('.scroll-animate')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className="bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/images/design-mode/LOGO.png"
              alt="AI Girls Mastery"
              className="h-14"
            />
          </Link>
          <a
            href="https://whop.com/ecomx-19d4/ia-avatar-master/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-accent text-accent-foreground rounded-full font-medium hover:shadow-lg transition-shadow"
          >
            Acceder
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="scroll-animate">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-2 leading-tight text-balance">
              {"Crea tu Modelo Influencer con IA\n"}
            </h1>
            <p className="text-3xl sm:text-4xl font-bold mb-6 text-accent">
              Gana dinero y conviértela en tu nueva fuente de ingresos.
            </p>
            <p className="text-xl text-muted-foreground mb-4 leading-relaxed font-semibold">
              Sin exponerte. Sin experiencia. Sin complicarte.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Forma parte del único programa que combina curso + comunidad + mentoría grupal, diseñado para que cualquier persona sin experiencia pueda crear y ganar dinero con avatares de IA.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://whop.com/ecomx-19d4/ia-avatar-master/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
              >
                Comenzar ahora <ArrowRight size={20} />
              </a>
              
            </div>

            <div className="mt-12 flex items-center gap-8">
              <div>
                <p className="text-3xl font-bold">$19 USD     </p>
                <p className="text-muted-foreground">/mes</p>
              </div>
              <div>
                <p className="text-sm font-medium mb-2">Acceso completo incluye:</p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-accent" /> Curso completo
                  </li>
                  <li className="flex items-center gap-2">
                    <Check size={16} className="text-accent" /> Comunidad privada
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="scroll-animate delay-200">
            <img
              src="/images/design-mode/imgi_234_gempages_570357700764894432-cfb8f8a0-df62-4dd0-b9ba-6a50991418f4.jpg"
              alt="Avatar Digital"
              className="rounded-2xl shadow-2xl w-full aspect-square object-cover"
            />
          </div>
        </div>
      </section>

      {/* Brand Icons Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate mb-8">
            <h3 className="text-center font-semibold uppercase tracking-widest text-card-foreground text-2xl">
              Monetiza en las plataformas más populares
            </h3>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center justify-center">
            <div className="scroll-animate flex items-center justify-center">
              <img
                src="/images/design-mode/imgi_78_gempages_570357700764894432-488bb15d-810a-40e2-b83f-56eec902fb12(1).png"
                alt="TikTok"
                className="h-24 md:h-32 object-contain hover:scale-110 transition-transform"
              />
            </div>
            <div className="scroll-animate flex items-center justify-center">
              <img
                src="/images/design-mode/imgi_76_gempages_570357700764894432-424109aa-62b8-4293-b3bc-2a38dc6ed146.png"
                alt="OnlyFans"
                className="h-24 md:h-32 object-contain hover:scale-110 transition-transform"
              />
            </div>
            <div className="scroll-animate flex items-center justify-center">
              <img
                src="/images/design-mode/imgi_6_gempages_570357700764894432-02e8e010-1da7-43c4-82f5-42c4adaed0c6.png"
                alt="Telegram"
                className="h-24 md:h-32 object-contain hover:scale-110 transition-transform"
              />
            </div>
            <div className="scroll-animate flex items-center justify-center">
              <img
                src="/images/design-mode/imgi_75_gempages_570357700764894432-b85601ef-960d-4944-8029-d9c1227296b8.png"
                alt="Famvue"
                className="h-24 md:h-32 object-contain hover:scale-110 transition-transform"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Now Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Crea tu Influencer Digital en minutos
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Estás frente a una industria que recién está naciendo… está entrando al mercado adulto, estético, creativo, comercial y quienes entren ahora serán pioneros.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Zap,
                title: 'Monetiza en múltiples plataformas',
                desc: 'Aprende las estrategias que ya están generando miles de dólares para nuestros alumnos.',
              },
              {
                icon: Shield,
                title: 'Tu privacidad protegida',
                desc: 'Gana dinero sin mostrar tu rostro ni identidad.',
              },
              {
                icon: Users,
                title: 'Acceso inmediato + Comunidad privada exclusiva',
                desc: 'Conecta con otros creadores, comparte avances y recibe soporte 24/7.',
              },
              {
                icon: ArrowRight,
                title: 'Actualizaciones semanales y nuevas herramientas IA',
                desc: 'Siempre estarás al frente de lo más nuevo en inteligencia artificial.',
              },
            ].map((item, i) => (
              <div key={i} className="scroll-animate" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="p-8 rounded-xl bg-background border border-border hover:border-primary transition-colors">
                  <item.icon className="w-12 h-12 mb-4 text-accent" />
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Pain Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="scroll-animate">
            <h2 className="text-4xl font-bold mb-4">
              Si estás cansado de buscar formas de ganar dinero sin exponerte...
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Te ha pasado todo esto, y no es tu culpa. Lo que te falta no es motivación, es una guía clara.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                'No quieres mostrar tu cara, pero tienes ideas',
                'Ves gente ganando con IA, pero no sabes cómo',
                'Te abruman tantas herramientas y tutoriales incompletos',
                'Quieres independencia económica pero sin un camino claro',
                'Tienes creatividad pero no sé monetizarla',
                'Miedo al fracaso y rechazo público',
              ].map((item, i) => (
                <div
                  key={i}
                  className="scroll-animate p-6 rounded-lg bg-secondary/50 border border-border"
                  style={{ transitionDelay: `${i * 50}ms` }}
                >
                  <p className="font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content Generation Gallery - Uses carouselImages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Genera contenido profesional para monetizar</h2>
            <p className="text-lg text-muted-foreground">Mira los tipos de contenido que tus avatares pueden crear y ganar dinero con ellos</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carouselImages.content.map((item, i) => (
              <div key={i} className="scroll-animate" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="rounded-xl overflow-hidden bg-secondary/50 border border-border hover:border-accent transition-colors group cursor-pointer">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={item.img || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-semibold">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 scroll-animate text-center">
            <p className="text-lg font-semibold text-primary mb-6">
              Tu avatar puede crear todo esto y ganar dinero en cada plataforma
            </p>
            <a
              href="https://whop.com/ecomx-19d4/ia-avatar-master/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-xl transition-shadow"
            >
              Aprende a crear este contenido <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Lifestyle Content Showcase - Uses carouselImages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Inspírate con estos estilos de contenido exclusivo en imágen y video     </h2>
            <p className="text-lg text-muted-foreground">Diferentes tipos de posts y formatos que tú puedes crear con tu avatar</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carouselImages.lifestyle.map((item, i) => (
              <div key={i} className="scroll-animate" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="rounded-xl overflow-hidden bg-secondary/50 border border-border hover:border-accent transition-colors group cursor-pointer">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={item.img || "/placeholder.svg"}
                      alt="Contenido de lifestyle"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 scroll-animate text-center">
            <p className="text-lg font-semibold text-primary mb-6">
              Estos son solo ejemplos. Tu creatividad no tiene límites
            </p>
            <a
              href="https://whop.com/ecomx-19d4/ia-avatar-master/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-xl transition-shadow"
            >
              Empieza a crear tu contenido <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-accent/5 to-background">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Ahora imagina esto...
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Tu avatar digital generando ingresos mientras mantienes tu privacidad intacta.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="scroll-animate">
              <img
                src="/images/design-mode/imgi_195_gempages_570357700764894432-7c796ff3-ad4c-4a10-baa9-de7c3c8848ad.png"
                alt="Avatares"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="scroll-animate delay-200 space-y-6">
              {[
                { emoji: '✨', title: 'Libertad', desc: 'Genera ingresos sin exponerte' },
                { emoji: '🔐', title: 'Privacidad', desc: 'Tu identidad siempre protegida' },
                { emoji: '💎', title: 'Confianza', desc: 'Domina una habilidad moderna' },
                { emoji: '👥', title: 'Comunidad', desc: 'Rodeado de creadores como tú' },
                { emoji: '🚀', title: 'Independencia', desc: 'Tu nuevo ingreso pasivo' },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <span className="text-3xl">{item.emoji}</span>
                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a
            href="https://whop.com/ecomx-19d4/ia-avatar-master/"
            target="_blank"
            rel="noopener noreferrer"
            className="scroll-animate inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-xl transition-shadow"
          >
            Quiero esta transformación <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Lo que obtienes con AI Girls Mastery
            </h2>
            <p className="text-xl text-muted-foreground">
              Todo lo que necesitas para crear, optimizar y monetizar avatares digitales profesionales.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="scroll-animate">
              <h3 className="text-2xl font-bold mb-6">📚 Videocurso + Comunidad + Mentoría personalizada + Actualizaciones permanentes</h3>
              <ul className="space-y-4">
                {[
                  'Avanza con la guía directa de expertos que ya dominan este modelo',
                  'Domina las herramientas IA más potentes del momento',
                  'Aprende a trabajar con Kling, Veo 3, NanoBanana, Sora 2, Seedance y Fooocus',
                  'Técnicas para avatares profesionales y consistentes',
                  'Estrategias de contenido atractivo y ético',
                  'Métodos probados para monetizar en múltiples plataformas',
                  'Recursos descargables: templates, guías y prompts',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="scroll-animate delay-200">
              <h3 className="text-2xl font-bold mb-6">{"💛 Sin experiencia previa, sin equipos caros, sin complicaciones\n\n\n"}</h3>
              <ul className="space-y-4">
                {[
                  'Solo necesitas una computadora, conexión a internet y ganas de aprender',
                  'Curso paso a paso para crear avatares hiperrealistas desde cero',
                  'Prompts optimizados para caras, cuerpos, poses, estilos y vestuarios',
                  'Seguridad financiera con nuevas fuentes de ingreso',
                  'Métodos de monetización en distintas plataformas',
                  'Actualizaciones constantes con nuevas herramientas y tendencias',
                  'Comunidad privada de creadores donde no te quedas solo/a',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Cómo funciona (Es más simple de lo que crees)
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Todo está diseñado para que avances sin miedo, sin confusión, desde cero.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { num: '1', title: 'Aprende', desc: 'Videoclases claras, cortas y prácticas' },
              { num: '2', title: 'Crea', desc: 'Genera tu avatar con nuestras plantillas' },
              { num: '3', title: 'Optimiza', desc: 'Dale estilo, personalidad e identidad visual' },
              { num: '4', title: 'Monetiza', desc: 'Aplica estrategias seguras y probadas' },
            ].map((step, i) => (
              <div key={i} className="scroll-animate text-center" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="w-16 h-16 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 scroll-animate text-center">
            <p className="text-lg font-semibold mb-4 text-primary">
              {"Todo desde cero. Todo guiado.Todo seguro."}
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials / Gallery - Uses carouselImages */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Ejemplos de contenido que puedes crear y monetizar</h2>
            <p className="text-lg text-muted-foreground">Diversidad de escenarios para generar ingresos como influencer digital</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {carouselImages.examples.map((item, i) => (
              <div key={i} className="scroll-animate" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="rounded-xl overflow-hidden bg-secondary/50 border border-border hover:border-accent transition-colors group cursor-pointer">
                  <div className="relative overflow-hidden h-80">
                    <img
                      src={item.img || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white font-semibold">{item.title}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 scroll-animate text-center">
            <p className="text-lg font-semibold text-primary mb-6">
              Todos estos tipos de contenido puedes crearlos y monetizarlos con tu avatar digital
            </p>
            <a
              href="https://whop.com/ecomx-19d4/ia-avatar-master/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-full font-semibold hover:shadow-xl transition-shadow"
            >
              Ver cómo crear este contenido <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section with CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="scroll-animate text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Lo que dicen nuestras estudiantes
            </h2>
            <p className="text-xl text-muted-foreground">
              Historias reales de mujeres que transformaron su vida con avatares digitales
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Sofía',
                role: '27',
                testimonial: 'No sabía NADA de IA. En un fin de semana ya tenía mi primer avatar. Sentí que abrí una puerta gigante..',
                icon: '⭐⭐⭐⭐⭐',
              },
              {
                name: 'Marcos',
                role: '34',
                testimonial: 'No sabía NADA de IA. En un fin de semana ya tenía mi primer avatar. Sentí que abrí una puerta gigante',
                icon: '⭐⭐⭐⭐⭐',
              },
              {
                name: 'Laura',
                role: '21',
                testimonial: 'Crear mi personaje digital me dio creatividad e independencia. Nunca pensé que sería tan fácil empezar.',
                icon: '⭐⭐⭐⭐⭐',
              },
            ].map((testimonial, i) => (
              <div key={i} className="scroll-animate" style={{ transitionDelay: `${i * 100}ms` }}>
                <div className="p-8 rounded-xl bg-background border border-border hover:border-accent transition-colors h-full flex flex-col">
                  <div className="mb-4">{testimonial.icon}</div>
                  <p className="text-muted-foreground mb-6 flex-grow italic">"{testimonial.testimonial}"</p>
                  <div>
                    <p className="font-bold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-accent">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="scroll-animate bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 rounded-2xl p-12 text-center border border-primary/20">
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">
              Sé el siguiente éxito que compartimos
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              No necesitas experiencia, equipos caros, ni mostrar tu cara. Solo necesitas decidir que tu futuro importa.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://whop.com/ecomx-19d4/ia-avatar-master/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-accent text-accent-foreground rounded-full font-bold hover:shadow-xl transition-shadow flex items-center justify-center gap-2"
              >
                Únete hoy por $19/mes <ArrowRight size={20} />
              </a>
              
            </div>
            <p className="text-sm text-muted-foreground mt-6">
              Acceso completo + Mentoría + Comunidad privada + Actualizaciones permanentes
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border bg-secondary/20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <img
                src="/images/design-mode/LOGO.png"
                alt="AI Girls Mastery"
                className="mb-4 h-14"
              />
              <p className="text-sm text-muted-foreground">
                La única comunidad para crear avatares digitales y monetizar sin exponerte.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Acceso</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Comenzar ahora
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Comunidad
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Términos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contacto</h3>
              <p className="text-sm text-muted-foreground">support@aigirlsmastery.com</p>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 AI Girls Mastery. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
