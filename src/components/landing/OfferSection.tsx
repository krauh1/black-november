import { forwardRef } from 'react'
import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { CountdownTimer } from '@/components/landing/CountdownTimer'
import { Badge } from '@/components/ui/badge'

const HOTMART_CHECKOUT_URL =
  'https://pay.hotmart.com/L102589000U?sck=HOTMART_PRODUCT_PAGE&off=kwzv8qsa&hotfeature=32&_gl=1*f1ikau*_gcl_au*ODc5MzQ3MzMuMTc1NTQ2NTYwMC45NTUxNjUxNzQuMTc2MTIyNzU1Ny4xNzYxMjI3NjI3*FPAU*ODc5MzQ3MzMuMTc1NTQ2NTYwMA..*_ga*MTYwMDI5NjQ1OS4xNzU1NDY1NTk5*_ga_GQH2V1F11Q*czE3NjE2OTY0MjkkbzkkZzAkdDE3NjE2OTY0MjkkajYwJGwwJGgw&bid=1761696456075'

export const OfferSection = forwardRef<HTMLDivElement>((_, ref) => {
  const { ref: animationRef, isVisible } = useScrollAnimation({
    threshold: 0.2,
  })

  const handleCtaClick = () => {
    window.location.href = HOTMART_CHECKOUT_URL
  }

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 overflow-hidden">
      <div
        ref={animationRef as React.RefObject<HTMLDivElement>}
        className={cn(
          'container mx-auto max-w-4xl text-center',
          isVisible ? 'animate-fade-in-up' : 'opacity-0',
        )}
      >
        <Badge variant="destructive" className="mb-4 text-sm animate-pulse">
          Oferta Limitada
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          OFERTA LIMITADA
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-lg text-white/80">
          Essa condição é{' '}
          <strong className="text-primary">exclusiva da Black November</strong>{' '}
          e ficará disponível por{' '}
          <strong className="text-primary">tempo limitado!</strong> Garanta o
          seu acesso e economize enquanto amplia o seu repertório de materiais.
        </p>
        <div className="my-12">
          <CountdownTimer targetDate="2025-11-30T23:59:59" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="text-3xl font-bold text-white/70 line-through">
            DE R$1.097,20
          </p>
          <p className="text-white/80 text-xl">POR</p>
          <p className="text-7xl md:text-8xl font-extrabold text-primary">
            R$548
          </p>
          <p className="text-2xl text-white/90 -mt-2">em 10x sem juros</p>
        </div>
        <Button
          size="lg"
          className="mt-10 text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-12 py-8 shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 animate-pulse-glow"
          onClick={handleCtaClick}
        >
          ADQUIRA AGORA O COMBO BLACK NOVEMBER!
        </Button>
      </div>
    </section>
  )
})

OfferSection.displayName = 'OfferSection'
