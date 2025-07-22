import { useTranslation } from 'react-i18next'

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className="section section-bg-primary">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-72 h-72 bg-cyan-400 rounded-full blur-3xl animate-float top-20 right-10"></div>
        <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-float animation-delay-500 bottom-20 left-10"></div>
      </div>
      
      <div className="section-container">
        <div className="section-header animate-fade-in-up">
          <h2 className="section-title animate-glow">
            {t('about.title')}
          </h2>
          <p className="section-subtitle animate-fade-in-up animation-delay-200">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid-responsive grid-lg-2 items-center">
          {/* Band Story */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-semibold mb-6 text-secondary hover:text-cyan-300 transition-colors duration-300">
              {t('about.our_story')}
            </h3>
            <p className="text-muted mb-6 leading-relaxed text-muted-hover">
              {t('about.story_text1')}
            </p>
            <p className="text-muted mb-6 leading-relaxed text-muted-hover">
              {t('about.story_text2')}
            </p>
            <div className="flex flex-wrap gap-4">
              <span className="status-badge bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                {t('about.years_experience')}
              </span>
              <span className="status-badge bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                {t('about.concerts_played')}
              </span>
              <span className="status-badge bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
                {t('about.happy_fans')}
              </span>
            </div>
          </div>

          {/* Band Image Placeholder */}
          <div className="relative animate-slide-in-right">
            <div className="card card-secondary card-hover h-96 flex items-center justify-center cursor-glow">
              <div className="text-center">
                <div className="text-6xl mb-4 animate-bounce-gentle">🎵</div>
                <p className="text-lg font-semibold text-muted-hover">{t('about.band_members')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Band Members */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary animate-glow">
            {t('about.band_members')}
          </h3>
          <div className="grid-responsive md:grid-cols-2 lg:grid-cols-4">
            {/* Member 1 - Lead Vocals */}
            <div className="text-center group animate-fade-in-up cursor-glow">
              <div className="card card-secondary w-32 h-32 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl animate-bounce-gentle">🎤</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-muted-hover">Marco</h4>
              <p className="text-primary mb-2">Lead Vocals</p>
              <p className="text-gray-400 text-sm text-muted-hover">Channeling Chris Martin's energy</p>
            </div>

            {/* Member 2 - Guitar */}
            <div className="text-center group animate-fade-in-up animation-delay-200 cursor-glow">
              <div className="card card-secondary w-32 h-32 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl animate-bounce-gentle animation-delay-200">🎸</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-muted-hover">Alessandro</h4>
              <p className="text-primary mb-2">Lead Guitar</p>
              <p className="text-gray-400 text-sm text-muted-hover">Master of iconic riffs</p>
            </div>

            {/* Member 3 - Drums */}
            <div className="text-center group animate-fade-in-up animation-delay-300 cursor-glow">
              <div className="card card-secondary w-32 h-32 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl animate-bounce-gentle animation-delay-300">🥁</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-muted-hover">Luca</h4>
              <p className="text-primary mb-2">Drums</p>
              <p className="text-gray-400 text-sm text-muted-hover">Driving rhythm force</p>
            </div>

            {/* Member 4 - Keyboard */}
            <div className="text-center group animate-fade-in-up animation-delay-500 cursor-glow">
              <div className="card card-secondary w-32 h-32 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl animate-bounce-gentle animation-delay-500">🎹</span>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-muted-hover">Francesco</h4>
              <p className="text-primary mb-2">Keyboard & Bass</p>
              <p className="text-gray-400 text-sm text-muted-hover">Atmospheric soundscapes</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
