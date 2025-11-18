'use client'

import { useState, useEffect } from 'react'
import { X, Save } from 'lucide-react'

interface CarouselImage {
  img: string
  title?: string
}

export function CarouselAdmin() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeTab, setActiveTab] = useState<'content' | 'examples' | 'lifestyle'>('content')
  const [images, setImages] = useState<Record<string, CarouselImage[]>>({
    content: [],
    examples: [],
    lifestyle: [],
  })
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingUrl, setEditingUrl] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('carouselImages')
    if (saved) {
      setImages(JSON.parse(saved))
    } else {
      // Load default images
      setImages({
        content: [
          {
            img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_105_Videos_Mujeres_7-7JrIebMxSK2o0f7FXN5V3FFCdwL6VD.jpg',
            title: 'Contenido Fitness & Wellness',
          },
          {
            img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_7_Videos_Mujeres_2-O8Ka0w24kolANN7qcouFNd7dyG4XNF.jpg',
            title: 'Contenido de Viajes & Lifestyle',
          },
          {
            img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_101_Videos_Mujeres_1-CCVXmOiU8ussMNhgkS3HXCMLWFcWqa.jpg',
            title: 'Contenido Fashion & Trends',
          },
          {
            img: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/imgi_22_gempages_570357700764894432-1ac3141d-3780-4ebd-a36a-185ce37058e3-bcsaZ9oR1bbCJi4ViE03L2sLw4vPyW.png',
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
      })
    }
  }, [])

  const handleSave = () => {
    localStorage.setItem('carouselImages', JSON.stringify(images))
    setEditingIndex(null)
    window.location.reload()
  }

  const handleUrlChange = (index: number, newUrl: string) => {
    const tabKey = activeTab === 'content' ? 'content' : activeTab === 'examples' ? 'examples' : 'lifestyle'
    const updated = [...images[tabKey]]
    updated[index] = { ...updated[index], img: newUrl }
    setImages({ ...images, [tabKey]: updated })
  }

  const tabKey = activeTab === 'content' ? 'content' : activeTab === 'examples' ? 'examples' : 'lifestyle'
  const currentImages = images[tabKey] || []

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 px-4 py-2 bg-primary text-primary-foreground rounded-full font-semibold hover:shadow-lg transition-shadow text-sm"
      >
        Editar Carruseles
      </button>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-background rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        <div className="sticky top-0 flex items-center justify-between p-6 border-b border-border bg-background">
          <h2 className="text-2xl font-bold">Gestor de Imágenes de Carruseles</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-secondary rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {/* Tabs */}
          <div className="flex gap-4 mb-6 border-b border-border pb-4">
            {(['content', 'examples', 'lifestyle'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === tab
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {tab === 'content' && 'Contenido Profesional'}
                {tab === 'examples' && 'Ejemplos de Contenido'}
                {tab === 'lifestyle' && 'Lifestyle'}
              </button>
            ))}
          </div>

          {/* Images Grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {currentImages.map((item, index) => (
              <div
                key={index}
                className="border border-border rounded-lg overflow-hidden hover:border-accent transition-colors"
              >
                <div className="relative overflow-hidden bg-secondary h-48">
                  <img
                    src={item.img || "/placeholder.svg"}
                    alt={`Image ${index}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = '/placeholder.svg'
                    }}
                  />
                </div>
                <div className="p-4 space-y-3">
                  {item.title && (
                    <div>
                      <label className="text-sm font-medium">Título</label>
                      <p className="text-muted-foreground text-sm">{item.title}</p>
                    </div>
                  )}
                  <div>
                    <label className="text-sm font-medium block mb-2">URL de la imagen</label>
                    {editingIndex === index ? (
                      <textarea
                        value={editingUrl}
                        onChange={(e) => setEditingUrl(e.target.value)}
                        className="w-full p-2 bg-secondary border border-border rounded text-sm font-mono resize-none h-20"
                      />
                    ) : (
                      <p className="text-xs text-muted-foreground font-mono break-all line-clamp-3">
                        {item.img}
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
                    {editingIndex === index ? (
                      <>
                        <button
                          onClick={() => {
                            handleUrlChange(index, editingUrl)
                            setEditingIndex(null)
                          }}
                          className="flex-1 px-3 py-2 bg-accent text-accent-foreground rounded font-medium text-sm hover:shadow-lg transition-shadow"
                        >
                          Guardar cambios
                        </button>
                        <button
                          onClick={() => setEditingIndex(null)}
                          className="flex-1 px-3 py-2 bg-secondary text-foreground rounded font-medium text-sm hover:bg-secondary/80 transition-colors"
                        >
                          Cancelar
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => {
                          setEditingIndex(index)
                          setEditingUrl(item.img)
                        }}
                        className="w-full px-3 py-2 bg-secondary text-foreground rounded font-medium text-sm hover:bg-secondary/80 transition-colors"
                      >
                        Editar URL
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Save Button */}
          <div className="flex gap-4 pt-6 border-t border-border">
            <button
              onClick={handleSave}
              className="flex-1 px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
            >
              <Save size={20} />
              Guardar todos los cambios
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="flex-1 px-6 py-3 bg-secondary text-foreground rounded-lg font-semibold hover:bg-secondary/80 transition-colors"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
