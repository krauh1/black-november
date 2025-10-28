import { useRef } from 'react'
import { HeroSection } from '@/components/landing/HeroSection'
import { AboutComboSection } from '@/components/landing/AboutComboSection'
import { ProductGridSection } from '@/components/landing/ProductGridSection'
import { BonusSection } from '@/components/landing/BonusSection'
import { TargetAudienceSection } from '@/components/landing/TargetAudienceSection'
import { OfferSection } from '@/components/landing/OfferSection'
import { TestimonialsSection } from '@/components/landing/TestimonialsSection'

const Index = () => {
  const offerSectionRef = useRef<HTMLDivElement>(null)

  const handleScrollToOffer = () => {
    offerSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    })
  }

  return (
    <>
      <HeroSection onCtaClick={handleScrollToOffer} />
      <AboutComboSection />
      <ProductGridSection />
      <BonusSection />
      <TargetAudienceSection />
      <OfferSection ref={offerSectionRef} />
      <TestimonialsSection />
    </>
  )
}

export default Index
