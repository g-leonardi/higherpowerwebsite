import { useTranslation } from 'react-i18next'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="hero">
      <div className="hero-bg-animation"></div>
      <div className="hero-floating-elements">
        <div className="floating-blob blob-1"></div>
        <div className="floating-blob blob-2"></div>
        <div className="floating-blob blob-3"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title holographic-text">
          {t('hero.title')}
        </h1>
        <p className="hero-subtitle">
          {t('hero.subtitle')}
        </p>
        <a href="#tour" className="hero-cta">
          {t('hero.button')}
        </a>
      </div>
    </section>
  )
}
