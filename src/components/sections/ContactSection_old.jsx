import { useTranslation } from 'react-i18next'

export default function ContactSection() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="contact-section">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title glow-text">
            {t('contact.title')}
          </h2>
          <p className="section-subtitle">
            Ready to bring the Coldplay experience to your event?
          </p>
        </div>

        <div className="contact-grid">
          {/* Quick Contact Cards */}
          <div className="contact-card glass-card">
            <div className="contact-icon">✉️</div>
            <h3 className="contact-method-title">Email Us</h3>
            <p className="contact-detail">info@higherpower.band</p>
            <button className="contact-btn">Send Email</button>
          </div>

          <div className="contact-card glass-card">
            <div className="contact-icon">📱</div>
            <h3 className="contact-method-title">Call Us</h3>
            <p className="contact-detail">+39 123 456 7890</p>
            <button className="contact-btn">Call Now</button>
          </div>

          <div className="contact-card glass-card">
            <div className="contact-icon">🎤</div>
            <h3 className="contact-method-title">Book Now</h3>
            <p className="contact-detail">Available across Italy</p>
            <button className="contact-btn">Get Quote</button>
          </div>
        </div>

        {/* Compact Contact Form */}
        <div className="contact-form-compact glass-card">
          <h3 className="form-title">Quick Message</h3>
          <form className="compact-form">
            <div className="form-row">
              <input 
                type="text" 
                className="form-input-compact"
                placeholder="Your Name"
              />
              <input 
                type="email" 
                className="form-input-compact"
                placeholder="Your Email"
              />
            </div>
            <textarea 
              className="form-textarea-compact"
              placeholder="Tell us about your event..."
            ></textarea>
            <button type="submit" className="form-submit-compact">
              Send Message ⚡
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="contact-social">
          <p className="social-title">Follow our journey</p>
          <div className="social-icons">
            <a href="#" className="social-icon">📘</a>
            <a href="#" className="social-icon">�</a>
            <a href="#" className="social-icon">🎵</a>
            <a href="#" className="social-icon">🎬</a>
          </div>
        </div>
      </div>

      <div className="floating-element contact-blob-1"></div>
      <div className="floating-element contact-blob-2"></div>
    </section>
  )
}
