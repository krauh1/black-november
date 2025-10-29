import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

const audience = [
  'Psicólogos e terapeutas que desejam enriquecer suas intervenções',
  'Educadores que buscam atividades criativas e dinâmicas',
  'Pais e cuidadores que querem estimular o desenvolvimento infantil',
  'Profissionais que valorizam materiais práticos e bem estruturados',
]

export const TargetAudienceSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

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
          PARA QUEM É ESSE COMBO
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {audience.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 bg-card rounded-lg border border-white/10"
            >
              <div className="flex-shrink-0 bg-primary/20 p-2 rounded-full">
                <Check className="w-6 h-6 text-primary" />
              </div>
              <p className="text-lg text-white/90">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
