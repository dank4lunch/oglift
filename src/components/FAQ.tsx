'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What should I expect in my first training session?",
      answer: "Your first session includes a comprehensive fitness assessment, discussion of your goals, basic movement screening, and an introduction to proper exercise form. We'll also establish your baseline measurements and create your personalized training plan. No intense workouts on day one - it's all about understanding your current fitness level and setting you up for success."
    },
    {
      question: "Do I need to have experience with fitness training?",
      answer: "Not at all! Tshiamo works with clients of all fitness levels, from complete beginners to advanced athletes. Each program is completely customized to your current ability level, and proper form and safety are always the top priority. If you're new to fitness, the PT Intro Pack is perfect for building a strong foundation."
    },
    {
      question: "Where do the training sessions take place?",
      answer: "Training sessions take place at a fully equipped gym facility in Sandton CBD. The location is easily accessible and provides all the equipment needed for comprehensive strength training, cardio, and functional movement exercises. Exact location details will be provided when you book your first session."
    },
    {
      question: "What happens if I need to cancel or reschedule a session?",
      answer: "Life happens! Just provide 24 hours notice for cancellations or rescheduling and there's no penalty. Same-day cancellations may result in the session being forfeited unless it's due to an emergency. Tshiamo works with your schedule to ensure you get the most out of your training package."
    },
    {
      question: "Will I receive nutrition guidance with my training package?",
      answer: "Yes! All packages include nutrition guidance appropriate to the level. The PT Intro Pack includes basic nutrition principles, the PT Six Pack provides detailed meal planning, and the Monthly Pack offers comprehensive nutrition coaching with supplement recommendations. Proper nutrition is essential for achieving your fitness goals."
    },
    {
      question: "How quickly will I see results from personal training?",
      answer: "You'll start feeling stronger and more energized within the first 2 weeks. Visible changes typically appear after 4-6 weeks of consistent training. The PT Six Pack is specifically designed to show measurable improvements in strength, endurance, and body composition by the end of the 4-week program."
    },
    {
      question: "Can I upgrade my package if I want more sessions?",
      answer: "Absolutely! You can upgrade to a larger package at any time, and the cost difference will be calculated fairly. Many clients start with the PT Intro Pack and then upgrade to the PT Six Pack or Monthly Pack once they experience the benefits of personal training."
    },
    {
      question: "What if I have injuries or physical limitations?",
      answer: "Tshiamo has extensive experience working with clients who have injuries or physical limitations. During your assessment, any restrictions will be noted and your program will be modified accordingly. Exercise science knowledge ensures that your training is not only effective but also safe and rehabilitative when needed."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gradient-to-b from-neutral-950 to-neutral-900 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(227,181,71,0.1),transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/30 rounded-full px-6 py-3 mb-6">
            <HelpCircle className="w-5 h-5 text-primary-400" />
            <span className="text-primary-400 font-semibold">Frequently Asked Questions</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-heading mb-6">
            <span className="text-white">Got Questions?</span><br />
            <span className="text-primary-500">We've Got Answers</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about personal training with Tshiamo, from what to expect in your first session to how quickly you'll see results.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full mt-8"></div>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-neutral-900/50 backdrop-blur-sm border border-neutral-800 hover:border-primary-500/30 rounded-2xl mb-4 transition-all duration-300 overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left focus:outline-none focus:ring-2 focus:ring-primary-500/50 group"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-primary-400 transition-colors duration-300 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="w-6 h-6 text-primary-400 transition-transform duration-300" />
                    ) : (
                      <ChevronDown className="w-6 h-6 text-neutral-400 group-hover:text-primary-400 transition-colors duration-300" />
                    )}
                  </div>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-8 pb-6">
                  <div className="border-t border-neutral-700 pt-6">
                    <p className="text-neutral-300 leading-relaxed text-base sm:text-lg">
                      {faq.answer}
                    </p>
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
              Still have questions?
            </h3>
            <p className="text-lg text-neutral-300 mb-6">
              Don't hesitate to reach out! Tshiamo is happy to answer any specific questions about training, packages, or how to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/27635432439?text=Hi Tshiamo! I have some questions about personal training that weren\'t covered in the FAQ.', '_blank')}
                className="bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-primary-500/25"
              >
                Ask Your Question
              </button>
              <button
                onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSdyVrT-CWJVTkbh9s-YxZT8f7Vm_5XG6qHjPz2RLNB8TrUeQw/viewform', '_blank')}
                className="bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700 hover:border-primary-500/50 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300"
              >
                Complete Personal Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
