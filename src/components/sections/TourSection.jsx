import { useTranslation } from 'react-i18next'

const TourSection = () => {
  const { t } = useTranslation()

  const tourDates = [
    {
      id: 1,
      date: '2025-08-15',
      venue: 'Forum di Assago',
      city: 'Milano',
      status: 'available'
    },
    {
      id: 2,
      date: '2025-08-22',
      venue: 'Palazzo dello Sport',
      city: 'Roma',
      status: 'few_left'
    },
    {
      id: 3,
      date: '2025-09-05',
      venue: 'PalaAlpitour',
      city: 'Torino',
      status: 'available'
    },
    {
      id: 4,
      date: '2025-09-12',
      venue: 'Teatro Verdi',
      city: 'Firenze',
      status: 'sold_out'
    },
    {
      id: 5,
      date: '2025-09-19',
      venue: 'Teatro San Carlo',
      city: 'Napoli',
      status: 'available'
    },
    {
      id: 6,
      date: '2025-10-03',
      venue: 'Arena di Verona',
      city: 'Verona',
      status: 'few_left'
    }
  ]

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('it-IT', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }

  const getStatusClass = (status) => {
    switch (status) {
      case 'sold_out':
        return 'status-sold-out'
      case 'few_left':
        return 'status-few-left'
      case 'available':
      default:
        return 'status-available'
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'sold_out':
        return t('tour.sold_out')
      case 'few_left':
        return t('tour.few_tickets')
      case 'available':
      default:
        return t('tour.tickets_available')
    }
  }

  return (
    <section id="tour" className="section-container tour-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title glow-text">{t('tour.title')}</h2>
          <p className="section-subtitle">{t('tour.subtitle')}</p>
        </div>

        <div className="tour-grid">
          {tourDates.map((show) => (
            <div key={show.id} className="tour-card glass-card">
              <div className="tour-date">
                <span className="date-day">
                  {new Date(show.date).getDate()}
                </span>
                <span className="date-month">
                  {new Date(show.date).toLocaleDateString('it-IT', { month: 'short' })}
                </span>
                <span className="date-year">
                  {new Date(show.date).getFullYear()}
                </span>
              </div>
              
              <div className="tour-info">
                <h3 className="venue-name">{show.venue}</h3>
                <p className="venue-city">{show.city}</p>
                <span className={`tour-status ${getStatusClass(show.status)}`}>
                  {getStatusText(show.status)}
                </span>
              </div>

              <div className="tour-actions">
                {show.status !== 'sold_out' ? (
                  <button className="btn-primary tour-btn">
                    {t('tour.buy_tickets')}
                  </button>
                ) : (
                  <button className="btn-disabled tour-btn" disabled>
                    {t('tour.sold_out')}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="tour-footer">
          <p className="tour-note">
            More dates to be announced soon. Follow us for updates!
          </p>
        </div>
      </div>

      <div className="floating-element tour-blob-1"></div>
      <div className="floating-element tour-blob-2"></div>
    </section>
  )
}

export default TourSection
