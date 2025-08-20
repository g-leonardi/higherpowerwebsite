import { useTranslation } from 'react-i18next'

export default function DownloadsSection() {
  const { t } = useTranslation()

  const downloads = [
    {
      id: 'technical-sheet',
      title: t('downloads.technical_sheet'),
      description: t('downloads.technical_sheet_desc'),
      icon: '📋',
      fileType: 'PDF',
      fileSize: '2.1 MB',
      downloadUrl: '/downloads/higher-power-scheda-tecnica.pdf'
    },
    {
      id: 'poster',
      title: t('downloads.poster'),
      description: t('downloads.poster_desc'),
      icon: '🎪',
      fileType: 'JPG',
      fileSize: '5.2 MB',
      downloadUrl: '/downloads/higher-power-poster.jpg'
    },
    {
      id: 'logo',
      title: t('downloads.logo'),
      description: t('downloads.logo_desc'),
      icon: '🎵',
      fileType: 'PNG',
      fileSize: '1.8 MB',
      downloadUrl: '/downloads/higher-power-logo.png'
    },
    {
      id: 'banner-horizontal',
      title: t('downloads.banner_horizontal'),
      description: t('downloads.banner_horizontal_desc'),
      icon: '🖼️',
      fileType: 'JPG',
      fileSize: '3.4 MB',
      downloadUrl: '/downloads/higher-power-banner-horizontal.jpg'
    },
    {
      id: 'banner-square',
      title: t('downloads.banner_square'),
      description: t('downloads.banner_square_desc'),
      icon: '⬜',
      fileType: 'JPG',
      fileSize: '2.9 MB',
      downloadUrl: '/downloads/higher-power-banner-square.jpg'
    },
    {
      id: 'banner-vertical',
      title: t('downloads.banner_vertical'),
      description: t('downloads.banner_vertical_desc'),
      icon: '📱',
      fileType: 'JPG',
      fileSize: '4.1 MB',
      downloadUrl: '/downloads/higher-power-banner-vertical.jpg'
    }
  ]

  const handleDownload = (item) => {
    // In a real implementation, you'd track downloads or handle the download process
    console.log(`Downloading: ${item.title}`)
    
    // Create a temporary link for download
    const link = document.createElement('a')
    link.href = item.downloadUrl
    link.download = item.downloadUrl.split('/').pop()
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section id="downloads" className="section downloads-section">
  {/* Sfondo e blobs rimossi */}
      
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title glow-text">
            {t('downloads.title')}
          </h2>
        </div>

        <div className="downloads-grid">
          {downloads.map((item, index) => (
            <div
              key={item.id}
              className="download-card glass-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="download-icon">
                {item.icon}
              </div>
              
              <div className="download-content">
                <h3 className="download-title">{item.title}</h3>
                <p className="download-description">{item.description}</p>
                
                <div className="download-meta">
                  <span className="file-type">{item.fileType}</span>
                  <span className="file-size">{item.fileSize}</span>
                </div>
              </div>

              <button
                className="download-btn"
                onClick={() => handleDownload(item)}
                title={`Download ${item.title}`}
              >
                <span className="download-icon-btn">⬇️</span>
                <span className="download-text">{t('downloads.download')}</span>
              </button>
            </div>
          ))}
        </div>

         {/* Call to Action */}
        <div className="text-center mt-6 animate-fade-in-up animation-delay-1000">
          <p className="text-muted text-lg mb-4">
            {t('downloads.need_more')}
          </p>
          <a 
            href="#contact" 
            className="btn btn-primary btn-primary-hover magnetic-btn"
          >
            {t('downloads.contact_us')}
          </a>
        </div>
      </div>

  {/* Blobs rimossi */}
    </section>
  )
}
