import { useState } from "react"
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

  const navLinks = [
    { label: t("navigation.home"), href: "#" },
    { label: t("navigation.about"), href: "#about" },
    { label: t("navigation.tour"), href: "#tour" },
    { label: t("navigation.music"), href: "#music" },
    { label: t("navigation.gallery"), href: "#gallery" },
    { label: t("navigation.contact"), href: "#contact" },
  ]

  return (
    <header className="nav-header">
      <div className="nav-container">
        <h1 className="nav-logo">
          Higher Power
        </h1>

        {/* Desktop Menu */}
        <nav className="nav-menu">
          {navLinks.map(({ label, href }, index) => (
            <a 
              key={label} 
              href={href} 
              className="nav-link"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {label}
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
          {navLinks.map(({ label, href }, index) => (
            <a
              key={label}
              href={href}
              className="nav-mobile-link"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
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
