import { useTranslation } from 'react-i18next'
import { useState } from 'react'

export default function HeroSection() {
  const { t } = useTranslation()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  return (
    <section className="hero">
      <div className="hero-bg-animation"></div>
      <div className="hero-floating-elements">
        <div className="floating-blob blob-1"></div>
        <div className="floating-blob blob-2"></div>
        <div className="floating-blob blob-3"></div>
      </div>

      <div className="hero-container">
        {/* Left Side - Text Content */}
        <div className="hero-content">
          <h1 className="hero-title holographic-text">
            {t('hero.title')}
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="hero-actions">
            <a href="#tour" className="hero-cta primary">
              {t('hero.button')}
            </a>
          </div>
        </div>

        {/* Right Side - Showreel Video */}
        <div className="hero-video-section">
          <div className="video-container">
            <div className="video-wrapper">
              {/* YouTube embed for demonstration */}
              <iframe
                className="showreel-video"
                src="https://www.youtube.com/embed/DnfpHyLbQqc?autoplay=1&mute=0"
                title="Higher Power - European Coldplay Tribute Band"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
              
              {/* Alternative: You can replace with your own video file */}
              {/* 
              <video 
                className="showreel-video"
                poster="/path/to/your/video-thumbnail.jpg"
                controls
                preload="metadata"
                onLoadedData={() => setIsVideoLoaded(true)}
              >
                <source src="/path/to/your/showreel.mp4" type="video/mp4" />
                <source src="/path/to/your/showreel.webm" type="video/webm" />
                Your browser does not support the video tag.
              </video>
              */}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
