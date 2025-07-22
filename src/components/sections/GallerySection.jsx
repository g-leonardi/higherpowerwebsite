import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function GallerySection() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('all')

  const filters = [
    { id: 'all', label: t('gallery.all') },
    { id: 'concerts', label: t('gallery.concerts') },
    { id: 'backstage', label: t('gallery.backstage') },
    { id: 'fans', label: t('gallery.fans') }
  ]

  const galleryItems = [
    { id: 1, category: 'concerts', type: 'image', title: 'Live at Teatro Romano' },
    { id: 2, category: 'backstage', type: 'image', title: 'Preparing for the show' },
    { id: 3, category: 'concerts', type: 'image', title: 'Crowd singing Yellow' },
    { id: 4, category: 'fans', type: 'image', title: 'Happy fans after show' },
    { id: 5, category: 'concerts', type: 'video', title: 'Fix You performance' },
    { id: 6, category: 'backstage', type: 'image', title: 'Band rehearsal' },
    { id: 7, category: 'concerts', type: 'image', title: 'Viva La Vida finale' },
    { id: 8, category: 'fans', type: 'image', title: 'Meet & greet session' },
    { id: 9, category: 'concerts', type: 'video', title: 'The Scientist live' },
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

        {/* Filter Buttons */}
        <div className="flex justify-center mb-12 animate-fade-in-up animation-delay-300">
          <div className="flex flex-wrap gap-4">
            {filters.map((filter, index) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`btn transition-all duration-300 magnetic-btn ${
                  activeFilter === filter.id
                    ? 'btn-primary btn-primary-hover'
                    : 'bg-gray-700 text-white hover:bg-gray-600 hover:scale-105'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid-responsive grid-md-3 lg:grid-cols-3 xl:grid-cols-4">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="card card-secondary card-glass card-hover group cursor-glow animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image/Video Placeholder */}
              <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 rounded-lg h-48 mb-4 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-500">
                {item.type === 'video' ? (
                  <div className="text-center">
                    <div className="text-4xl mb-2 animate-bounce-gentle">🎥</div>
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="btn btn-primary btn-primary-hover rounded-full w-16 h-16 flex items-center justify-center text-xl magnetic-btn">
                        ▶
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="text-4xl mb-2 animate-bounce-gentle">📸</div>
                  </div>
                )}
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <p className="text-white text-sm font-semibold">{item.title}</p>
                </div>
              </div>

              {/* Item Info */}
              <div className="text-center">
                <h4 className="font-semibold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {item.title}
                </h4>
                <span className={`status-badge text-xs ${
                  item.category === 'concerts' ? 'status-available' :
                  item.category === 'backstage' ? 'status-few-tickets' :
                  'bg-purple-600 text-white'
                }`}>
                  {filters.find(f => f.id === item.category)?.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Videos Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary animate-glow">
            {t('gallery.videos')}
          </h3>
          <div className="grid-responsive grid-md-2 max-w-4xl mx-auto">
            {[
              { title: 'Fix You - Live Performance', duration: '4:32' },
              { title: 'Yellow - Acoustic Version', duration: '3:45' },
              { title: 'The Scientist - Behind the Scenes', duration: '5:12' },
              { title: 'Viva La Vida - Concert Highlights', duration: '6:28' }
            ].map((video, index) => (
              <div
                key={index}
                className="card card-primary card-glass card-hover group cursor-glow animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-red-600 to-pink-600 rounded-lg w-20 h-16 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl animate-bounce-gentle">🎥</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-white mb-1 group-hover:text-yellow-300 transition-colors duration-300">
                      {video.title}
                    </h4>
                    <p className="text-sm text-muted text-muted-hover">{video.duration}</p>
                  </div>
                  <button className="btn btn-primary btn-primary-hover rounded-full w-12 h-12 flex items-center justify-center magnetic-btn">
                    ▶
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <p className="text-muted text-lg mb-6">
            Want to see more photos from our concerts?
          </p>
          <a 
            href="#contact" 
            className="btn btn-primary btn-primary-hover magnetic-btn"
          >
            Follow us on Social Media
          </a>
        </div>
      </div>
    </section>
  )
}
