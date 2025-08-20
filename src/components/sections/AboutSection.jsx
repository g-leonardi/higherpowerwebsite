import { useTranslation } from 'react-i18next'

export default function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="about" className="section">
      <div className="section-bg-elements">
  {/* Blobs rimossi */}
      </div>
      
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            {t('about.title')}
          </h2>
        </div>

  {/* About inner wrapper without background overlay */}
  <div className="about-wrapper">
          <div className="about-quadrotto-content">
            <div className="about-quadrotto-text">
              <p className="bio-text">
                {t('about.story_text1')}<br /><br />{t('about.story_text2')}
              </p>
              {/* Inline stats directly under the story */}
              <div className="about-inline-stats">
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
            <div className="about-quadrotto-image">
              <div className="photo-frame">
                <img 
                  src="/photos/laBand.jpg"
                  alt="Higher Power Band performing live"
                  className="band-photo-img"
                />
              </div>
            </div>
          </div>
          {/* Under the divider line, show band members instead of stats */}
          <div className="about-quadrotto-stats">
            <div className="members-row">
              <div className="member-card-horizontal">
                <div className="member-avatar-small">
                  <img 
                    src="/photos/BandMembers/Luca.png"
                    alt={t('about.member1.name')}
                    className="member-photo"
                  />
                </div>
                <div className="member-info-horizontal">
                  <h4 className="member-name">{t('about.member1.name')}</h4>
                  <p className="member-role">{t('about.member1.role')}</p>
                </div>
              </div>
              <div className="member-card-horizontal">
                <div className="member-avatar-small">
                  <img 
                    src="/photos/BandMembers/Dani.png"
                    alt={t('about.member2.name')}
                    className="member-photo"
                  />
                </div>
                <div className="member-info-horizontal">
                  <h4 className="member-name">{t('about.member2.name')}</h4>
                  <p className="member-role">{t('about.member2.role')}</p>
                </div>
              </div>
              <div className="member-card-horizontal">
                <div className="member-avatar-small">
                  <img 
                    src="/photos/BandMembers/Peo.png"
                    alt={t('about.member3.name')}
                    className="member-photo"
                  />
                </div>
                <div className="member-info-horizontal">
                  <h4 className="member-name">{t('about.member3.name')}</h4>
                  <p className="member-role">{t('about.member3.role')}</p>
                </div>
              </div>
              <div className="member-card-horizontal">
                <div className="member-avatar-small">
                  <img 
                    src="/photos/BandMembers/Alfred.png"
                    alt={t('about.member4.name')}
                    className="member-photo"
                  />
                </div>
                <div className="member-info-horizontal">
                  <h4 className="member-name">{t('about.member4.name')}</h4>
                  <p className="member-role">{t('about.member4.role')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
