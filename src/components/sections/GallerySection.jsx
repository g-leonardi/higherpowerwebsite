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
    { id: 1, category: 'backstage', type: 'image', title: 'Photo 1', image: '/photos/gallery/high1.jpeg' },
    { id: 2, category: 'concerts', type: 'image', title: 'Photo 2', image: '/photos/gallery/high2.jpeg' },
    { id: 3, category: 'fans', type: 'image', title: 'Photo 3', image: '/photos/gallery/high3.jpeg' },
    { id: 4, category: 'concerts', type: 'image', title: 'Photo 4', image: '/photos/gallery/high4.jpeg' },
    { id: 5, category: 'backstage', type: 'image', title: 'Photo 5', image: '/photos/gallery/high5.jpeg' },
    { id: 6, category: 'concerts', type: 'image', title: 'Photo 6', image: '/photos/gallery/high6.jpeg' },
    { id: 7, category: 'concerts', type: 'image', title: 'Photo 7', image: '/photos/gallery/high7.jpg' },
    { id: 8, category: 'concerts', type: 'image', title: 'Photo 8', image: '/photos/gallery/high8.jpg' },
    { id: 9, category: 'fans', type: 'image', title: 'Photo 9', image: '/photos/gallery/high9.jpg' },
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
