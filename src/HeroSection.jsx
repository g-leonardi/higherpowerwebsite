import { useTranslation } from 'react-i18next'

export default function HeroSection() {
  const { t } = useTranslation()

  return (
    <section className="hero hero-bg cyber-grid">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-cyan-400 rounded-full blur-3xl opacity-20 animate-float -top-48 -left-48"></div>
        <div className="absolute w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-25 animate-float animation-delay-300 top-1/2 right-0"></div>
        <div className="absolute w-64 h-64 bg-yellow-400 rounded-full blur-3xl opacity-15 animate-float animation-delay-700 -bottom-32 left-1/3"></div>
      </div>

      {/* Gradient Background Animation */}
      <div
        className="absolute top-0 left-0 w-full h-full animate-gradient-bg"
        style={{
          background: "linear-gradient(270deg, #1e40af, #0891b2, #fbbf24, #f59e0b)",
          backgroundSize: "800% 800%",
          filter: "blur(80px)",
          opacity: 0.4,
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <h1 className="hero-title animate-scale-up animate-glow">
        {t('hero.title')}
      </h1>

      <p className="hero-subtitle animate-fade-in-up animation-delay-300">
        {t('hero.subtitle')}
      </p>

      <a
        href="#tour"
        className="hero-cta btn-primary btn-primary-hover animate-bounce-gentle animation-delay-500 neon-glow"
      >
        {t('hero.button')}
      </a>
      
      <style jsx>{`
        @keyframes gradientBG {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-bg {
          animation: gradientBG 15s ease infinite;
        }
      `}</style>
    </section>
  )
}
