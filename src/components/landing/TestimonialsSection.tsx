import { useRef } from 'react'
import Autoplay from 'embla-carousel-autoplay'
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

export const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 })
  const autoplayPlugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true }),
  )

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-16 md:py-28 bg-white/5"
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
        <Carousel
          opts={{ loop: true }}
          plugins={[autoplayPlugin.current]}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card className="bg-card border-white/10">
                    <CardContent className="flex flex-col items-center text-center p-8 min-h-[250px] md:min-h-[300px] justify-center">
                      <p className="text-lg font-medium text-white/90 italic mb-4">
                        "{testimonial.quote}"
                      </p>
                      <div className="mt-auto pt-4">
                        <p className="font-bold text-primary">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  )
}
