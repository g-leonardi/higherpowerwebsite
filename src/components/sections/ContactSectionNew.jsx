import { useTranslation } from 'react-i18next'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="section">
      <div className="section-bg-elements">
  {/* Blobs rimossi */}
      </div>
      
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">
            {t('contact.title')}
          </h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="contact-content">
          {/* Contact Form */}
          <div className="contact-form-section">
            <h3 className="form-title">{t('contact.send_message')}</h3>
            <form className="contact-form">
              <div className="form-group">
                <label className="form-label">{t('contact.name')}</label>
                <input 
                  type="text" 
                  className="form-input"
                  placeholder={t('contact.name_placeholder')}
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t('contact.email')}</label>
                <input 
                  type="email" 
                  className="form-input"
                  placeholder={t('contact.email_placeholder')}
                />
              </div>
              <div className="form-group">
                <label className="form-label">{t('contact.subject')}</label>
                <select className="form-input">
                  <option>{t('contact.subject_booking')}</option>
                  <option>{t('contact.subject_collaboration')}</option>
                  <option>{t('contact.subject_media')}</option>
                  <option>{t('contact.subject_other')}</option>
                </select>
              </div>
              <div className="form-group">
                <label className="form-label">{t('contact.message')}</label>
                <textarea 
                  className="form-textarea"
                  placeholder={t('contact.message_placeholder')}
                ></textarea>
              </div>
              <button type="submit" className="form-submit">
                {t('contact.send')}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info-section">
            <h3 className="info-title">{t('contact.get_in_touch')}</h3>
            <p className="info-desc">{t('contact.get_in_touch_desc')}</p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">📧</div>
                <div className="method-info">
                  <h4>{t('contact.email_us')}</h4>
                  <p>higherpowercoldplay@libero.it</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📞</div>
                <div className="method-info">
                  <h4>{t('contact.call_us')}</h4>
                  <p>+39 349 212 4446</p>
                </div>
              </div>
              <div className="contact-method">
                <div className="method-icon">📍</div>
                <div className="method-info">
                  <h4>{t('contact.visit_us')}</h4>
                  <p>{t('contact.available_nationwide')}</p>
                </div>
              </div>
            </div>

            <div className="response-info">
              <h4 className="response-title">{t('contact.response_time')}</h4>
              <p className="response-desc">{t('contact.response_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
