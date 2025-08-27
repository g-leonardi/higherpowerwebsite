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
      path: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z",
      href: "https://www.facebook.com/profile.php?id=100070371454291"
    },
    {
      name: "Instagram",
      path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z",
      href:"https://www.instagram.com/higherpowertribute/"
    }
  ]

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
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
              <span className="text-base font-semibold mb-2 text-primary hover:text-yellow-300 transition-colors duration-300" style={{ minWidth: '120px' }}>
                {t('footer.follow_us')}
              </span>
              
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
              <div className="text-gray-400 text-xs space-y-1 text-muted-hover" style={{ fontSize: '0.8rem' }}>
                <p className="hover:text-cyan-400 transition-colors duration-200">
                  {t('footer.email')}: higherpowercoldplay@libero.it
                </p>
                <p className="hover:text-cyan-400 transition-colors duration-200">
                  {t('footer.phone')}: +39 349 212 4446
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                <div className="footer-social" style={{ gap: '0.7rem', justifyContent: 'flex-end', display: 'flex' }}>
                  {socialIcons.map(({ name, path, href }) => (
                    <a 
                      key={name}
                      href={href} 
                      className="text-muted hover:text-yellow-400 hover:scale-110 transition-all duration-300"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
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
