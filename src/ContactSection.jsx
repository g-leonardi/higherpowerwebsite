import { useState } from 'react'
import { useTranslation } from 'react-i18next'

export default function ContactSection() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const socialMedia = [
    {
      name: 'Instagram',
      icon: '📸',
      url: 'https://instagram.com/higherpower_band',
      followers: '15.2K'
    },
    {
      name: 'Facebook', 
      icon: '👥',
      url: 'https://facebook.com/higherpower.tribute',
      followers: '8.7K'
    },
    {
      name: 'YouTube',
      icon: '🎥',
      url: 'https://youtube.com/c/HigherPowerTribute',
      followers: '12.1K'
    },
    {
      name: 'Spotify',
      icon: '🎵',
      url: 'https://open.spotify.com/artist/higherpower',
      followers: '5.3K'
    }
  ]

  const contactInfo = [
    {
      type: 'email',
      icon: '✉️',
      title: t('contact.email'),
      value: 'booking@higherpower-band.com',
      action: 'mailto:booking@higherpower-band.com'
    },
    {
      type: 'phone',
      icon: '📞',
      title: t('contact.phone'),
      value: '+39 345 678 9012',
      action: 'tel:+393456789012'
    },
    {
      type: 'location',
      icon: '📍',
      title: t('contact.location'),
      value: 'Roma, Italia',
      action: '#'
    }
  ]

  return (
    <section id="contact" className="section section-bg-primary">
      {/* Animated cyber grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="cyber-grid"></div>
      </div>
      
      {/* Floating particles */}
      <div className="particle-bg"></div>

      <div className="section-container">
        <div className="section-header animate-fade-in-up">
          <h2 className="section-title holographic-text">
            {t('contact.title')}
          </h2>
          <p className="section-subtitle animate-fade-in-up animation-delay-200">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid-responsive grid-md-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-up animation-delay-300">
            <div className="card card-glass card-primary">
              <h3 className="text-2xl font-bold text-primary mb-6 animate-glow">
                {t('contact.form.title')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="form-group">
                    <label className="form-label">
                      {t('contact.form.name')} *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      {t('contact.form.subject')}
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="form-input"
                    >
                      <option value="">{t('contact.form.selectSubject')}</option>
                      <option value="booking">{t('contact.form.booking')}</option>
                      <option value="collaboration">{t('contact.form.collaboration')}</option>
                      <option value="media">{t('contact.form.media')}</option>
                      <option value="other">{t('contact.form.other')}</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className="form-input resize-none"
                      required
                    ></textarea>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-primary-hover w-full magnetic-btn"
                >
                  {t('contact.form.send')}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info & Social Media */}
          <div className="space-y-8 animate-fade-in-up animation-delay-500">
            {/* Contact Information */}
            <div className="card card-glass card-secondary">
              <h3 className="text-2xl font-bold text-primary mb-6 animate-glow">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.type}
                    href={info.action}
                    className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition-all duration-300 group magnetic-btn"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl animate-bounce-gentle">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-muted text-sm group-hover:text-yellow-300 transition-colors duration-300">
                        {info.title}
                      </p>
                      <p className="text-white font-semibold group-hover:text-primary transition-colors duration-300">
                        {info.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="card card-glass card-secondary">
              <h3 className="text-2xl font-bold text-primary mb-6 animate-glow">
                {t('contact.social.title')}
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {socialMedia.map((social, index) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card card-hover bg-gray-800 bg-opacity-50 hover:bg-opacity-80 text-center p-4 magnetic-btn group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-3xl mb-2 animate-bounce-gentle">
                      {social.icon}
                    </div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-primary transition-colors duration-300">
                      {social.name}
                    </h4>
                    <p className="text-sm text-muted group-hover:text-yellow-300 transition-colors duration-300">
                      {social.followers} {t('contact.social.followers')}
                    </p>
                  </a>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-muted text-sm">
                  {t('contact.social.followUs')}
                </p>
              </div>
            </div>

            {/* Quick Booking */}
            <div className="card card-glass card-primary">
              <h3 className="text-xl font-bold text-center mb-4 animate-glow">
                {t('contact.booking.title')}
              </h3>
              <p className="text-center text-muted mb-6">
                {t('contact.booking.description')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="mailto:booking@higherpower-band.com?subject=Concert Booking Request"
                  className="btn btn-primary btn-primary-hover flex-1 magnetic-btn"
                >
                  📧 {t('contact.booking.email')}
                </a>
                <a
                  href="tel:+393456789012"
                  className="btn bg-green-600 hover:bg-green-500 text-white hover:scale-105 transition-all duration-300 flex-1 magnetic-btn"
                >
                  📞 {t('contact.booking.call')}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-1000">
          <div className="card card-glass max-w-2xl mx-auto">
            <h3 className="text-xl font-bold text-primary mb-4 animate-glow">
              {t('contact.availability.title')}
            </h3>
            <p className="text-muted leading-relaxed">
              {t('contact.availability.description')}
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <span className="status-badge status-available">
                {t('contact.availability.available')}
              </span>
              <span className="status-badge bg-yellow-600 text-white">
                {t('contact.availability.response')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
