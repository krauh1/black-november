import { useScrollAnimation } from '@/hooks/use-scroll-animation'
import { cn } from '@/lib/utils'
import { Separator } from '@/components/ui/separator'

export const AboutComboSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 })

  return (
    <section
      ref={ref as React.RefObject<HTMLDivElement>}
      className="py-20 md:py-28 text-center px-4"
    >
      <div
        className={cn(
          'max-w-3xl mx-auto',
          isVisible ? 'animate-fade-in-up' : 'opacity-0',
        )}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary">
          O QUE É O COMBO BLACK NOVEMBER?
        </h2>
        <p className="mt-6 text-lg md:text-xl text-white/80">
          Durante o mês de novembro, você garante{' '}
          <strong className="text-primary">TODOS os e-books</strong> da nossa
          página com um{' '}
          <strong className="text-primary">desconto imperdível</strong> e acesso
          imediato a dezenas de materiais.
        </p>
        <Separator className="mt-12 w-24 mx-auto bg-primary/50" />
      </div>
    </section>
  )
}
