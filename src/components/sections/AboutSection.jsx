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
        </div>

        {/* Compact About Layout */}
        <div className="about-compact">
          
          {/* Left Column: Bio + Stats */}
          <div className="about-left">
            <div className="about-bio">
              <h3 className="bio-title">
                {t('about.our_story')}
              </h3>
              <p className="bio-text">
                {t('about.story_text1')}
              </p>
              <div className="stats-row">
                <div className="stat-item">
                  <span className="stat-number">5+</span>
                  <span className="stat-label">{t('about.years_experience')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">{t('about.concerts_played')}</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50+</span>
                  <span className="stat-label">{t('about.happy_fans')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Band Photo */}
          <div className="about-right">
            <div className="band-photo">
              <div className="photo-frame">
                <span className="photo-placeholder">Higher Power Band</span>
              </div>
            </div>
          </div>

        </div>

        {/* Center Section: Band Members in Row */}
        <div className="band-members-center">
          <h3 className="members-title">
            {t('about.meet_band')}
          </h3>
          <div className="members-row">
            <div className="member-card-horizontal">
              <div className="member-avatar-small"></div>
              <div className="member-info-horizontal">
                <h4 className="member-name">{t('about.member1.name')}</h4>
                <p className="member-role">{t('about.member1.role')}</p>
              </div>
            </div>
            <div className="member-card-horizontal">
              <div className="member-avatar-small"></div>
              <div className="member-info-horizontal">
                <h4 className="member-name">{t('about.member2.name')}</h4>
                <p className="member-role">{t('about.member2.role')}</p>
              </div>
            </div>
            <div className="member-card-horizontal">
              <div className="member-avatar-small"></div>
              <div className="member-info-horizontal">
                <h4 className="member-name">{t('about.member3.name')}</h4>
                <p className="member-role">{t('about.member3.role')}</p>
              </div>
            </div>
            <div className="member-card-horizontal">
              <div className="member-avatar-small"></div>
              <div className="member-info-horizontal">
                <h4 className="member-name">{t('about.member4.name')}</h4>
                <p className="member-role">{t('about.member4.role')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
