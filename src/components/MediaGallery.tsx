'use client'

import { useState, useRef } from 'react'
import { Play, Pause, Volume2, VolumeX, CreditCard, Heart, Eye } from 'lucide-react'

interface MediaItem {
  id: string
  type: 'image' | 'video'
  src: string
  title: string
  description: string
  category: 'fitness' | 'transformation' | 'workout' | 'training'
  premium?: boolean
}

export default function MediaGallery() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [playingVideo, setPlayingVideo] = useState<string | null>(null)
  const [mutedVideos, setMutedVideos] = useState<Set<string>>(new Set())
  const videoRefs = useRef<{ [key: string]: HTMLVideoElement }>({})

  const mediaItems: MediaItem[] = [
    // Training Images
    {
      id: 'elite-training-1',
      type: 'image',
      src: '/images/training/elite-training-1.jpg',
      title: 'Elite Training Session',
      description: 'Professional personal training with focus on form and technique',
      category: 'training'
    },
    {
      id: 'strength-conditioning-1',
      type: 'image',
      src: '/images/training/strength-conditioning-1.jpg',
      title: 'Strength & Conditioning',
      description: 'Building functional strength and muscle development',
      category: 'workout'
    },
    {
      id: 'transformation-results-1',
      type: 'image',
      src: '/images/training/transformation-results-1.jpg',
      title: 'Transformation Results',
      description: 'Amazing client transformation and progress results',
      category: 'transformation'
    },
    {
      id: 'client-progress-1',
      type: 'image',
      src: '/images/training/client-progress-1.jpg',
      title: 'Client Progress Journey',
      description: 'Real clients achieving their fitness goals',
      category: 'fitness'
    },
    {
      id: 'fitness-journey-1',
      type: 'image',
      src: '/images/training/fitness-journey-1.jpg',
      title: 'Fitness Journey Milestone',
      description: 'Celebrating client achievements and milestones',
      category: 'fitness'
    },
    {
      id: 'workout-session-1',
      type: 'image',
      src: '/images/training/workout-session-1.jpg',
      title: 'Intense Workout Session',
      description: 'High-energy training session in action',
      category: 'workout'
    },
    
    // Training Videos
    {
      id: 'hiit-training-session',
      type: 'video',
      src: '/videos/training/hiit-training-session.mp4',
      title: 'HIIT Training Session',
      description: 'High-Intensity Interval Training for maximum results',
      category: 'training',
      premium: true
    },
    {
      id: 'strength-workout',
      type: 'video',
      src: '/videos/training/strength-workout.mp4',
      title: 'Strength Building Workout',
      description: 'Professional strength training techniques and form',
      category: 'workout',
      premium: true
    },
    {
      id: 'boxing-training',
      type: 'video',
      src: '/videos/training/boxing-training.mp4',
      title: 'Boxing Training Session',
      description: 'Elite boxing techniques and conditioning workouts',
      category: 'training',
      premium: true
    },
    {
      id: 'personal-training',
      type: 'video',
      src: '/videos/training/personal-training.mp4',
      title: 'Personal Training Session',
      description: 'One-on-one personal training with professional guidance',
      category: 'workout',
      premium: true
    }
  ]

  const categories = [
    { id: 'all', label: 'All Content', count: mediaItems.length },
    { id: 'training', label: 'Training Sessions', count: mediaItems.filter(item => item.category === 'training').length },
    { id: 'workout', label: 'Workouts', count: mediaItems.filter(item => item.category === 'workout').length },
    { id: 'transformation', label: 'Transformations', count: mediaItems.filter(item => item.category === 'transformation').length },
    { id: 'fitness', label: 'Fitness Journey', count: mediaItems.filter(item => item.category === 'fitness').length }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? mediaItems 
    : mediaItems.filter(item => item.category === selectedCategory)

  const handleVideoPlay = (videoId: string) => {
    // Pause all other videos
    Object.entries(videoRefs.current).forEach(([id, video]) => {
      if (id !== videoId && video) {
        video.pause()
      }
    })
    setPlayingVideo(videoId)
  }

  const handleVideoPause = (videoId: string) => {
    setPlayingVideo(null)
  }

  const toggleMute = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (video) {
      video.muted = !video.muted
      setMutedVideos(prev => {
        const newSet = new Set(prev)
        if (video.muted) {
          newSet.add(videoId)
        } else {
          newSet.delete(videoId)
        }
        return newSet
      })
    }
  }

  const handlePremiumAccess = (itemId: string) => {
    // Integrate with your payment system
    const whatsappMessage = `Hi Tshiamo! I'm interested in accessing the premium training content: ${itemId}. Please send me payment details for the training packages.`
    const whatsappUrl = `https://wa.me/27123456789?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Training <span className="text-[#e3b547]">Gallery</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get an inside look at professional training sessions, client transformations, 
            and high-intensity workouts that deliver real results.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-[#e3b547] text-black shadow-lg shadow-[#e3b547]/25'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-[#e3b547]/20 transition-all duration-500"
            >
              {/* Media Content */}
              <div className="relative aspect-video overflow-hidden">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative">
                    <video
                      ref={(el) => {
                        if (el) videoRefs.current[item.id] = el
                      }}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      onPlay={() => handleVideoPlay(item.id)}
                      onPause={() => handleVideoPause(item.id)}
                    >
                      <source src={item.src} type="video/mp4" />
                    </video>
                    
                    {/* Video Controls */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <button
                        onClick={() => {
                          const video = videoRefs.current[item.id]
                          if (video) {
                            if (video.paused) {
                              video.play()
                            } else {
                              video.pause()
                            }
                          }
                        }}
                        className="w-16 h-16 bg-[#e3b547] rounded-full flex items-center justify-center text-black hover:bg-[#d4a840] transition-colors duration-300 shadow-lg"
                      >
                        {playingVideo === item.id ? (
                          <Pause size={24} />
                        ) : (
                          <Play size={24} className="ml-1" />
                        )}
                      </button>
                    </div>

                    {/* Video Controls Bar */}
                    <div className="absolute bottom-4 right-4 flex gap-2">
                      <button
                        onClick={() => toggleMute(item.id)}
                        className="w-10 h-10 bg-black/50 rounded-full flex items-center justify-center text-white hover:bg-black/70 transition-colors duration-300"
                      >
                        {mutedVideos.has(item.id) ? (
                          <VolumeX size={16} />
                        ) : (
                          <Volume2 size={16} />
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {/* Premium Badge */}
                {item.premium && (
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#e3b547] text-black px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <CreditCard size={14} />
                      Premium
                    </span>
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#e3b547] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {item.description}
                </p>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {item.premium ? (
                    <button
                      onClick={() => handlePremiumAccess(item.id)}
                      className="flex-1 bg-[#e3b547] text-black py-2 px-4 rounded-lg font-semibold hover:bg-[#d4a840] transition-colors duration-300 flex items-center justify-center gap-2"
                    >
                      <CreditCard size={16} />
                      Get Access
                    </button>
                  ) : (
                    <button className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold hover:bg-gray-600 transition-colors duration-300 flex items-center justify-center gap-2">
                      <Eye size={16} />
                      View Full
                    </button>
                  )}
                  
                  <button className="w-10 h-10 bg-gray-700 text-white rounded-lg hover:bg-red-600 hover:text-white transition-colors duration-300 flex items-center justify-center">
                    <Heart size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-[#e3b547] to-[#d4a840] rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-black mb-4">
              Ready to Start Your Transformation?
            </h3>
            <p className="text-black/80 text-lg mb-6">
              Join these success stories and unlock your full potential with personalized training programs.
            </p>
            <button 
              onClick={() => {
                const whatsappMessage = "Hi Tshiamo! I'm interested in starting my fitness transformation. Can you tell me more about your training packages?"
                const whatsappUrl = `https://wa.me/27123456789?text=${encodeURIComponent(whatsappMessage)}`
                window.open(whatsappUrl, '_blank')
              }}
              className="bg-black text-[#e3b547] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-900 transition-colors duration-300 shadow-lg"
            >
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
