import { useTranslation } from "react-i18next"
import { useState } from "react"

// Localization
import "./locales/i18n.js"

// Styles
import "./styles/modern.css"

// Components
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer.jsx"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import TourSection from "./components/sections/TourSection"
import ContactSection from "./components/sections/ContactSection"
import GallerySection from "./components/sections/GallerySection"
import DownloadsSection from "./components/sections/DownloadsSection"

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
        <GallerySection />
        <DownloadsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
