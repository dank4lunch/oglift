import Hero from '@/components/Hero'
import TrainerAbout from '@/components/TrainerAbout'
import Specializations from '@/components/Specializations'
import TrainingPackages from '@/components/TrainingPackages'
import MediaGallery from '@/components/MediaGallery'
import FreeConsultation from '@/components/FreeConsultation'
import FAQ from '@/components/FAQ'
import FinalCTA from '@/components/FinalCTA'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import SkipNav from '@/components/SkipNav'
import ClientErrorBoundary from '@/components/ClientErrorBoundary'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Crush Your Fitness Goals with Personal Trainer Tshiamo Sookane | Sandton CBD',
  description: 'Get a free 15-minute consultation with certified personal trainer Tshiamo Sookane in Sandton CBD. HFPA qualified. Specializing in Bootcamp, Boxing, HIIT & Personal Training. Training packages from R624. Transform your body today!',
  keywords: 'personal trainer Sandton CBD, fitness trainer Johannesburg, HIIT training Gauteng, boxing coach Sandton, bootcamp training, exercise science, free fitness consultation, personal training packages, body transformation Sandton',
  openGraph: {
    title: 'Crush Your Fitness Goals | Personal Trainer Sandton CBD - Tshiamo Sookane',
    description: 'Free 15-minute consultation with certified personal trainer in Sandton CBD. HFPA qualified. Training packages from R624. Transform your body today!',
    type: 'website',
    images: [
      {
        url: '/trainer-hero-image.jpg', // Replace with actual image URL
        width: 1200,
        height: 630,
        alt: 'Tshiamo Sookane - Personal Trainer Sandton CBD'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crush Your Fitness Goals | Personal Trainer Sandton CBD',
    description: 'Free consultation with certified trainer Tshiamo Sookane. Training packages from R624. Book now!',
  },
  alternates: {
    canonical: 'https://theliftco.co.za',
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "The Lift Co",
  "image": "https://theliftco.co.za/logo.png",
  "description": "Elite personal training and body transformation services across Gauteng province including Johannesburg, Pretoria, Sandton, Centurion, Midrand, Randburg, Roodepoort, and surrounding areas",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Gauteng Province",
    "addressLocality": "Johannesburg",
    "addressRegion": "Gauteng",
    "addressCountry": "ZA"
  },
  "areaServed": [
    {
      "@type": "City",
      "name": "Johannesburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Pretoria",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Sandton",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Centurion",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Midrand",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Randburg",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    },
    {
      "@type": "City",
      "name": "Roodepoort",
      "addressRegion": "Gauteng",
      "addressCountry": "ZA"
    }
  ],
  "telephone": "+27635432439",
  "email": "Tshiamokl@gmail.com",
  "url": "https://theliftco.co.za",
  "priceRange": "$$",
  "openingHours": "Mo-Sa 06:00-20:00",
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": -26.2041,
      "longitude": 28.0473
    },
    "geoRadius": "50000"
  },
  "founder": {
    "@type": "Person",
    "name": "Tshiamo Sookane",
    "jobTitle": "Elite Personal Trainer",
    "telephone": "+27635432439",
    "email": "Tshiamokl@gmail.com"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Personal Training Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Personal Training",
          "description": "One-on-one elite personal training sessions"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HIIT Training",
          "description": "High-intensity interval training programs"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Boxing Training",
          "description": "Professional boxing and combat training"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Nutrition Coaching",
          "description": "Personalized nutrition plans and coaching"
        }
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ClientErrorBoundary>
        <div className="min-h-screen">
          <SkipNav />
          <Navigation />
          <main id="main-content" className="focus:outline-none" tabIndex={-1}>
            <Hero />
            <TrainerAbout />
            <Specializations />
            <TrainingPackages />
            <MediaGallery />
            <FreeConsultation />
            <FAQ />
            <FinalCTA />
            <Contact />
          </main>
          <Footer />
        </div>
      </ClientErrorBoundary>
    </>
  )
}
