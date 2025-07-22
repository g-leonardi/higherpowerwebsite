import { useTranslation } from 'react-i18next'

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className="section">
      <div className="section-bg-elements">
        <div className="floating-blob blob-cyan"></div>
        <div className="floating-blob blob-blue"></div>
      </div>
      
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            {t('about.title')}
          </h2>
          <p className="section-subtitle">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="about-content">
          {/* Story Section */}
          <div className="about-story">
            <h3 className="story-title">
              {t('about.our_story')}
            </h3>
            <p className="story-text">
              {t('about.story_text1')}
            </p>
            <p className="story-text">
              {t('about.story_text2')}
            </p>
            <div className="stats-badges">
              <span className="stat-badge">
                {t('about.years_experience')}
              </span>
              <span className="stat-badge">
                {t('about.concerts_played')}
              </span>
              <span className="stat-badge">
                {t('about.happy_fans')}
              </span>
            </div>
          </div>

          {/* Band Image */}
          <div className="about-image">
            <div className="img-placeholder">
              <span className="placeholder-text">Band Photo</span>
            </div>
          </div>
        </div>

        {/* Band Members */}
        <div className="band-members">
          <h3 className="members-title">
            {t('about.meet_band')}
          </h3>
          <div className="members-grid">
            <div className="member-card">
              <div className="member-avatar"></div>
              <h4 className="member-name">Marco Rossi</h4>
              <p className="member-role">Lead Vocals & Piano</p>
              <p className="member-desc">Captures Chris Martin's vocal style perfectly</p>
            </div>
            <div className="member-card">
              <div className="member-avatar"></div>
              <h4 className="member-name">Luca Bianchi</h4>
              <p className="member-role">Lead Guitar</p>
              <p className="member-desc">Master of Jonny Buckland's iconic riffs</p>
            </div>
            <div className="member-card">
              <div className="member-avatar"></div>
              <h4 className="member-name">Andrea Verdi</h4>
              <p className="member-role">Drums</p>
              <p className="member-desc">Powerful rhythms like Will Champion</p>
            </div>
            <div className="member-card">
              <div className="member-avatar"></div>
              <h4 className="member-name">Giulia Neri</h4>
              <p className="member-role">Bass & Backing Vocals</p>
              <p className="member-desc">Solid foundation and harmonies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
