import { useState } from "react"
import { useTranslation } from "react-i18next"

export default function Navbar() {
  const { t, i18n } = useTranslation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [language, setLanguage] = useState(i18n.language || "en")

  const changeLanguage = (lng) => {
    console.log(`Changing language to: ${lng}`)
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
    <header className="navbar navbar-glass animate-fade-in-up">
      <div className="navbar-container">
        <h1 className="navbar-logo animate-glow text-primary hover:text-yellow-300">
          Higher Power
        </h1>

        {/* Desktop Menu */}
        <nav className="navbar-menu">
          {navLinks.map(({ label, href }, index) => (
            <a 
              key={label} 
              href={href} 
              className="navbar-link group text-muted hover:text-yellow-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {label}
              <span className="navbar-link-underline"></span>
            </a>
          ))}

          {/* Language Switcher */}
          <div className="flex gap-2 animate-slide-in-right animation-delay-700">
            <button
              onClick={() => changeLanguage("en")}
              className={`navbar-lang-btn ${
                language === "en" ? "navbar-lang-active" : "navbar-lang-inactive"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("it")}
              className={`navbar-lang-btn ${
                language === "it" ? "navbar-lang-active" : "navbar-lang-inactive"
              }`}
            >
              IT
            </button>
          </div>
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`navbar-hamburger-line ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`navbar-hamburger-line ${menuOpen ? "opacity-0" : "opacity-100"}`} />
          <span className={`navbar-hamburger-line ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="navbar-mobile-menu navbar-glass animate-fade-in">
          {navLinks.map(({ label, href }, index) => (
            <a
              key={label}
              href={href}
              className="navbar-mobile-link text-muted hover:text-yellow-300 animate-slide-in-left"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}

          <div className="flex justify-center gap-4 animate-fade-in-up animation-delay-500">
            <button
              onClick={() => changeLanguage("en")}
              className={`navbar-lang-btn ${
                language === "en" ? "navbar-lang-active" : "navbar-lang-inactive"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => changeLanguage("it")}
              className={`navbar-lang-btn ${
                language === "it" ? "navbar-lang-active" : "navbar-lang-inactive"
              }`}
            >
              IT
            </button>
          </div>
        </nav>
      )}
    </header>
  )
}
