import { useRef } from 'react'
import { HeroSection } from '@/components/landing/HeroSection'
import { AboutComboSection } from '@/components/landing/AboutComboSection'
import { ProductListSection } from '@/components/landing/ProductListSection'
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
      <ProductListSection />
      <BonusSection />
      <TargetAudienceSection />
      <OfferSection ref={offerSectionRef} />
      <TestimonialsSection />
    </>
  )
}

export default Index
