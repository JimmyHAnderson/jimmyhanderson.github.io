import { useState } from 'react'
import { motion } from 'framer-motion'

const SpotifyEmbed = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)

  // Replace this with your own Spotify playlist URL!
  // To get the embed URL:
  // 1. Go to your playlist on Spotify
  // 2. Click "Share" → "Embed playlist"
  // 3. Copy the URL from the iframe code
  const spotifyUrls = [
    // Your public playlist
    'https://open.spotify.com/embed/playlist/2oZupLlkD4ixyGamhStPR5?utm_source=generator',
    
    // You can add more playlists/albums here
    // 'https://open.spotify.com/embed/album/YOUR_ALBUM_ID?utm_source=generator',
    // 'https://open.spotify.com/embed/track/YOUR_TRACK_ID?utm_source=generator'
  ]

  const [currentUrlIndex, setCurrentUrlIndex] = useState(0)

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
  }

  const nextTrack = () => {
    setCurrentUrlIndex((prev) => (prev + 1) % spotifyUrls.length)
  }

  const prevTrack = () => {
    setCurrentUrlIndex((prev) => (prev - 1 + spotifyUrls.length) % spotifyUrls.length)
  }

  if (!isVisible) {
    return (
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        onClick={toggleVisibility}
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
        </svg>
      </motion.button>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 100, scale: 0.8 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.div
        className={`bg-dark-800/90 backdrop-blur-md border border-primary-500/20 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
          isMinimized ? 'w-16 h-16' : 'w-80'
        }`}
        whileHover={{ scale: 1.02 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-3 bg-gradient-to-r from-green-500/20 to-green-600/20 border-b border-green-500/30">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-green-400 text-sm font-medium">Spotify</span>
          </div>
          <div className="flex items-center space-x-1">
            <button
              onClick={toggleMinimize}
              className="text-dark-400 hover:text-white transition-colors p-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 13H5v-2h14v2z"/>
              </svg>
            </button>
            <button
              onClick={toggleVisibility}
              className="text-dark-400 hover:text-white transition-colors p-1"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
              </svg>
            </button>
          </div>
        </div>

        {!isMinimized && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="p-2"
          >
            {/* Navigation Controls */}
            <div className="flex items-center justify-between mb-2">
              <button
                onClick={prevTrack}
                className="text-dark-400 hover:text-white transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                </svg>
              </button>
              <span className="text-xs text-dark-400">
                {currentUrlIndex + 1} / {spotifyUrls.length}
              </span>
              <button
                onClick={nextTrack}
                className="text-dark-400 hover:text-white transition-colors p-1"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6h2v12h-2zM6 6h2v12H6zm3.5 6l8.5-6v12z"/>
                </svg>
              </button>
            </div>

            {/* Spotify Embed */}
            <div className="w-full">
              <iframe
                src={spotifyUrls[currentUrlIndex]}
                width="100%"
                height="232"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className="rounded-lg"
              />
            </div>
          </motion.div>
        )}

        {isMinimized && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full flex items-center justify-center"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
              </div>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
              />
            </div>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  )
}

export default SpotifyEmbed
