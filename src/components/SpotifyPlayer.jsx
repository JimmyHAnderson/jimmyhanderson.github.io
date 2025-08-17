import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const SpotifyPlayer = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isMinimized, setIsMinimized] = useState(false)
  const [currentTrack, setCurrentTrack] = useState({
    name: 'Not Playing',
    artist: 'Spotify',
    album: '',
    albumArt: '',
    isPlaying: false,
    progress: 0,
    duration: 0
  })

  // Mock data for demonstration - replace with actual Spotify API integration
  useEffect(() => {
    // Simulate track updates
    const mockTracks = [
      {
        name: 'Bohemian Rhapsody',
        artist: 'Queen',
        album: 'A Night at the Opera',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b273ce4f1737e6c24a3c88a0c4c5',
        isPlaying: true,
        progress: 45,
        duration: 354
      },
      {
        name: 'Stairway to Heaven',
        artist: 'Led Zeppelin',
        album: 'Led Zeppelin IV',
        albumArt: 'https://i.scdn.co/image/ab67616d0000b273c8a11e48c91a8c3c8b3b3b3b',
        isPlaying: false,
        progress: 0,
        duration: 482
      }
    ]

    let currentIndex = 0
    const interval = setInterval(() => {
      setCurrentTrack(mockTracks[currentIndex])
      currentIndex = (currentIndex + 1) % mockTracks.length
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, '0')}`
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  const toggleVisibility = () => {
    setIsVisible(!isVisible)
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
    <AnimatePresence>
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
              className="p-4"
            >
              {/* Album Art */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={currentTrack.albumArt || 'https://via.placeholder.com/60x60/1DB954/FFFFFF?text=♪'}
                    alt={currentTrack.album}
                    className="w-16 h-16 rounded-lg object-cover shadow-lg"
                  />
                  {currentTrack.isPlaying && (
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="absolute inset-0 bg-green-500/20 rounded-lg flex items-center justify-center"
                    >
                      <div className="w-2 h-2 bg-green-500 rounded-full" />
                    </motion.div>
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-medium truncate">{currentTrack.name}</h3>
                  <p className="text-dark-400 text-sm truncate">{currentTrack.artist}</p>
                  <p className="text-dark-500 text-xs truncate">{currentTrack.album}</p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-3">
                <div className="flex justify-between text-xs text-dark-400 mb-1">
                  <span>{formatTime(currentTrack.progress)}</span>
                  <span>{formatTime(currentTrack.duration)}</span>
                </div>
                <div className="w-full bg-dark-700 rounded-full h-1">
                  <motion.div
                    className="bg-green-500 h-1 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentTrack.progress / currentTrack.duration) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-4">
                <button className="text-dark-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                  </svg>
                </button>
                <button className="text-white hover:text-green-400 transition-colors">
                  {currentTrack.isPlaying ? (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                    </svg>
                  ) : (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
                <button className="text-dark-400 hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 6h2v12h-2zM6 6h2v12H6zm3.5 6l8.5-6v12z"/>
                  </svg>
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center space-x-2 mt-3">
                <svg className="w-4 h-4 text-dark-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                </svg>
                <div className="flex-1 bg-dark-700 rounded-full h-1">
                  <div className="bg-green-500 h-1 rounded-full w-3/4" />
                </div>
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
                <img
                  src={currentTrack.albumArt || 'https://via.placeholder.com/40x40/1DB954/FFFFFF?text=♪'}
                  alt="Album"
                  className="w-10 h-10 rounded object-cover"
                />
                {currentTrack.isPlaying && (
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                    className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"
                  />
                )}
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default SpotifyPlayer
