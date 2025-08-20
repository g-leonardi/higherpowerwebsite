import { useState, useMemo } from "react"
import { useTranslation } from "react-i18next"

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState(i18n.language || "en")

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
    setMenuOpen(false)
  }

  // Create stable navigation structure with language-based key for animations
  const navLinks = useMemo(() => [
    { key: "home", href: "#", labelKey: "navigation.home" },
    { key: "about", href: "#about", labelKey: "navigation.about" },
    { key: "tour", href: "#tour", labelKey: "navigation.tour" },
    { key: "gallery", href: "#gallery", labelKey: "navigation.gallery" },
    { key: "downloads", href: "#downloads", labelKey: "navigation.downloads" },
    { key: "contact", href: "#contact", labelKey: "navigation.contact" },
  ], [])

  return (
    <header className="nav-header">
      <div className="nav-container">
        <h1 className="nav-logo">
          <a href="#" aria-label="Higher Power Home">
            <img src="/HigherLogo.png" alt="Higher Power" style={{ height: '64px', width: 'auto' }} />
          </a>
        </h1>

        {/* Desktop Menu */}
        <nav className="nav-menu">
          {navLinks.map(({ key, href, labelKey }, index) => (
            <a 
              key={`${key}-${language}`} 
              href={href} 
              className="nav-link"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {t(labelKey)}
            </a>
          ))}

          {/* Language Switcher */}
          <div className="nav-lang-switcher">
            <button
              onClick={() => changeLanguage("en")}
              className={`nav-lang-btn ${language === "en" ? "active" : ""}`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("it")}
              className={`nav-lang-btn ${language === "it" ? "active" : ""}`}
            >
              IT
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`nav-hamburger-line ${menuOpen ? "open" : ""}`} />
          <span className={`nav-hamburger-line ${menuOpen ? "open" : ""}`} />
          <span className={`nav-hamburger-line ${menuOpen ? "open" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="nav-mobile">
          {navLinks.map(({ key, href, labelKey }, index) => (
            <a
              key={`${key}-${language}`}
              href={href}
              className="nav-mobile-link"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {t(labelKey)}
            </a>
          ))}

          <div className="nav-mobile-lang">
            <button
              onClick={() => changeLanguage("en")}
              className={`nav-lang-btn ${language === "en" ? "active" : ""}`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("it")}
              className={`nav-lang-btn ${language === "it" ? "active" : ""}`}
            >
              IT
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
