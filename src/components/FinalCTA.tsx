'use client'

import { MessageCircle, Calendar, Star, CheckCircle } from 'lucide-react'

export default function FinalCTA() {
  const handleWhatsAppBooking = () => {
    const message = "Hi Tshiamo! I'm ready to start my fitness transformation. Can we schedule my first session?"
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/27635432439?text=${encodedMessage}`, '_blank')
  }

  const handlePersonalDetails = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSdyVrT-CWJVTkbh9s-YxZT8f7Vm_5XG6qHjPz2RLNB8TrUeQw/viewform', '_blank')
  }

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-primary-500/20 backdrop-blur-sm border border-primary-500/30 rounded-full px-6 py-3 mb-6">
              <Star className="w-5 h-5 text-primary-400" />
              <span className="text-primary-400 font-semibold">Ready to Transform?</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
              <span className="text-white">Your Transformation</span><br />
              <span className="text-primary-500">Starts Today</span>
            </h2>
            
            <p className="text-xl text-neutral-300 leading-relaxed max-w-3xl mx-auto mb-8">
              Don't wait for the "perfect" moment. Every day you delay is another day you could be feeling stronger, more confident, and healthier. Take the first step now.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"></div>
          </div>

          {/* Main CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button
              onClick={handleWhatsAppBooking}
              className="group bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 flex items-center justify-center gap-3 min-w-[280px]"
            >
              <MessageCircle className="w-6 h-6 group-hover:animate-pulse" />
              <span>Book Your Session Now</span>
            </button>
            
            <button
              onClick={handlePersonalDetails}
              className="group bg-neutral-800/50 hover:bg-neutral-700/50 border-2 border-primary-500/50 hover:border-primary-400 text-white px-8 py-4 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 min-w-[280px]"
            >
              <Calendar className="w-6 h-6 group-hover:animate-pulse" />
              <span>Complete Personal Details</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">15min</div>
              <div className="text-neutral-300 font-medium">Free Consultation</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">100+</div>
              <div className="text-neutral-300 font-medium">Clients Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">5★</div>
              <div className="text-neutral-300 font-medium">Average Rating</div>
            </div>
          </div>

          {/* Benefits Reminder */}
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-3xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-6">What You Get When You Start Today:</h3>
            
            <div className="grid sm:grid-cols-2 gap-4 text-left">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">Comprehensive fitness assessment</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">Personalized training program</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">Expert nutrition guidance</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">24/7 WhatsApp support</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">Progress tracking & adjustments</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary-400 mt-1 flex-shrink-0" />
                <span className="text-neutral-300">Safe, proven training methods</span>
              </div>
            </div>

            <div className="mt-8 p-6 bg-neutral-800/50 rounded-2xl">
              <p className="text-lg text-primary-300 font-semibold mb-2">
                Remember: The best time to start was yesterday. The second best time is now.
              </p>
              <p className="text-neutral-400">
                Join over 100 clients who have already transformed their lives with Tshiamo's proven training methods.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
