'use client'

import { useState } from 'react'
import { CheckCircle, Star, Calendar, MessageCircle, Zap, Target, Trophy } from 'lucide-react'
import PaymentForm from './PaymentForm'

type PackageName = 'PT Intro Pack' | 'PT Six Pack' | 'Monthly One-on-One Pack'

export default function TrainingPackages() {
  const [selectedPackage, setSelectedPackage] = useState<PackageName | null>(null)
  const [showPaymentForm, setShowPaymentForm] = useState(false)

  const packages = [
    {
      name: 'PT Intro Pack' as PackageName,
      price: 624,
      originalPrice: 780,
      sessions: 3,
      duration: '2 weeks',
      icon: <Target className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      popular: false,
      features: [
        'Three 1-hour personal training sessions',
        'Comprehensive fitness assessment',
        'Personalized workout plan design',
        'Nutrition guidance introduction',
        'Progress tracking setup',
        'WhatsApp support between sessions'
      ],
      benefits: [
        'Perfect introduction to personal training',
        'Build proper exercise form and technique',
        'Establish baseline fitness measurements',
        'Learn foundational movements safely'
      ]
    },
    {
      name: 'PT Six Pack' as PackageName,
      price: 1270,
      originalPrice: 1560,
      sessions: 6,
      duration: '4 weeks',
      icon: <Zap className="w-8 h-8" />,
      color: 'from-primary-500 to-accent-500',
      popular: true,
      features: [
        'Six 1-hour personal training sessions',
        'Advanced workout programming',
        'Detailed nutrition planning',
        'Body composition analysis',
        'Workout videos for home practice',
        'Weekly progress reviews',
        'Unlimited WhatsApp coaching support'
      ],
      benefits: [
        'Most popular package for visible results',
        'Develop consistent training habits',
        'See measurable strength and fitness gains',
        'Build momentum for long-term success'
      ]
    },
    {
      name: 'Monthly One-on-One Pack' as PackageName,
      price: 2160,
      originalPrice: 2600,
      sessions: 8,
      duration: '4 weeks',
      icon: <Trophy className="w-8 h-8" />,
      color: 'from-purple-500 to-pink-500',
      popular: false,
      features: [
        'Eight 1-hour personal training sessions',
        'Complete transformation program',
        'Advanced nutrition coaching',
        'Supplement recommendations',
        'Recovery and mobility protocols',
        'Lifestyle optimization strategies',
        '24/7 coaching support and accountability'
      ],
      benefits: [
        'Maximum results in minimum time',
        'Complete lifestyle transformation',
        'Advanced training techniques',
        'Comprehensive wellness approach'
      ]
    }
  ]

  const handleBuyNow = (packageName: PackageName) => {
    setSelectedPackage(packageName)
    setShowPaymentForm(true)
  }

  const handleWhatsAppInquiry = (packageName: PackageName) => {
    const message = `Hi! I'm interested in purchasing the ${packageName}. Please provide me with payment details and next steps.`
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/27635432439?text=${encodedMessage}`, '_blank')
  }

  if (showPaymentForm && selectedPackage) {
    const selectedPkg = packages.find(pkg => pkg.name === selectedPackage)!
    return (
      <PaymentForm 
        packageName={selectedPackage}
        onClose={() => setShowPaymentForm(false)}
      />
    )
  }

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(227,181,71,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-6 py-3 mb-6">
            <Star className="w-5 h-5 text-primary-400" />
            <span className="text-primary-400 font-semibold">Training Packages</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="text-white">Choose Your</span><br />
            <span className="text-primary-500">Transformation Package</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Structured training packages designed to deliver real results. Each package includes personalized workouts, nutrition guidance, and ongoing support.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Packages Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative bg-neutral-900/50 backdrop-blur-sm border rounded-3xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl group ${
                pkg.popular 
                  ? 'border-primary-500/50 hover:border-primary-400 shadow-primary-500/10' 
                  : 'border-neutral-800 hover:border-primary-500/30 hover:shadow-primary-500/10'
              }`}
            >
              {/* Popular Badge */}
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`w-20 h-20 bg-gradient-to-br ${pkg.color} rounded-2xl flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                  {pkg.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                <p className="text-neutral-400 mb-4">{pkg.sessions} sessions • {pkg.duration}</p>
                
                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-3 mb-2">
                    <span className="text-4xl font-bold text-primary-400">R{pkg.price}</span>
                    <span className="text-lg text-neutral-500 line-through">R{pkg.originalPrice}</span>
                  </div>
                  <div className="text-sm text-primary-300 font-medium">
                    Save R{pkg.originalPrice - pkg.price} • R{Math.round(pkg.price / pkg.sessions)} per session
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">What's Included:</h4>
                {pkg.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                    <span className="text-neutral-300 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Benefits */}
              <div className="bg-neutral-800/50 rounded-2xl p-6 mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">Perfect For:</h4>
                <ul className="space-y-2">
                  {pkg.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className={`w-2 h-2 bg-gradient-to-r ${pkg.color} rounded-full mt-2 flex-shrink-0`}></div>
                      <span className="text-neutral-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleBuyNow(pkg.name)}
                  className={`w-full bg-gradient-to-r ${pkg.color} hover:opacity-90 text-white py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl`}
                >
                  Start Training Now
                </button>
                
                <button
                  onClick={() => handleWhatsAppInquiry(pkg.name)}
                  className="w-full bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700 hover:border-primary-500/50 text-white py-3 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Ask Questions
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">100+</div>
              <div className="text-neutral-300 font-medium">Clients Transformed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">5★</div>
              <div className="text-neutral-300 font-medium">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-primary-400 mb-2">15min</div>
              <div className="text-neutral-300 font-medium">Free Consultation</div>
            </div>
          </div>

          <div className="mt-12 p-8 bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-3xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Still not sure which package is right for you?
            </h3>
            <p className="text-lg text-neutral-300 mb-6">
              Book a free 15-minute consultation and Tshiamo will help you choose the perfect package for your goals and budget.
            </p>
            <button
              onClick={() => window.open('https://wa.me/27635432439?text=Hi Tshiamo! I would like to book a free consultation to discuss which training package would work best for me.', '_blank')}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25 inline-flex items-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
