import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function GallerySection() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const openLightbox = (item) => {
    setSelectedImage(item)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setSelectedImage(null)
  }

  const filters = [
    { id: 'all', label: t('gallery.all') },
    { id: 'concerts', label: t('gallery.concerts') },
    { id: 'backstage', label: t('gallery.backstage') },
    { id: 'fans', label: t('gallery.fans') }
  ]

  const galleryItems = [
    { id: 1, category: 'concerts', type: 'image', title: 'Live at Teatro Romano', image: 'https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=400&h=400&fit=crop&crop=center' },
    { id: 2, category: 'backstage', type: 'image', title: 'Preparing for the show', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center' },
    { id: 3, category: 'fans', type: 'image', title: 'Happy fans after show', image: 'https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop&crop=center' },
    { id: 4, category: 'concerts', type: 'image', title: 'Crowd singing Yellow', image: 'https://images.unsplash.com/photo-1459749411175-04bf5292ceea?w=400&h=400&fit=crop&crop=center' },
    { id: 5, category: 'concerts', type: 'image', title: 'Fix You performance', image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=400&h=400&fit=crop&crop=center' },
    { id: 6, category: 'backstage', type: 'image', title: 'Band rehearsal', image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop&crop=center' },
    { id: 7, category: 'concerts', type: 'image', title: 'Viva La Vida finale', image: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&h=400&fit=crop&crop=center' },
    { id: 8, category: 'fans', type: 'image', title: 'Meet & greet session', image: 'https://images.unsplash.com/photo-1506157786151-b8491531f063?w=400&h=400&fit=crop&crop=center' },
    { id: 9, category: 'backstage', type: 'image', title: 'Sound check moments', image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=400&h=400&fit=crop&crop=center' },
  ]

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter)

  return (
    <section id="gallery" className="section section-bg-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-80 h-80 bg-pink-500 rounded-full blur-3xl animate-float top-1/4 left-10"></div>
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float animation-delay-700 bottom-10 right-1/4"></div>
      </div>
      
      <div className="section-container">
        <div className="section-header animate-fade-in-up">
          <h2 className="section-title animate-glow">
            {t('gallery.title')}
          </h2>
          <p className="section-subtitle animate-fade-in-up animation-delay-200">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Filter Buttons - Modern 2025 Style */}
        <div className="gallery-filters">
          {filters.map((filter, index) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`filter-btn ${activeFilter === filter.id ? 'filter-btn-active' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span className="filter-btn-text">{filter.label}</span>
              <span className="filter-btn-glow"></span>
            </button>
          ))}
        </div>

        {/* Gallery Grid - 3x3 Scrollable */}
        <div className="gallery-container-3x3">
          <div className="gallery-grid-3x3">
            {filteredItems.slice(0, 9).map((item, index) => (
            <div
              key={item.id}
              className="card card-secondary card-glass card-hover group cursor-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => openLightbox(item)}
            >
              {/* Photo fills entire card */}
              <div className="gallery-image-container-full">
                <div className="gallery-image" style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}>
                  <div className="click-hint">
                    <span className="click-text">Click to view</span>
                  </div>
                </div>
                
                {/* Tag overlaid on photo */}
                <div className="gallery-tag-overlay">
                  <span className={`gallery-tag-overlay-badge gallery-tag-${item.category}`}>
                    {filters.find(f => f.id === item.category)?.label}
                  </span>
                </div>
                
                {/* Title overlay on hover */}
                <div className="gallery-overlay">
                  <p className="gallery-title">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-6 animate-fade-in-up animation-delay-1000">
          <p className="text-muted text-lg mb-4">
            {t('gallery.follow_desc')}
          </p>
          <a 
            href="#contact" 
            className="btn btn-primary btn-primary-hover magnetic-btn"
          >
            {t('gallery.follow_social')}
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ✕
            </button>
            <div className="lightbox-content">
              <div className="lightbox-image" style={{
                backgroundImage: `url(${selectedImage.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}>
              </div>
              <div className="lightbox-info">
                <h3 className="lightbox-title">{selectedImage.title}</h3>
                <span className={`gallery-tag gallery-tag-${selectedImage.category} lightbox-tag`}>
                  {filters.find(f => f.id === selectedImage.category)?.label}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
