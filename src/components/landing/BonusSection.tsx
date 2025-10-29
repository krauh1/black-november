import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Gift } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

export const BonusSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 px-4"
    >
      <div
        className={cn(
          'container mx-auto max-w-4xl',
          isVisible ? 'animate-fade-in-up' : 'opacity-0',
        )}
      >
        <div className="text-center mb-12">
          <Badge
            variant="outline"
            className="text-primary border-primary mb-4 text-sm"
          >
            Exclusivo
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            BÔNUS EXCLUSIVO NOVEMBER BLACK
          </h2>
        </div>
        <Card className="bg-gradient-to-br from-primary/10 to-background border-primary/20 shadow-2xl shadow-primary/10">
          <CardContent className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <Gift className="w-24 h-24 text-primary flex-shrink-0" />
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                <p className="text-lg text-white/90">
                  Ao adquirir o combo, você garante também{' '}
                  <strong className="text-primary">
                    TODOS OS LANÇAMENTOS de 2026
                  </strong>
                  , sem pagar nada a mais por isso!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
