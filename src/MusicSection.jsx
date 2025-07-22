import { useTranslation } from 'react-i18next'

export default function MusicSection() {
  const { t } = useTranslation()

  const albums = [
    {
      title: "Parachutes Experience",
      year: "2024",
      songs: ["Yellow", "The Scientist", "Trouble", "Don't Panic", "Shiver"]
    },
    {
      title: "A Rush of Blood Experience", 
      year: "2024",
      songs: ["Clocks", "The Scientist", "In My Place", "Warning Sign", "Green Eyes"]
    },
    {
      title: "X&Y Experience",
      year: "2024", 
      songs: ["Fix You", "Speed of Sound", "Talk", "The Hardest Part", "What If"]
    }
  ]

  const popularSongs = [
    { title: "Fix You", album: "X&Y Experience", duration: "4:54" },
    { title: "Yellow", album: "Parachutes Experience", duration: "4:29" },
    { title: "The Scientist", album: "A Rush of Blood Experience", duration: "5:09" },
    { title: "Clocks", album: "A Rush of Blood Experience", duration: "5:07" },
    { title: "Viva La Vida", album: "Viva La Vida Experience", duration: "4:01" },
    { title: "Paradise", album: "Mylo Xyloto Experience", duration: "4:38" },
  ]

  return (
    <section id="music" className="section section-bg-tertiary particle-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-float -top-48 right-1/4"></div>
        <div className="absolute w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-float animation-delay-1000 bottom-0 left-0"></div>
      </div>
      
      <div className="section-container">
        <div className="section-header animate-fade-in-up">
          <h2 className="section-title holographic-text">
            {t('music.title')}
          </h2>
          <p className="section-subtitle animate-fade-in-up animation-delay-200">
            {t('music.subtitle')}
          </p>
        </div>

        {/* Featured Albums */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-primary text-reveal animate-glow">
            {t('music.our_albums')}
          </h3>
          <div className="grid-responsive grid-md-3">
            {albums.map((album, index) => (
              <div
                key={index}
                className="card card-secondary card-glass card-hover group cursor-glow magnetic-btn animate-fade-in-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Album Cover Placeholder */}
                <div className="card card-secondary h-48 mb-6 flex items-center justify-center group-hover:scale-105 transition-all duration-500 neon-glow">
                  <div className="text-center">
                    <div className="text-4xl mb-2 animate-bounce-gentle">🎵</div>
                    <p className="text-sm font-semibold text-muted group-hover:text-yellow-300 transition-colors duration-300">Album Cover</p>
                  </div>
                </div>
                
                <h4 className="text-xl font-bold mb-2 text-muted group-hover:text-yellow-300 transition-colors duration-300">{album.title}</h4>
                <p className="text-primary mb-4 group-hover:text-yellow-300 transition-colors duration-300">{album.year}</p>
                
                <ul className="space-y-1 text-muted">
                  {album.songs.map((song, songIndex) => (
                    <li 
                      key={songIndex} 
                      className="text-sm hover:text-cyan-400 transition-all duration-300 cursor-pointer flex items-center gap-2 group/song transform hover:translate-x-2"
                    >
                      <span className="w-2 h-2 bg-cyan-400 rounded-full opacity-0 group-hover/song:opacity-100 transition-opacity duration-300"></span>
                      {song}
                    </li>
                  ))}
                </ul>

                <button className="btn btn-primary btn-primary-hover w-full mt-6 magnetic-btn">
                  {t('music.listen_now')}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Songs */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-primary animate-glow">
            {t('music.popular_songs')}
          </h3>
          <div className="grid-responsive grid-md-2 max-w-4xl mx-auto">
            {popularSongs.map((song, index) => (
              <div
                key={index}
                className="card card-primary card-glass card-hover group flex items-center justify-between animate-fade-in-up cursor-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4">
                  <button className="btn btn-primary btn-primary-hover w-12 h-12 rounded-full flex items-center justify-center magnetic-btn">
                    <span className="text-lg">▶</span>
                  </button>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">{song.title}</h4>
                    <p className="text-sm text-muted text-muted-hover">{song.album}</p>
                  </div>
                </div>
                <span className="text-sm text-muted text-muted-hover">{song.duration}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Streaming Links */}
        <div className="text-center mt-16 animate-fade-in-up animation-delay-1000">
          <p className="text-muted text-lg mb-6">
            Listen to our music on your favorite platform
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            {['Spotify', 'Apple Music', 'YouTube Music', 'SoundCloud'].map((platform) => (
              <a 
                key={platform}
                href="#" 
                className="btn btn-primary btn-primary-hover magnetic-btn"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
