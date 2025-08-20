
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'

export default function TourSection() {
  const { t } = useTranslation()
  const [tourDates, setTourDates] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/tourDates.json')
      .then((res) => {
        if (!res.ok) throw new Error('Network error')
        return res.json()
      })
      .then((data) => setTourDates(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [])

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('it-IT', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <section id="tour" className="section section-bg-secondary">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-80 h-80 bg-yellow-400 rounded-full blur-3xl animate-float -top-20 -right-20"></div>
        <div className="absolute w-64 h-64 bg-cyan-400 rounded-full blur-3xl animate-float animation-delay-700 bottom-10 left-1/4"></div>
      </div>
      
      <div className="section-container">
        <div className="section-header animate-fade-in-up">
          <h2 className="section-title animate-glow">
            {t('tour.title')}
          </h2>
        </div>

        {/* Tour Dates - Scrollable Container */}
        <div className="tour-container">
          <div className="tour-scroll-wrapper">
            {loading && (
              <div className="tour-card tour-card-placeholder animate-fade-in-up">
                <div className="tour-card-content text-center text-muted">Loading events...</div>
              </div>
            )}
            {!loading && !error && tourDates.length === 0 && (
              <div className="tour-card tour-card-placeholder animate-fade-in-up">
                <div className="tour-card-content text-center text-lg font-semibold text-primary">
                  {t('tour.no_events')}
                </div>
              </div>
            )}
            {!loading && !error && tourDates.map((concert, index) => (
              <div
                key={index}
                className="tour-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="tour-card-content">
                  <div className="tour-info">
                    <div className="tour-date">
                      {formatDate(concert.date)}
                    </div>
                    <div className="tour-venue">
                      <div className="venue-name">
                        {concert.venue}
                      </div>
                      <div className="venue-city">
                        {concert.city}
                      </div>
                    </div>
                  </div>
                  <div className="tour-action">
                    <a
                      href={concert.eventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="tour-btn"
                    >
                      {t('tour.view_event')}
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {error && (
              <div className="tour-card tour-card-placeholder animate-fade-in-up">
                <div className="tour-card-content text-center text-danger">Error loading events.</div>
              </div>
            )}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <p className="text-muted text-lg mb-6">
            {t('tour.booking_question')}
          </p>
          <a 
            href="#contact" 
            className="btn btn-primary btn-primary-hover magnetic-btn"
          >
            {t('tour.contact_us_bookings')}
          </a>
        </div>
      </div>
    </section>
  )
}
