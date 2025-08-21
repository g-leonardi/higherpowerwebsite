import { useTranslation } from 'react-i18next'
import { useEffect, useRef, useState } from 'react'
import useAuroraMode from '../../hooks/useAuroraMode'

export default function HeroSection() {
  const { t } = useTranslation()
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const aurora = useAuroraMode()

  // Use muted autoplay to satisfy browser policies; we'll unmute on first user interaction via postMessage
  const normalSrc = 'https://www.youtube.com/embed/DnfpHyLbQqc?si=rrpDWznDKVekVt7o&start=0&autoplay=1&mute=0&enablejsapi=1&playsinline=1'
  const auroraSrc = 'https://www.youtube.com/embed/d-wksP8UFZw?si=2yTRvxBSvzEXxnTZ&start=14&autoplay=1&mute=0&enablejsapi=1&playsinline=1'
  const videoSrc = aurora ? auroraSrc : normalSrc
  const iframeRef = useRef(null)

  // On first user interaction, unmute and play via the YouTube IFrame API postMessage
  useEffect(() => {
    const sendCmd = (func) => {
      const iframe = iframeRef.current
      if (!iframe || !iframe.contentWindow) return
      try {
        iframe.contentWindow.postMessage(
          JSON.stringify({ event: 'command', func, args: [] }),
          '*'
        )
      } catch {}
    }

    let used = false
    const onInteract = () => {
      if (used) return
      used = true
      // Try a few times to account for player readiness timing
      sendCmd('unMute')
      sendCmd('playVideo')
      const t1 = setTimeout(() => { sendCmd('unMute'); sendCmd('playVideo') }, 250)
      const t2 = setTimeout(() => { sendCmd('unMute'); sendCmd('playVideo') }, 750)
      window.removeEventListener('pointerdown', onInteract)
      window.removeEventListener('keydown', onInteract)
      window.removeEventListener('touchstart', onInteract)
      // Cleanup any retries after success
      setTimeout(() => { clearTimeout(t1); clearTimeout(t2) }, 1000)
    }
    window.addEventListener('pointerdown', onInteract, { once: true })
    window.addEventListener('keydown', onInteract, { once: true })
    window.addEventListener('touchstart', onInteract, { once: true })
    return () => {
      window.removeEventListener('pointerdown', onInteract)
      window.removeEventListener('keydown', onInteract)
      window.removeEventListener('touchstart', onInteract)
    }
  }, [])

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
              {/* YouTube embed (swaps when Aurora Mode is active) */}
              <iframe
                key={videoSrc}
                className="showreel-video"
                src={videoSrc}
                ref={iframeRef}
                title={aurora ? 'Aurora Mode Feature Video' : 'Higher Power - European Coldplay Tribute Band'}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
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
