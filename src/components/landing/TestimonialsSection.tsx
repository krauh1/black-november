import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { testimonials } from '@/data/testimonials'
import { MoveHorizontal } from 'lucide-react'

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 bg-white/5 px-4"
    >
      <div
        className={cn(
          'container mx-auto max-w-4xl',
          isVisible ? 'animate-fade-in-up' : 'opacity-0',
        )}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
          O que os nossos clientes dizem:
        </h2>
        <Carousel opts={{ loop: true }} className="w-full">
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-card border-white/10">
                    <CardContent className="flex flex-col items-center text-center p-8 min-h-[250px] justify-center">
                      <p className="text-lg font-medium text-white/90 italic mb-6">
                        "{testimonial.quote}"
                      </p>
                      <p className="mt-auto font-bold text-primary">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
        <div className="mt-4 flex md:hidden justify-center items-center text-muted-foreground">
          <MoveHorizontal className="w-5 h-5 mr-2" />
          <span className="text-sm">Arraste para o lado</span>
        </div>
      </div>
    </section>
  )
}
