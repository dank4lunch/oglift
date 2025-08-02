
'use client'
import { Calendar, Clock, CheckCircle, MessageCircle, Gift } from 'lucide-react'

export default function FreeConsultation() {
  const consultationIncludes = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Goals Discussion",
      description: "We&apos;ll talk about your fitness aspirations, timeline, and what success looks like for you."
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: "Health Assessment", 
      description: "Review any health concerns, injuries, or medical considerations that might affect your training."
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Lifestyle & Preferences",
      description: "Understand your schedule, training preferences, and lifestyle factors that influence your fitness journey."
    },
    {
      icon: <Gift className="w-6 h-6" />,
      title: "Package Recommendations",
      description: "Get personalized recommendations on which training package would work best for your specific needs."
    }
  ]

  const handleBookConsultation = () => {
    const message = encodeURIComponent("Hi Tshiamo! I'd like to book my free 15-minute consultation. When are you available?")
    window.open(`https://wa.me/27635432439?text=${message}`, '_blank')
  }

  return (
    <section id="consultation" className="py-20 bg-gradient-to-b from-neutral-900 to-neutral-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(227,181,71,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/30 rounded-full px-6 py-3 mb-6">
              <Gift className="w-5 h-5 text-green-400" />
              <span className="text-green-400 font-semibold">100% Free &bull; No Commitment</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
              <span className="text-white">Claim Your</span><br />
              <span className="text-primary-500">Free 15-Minute Consultation</span>
            </h2>
            <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s chat about your goals and see how I can help you succeed. No pressure, just expert advice and a personalized plan for your fitness journey.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - What&apos;s Included */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-8">What&apos;s Included in Your Free Consultation:</h3>
              
              <div className="space-y-6">
                {consultationIncludes.map((item, index) => (
                  <div key={index} className="flex gap-4 p-6 bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 rounded-2xl hover:border-primary-500/50 transition-colors">
                    <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center text-primary-400 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                      <p className="text-neutral-400 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Indicators */}
              <div className="mt-8 p-6 bg-green-500/5 border border-green-500/20 rounded-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-green-400 font-bold text-lg">100% Free &bull; No Strings Attached</span>
                </div>
                <p className="text-neutral-300 text-sm">
                  No obligation &mdash; just a chance to get the right training approach for your unique situation. I&apos;m here to help you make the best choice for your goals.
                </p>
              </div>
            </div>

            {/* Right Side - CTA */}
            <div className="lg:pl-8">
              <div className="bg-gradient-to-br from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-3xl p-8 text-center">
                <div className="w-20 h-20 bg-primary-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Fitness?</h3>
                <p className="text-lg text-neutral-300 mb-8">
                  Book your free consultation now and take the first step toward your best self.
                </p>

                {/* Key Benefits */}
                <div className="space-y-3 mb-8">
                  {[
                    "📱 Quick WhatsApp booking",
                    "⏰ Only 15 minutes of your time", 
                    "🎯 Personalized recommendations",
                    "🆓 Completely free consultation"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center justify-center gap-2 text-neutral-300">
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={handleBookConsultation}
                  className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/25 mb-4"
                >
                  Book My Free Consultation
                </button>

                <p className="text-sm text-neutral-500">
                  Fast response &mdash; usually within minutes!
                </p>
              </div>

              {/* Additional CTA */}
              <div className="mt-8 text-center">
                <p className="text-neutral-400 mb-4">Prefer a direct chat or email?</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="mailto:tshiamokl@gmail.com"
                    className="px-6 py-3 border border-neutral-700 hover:border-primary-500/50 text-neutral-300 hover:text-primary-400 rounded-xl font-medium transition-colors"
                  >
                    Email Tshiamo
                  </a>
                  <a
                    href="tel:+27635432439"
                    className="px-6 py-3 border border-neutral-700 hover:border-primary-500/50 text-neutral-300 hover:text-primary-400 rounded-xl font-medium transition-colors"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-primary-400 text-lg font-bold tracking-wider uppercase border border-primary-500/30 px-6 py-3 rounded-full bg-primary-500/10">
              100% Free Consultation
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-6 muscle-text">
            Free 15-Minute Consultation
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-lg text-neutral-300 max-w-3xl mx-auto leading-relaxed font-medium">
            Start your fitness journey with confidence. This complimentary session helps us understand your goals and create the perfect plan for your success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto items-center">
          {/* What&apos;s Included */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-primary-400 mb-6 muscle-text">
                What&apos;s Included in Your Consultation:
              </h3>
              <div className="space-y-6">
                {consultationIncludes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl flex items-center justify-center text-neutral-950 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-primary-300 mb-2 muscle-text group-hover:text-primary-200 transition-colors duration-300">
                        {item.title}
                      </h4>
                      <p className="text-neutral-300 font-medium leading-relaxed group-hover:text-neutral-200 transition-colors duration-300">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-8">
            <div className="strength-card p-8 bg-gradient-to-br from-primary-500/20 to-accent-500/20 border border-primary-500/50">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg className="w-10 h-10 text-neutral-950" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-primary-400 mb-2 muscle-text">
                  100% Free, No Commitment
                </h3>
                <p className="text-neutral-300 font-medium">
                  This consultation is completely free with no strings attached. 
                  It&apos;s my way of ensuring we&apos;re the right fit for each other.
                </p>
              </div>
              <div className="mb-6">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe6QvQv8mz7dZXLcr47QSNG8/viewform?embedded=true"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  marginHeight={0}
                  marginWidth={0}
                  title="Free Consultation Form"
                  className="w-full rounded-xl border border-primary-500/50 shadow-lg"
                >
                  Loading…
                </iframe>
              </div>
              <div className="text-center">
                <p className="text-sm text-neutral-400 mb-2">Or contact me directly:</p>
                <a
                  href="https://wa.me/27635432439?text=Hi! I&apos;d like to book my free 15-minute consultation. When are you available?"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full text-center py-3 block luxury-glow bg-green-600 hover:bg-green-700 from-green-600 to-green-700 hover:from-green-500 hover:to-green-600"
                >
                  <span className="muscle-text">WhatsApp Direct</span>
                </a>
              </div>
            </div>

            {/* Additional Benefits */}
            <div className="strength-card p-6 bg-gradient-to-r from-accent-500/20 to-primary-500/20 border border-accent-500/50">
              <h4 className="text-lg font-bold text-accent-400 mb-4 muscle-text">
                Why Book Your Free Consultation?
              </h4>
              <ul className="space-y-3 text-neutral-300">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="font-medium">Get expert advice tailored to your goals</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="font-medium">Learn about the most effective training methods</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="font-medium">Understand what package suits your lifestyle</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent-500 rounded-full"></div>
                  <span className="font-medium">No pressure, just valuable insights</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
