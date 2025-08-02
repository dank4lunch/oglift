'use client'

import { Zap, Target, Activity, Brain, User } from 'lucide-react'

export default function Specializations() {
  const specializations = [
    {
      name: "Bootcamp",
      description: "High-intensity group training sessions designed to push your limits and build mental toughness.",
      icon: <Target className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      features: ["Group dynamics", "Mental toughness", "Full-body workout"]
    },
    {
      name: "Boxing",
      description: "Combat training that builds strength, coordination, and confidence while providing an intense cardio workout.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Strength building", "Coordination", "Cardio workout"]
    },
    {
      name: "HIIT",
      description: "High-Intensity Interval Training for maximum calorie burn and improved cardiovascular fitness in minimal time.",
      icon: <Activity className="w-8 h-8" />,
      color: "from-green-500 to-teal-500",
      features: ["Maximum calorie burn", "Time efficient", "Cardio fitness"]
    },
    {
      name: "Exercise Science",
      description: "Evidence-based training methods backed by scientific research for optimal results and injury prevention.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      features: ["Evidence-based", "Injury prevention", "Optimal results"]
    },
    {
      name: "Personal Training",
      description: "One-on-one customized training sessions tailored to your specific goals, fitness level, and lifestyle.",
      icon: <User className="w-8 h-8" />,
      color: "from-primary-500 to-accent-500",
      features: ["Personalized plans", "Goal-specific", "1-on-1 attention"]
    }
  ]

  return (
    <section id="specializations" className="py-20 bg-neutral-950 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(227,181,71,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-6 py-3 mb-6">
            <Activity className="w-5 h-5 text-primary-400" />
            <span className="text-primary-400 font-semibold">Training Specializations</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="text-white">Expert Training in</span><br />
            <span className="text-primary-500">Multiple Disciplines</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Choose from specialized training programs designed to help you achieve your specific fitness goals with proven methodologies.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-8"></div>
        </div>

        {/* Specializations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="group bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-primary-500/50 rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/10 relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${spec.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className={`w-16 h-16 bg-gradient-to-br ${spec.color} rounded-2xl flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform duration-300`}>
                {spec.icon}
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary-400 transition-colors">
                  {spec.name}
                </h3>
                
                <p className="text-neutral-400 mb-6 leading-relaxed">
                  {spec.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {spec.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 bg-gradient-to-r ${spec.color} rounded-full`}></div>
                      <span className="text-neutral-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <div className={`w-8 h-8 bg-gradient-to-br ${spec.color} rounded-full flex items-center justify-center text-white`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary-500/10 to-accent-500/10 border border-primary-500/30 rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Not sure which training style is right for you?
            </h3>
            <p className="text-lg text-neutral-300 mb-6">
              Book a free 15-minute consultation and Tshiamo will help you choose the perfect training approach for your goals.
            </p>
            <button
              onClick={() => window.open('https://wa.me/27635432439?text=Hi Tshiamo! I need help choosing the right training specialization for my goals.', '_blank')}
              className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25"
            >
              Get Expert Guidance
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
