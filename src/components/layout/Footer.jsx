import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation()

  const footerLinks = [
    { label: t('navigation.home'), href: "#home" },
    { label: t('navigation.about'), href: "#about" },
    { label: t('navigation.tour'), href: "#tour" },
    { label: t('navigation.gallery'), href: "#gallery" },
    { label: t('navigation.downloads'), href: "#downloads" },
    { label: t('navigation.contact'), href: "#contact" },
  ]

  const socialIcons = [
    {
      name: "Facebook", 
      path: "M22.675 0h-21.35C.595 0 0 .593 0 1.326v21.348C0 23.406.595 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788 4.658-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796 1.764v2.314h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.406 24 22.674V1.326C24 .593 23.406 0 22.675 0z",
      href: "https://www.facebook.com/profile.php?id=100070371454291"
    },
    {
      name: "Instagram",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      href:"https://www.instagram.com/higherpowertribute/"
    }
  ]

  // Management info (sostituisci i placeholder con i dati reali)
  const manager = {
    label: 'Management',
    person: 'Silvia Barelli', // es. Mario Rossi
    agency: 'RIGHT NOW SERVIZI', // es. RN Management
    email: 'info.rightnow22@gmail.com',
    phone: '+39 338 56 84 299',
    site: 'https://www.rightnowbooking.com/',
    logo: '/RN%20LOGO_NERO_NO%20SFONDO-1-2-1.png'
  }

  return (
    <footer className="footer footer-bg">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute w-96 h-96 bg-cyan-400 rounded-full blur-3xl animate-pulse -top-48 -left-48"></div>
        <div className="absolute w-64 h-64 bg-yellow-400 rounded-full blur-3xl animate-pulse -bottom-32 -right-32 animation-delay-1000"></div>
      </div>
      
      <div className="footer-container">
        <div className="footer-grid animate-fade-in-up">
          {/* Brand Section */}

          {/* Social & Contact */}
          <div className="group" style={{ width: '100%' }}>
            {/* Removed 'follow us' heading as requested */}
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%', gap: '1.25rem' }}>
              {/* Management Block */}
              <div style={{ display: 'flex', gap: '0.85rem', alignItems: 'flex-start', maxWidth: '60%' }}>
                <a href={manager.site} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }} aria-label={manager.agency}>
                  <img
                    src={manager.logo}
                    alt={manager.agency + ' logo'}
                    style={{ width: '72px', height: '72px', objectFit: 'contain', borderRadius: '10px', background: 'rgba(255,255,255,0.04)', padding: '4px', boxShadow: '0 0 0 1px rgba(255,255,255,0.05), 0 2px 8px -2px rgba(0,0,0,0.4), 0 0 14px -4px rgba(0,180,255,0.25)' }}
                    loading="lazy"
                  />
                </a>
                <div style={{ fontSize: '0.65rem', lineHeight: 1.25 }} className="text-gray-400">
                  <p style={{ fontWeight: 600, fontSize: '0.7rem', letterSpacing: '0.5px' }} className="text-primary">{manager.label}</p>
                  <p className="hover:text-cyan-400 transition-colors duration-200">{manager.person}</p>
                  <p className="hover:text-cyan-400 transition-colors duration-200">{manager.agency}</p>
                  <p>
                    <a href={`mailto:${manager.email}`} className="hover:text-cyan-400 transition-colors duration-200">{manager.email}</a>
                  </p>
                  <p>
                    <a href={`tel:${manager.phone.replace(/\s+/g, '')}`} className="hover:text-cyan-400 transition-colors duration-200">{manager.phone}</a>
                  </p>
                </div>
              </div>

              {/* Band contact & socials */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginLeft: 'auto' }}>
                <div className="text-gray-400 text-xs space-y-1 text-muted-hover" style={{ fontSize: '0.8rem', textAlign: 'right', marginBottom: '0.55rem' }}>
                  <p className="hover:text-cyan-400 transition-colors duration-200">
                    {t('footer.email')}: higherpowercoldplay@libero.it
                  </p>
                  <p className="hover:text-cyan-400 transition-colors duration-200">
                    {t('footer.phone')}: +39 349 212 4446
                  </p>
                </div>
                <div className="footer-social" style={{ gap: '0.7rem', justifyContent: 'flex-end', display: 'flex' }}>
                  {socialIcons.map(({ name, path, href }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                      aria-label={name}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" role="img" aria-hidden="true">
                        <path d={path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom animate-fade-in-up animation-delay-500">
          <p className="text-gray-400 text-sm mb-4 md:mb-0 text-muted-hover">
            &copy; 2025 Higher Power. {t('footer.rights_reserved')} This is a tribute band. We are not affiliated with Coldplay.
          </p>
          <div className="flex items-center space-x-2 text-gray-400 text-sm group">
            <span className="text-muted-hover">{t('footer.made_with')}</span>
            <span className="text-red-400 animate-pulse">♥</span>
            <span className="text-muted-hover">{t('footer.for_music')}</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
