import { useTranslation } from 'react-i18next'

export default function TourSection() {
  const { t } = useTranslation()

  const tourDates = [
    {
      date: "2025-08-15",
      venue: "Teatro Romano",
      city: "Verona, Italy",
      eventUrl: "https://example.com/verona-concert"
    },
    {
      date: "2025-08-22", 
      venue: "O2 Arena",
      city: "London, UK",
      eventUrl: "https://example.com/london-concert"
    },
    {
      date: "2025-09-05",
      venue: "Mediolanum Forum", 
      city: "Milano, Italy",
      eventUrl: "https://example.com/milano-concert"
    },
    {
      date: "2025-09-12",
      venue: "AccorHotels Arena",
      city: "Paris, France", 
      eventUrl: "https://example.com/paris-concert"
    },
    {
      date: "2025-09-19",
      venue: "Mercedes-Benz Arena",
      city: "Berlin, Germany",
      eventUrl: "https://example.com/berlin-concert"
    },
    {
      date: "2025-09-26", 
      venue: "Ziggo Dome",
      city: "Amsterdam, Netherlands",
      eventUrl: "https://example.com/amsterdam-concert"
    }
  ]

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
          <p className="section-subtitle animate-fade-in-up animation-delay-200">
            {t('tour.subtitle')}
          </p>
        </div>

        {/* Tour Dates - Scrollable Container */}
        <div className="tour-container">
          <div className="tour-scroll-wrapper">
            {tourDates.map((concert, index) => (
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
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <p className="text-muted text-lg mb-6">
            Want to book us for your venue or event?
          </p>
          <a 
            href="#contact" 
            className="btn btn-primary btn-primary-hover magnetic-btn"
          >
            Contact Us for Bookings
          </a>
        </div>
      </div>
    </section>
  )
}
