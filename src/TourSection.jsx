import { useTranslation } from 'react-i18next'

export default function TourSection() {
  const { t } = useTranslation()

  const tourDates = [
    {
      date: "2025-08-15",
      venue: "Teatro Romano",
      city: "Verona",
      status: "available"
    },
    {
      date: "2025-08-22", 
      venue: "Auditorium Parco della Musica",
      city: "Roma",
      status: "sold-out"
    },
    {
      date: "2025-09-05",
      venue: "Mediolanum Forum", 
      city: "Milano",
      status: "available"
    },
    {
      date: "2025-09-12",
      venue: "Teatro Massimo",
      city: "Palermo", 
      status: "few-tickets"
    },
    {
      date: "2025-09-19",
      venue: "Unipol Arena",
      city: "Bologna",
      status: "available"
    },
    {
      date: "2025-09-26", 
      venue: "Mediolanum Forum",
      city: "Milano",
      status: "few-tickets"
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

  const getStatusClass = (status) => {
    const baseClass = "status-badge"
    switch (status) {
      case 'sold-out':
        return `${baseClass} status-sold-out`
      case 'few-tickets':
        return `${baseClass} status-few-tickets`
      default:
        return `${baseClass} status-available`
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'sold-out':
        return t('tour.sold_out')
      case 'few-tickets':
        return t('tour.few_tickets')
      default:
        return t('tour.tickets_available')
    }
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

        {/* Tour Dates */}
        <div className="space-y-6">
          {tourDates.map((concert, index) => (
            <div
              key={index}
              className="card card-primary card-glass card-hover group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="text-primary font-semibold text-lg group-hover:text-yellow-300 transition-colors duration-300">
                      {formatDate(concert.date)}
                    </div>
                    <div className="text-white">
                      <div className="text-xl font-semibold group-hover:text-cyan-300 transition-colors duration-300">
                        {concert.venue}
                      </div>
                      <div className="text-muted text-muted-hover">
                        {concert.city}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className={getStatusClass(concert.status)}>
                    {getStatusText(concert.status)}
                  </span>
                  <button
                    className={`btn ${
                      concert.status === 'sold-out'
                        ? 'btn-disabled'
                        : 'btn-primary btn-primary-hover magnetic-btn neon-glow'
                    }`}
                    disabled={concert.status === 'sold-out'}
                  >
                    {concert.status === 'sold-out' ? t('tour.sold_out') : t('tour.buy_tickets')}
                  </button>
                </div>
              </div>
            </div>
          ))}
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
