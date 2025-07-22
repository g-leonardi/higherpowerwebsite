import { useTranslation } from "react-i18next"
import { useState } from "react"

// Localization
import "./locales/i18n.js"

// Styles
import "./styles/modern.css"

// Components
import Navbar from "./components/layout/Navbar"
import Footer from "./Footer"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import TourSection from "./components/sections/TourSection"
import ContactSection from "./components/sections/ContactSection"

export default function App() {
  const { t, i18n } = useTranslation()
  const [language, setLanguage] = useState("en")

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
    setLanguage(lng)
  }

  return (
    <div className="app">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <TourSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
