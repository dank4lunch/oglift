'use client'

import { Award, MapPin, Phone, MessageCircle, Mail, Star, CheckCircle } from 'lucide-react'

export default function TrainerAbout() {
  const handleWhatsApp = () => {
    const message = "Hi Tshiamo! I'd like to learn more about your personal training services."
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/27635432439?text=${encodedMessage}`, '_blank')
  }

  const handleCall = () => {
    window.open('tel:+27635432439', '_self')
  }

  const handleEmail = () => {
    window.location.href = 'mailto:tshiamokl@gmail.com?subject=Personal Training Inquiry&body=Hi Tshiamo,%0D%0A%0D%0AI\'m interested in learning more about your personal training services.%0D%0A%0D%0AThank you!'
  }

  const specializations = [
    "HIIT Training",
    "Strength & Conditioning", 
    "Bootcamp Sessions",
    "Boxing Training",
    "Exercise Science",
    "Nutrition Guidance"
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(227,181,71,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-6 py-3 mb-6">
            <Award className="w-5 h-5 text-primary-400" />
            <span className="text-primary-400 font-semibold">Meet Your Trainer</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="text-white">About</span><br />
            <span className="text-primary-500">Tshiamo Sookane</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Your certified personal trainer in Sandton CBD, dedicated to helping you achieve your fitness goals with proven methods and personalized attention.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto items-center">
          {/* Left Column - Trainer Info */}
          <div className="space-y-8">
            {/* Credentials */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Certified Professional</h3>
                  <p className="text-primary-400 font-semibold">HFPA Certified Personal Trainer</p>
                </div>
              </div>
              
              <p className="text-neutral-300 leading-relaxed mb-6">
                With extensive training in exercise science and years of hands-on experience, Tshiamo brings both knowledge and passion to every training session. Certified by the Health and Fitness Professionals Academy (HFPA), he specializes in creating sustainable fitness transformations.
              </p>

              {/* Location */}
              <div className="flex items-center gap-3 text-neutral-300 mb-4">
                <MapPin className="w-5 h-5 text-primary-400" />
                <span>Based in Sandton CBD</span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((star) => (
                    <Star key={star} className="w-5 h-5 text-primary-400 fill-current" />
                  ))}
                </div>
                <span className="text-neutral-300">5.0 • 100+ Client Reviews</span>
              </div>
            </div>

            {/* Specializations */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Training Specializations</h3>
              <div className="grid grid-cols-2 gap-4">
                {specializations.map((spec, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 flex-shrink-0" />
                    <span className="text-neutral-300">{spec}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact & CTA */}
          <div className="space-y-8">
            {/* Contact Methods */}
            <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Ready to Get Started?</h3>
              <p className="text-neutral-300 text-center mb-8 leading-relaxed">
                Choose your preferred way to connect and let's discuss how we can achieve your fitness goals together.
              </p>
              
              <div className="space-y-4">
                <button
                  onClick={handleWhatsApp}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25 flex items-center justify-center gap-3"
                >
                  <MessageCircle className="w-6 h-6" />
                  WhatsApp Message
                </button>
                
                <button
                  onClick={handleCall}
                  className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25 flex items-center justify-center gap-3"
                >
                  <Phone className="w-6 h-6" />
                  Call Directly
                </button>
                
                <button
                  onClick={handleEmail}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25 flex items-center justify-center gap-3"
                >
                  <Mail className="w-6 h-6" />
                  Send Email
                </button>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">100+</div>
                <div className="text-neutral-300 font-medium">Clients Transformed</div>
              </div>
              <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-primary-400 mb-2">5+</div>
                <div className="text-neutral-300 font-medium">Years Experience</div>
              </div>
            </div>

            {/* Testimonial Preview */}
            <div className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-3xl p-8">
              <div className="flex items-center gap-1 mb-4">
                {[1,2,3,4,5].map((star) => (
                  <Star key={star} className="w-5 h-5 text-primary-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-neutral-300 italic leading-relaxed mb-4">
                "Tshiamo's approach to training is exactly what I needed. Professional, knowledgeable, and genuinely cares about your progress. I've seen amazing results in just a few weeks!"
              </blockquote>
              <cite className="text-primary-400 font-semibold">— Sarah M., Sandton</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
