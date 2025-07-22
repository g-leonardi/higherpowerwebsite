import { useState, useEffect } from 'react'

export default function LoadingSpinner() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Hide loading after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="loading-screen">
      <div className="loading-content">
        {/* Main Spinner */}
        <div className="loading-spinner">
          <div className="spinner-ring"></div>
          <div className="spinner-ring spinner-ring-delay-1"></div>
          <div className="spinner-ring spinner-ring-delay-2"></div>
        </div>
        
        {/* Band Logo/Text */}
        <div className="loading-text">
          <h1 className="holographic-text text-4xl font-bold mb-2">
            Higher Power
          </h1>
          <p className="text-muted animate-pulse">
            Coldplay Tribute Band
          </p>
        </div>
        
        {/* Progress Bar */}
        <div className="loading-progress">
          <div className="progress-bar"></div>
        </div>
        
        {/* Loading Message */}
        <div className="loading-message">
          <p className="text-sm text-muted animate-fade-in-out">
            Preparing the concert experience...
          </p>
        </div>
      </div>
      
      {/* Background Effects */}
      <div className="particle-bg"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="cyber-grid"></div>
      </div>
    </div>
  )
}
